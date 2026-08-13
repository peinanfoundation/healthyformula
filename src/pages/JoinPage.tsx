import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Join } from "../components/MoreSections";
import "../components/Sections.css";
import "./JoinPage.css";

export function JoinPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="join-page">
      <div className="container join-page__crumb-wrap">
        <p className="join-page__crumb">
          <Link to="/">首頁</Link>
          <span>/</span>
          <span>加入我們</span>
        </p>
      </div>
      <Join />
    </div>
  );
}
