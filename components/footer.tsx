export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/40">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p
          className="text-base text-foreground mb-1"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          めぐりケア
        </p>
        <p className="text-xs text-muted-foreground">
          このサイトの情報は一般的な健康情報であり、医療アドバイスではありません。
          <br className="hidden sm:block" />
          気になる症状は婦人科へご相談ください。
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} めぐりケア
        </p>
      </div>
    </footer>
  );
}
