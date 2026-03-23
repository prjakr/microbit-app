import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "ホーム", emoji: "🏠" },
  { path: "/sensors", label: "センサー", emoji: "📦" },
  { path: "/circuit", label: "回路のきほん", emoji: "⚡" },
  { path: "/quiz", label: "クイズ", emoji: "🧠" },
];

// アプリ切り替えバー（Scratch-Techniquesポータルから全アプリへ）
const appLinks = [
  {
    label: "← ポータルへもどる",
    emoji: "🐱",
    href: "https://prjakr.github.io/Scratch-Techniques/",
    active: false,
  },
  {
    label: "スクラッチ勉強",
    emoji: "📚",
    href: "https://prjakr.github.io/Scratch-Techniques/study.html",
    active: false,
  },
  {
    label: "マイクロビット",
    emoji: "🔲",
    href: null, // 現在のアプリ
    active: true,
  },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      {/* アプリ切り替えバー */}
      <div className="app-switcher">
        <div className="app-switcher-inner">
          {appLinks.map((app) =>
            app.active ? (
              <span key={app.label} className="app-switcher-item current">
                {app.emoji} {app.label}
              </span>
            ) : (
              <a
                key={app.label}
                href={app.href}
                className="app-switcher-item"
                rel="noopener noreferrer"
              >
                {app.emoji} {app.label}
              </a>
            )
          )}
        </div>
      </div>

      {/* メインナビゲーション */}
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <span className="header-logo-icon">🔲</span>
          <span className="header-logo-text">Microbitせんさーずかん</span>
        </Link>
        <nav className="header-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              <span className="nav-emoji">{item.emoji}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
