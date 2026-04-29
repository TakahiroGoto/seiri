"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: EASE },
  }),
};

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.92 0.06 55 / 0.5) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-20 right-10 w-64 h-64 rounded-full -z-10 opacity-20"
            style={{
              background:
                "radial-gradient(circle, oklch(0.75 0.1 35) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute bottom-20 left-10 w-48 h-48 rounded-full -z-10 opacity-20"
            style={{
              background:
                "radial-gradient(circle, oklch(0.82 0.08 75) 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />

          <div className="max-w-2xl mx-auto text-center">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-sm tracking-[0.2em] text-muted-foreground mb-6 uppercase"
            >
              Meguri Care
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl md:text-6xl leading-snug mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              自分を整えると、
              <br />
              毎日が変わる。
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto"
            >
              家族のために走り続けるあなたへ。
              <br />
              生理の重さも、疲れやすさも、実は食と習慣から変えられる。
              <br />
              あなたが輝くと、そばにいる大切な人も輝ける。
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                href="/karada"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                からだのはなしを読む
              </Link>
              <Link
                href="/taberu"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                たべるケアを見る
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="w-px h-10 bg-gradient-to-b from-border to-transparent mx-auto" />
          </motion.div>
        </section>

        {/* コンセプトセクション */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                About
              </p>
              <h2
                className="text-2xl sm:text-3xl mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                このサイトについて
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                「最近なんとなくしんどい」「生理のたびに憂鬱になる」
                <br />
                そんな声を、もっと早く届けてあげたかった。
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "寄り添う",
                  body: "医療情報ではなく、同じ女性の先輩が話しかけるような言葉で。あなたの「なんとなく」を、ちゃんと言語化します。",
                },
                {
                  num: "02",
                  title: "食から整える",
                  body: "薬ではなく、毎日の食事と小さな習慣から。難しくない、続けられるケアを一緒に考えます。",
                },
                {
                  num: "03",
                  title: "好循環をつくる",
                  body: "あなたが安定すると、パートナーも子どもも穏やかになれる。自分を後回しにしない選択が、家族全員を幸せにする。",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <p className="text-3xl font-light text-border mb-4">{item.num}</p>
                  <h3
                    className="text-lg mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ページカードCTA */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/karada" className="group block">
                  <div
                    className="rounded-3xl p-8 h-full transition-transform group-hover:-translate-y-1 group-hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.92 0.06 35 / 0.4) 0%, oklch(0.95 0.04 55 / 0.3) 100%)",
                      border: "1px solid oklch(0.85 0.05 35 / 0.5)",
                    }}
                  >
                    <p className="text-3xl mb-4">🌿</p>
                    <h3
                      className="text-xl mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      からだのはなし
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      生理はなぜ起きるのか。重さの原因は何なのか。
                      難しい言葉を使わずにやさしく解説します。
                    </p>
                    <span className="text-sm text-primary font-medium">
                      読んでみる →
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link href="/taberu" className="group block">
                  <div
                    className="rounded-3xl p-8 h-full transition-transform group-hover:-translate-y-1 group-hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.92 0.06 75 / 0.4) 0%, oklch(0.95 0.04 55 / 0.3) 100%)",
                      border: "1px solid oklch(0.85 0.05 75 / 0.5)",
                    }}
                  >
                    <p className="text-3xl mb-4">🍊</p>
                    <h3
                      className="text-xl mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      たべるケア
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      今日から始められる食と習慣の5つのこと。
                      特別なサプリより、毎日の積み重ねが続く。
                    </p>
                    <span className="text-sm text-primary font-medium">
                      見てみる →
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ひとことメッセージ */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p
              className="text-xl sm:text-2xl text-foreground/70 leading-loose"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              「自分のことは後回し」って、
              <br />
              もうやめにしませんか。
              <br />
              <span className="text-foreground">
                あなたが整うことが、
                <br />
                いちばんの家族孝行。
              </span>
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
