"use client";

import { useState } from "react";
import Image from "next/image";
import { POSTS, getScheduledDate } from "@/data/instagram-posts";
import type { Post } from "@/data/instagram-posts";

const TYPE_LABEL: Record<Post["type"], string> = {
  carousel: "カルーセル",
  reel: "リール",
  image: "画像",
};

const TYPE_COLOR: Record<Post["type"], string> = {
  carousel: "bg-amber-100 text-amber-700",
  reel: "bg-rose-100 text-rose-600",
  image: "bg-emerald-100 text-emerald-700",
};

function ogUrl(post: Post): string {
  const params = new URLSearchParams({
    title: post.title,
    num: String(post.id).padStart(2, "0"),
    week: String(post.week),
    type: post.type,
  });
  return `/api/og?${params}`;
}

function PostCard({
  post,
  scheduledDate,
}: {
  post: Post;
  scheduledDate: Date | null;
}) {
  const [open, setOpen] = useState(false);
  const today = new Date().toISOString().slice(0, 10);
  const isToday =
    scheduledDate?.toISOString().slice(0, 10) === today;

  return (
    <div
      className={`rounded-2xl border bg-card overflow-hidden transition-shadow hover:shadow-md ${
        isToday ? "ring-2 ring-primary" : ""
      }`}
    >
      {/* カード画像 */}
      <div className="relative aspect-square bg-muted">
        <Image
          src={ogUrl(post)}
          alt={post.title}
          fill
          className="object-cover"
          unoptimized
        />
        {isToday && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            今日の投稿
          </div>
        )}
      </div>

      {/* メタ情報 */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground font-medium">
            #{String(post.id).padStart(2, "0")} · Week {post.week}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${TYPE_COLOR[post.type]}`}
          >
            {TYPE_LABEL[post.type]}
          </span>
        </div>

        <p
          className="text-sm font-medium leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {post.title}
        </p>

        {scheduledDate && (
          <p className="text-xs text-muted-foreground">
            📅{" "}
            {scheduledDate.toLocaleDateString("ja-JP", {
              month: "long",
              day: "numeric",
              weekday: "short",
            })}
          </p>
        )}

        {/* キャプション展開 */}
        <button
          onClick={() => setOpen(!open)}
          className="text-xs text-primary hover:underline w-full text-left"
        >
          {open ? "▲ キャプションを閉じる" : "▼ キャプションを確認する"}
        </button>

        {open && (
          <div className="space-y-3">
            <pre className="text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed bg-muted rounded-xl p-3 max-h-60 overflow-y-auto">
              {post.caption}
            </pre>
            <pre className="text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed bg-muted/50 rounded-xl p-3">
              {post.hashtags}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PreviewPage() {
  const [startMonday, setStartMonday] = useState<string>(() => {
    // 直近の月曜日をデフォルトに
    const d = new Date();
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    return d.toISOString().slice(0, 10);
  });

  const startDate = new Date(startMonday);
  const isValidDate = !isNaN(startDate.getTime());

  const weeks = [1, 2, 3, 4] as const;

  return (
    <main className="min-h-screen bg-background px-4 py-12 max-w-5xl mx-auto">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
          Preview
        </p>
        <h1
          className="text-3xl mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          投稿プレビュー
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          Instagram に投稿される画像・キャプション・日程を確認できます。
        </p>

        {/* 開始日設定 */}
        <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3">
          <label className="text-sm font-medium whitespace-nowrap">
            開始月曜日
          </label>
          <input
            type="date"
            value={startMonday}
            onChange={(e) => setStartMonday(e.target.value)}
            className="text-sm bg-transparent border-b border-border focus:outline-none focus:border-primary pb-0.5"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          GitHub Secrets の START_MONDAY と同じ日付を入力してください。
        </p>
      </div>

      {weeks.map((week) => (
        <section key={week} className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <h2
              className="text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Week {week}
            </h2>
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">
              {
                ["知る・気づく", "食べるケア", "日々の習慣", "好循環・まとめ"][
                  week - 1
                ]
              }
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {POSTS.filter((p) => p.week === week).map((post) => (
              <PostCard
                key={post.id}
                post={post}
                scheduledDate={isValidDate ? getScheduledDate(post, startDate) : null}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
