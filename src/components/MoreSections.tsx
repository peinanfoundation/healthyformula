import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { contact, join, missionPoints } from "../data/content";

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="container">
        <motion.div {...fade}>
          <h2 className="section-title">使命與信念</h2>
          <p className="section-lead">
            致力協助每位受身心健康困擾的人，並予以支持、鼓勵和尊重。
          </p>
        </motion.div>

        <div className="mission__list">
          {missionPoints.map((m, i) => (
            <motion.article
              key={m}
              className="mission__item"
              {...fade}
              transition={{ ...fade.transition, delay: 0.06 * i }}
            >
              <p className="mission__zh">{m}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Join() {
  return (
    <section className="section join" id="join">
      <div className="container">
        <motion.div {...fade}>
          <h2 className="section-title">加入我們</h2>
          <p className="section-lead">
            攜手並進，確保香港每個人在身心健康問題上都不再孤單無助。歡迎捐款、成為義工，或以機構夥伴形式與我們合作。
          </p>
        </motion.div>

        <div className="join__blocks">
          <motion.article className="join__block" {...fade}>
            <h3>{join.donation.title}</h3>
            <p>{join.donation.zh}</p>
            <p>{join.donation.cheque}</p>
            <p className="join__note">{contact.charityNote}</p>
            <div className="join__actions">
              <a className="btn btn-primary" href={`mailto:${contact.email}`}>
                電郵聯絡捐款
              </a>
            </div>
          </motion.article>

          <motion.article className="join__block" {...fade}>
            <h3>{join.volunteer.title}</h3>
            <p>{join.volunteer.zh}</p>
            <div className="join__actions">
              <a
                className="btn btn-primary"
                href={contact.volunteerForm}
                target="_blank"
                rel="noreferrer"
              >
                義工申請表
              </a>
              <a className="btn btn-outline" href={`mailto:${contact.email}`}>
                電郵查詢
              </a>
            </div>
          </motion.article>

          <motion.article className="join__block" {...fade}>
            <h3>{join.partner.title}</h3>
            <p>{join.partner.zh}</p>
            <p>
              聯絡電郵：{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <div className="join__actions">
              <a className="btn btn-outline" href={`tel:${contact.phone}`}>
                致電 {contact.phone}
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brands">
          <img
            src="/brand/healthyformulalogo.png?v=3"
            alt="康健程式"
            className="footer__hf"
          />
          <div className="footer__project">
            <span>重點項目</span>
            <Link to="/sumshuibong">
              <img src="/brand/sumshuibong2.png?v=1" alt="滲水幫" />
            </Link>
          </div>
        </div>
        <div className="footer__meta">
          <p>康健程式</p>
          <p>{contact.address}</p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            {" · "}
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </p>
          <p className="footer__copy">
            © {new Date().getFullYear()} 康健程式。保留所有權利。
          </p>
        </div>
      </div>
    </footer>
  );
}
