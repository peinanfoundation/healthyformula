import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Research } from "../components/Sections";
import "../components/Sections.css";
import "./ResearchPage.css";

export function ResearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="research-page">
      <div className="container research-page__crumb-wrap">
        <p className="research-page__crumb">
          <Link to="/">首頁</Link>
          <span>/</span>
          <span>研究項目</span>
        </p>
      </div>
      <Research />
    </div>
  );
}
