"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: EASE },
  }),
};

const steps = [
  {
    step: "STEP 1",
    title: "排卵の準備",
    body: "脳がホルモンを出して卵巣に「準備して」と伝えます。卵巣の中で卵が育ち始め、エストロゲンが増えていきます。",
  },
  {
    step: "STEP 2",
    title: "子宮内膜が厚くなる",
    body: "受精卵が来たときのために、子宮の内側がふかふかのベッドのように厚くなります。血液や栄養素がたっぷり詰まった状態です。",
  },
  {
    step: "STEP 3",
    title: "妊娠しなかった場合",
    body: "受精・着床が起こらないと、ホルモンが急激に下がります。「今回は必要なかった」というサインです。",
  },
  {
    step: "STEP 4",
    title: "内膜が剥がれて出る",
    body: "厚くなった内膜が剥がれて、血液と一緒に体の外に出てきます。これが生理。毎月のリセットです。",
  },
];

const heavyReasons = [
  {
    icon: "🌀",
    title: "子宮が強く収縮しすぎる",
    body: "「プロスタグランジン」という物質が多いと、子宮が強く・長く収縮します。陣痛に近いメカニズムで、これが生理痛の主な原因です。",
    tag: "痛みの主原因",
  },
  {
    icon: "🌸",
    title: "内膜が厚くなりすぎる",
    body: "エストロゲンが過剰になると、内膜が必要以上に厚くなります。剥がれる量が多い分、出血量も増えます。",
    tag: "出血量に影響",
  },
  {
    icon: "🧲",
    title: "子宮がうまく収縮できない",
    body: "子宮筋腫や腺筋症があると、子宮が均一に収縮できず、血管をうまく閉じられません。結果として出血が長引きやすくなります。",
    tag: "病気が関係する場合",
  },
  {
    icon: "❄️",
    title: "冷えやストレス",
    body: "骨盤周りが冷えると血流が滞り、プロスタグランジンが増えやすくなります。強いストレスもホルモンバランスを乱す原因に。",
    tag: "生活習慣",
  },
];

export default function KaradaPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">
        {/* ヘッダー */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 30% 50%, oklch(0.92 0.06 35 / 0.3) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-3xl mx-auto">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4"
            >
              About Your Body
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl leading-snug mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              からだのはなし
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              生理って、なぜ起きるんだろう。重い人と軽い人がいるのはなぜ？
              <br />
              難しい言葉を使わず、やさしく一緒に考えてみましょう。
            </motion.p>
          </div>
        </section>

        {/* 生理の仕組み */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">
                Section 01
              </p>
              <h2
                className="text-2xl sm:text-3xl mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                生理はからだの「リセット」
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                生理は病気でも異常でもありません。毎月、赤ちゃんを迎える準備をして、今月は必要なかったから流れ出る——それだけのことです。
              </p>
            </motion.div>

            <div className="relative">
              {/* 縦の線 */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

              <div className="space-y-8">
                {steps.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="sm:pl-16 relative"
                  >
                    <div className="absolute left-3 top-1 w-6 h-6 rounded-full bg-secondary border-2 border-primary/30 hidden sm:flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <p className="text-xs tracking-wider text-primary/70 mb-2 font-medium">
                        {item.step}
                      </p>
                      <h3
                        className="text-lg mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 重い生理の原因 */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">
                Section 02
              </p>
              <h2
                className="text-2xl sm:text-3xl mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                なぜ重い人がいるの？
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                「気合いが足りない」なんてことは絶対ありません。重い生理には、ちゃんとした理由があります。
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {heavyReasons.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3
                          className="text-base font-medium"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <span
                        className="inline-block text-xs px-2 py-0.5 rounded-full mb-3"
                        style={{
                          background: "oklch(0.92 0.06 35 / 0.3)",
                          color: "oklch(0.42 0.1 35)",
                        }}
                      >
                        {item.tag}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* まとめのメッセージ */}
        <section className="py-16 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div
              className="rounded-3xl p-8 sm:p-12"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.94 0.04 55 / 0.6) 0%, oklch(0.96 0.03 35 / 0.4) 100%)",
                border: "1px solid oklch(0.88 0.04 55 / 0.5)",
              }}
            >
              <p
                className="text-lg sm:text-xl leading-loose mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                重い生理は「我慢するもの」じゃない。
                <br />
                でも、日々の積み重ねで、
                <br />
                <span className="text-primary">かなり変えられる</span>
                んです。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                特に「体を温める」「オメガ3を摂る」「血糖値を安定させる」の3つは、すぐに始められて、3ヶ月続けると多くの方が変化を感じています。
              </p>
              <Link
                href="/taberu"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                たべるケアを見る →
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
