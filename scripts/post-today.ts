/**
 * Instagram Graph API を使って今日の投稿を自動投稿するスクリプト。
 * GitHub Actions から毎日実行される。
 *
 * 必要な環境変数:
 *   INSTAGRAM_ACCOUNT_ID  - Instagram ビジネスアカウントのユーザーID
 *   INSTAGRAM_ACCESS_TOKEN - 長期アクセストークン（60日有効）
 *   SITE_URL               - Netlify のデプロイURL (例: https://meguricare.netlify.app)
 *   START_MONDAY           - 投稿開始の月曜日 (YYYY-MM-DD 形式)
 */

import { POSTS, getScheduledDate } from "../data/instagram-posts";

const {
  INSTAGRAM_ACCOUNT_ID,
  INSTAGRAM_ACCESS_TOKEN,
  SITE_URL,
  START_MONDAY,
} = process.env;

function validateEnv() {
  const missing = [
    "INSTAGRAM_ACCOUNT_ID",
    "INSTAGRAM_ACCESS_TOKEN",
    "SITE_URL",
    "START_MONDAY",
  ].filter((k) => !process.env[k]);
  if (missing.length > 0) {
    throw new Error(`環境変数が不足しています: ${missing.join(", ")}`);
  }
}

function buildImageUrl(post: (typeof POSTS)[number]): string {
  const params = new URLSearchParams({
    title: post.title,
    num: String(post.id).padStart(2, "0"),
    week: String(post.week),
    type: post.type,
  });
  return `${SITE_URL}/api/og?${params.toString()}`;
}

function buildCaption(post: (typeof POSTS)[number]): string {
  return `${post.caption}\n\n${post.hashtags}`;
}

async function createMediaContainer(imageUrl: string, caption: string): Promise<string> {
  const url = `https://graph.facebook.com/v19.0/${INSTAGRAM_ACCOUNT_ID}/media`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image_url: imageUrl,
      caption,
      access_token: INSTAGRAM_ACCESS_TOKEN,
    }),
  });
  const data = (await res.json()) as { id?: string; error?: { message: string } };
  if (!res.ok || !data.id) {
    throw new Error(`メディアコンテナ作成失敗: ${data.error?.message ?? JSON.stringify(data)}`);
  }
  console.log(`✅ メディアコンテナ作成: ${data.id}`);
  return data.id;
}

async function publishMedia(creationId: string): Promise<string> {
  const url = `https://graph.facebook.com/v19.0/${INSTAGRAM_ACCOUNT_ID}/media_publish`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      creation_id: creationId,
      access_token: INSTAGRAM_ACCESS_TOKEN,
    }),
  });
  const data = (await res.json()) as { id?: string; error?: { message: string } };
  if (!res.ok || !data.id) {
    throw new Error(`投稿公開失敗: ${data.error?.message ?? JSON.stringify(data)}`);
  }
  return data.id;
}

async function main() {
  validateEnv();

  const startMonday = new Date(START_MONDAY!);
  if (isNaN(startMonday.getTime())) {
    throw new Error(`START_MONDAY の形式が不正です: ${START_MONDAY}`);
  }

  const todayStr = new Date().toISOString().slice(0, 10);
  console.log(`📅 今日の日付: ${todayStr}`);

  const post = POSTS.find((p) => {
    const scheduled = getScheduledDate(p, startMonday);
    return scheduled.toISOString().slice(0, 10) === todayStr;
  });

  if (!post) {
    console.log("📭 今日の投稿予定はありません。");
    return;
  }

  console.log(`📝 投稿予定: [Week${post.week}] ${post.title}`);

  const imageUrl = buildImageUrl(post);
  const caption = buildCaption(post);

  console.log(`🖼  画像URL: ${imageUrl}`);

  const creationId = await createMediaContainer(imageUrl, caption);

  // Instagram の処理待ち（推奨: 数秒待機）
  await new Promise((r) => setTimeout(r, 5000));

  const postId = await publishMedia(creationId);
  console.log(`🎉 投稿完了! Post ID: ${postId}`);
  console.log(`📸 https://www.instagram.com/p/${postId}/`);
}

main().catch((err) => {
  console.error("❌ エラー:", err.message);
  process.exit(1);
});
