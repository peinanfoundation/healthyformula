import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/MoreSections";
import { EventsPage } from "./pages/EventsPage";
import { HomePage } from "./pages/HomePage";
import { JoinPage } from "./pages/JoinPage";
import { ResearchPage } from "./pages/ResearchPage";
import { SumShuiPage } from "./pages/SumShuiPage";
import "./components/Sections.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/sumshuibong" element={<SumShuiPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
