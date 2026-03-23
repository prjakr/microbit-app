import { useState } from "react";
import { Link } from "react-router-dom";
import { sensors, categories } from "../data/sensors";

const difficultyLabel = ["", "⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐"];
const difficultyText = ["", "かんたん", "ふつう", "むずかしい", "上級"];

export default function SensorList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchText, setSearchText] = useState("");

  const filtered = sensors.filter((s) => {
    const matchCategory = selectedCategory === "all" || s.category === selectedCategory;
    const matchSearch =
      searchText === "" ||
      s.name.includes(searchText) ||
      s.nameEn?.toLowerCase().includes(searchText.toLowerCase()) ||
      s.tags?.some((t) => t.includes(searchText));
    return matchCategory && matchSearch;
  });

  return (
    <div className="page sensor-list-page">
      <div className="page-header">
        <h1 className="page-title">📦 センサーずかん</h1>
        <p className="page-subtitle">センサーをえらんで、つかいかたをかくにんしよう！</p>
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="センサーのなまえでけんさく..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        {searchText && (
          <button className="search-clear" onClick={() => setSearchText("")}>✕</button>
        )}
      </div>

      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-tab ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span>{cat.emoji}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="sensor-count">
        <span className="count-badge">{filtered.length}けん</span> みつかりました
      </div>

      <div className="sensor-grid">
        {filtered.map((sensor) => (
          <Link key={sensor.id} to={`/sensors/${sensor.id}`} className="sensor-card" style={{ "--card-bg": sensor.color }}>
            <div className="sensor-card-emoji">{sensor.emoji}</div>
            <div className="sensor-card-body">
              <div className="sensor-card-name">{sensor.name}</div>
              <div className="sensor-card-name-en">{sensor.nameEn}</div>
              <div className="sensor-card-desc">{sensor.description}</div>
              <div className="sensor-card-footer">
                <span className="sensor-difficulty" title={difficultyText[sensor.difficulty]}>
                  {difficultyLabel[sensor.difficulty]}
                </span>
                <span className="sensor-category-badge">{sensor.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <div className="empty-emoji">🔍</div>
          <div className="empty-text">「{searchText}」はみつかりませんでした</div>
        </div>
      )}
    </div>
  );
}
