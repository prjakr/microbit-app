import { Link } from "react-router-dom";
import { sensors } from "../data/sensors";

const menuItems = [
  {
    path: "/sensors",
    emoji: "📦",
    title: "センサー図鑑",
    description: "37種類のセンサーの使い方を調べよう！",
    color: "#4CAF50",
    bg: "#E8F5E9",
    badge: `${sensors.length}種類`,
  },
];

// ハイライトチップ：name = 表示名、q = SensorList で検索するクエリ
const sensorHighlights = [
  { emoji: "💡", name: "LED",   desc: "光る",     q: "LED" },
  { emoji: "🌡️", name: "温度", desc: "熱を測る",  q: "Temperature" },
  { emoji: "🔊", name: "音",    desc: "音を出す",  q: "Sound" },
  { emoji: "🌊", name: "超音波",desc: "距離を測る",q: "Ultrasonic" },
  { emoji: "🎛️", name: "ボタン",desc: "押す・離す",q: "Button" },
  { emoji: "💧", name: "水分",  desc: "濡れを検知",q: "Water" },
  { emoji: "🔥", name: "炎",    desc: "炎を検知",  q: "Flame" },
  { emoji: "🌈", name: "カラー",desc: "色を識別",  q: "Color" },
];

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero-content">
          <div className="home-hero-icon">🔲</div>
          <h1 className="home-title">Microbit<br />センサー図鑑</h1>
          <p className="home-subtitle">
            KEYESTUDIO 37センサーキットで<br />
            楽しくプログラミングを学ぼう！
          </p>
          <div className="home-hero-btns">
            <Link to="/sensors" className="btn btn-primary">📦 センサーを見る</Link>
          </div>
        </div>
        <div className="home-microbit-visual">
          <div className="microbit-card">
            <div className="microbit-display">
              <div className="microbit-grid">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="microbit-dot"
                    style={{ opacity: [2, 6, 7, 8, 12, 17, 18, 22].includes(i) ? 1 : 0.15 }}
                  />
                ))}
              </div>
            </div>
            <div className="microbit-pins">
              {["P0", "P1", "P2", "3V", "GND"].map((pin) => (
                <div key={pin} className="microbit-pin">{pin}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* センサーハイライト（クリックで一覧へ） */}
      <div className="sensor-highlights">
        <h2 className="highlights-title">🔭 こんなセンサーが使えるよ！</h2>
        <div className="highlights-scroll">
          {sensorHighlights.map((s) => (
            <Link
              key={s.name}
              to={`/sensors?q=${encodeURIComponent(s.q)}`}
              className="highlight-chip"
            >
              <span className="highlight-emoji">{s.emoji}</span>
              <span className="highlight-name">{s.name}</span>
              <span className="highlight-desc">{s.desc}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="home-stats">
        <div className="stat-card">
          <div className="stat-number">{sensors.length}</div>
          <div className="stat-label">センサー種類</div>
        </div>
      </div>

      <div className="home-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="menu-card"
            style={{ "--card-color": item.color, "--card-bg": item.bg }}
          >
            <div className="menu-card-emoji">{item.emoji}</div>
            <div className="menu-card-badge">{item.badge}</div>
            <div className="menu-card-title">{item.title}</div>
            <div className="menu-card-desc">{item.description}</div>
            <div className="menu-card-arrow">→</div>
          </Link>
        ))}
      </div>

      {/* 使い方ガイド */}
      <div className="how-to-box">
        <h2 className="how-to-title">🚀 使い方</h2>
        <div className="how-to-steps">
          <div className="how-to-step">
            <span className="how-to-num">1</span>
            <div>
              上の <strong>チップ</strong> か <strong>📦 センサー図鑑</strong> から使いたいセンサーを選ぶ
            </div>
          </div>
          <div className="how-to-step">
            <span className="how-to-num">2</span>
            <div>
              <strong>配線図</strong> を見てMicrobitとセンサーをつなぐ
            </div>
          </div>
          <div className="how-to-step">
            <span className="how-to-num">3</span>
            <div>
              <strong>🚀 MakeCodeで開く</strong> ボタンでコードをコピー＆貼り付け
            </div>
          </div>
        </div>
      </div>

      <div className="home-tip">
        <div className="tip-icon">⚠️</div>
        <div className="tip-text">
          <strong>安全に実験しよう：</strong>
          電気の実験は、必ず先生と一緒に行いましょう。
          プラスとマイナスを直接つなぐと危険です。
        </div>
      </div>
    </div>
  );
}
