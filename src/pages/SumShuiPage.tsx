import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services, slides, sumShuiIntro } from "../data/content";
import "../components/Sections.css";
import "./SumShuiPage.css";

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function SumShuiPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  return (
    <div className="ss-page">
      <section className="section project ss-page__main">
        <div className="container">
          <p className="ss-page__crumb">
            <Link to="/">首頁</Link>
            <span>/</span>
            <span>滲水幫</span>
          </p>

          <motion.div className="project__head" {...fade}>
            <p className="section-label">重點項目</p>
            <div className="project__title-row">
              <img
                src="/brand/sumshuibong2.png?v=1"
                alt="滲水幫"
                className="project__logo"
              />
              <div>
                <h1 className="section-title">滲水幫</h1>
                <div className="section-lead ss-page__intro">
                  {sumShuiIntro.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="project__slideshow">
          <div className="project__stage">
            <AnimatePresence mode="sync">
              <motion.img
                key={slides[index].src}
                src={slides[index].src}
                alt={slides[index].alt}
                className="project__slide"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="project__veil" />
            <div className="project__caption container">
              <span>{slides[index].caption}</span>
              <span>
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="project__controls container">
            <button type="button" onClick={() => go(-1)} aria-label="上一張">
              ‹
            </button>
            <div className="project__dots">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  className={i === index ? "is-active" : ""}
                  aria-label={`第 ${i + 1} 張`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label="下一張">
              ›
            </button>
          </div>
        </div>

        <div className="container">
          <ol className="services__list project__services">
            {services.map((s, i) => (
              <motion.li
                key={s.title}
                {...fade}
                transition={{ ...fade.transition, delay: 0.06 * i }}
              >
                <span className="services__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{s.title}</h2>
                  <p>{s.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div className="project__cta" {...fade}>
            <a
              className="btn btn-primary"
              href="mailto:healthyformula.hk@gmail.com"
            >
              查詢滲水幫服務
            </a>
            <a className="btn btn-outline" href="tel:61711107">
              致電 61711107
            </a>
            <Link className="btn btn-outline" to="/">
              返回首頁
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
