import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventsByYear, eventsIntro } from "../data/content";
import "../components/Sections.css";
import "./EventsPage.css";

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function EventsPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <div className="events-page">
      <section className="section events" id="events">
        <div className="container">
          <p className="events-page__crumb">
            <Link to="/">首頁</Link>
            <span>/</span>
            <span>活動一覽</span>
          </p>

          <motion.div {...fade}>
            <h1 className="section-title">活動一覽</h1>
            <p className="section-lead">{eventsIntro}</p>
          </motion.div>

          <nav className="events-page__years" aria-label="按年份瀏覽">
            {eventsByYear.map((group) => (
              <a key={group.year} href={`#events-${group.year}`}>
                {group.year}
              </a>
            ))}
          </nav>

          <div className="events__years">
            {eventsByYear.map((group, i) => (
              <motion.div
                key={group.year}
                className="events__group"
                id={`events-${group.year}`}
                {...fade}
                transition={{ ...fade.transition, delay: 0.04 * i }}
              >
                <h2>{group.year}</h2>
                <div className="events__items">
                  {group.items.map((item) => (
                    <article key={item.title} className="events__item">
                      {"date" in item && item.date && (
                        <time>{item.date}</time>
                      )}
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      {"images" in item && item.images?.length > 0 && (
                        <div className="events__gallery">
                          {item.images.map((src) => (
                            <button
                              key={src}
                              type="button"
                              className="events__thumb"
                              onClick={() => setLightbox(src)}
                              aria-label={`放大檢視：${item.title}`}
                            >
                              <img src={src} alt={item.title} loading="lazy" />
                            </button>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="events-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="events-lightbox__close"
            aria-label="關閉"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt=""
            className="events-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
