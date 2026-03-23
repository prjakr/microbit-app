import { useParams, Link } from "react-router-dom";
import { sensors } from "../data/sensors";
import CodeBlock from "../components/CodeBlock";
import MakeCodeButton from "../components/MakeCodeButton";

const difficultyLabel = ["", "⭐ かんたん", "⭐⭐ ふつう", "⭐⭐⭐ むずかしい", "⭐⭐⭐⭐ 上級"];

export default function SensorDetail() {
  const { id } = useParams();
  const sensor = sensors.find((s) => s.id === Number(id));

  if (!sensor) {
    return (
      <div className="page">
        <div className="empty-state">
          <div className="empty-emoji">😕</div>
          <div className="empty-text">センサーがみつかりません</div>
          <Link to="/sensors" className="btn btn-primary">センサーずかんにもどる</Link>
        </div>
      </div>
    );
  }

  const currentIndex = sensors.findIndex((s) => s.id === sensor.id);
  const prevSensor = sensors[currentIndex - 1];
  const nextSensor = sensors[currentIndex + 1];

  return (
    <div className="page sensor-detail-page">
      <div className="breadcrumb">
        <Link to="/sensors">📦 センサーずかん</Link>
        <span className="breadcrumb-sep">›</span>
        <span>{sensor.name}</span>
      </div>

      <div className="sensor-detail-hero" style={{ background: sensor.color }}>
        <div className="sensor-detail-emoji">{sensor.emoji}</div>
        <div className="sensor-detail-header">
          <h1 className="sensor-detail-name">{sensor.name}</h1>
          <p className="sensor-detail-name-en">{sensor.nameEn}</p>
          <div className="sensor-detail-meta">
            <span className="difficulty-badge">{difficultyLabel[sensor.difficulty]}</span>
            <span className="category-badge-pill">{sensor.category}</span>
          </div>
        </div>
      </div>

      <div className="sensor-detail-content">
        {/* 説明 */}
        <section className="detail-section">
          <h2 className="section-title">📖 このセンサーってなに？</h2>
          <p className="detail-description">{sensor.description}</p>
        </section>

        {/* しくみ */}
        <section className="detail-section">
          <h2 className="section-title">🔬 どんなしくみ？</h2>
          <div className="detail-card info-card">
            <p>{sensor.howItWorks}</p>
          </div>
        </section>

        {/* つなぎかた */}
        <section className="detail-section">
          <h2 className="section-title">🔌 つなぎかた（ピンのせつぞく）</h2>
          <div className="wiring-card">
            <div className="wiring-diagram">
              <div className="wiring-side microbit-side">
                <div className="wiring-device-label">🔲 Microbit</div>
                {Object.entries(sensor.pins).map(([key, val]) => (
                  <div key={key} className="wiring-pin microbit-pin-item">
                    <span className="pin-name">{val}</span>
                  </div>
                ))}
              </div>
              <div className="wiring-lines">
                {Object.entries(sensor.pins).map(([key]) => (
                  <div key={key} className="wiring-line" />
                ))}
              </div>
              <div className="wiring-side sensor-side">
                <div className="wiring-device-label">🔧 センサー</div>
                {Object.entries(sensor.pins).map(([key, val]) => (
                  <div key={key} className="wiring-pin sensor-pin-item">
                    <span className="pin-name">{key.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="wiring-text">
              <pre className="wiring-pre">{sensor.wiring}</pre>
            </div>
          </div>
        </section>

        {/* サンプルコード */}
        <section className="detail-section">
          <h2 className="section-title">💻 サンプルコード</h2>
          <CodeBlock code={sensor.sampleCode} />
          <MakeCodeButton code={sensor.sampleCode} />
        </section>

        {/* タグ */}
        {sensor.tags && (
          <div className="tag-list">
            {sensor.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* 前後のナビゲーション */}
      <div className="sensor-nav">
        {prevSensor ? (
          <Link to={`/sensors/${prevSensor.id}`} className="sensor-nav-btn prev">
            <span className="sensor-nav-arrow">←</span>
            <span className="sensor-nav-info">
              <span className="sensor-nav-label">まえのセンサー</span>
              <span className="sensor-nav-name">{prevSensor.emoji} {prevSensor.name}</span>
            </span>
          </Link>
        ) : <div />}
        {nextSensor ? (
          <Link to={`/sensors/${nextSensor.id}`} className="sensor-nav-btn next">
            <span className="sensor-nav-info">
              <span className="sensor-nav-label">つぎのセンサー</span>
              <span className="sensor-nav-name">{nextSensor.emoji} {nextSensor.name}</span>
            </span>
            <span className="sensor-nav-arrow">→</span>
          </Link>
        ) : <div />}
      </div>

      <div className="back-btn-wrap">
        <Link to="/sensors" className="btn btn-outline">← センサーずかんにもどる</Link>
      </div>
    </div>
  );
}
