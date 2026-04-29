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

const cares = [
  {
    num: "01",
    icon: "🛁",
    title: "体を温める",
    effect: "効果：大",
    why: "骨盤周りの血流が改善すると、子宮の収縮がスムーズになります。冷えると血管が収縮し、痛みの原因物質が増えやすくなります。",
    actions: [
      "毎日湯船に浸かる（シャワーだけにしない）",
      "腹巻・レッグウォーマーを普段使いに",
      "冷たい飲み物・食べ物を控える",
      "夏でも内臓冷やさないよう常温の水を選ぶ",
    ],
    color: "oklch(0.92 0.06 35 / 0.3)",
    borderColor: "oklch(0.85 0.05 35 / 0.5)",
  },
  {
    num: "02",
    icon: "🐟",
    title: "青魚・オメガ3を摂る",
    effect: "効果：大",
    why: "オメガ3脂肪酸は「プロスタグランジン」の過剰分泌を抑える直接的な働きがあります。痛みの元を根っこから減らせます。",
    actions: [
      "サーモン・サバ・イワシを週3回以上",
      "えごま油・亜麻仁油を毎日小さじ1（加熱しない）",
      "サラダにかける・納豆に混ぜる・味噌汁に入れる",
      "マヨネーズはえごま油マヨに置き換えてみる",
    ],
    color: "oklch(0.92 0.06 200 / 0.2)",
    borderColor: "oklch(0.82 0.05 200 / 0.4)",
  },
  {
    num: "03",
    icon: "🌾",
    title: "血糖値の急上昇を避ける",
    effect: "効果：大",
    why: "血糖スパイクが起きるとインスリンが過剰になり、エストロゲン過多につながります。内膜が厚くなりすぎて、出血量が増えます。",
    actions: [
      "食事の順番：野菜→タンパク質→炭水化物",
      "白米より雑穀米・玄米に切り替える",
      "間食はお菓子よりナッツ類・チーズを選ぶ",
      "甘い飲み物をやめるだけでも大きく変わる",
    ],
    color: "oklch(0.93 0.07 80 / 0.3)",
    borderColor: "oklch(0.86 0.06 80 / 0.5)",
  },
  {
    num: "04",
    icon: "🥬",
    title: "マグネシウムを摂る",
    effect: "効果：中〜大",
    why: "マグネシウムは子宮の筋肉のけいれん（収縮）を緩和します。現代の食生活では不足しがちで、ストレスが多いとさらに消費されます。",
    actions: [
      "ほうれん草・豆腐・納豆・バナナを毎日",
      "ナッツ類（特にアーモンド・カシューナッツ）",
      "にがり入りの豆腐を選ぶ",
      "入浴剤にエプソムソルトを使う（皮膚からも吸収）",
    ],
    color: "oklch(0.93 0.06 130 / 0.25)",
    borderColor: "oklch(0.83 0.05 130 / 0.4)",
  },
  {
    num: "05",
    icon: "🚶‍♀️",
    title: "軽い有酸素運動を習慣に",
    effect: "効果：大",
    why: "血流が改善して子宮への酸素が増え、エンドルフィンで痛みが和らぎます。エストロゲンの代謝も促進されてホルモンバランスが整います。",
    actions: [
      "週3〜4回、30分のウォーキングかヨガ",
      "生理中でも軽いストレッチは効果的",
      "子どもと公園に行くのも立派な運動",
      "激しすぎる運動は逆効果なのでゆっくり継続を",
    ],
    color: "oklch(0.92 0.05 55 / 0.3)",
    borderColor: "oklch(0.85 0.04 55 / 0.5)",
  },
];

export default function TaberuPage() {
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
                "radial-gradient(ellipse 70% 50% at 70% 50%, oklch(0.92 0.07 75 / 0.3) 0%, transparent 70%)",
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
              Food & Daily Care
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl leading-snug mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              たべるケア
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              特別なサプリや高いものは必要ありません。
              <br />
              毎日の食事と小さな習慣から、からだは変わっていきます。
              <br />
              続けて3ヶ月、多くの方が変化を感じています。
            </motion.p>
          </div>
        </section>

        {/* 5つのケア */}
        <section className="py-8 px-6 pb-24">
          <div className="max-w-3xl mx-auto space-y-8">
            {cares.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.6 }}
              >
                <div
                  className="rounded-3xl p-7 sm:p-10"
                  style={{
                    background: item.color,
                    border: `1px solid ${item.borderColor}`,
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <p
                        className="text-xs tracking-wider text-muted-foreground mb-1"
                      >
                        {item.num}
                      </p>
                      <span className="text-4xl">{item.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3
                          className="text-xl sm:text-2xl"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.title}
                        </h3>
                        <span
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: "oklch(0.52 0.14 32 / 0.12)",
                            color: "oklch(0.42 0.12 32)",
                          }}
                        >
                          {item.effect}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {item.why}
                      </p>

                      <div>
                        <p className="text-xs tracking-wider text-foreground/60 uppercase mb-3">
                          具体的に
                        </p>
                        <ul className="space-y-2">
                          {item.actions.map((action, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: j * 0.08, duration: 0.4 }}
                              className="flex items-start gap-2.5 text-sm"
                            >
                              <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: "oklch(0.52 0.14 32)" }}
                              />
                              <span className="text-foreground/80 leading-relaxed">
                                {action}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="py-16 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p
              className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8"
            >
              Remember
            </p>
            <p
              className="text-xl sm:text-2xl leading-loose mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              完璧にやろうとしなくていい。
              <br />
              <span className="text-primary">できるものから、ひとつずつ。</span>
              <br />
              それが3ヶ月後の自分を変える。
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
              自分のからだを大切にすることは、わがままじゃない。
              毎日ベストを尽くせるあなたが、家族にとっていちばんの贈り物です。
            </p>
            <Link
              href="/karada"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              ← からだのはなしに戻る
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
