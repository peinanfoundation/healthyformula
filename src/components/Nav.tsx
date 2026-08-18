import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const homeLinks = [
  { href: "/#about", label: "機構簡介" },
  { href: "/research", label: "研究項目" },
  { href: "/events", label: "活動" },
  { href: "/join", label: "加入我們" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    } else if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner container">
          <Link to="/" className="nav__brand" onClick={close}>
            <img
              src="/brand/heathyformulalogo2.png?v=1"
              alt="康健程式"
              className="nav__logo"
            />
          </Link>

          <button
            className={`nav__toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "關閉選單" : "開啟選單"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>

          <nav className="nav__links nav__links--desktop">
            {homeLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={
                  !l.href.includes("#") && location.pathname === l.href
                    ? "nav__active"
                    : undefined
                }
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/sumshuibong"
              className={
                location.pathname === "/sumshuibong" ? "nav__active" : undefined
              }
            >
              重點項目：滲水幫
            </Link>
            <a className="nav__cta" href="mailto:healthyformula.hk@gmail.com">
              聯絡我們
            </a>
          </nav>
        </div>
      </header>

      <nav
        className={`nav__drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        {homeLinks.map((l) => (
          <Link
            key={l.href}
            to={l.href}
            className={
              !l.href.includes("#") && location.pathname === l.href
                ? "nav__active"
                : undefined
            }
            onClick={close}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/sumshuibong"
          className={
            location.pathname === "/sumshuibong" ? "nav__active" : undefined
          }
          onClick={close}
        >
          重點項目：滲水幫
        </Link>
        <a
          className="nav__cta"
          href="mailto:healthyformula.hk@gmail.com"
          onClick={close}
        >
          聯絡我們
        </a>
      </nav>
    </>
  );
}
