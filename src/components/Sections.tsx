import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  about,
  featuredHomeEvent,
  researchIntro,
  researchProjects,
  work,
} from "../data/content";
import "./Sections.css";

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.div {...fade}>
          <h2 className="section-title">關於康健程式</h2>
          <p className="section-lead">{about}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function OurWork() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <motion.div {...fade}>
          <h2 className="section-title">我們的工作</h2>
          <p className="section-lead work__lead">{work}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturedEvent() {
  return (
    <section className="section featured-event" id="lemonganju">
      <div className="container">
        <motion.div className="featured-event__grid" {...fade}>
          <div className="featured-event__copy">
            <p className="section-label">重點活動</p>
            <h2 className="section-title">{featuredHomeEvent.title}</h2>
            <p className="featured-event__tag">{featuredHomeEvent.tag}</p>
            <p className="section-lead">{featuredHomeEvent.body}</p>
            <Link className="btn btn-primary" to={featuredHomeEvent.href}>
              了解活動詳情
            </Link>
          </div>
          <Link
            className="featured-event__poster"
            to={featuredHomeEvent.href}
            aria-label="樂滿安居活動詳情"
          >
            <img
              src={featuredHomeEvent.image}
              alt="樂滿安居家居安全改善計劃"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section className="section research" id="research">
      <div className="container">
        <motion.div {...fade}>
          <h2 className="section-title">研究項目</h2>
          <p className="section-lead">{researchIntro.text}</p>
        </motion.div>

        <div className="research__goals">
          <h3>研究工作的核心目的</h3>
          <ul>
            {researchIntro.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>

        <div className="research__list">
          {researchProjects.map((p, i) => (
            <motion.article
              key={p.id}
              className="research__card"
              id={p.id}
              {...fade}
              transition={{ ...fade.transition, delay: 0.06 * i }}
            >
              <span className="research__year">{p.year}</span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              {p.details && (
                <ul className="research__details">
                  {p.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
              <div className="research__files">
                {p.pdf && (
                  <a
                    className="btn btn-outline"
                    href={p.pdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    下載研究報告
                  </a>
                )}
                {p.pdfs?.map((f) => (
                  <a
                    key={f.href}
                    className="btn btn-outline"
                    href={f.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {f.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
