import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "めぐりケア";
  const num = searchParams.get("num") ?? "01";
  const week = searchParams.get("week") ?? "1";
  const type = searchParams.get("type") ?? "carousel";

  const typeLabel: Record<string, string> = {
    carousel: "カルーセル",
    reel: "リール",
    image: "投稿",
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "1080px",
          height: "1080px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fdf6ee 0%, #fef0e4 50%, #fdf6ee 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 背景の装飾円 */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(210, 120, 80, 0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(230, 160, 80, 0.08)",
            display: "flex",
          }}
        />

        {/* ヘッダー */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(180, 80, 50, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              🌿
            </div>
            <span style={{ fontSize: "28px", color: "#8a6a5a", letterSpacing: "0.05em" }}>
              めぐりケア
            </span>
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#c47a5a",
              background: "rgba(196, 122, 90, 0.1)",
              padding: "8px 20px",
              borderRadius: "100px",
            }}
          >
            {typeLabel[type] ?? "投稿"}
          </div>
        </div>

        {/* メインコンテンツ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "120px",
              fontWeight: "300",
              color: "rgba(180, 130, 100, 0.2)",
              lineHeight: 1,
            }}
          >
            {num}
          </div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "400",
              color: "#3d2b20",
              lineHeight: 1.4,
              maxWidth: "860px",
            }}
          >
            {title}
          </div>
        </div>

        {/* フッター */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(180, 130, 100, 0.2)",
            paddingTop: "32px",
          }}
        >
          <span style={{ fontSize: "24px", color: "#b08060" }}>
            WEEK {week} · meguricare
          </span>
          <span style={{ fontSize: "24px", color: "#b08060" }}>
            @seiri369
          </span>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1080,
    }
  );
}
