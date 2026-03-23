import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SensorList from "./pages/SensorList";
import SensorDetail from "./pages/SensorDetail";
import CircuitBasics from "./pages/CircuitBasics";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sensors" element={<SensorList />} />
            <Route path="/sensors/:id" element={<SensorDetail />} />
            <Route path="/circuit" element={<CircuitBasics />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>🔲 Microbitセンサー図鑑 — KEYESTUDIO 37センサースターターキット</p>
          <p className="footer-sub">
            <a href="https://prjakr.github.io/Scratch-Techniques/" className="footer-link">🐱 ブロックプログラミング広場に戻る</a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
