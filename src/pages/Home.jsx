import { Link } from "react-router-dom";
import { sensors } from "../data/sensors";

const menuItems = [
  {
    path: "/sensors",
    emoji: "📦",
    title: "センサーずかん",
    description: `37しゅるいのセンサーのつかいかたをしらべよう！`,
    color: "#4CAF50",
    bg: "#E8F5E9",
  },
  {
    path: "/circuit",
    emoji: "⚡",
    title: "かいろのきほん",
    description: "でんきとかいろのしくみをわかりやすくかいせつ！",
    color: "#FF9800",
    bg: "#FFF3E0",
  },
  {
    path: "/quiz",
    emoji: "🧠",
    title: "クイズにちょうせん！",
    description: "まなんだことをためしてみよう！ぜんぶで20もん！",
    color: "#9C27B0",
    bg: "#F3E5F5",
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero-content">
          <div className="home-hero-icon">🔲</div>
          <h1 className="home-title">Microbit<br />センサーずかん</h1>
          <p className="home-subtitle">
            KEYESTUDIO 37センサーキットで<br />
            たのしくプログラミングをまなぼう！
          </p>
        </div>
        <div className="home-microbit-visual">
          <div className="microbit-card">
            <div className="microbit-display">
              <div className="microbit-grid">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="microbit-dot"
                    style={{
                      opacity: [2, 6, 7, 8, 12, 17, 18, 22].includes(i) ? 1 : 0.15,
                    }}
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

      <div className="home-stats">
        <div className="stat-card">
          <div className="stat-number">{sensors.length}</div>
          <div className="stat-label">センサーしゅるい</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">6</div>
          <div className="stat-label">かいろのきほん</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">20</div>
          <div className="stat-label">クイズもん数</div>
        </div>
      </div>

      <div className="home-menu">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className="menu-card" style={{ "--card-color": item.color, "--card-bg": item.bg }}>
            <div className="menu-card-emoji">{item.emoji}</div>
            <div className="menu-card-title">{item.title}</div>
            <div className="menu-card-desc">{item.description}</div>
            <div className="menu-card-arrow">→</div>
          </Link>
        ))}
      </div>

      <div className="home-tip">
        <div className="tip-icon">💡</div>
        <div className="tip-text">
          <strong>つかいかた：</strong>
          センサーずかんでセンサーをえらんで、つなぎかたやコードをかくにんしよう。
          わからないことはかいろのきほんをよんでみよう！
        </div>
      </div>
    </div>
  );
}
