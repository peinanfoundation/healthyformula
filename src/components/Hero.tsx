import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slides } from "../data/content";
import "./Hero.css";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top" aria-label="滲水幫">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
      </div>

      <div className="hero__layout container">
        <div className="hero__copy">
          <motion.img
            src="/brand/sumshuibong2.png?v=1"
            alt="滲水幫"
            className="hero__brand hero__brand--ss"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            一站式跟進處理滲水問題慈善項目
          </motion.h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            滲水幫是康健程式主辦的社區項目，為市民提供政府部門服務以外的全面專業跟進諮詢。由安排初步勘察檢查、評估權責，到提前提供專業分析，並全程跟進。
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <Link className="btn btn-primary" to="/sumshuibong">
              了解服務
            </Link>
            <a className="btn btn-outline" href="mailto:healthyformula.hk@gmail.com">
              立即查詢
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero__feature"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          aria-label="滲水幫現場圖片"
        >
          <div className="hero__feature-stage">
            <AnimatePresence mode="sync">
              <motion.img
                key={slides[index].src}
                src={slides[index].src}
                alt={slides[index].alt}
                className="hero__feature-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>
          </div>

          <div className="hero__feature-foot">
            <p>{slides[index].caption}</p>
            <div className="hero__feature-dots">
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
          </div>

          <Link className="hero__feature-link" to="/sumshuibong">
            查看項目詳情 →
          </Link>
        </motion.aside>
      </div>
    </section>
  );
}
