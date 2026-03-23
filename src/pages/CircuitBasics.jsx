import { useState } from "react";
import { circuitLessons } from "../data/circuitLessons";
import {
  DiagramElectricity,
  DiagramCircuit,
  DiagramSeriesParallel,
  DiagramOhmsLaw,
  DiagramDigitalAnalog,
  DiagramMicrobitPins,
} from "../components/CircuitDiagrams";

const diagramComponents = [
  DiagramElectricity,
  DiagramCircuit,
  DiagramSeriesParallel,
  DiagramOhmsLaw,
  DiagramDigitalAnalog,
  DiagramMicrobitPins,
];

export default function CircuitBasics() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  if (selectedLesson !== null) {
    const lesson = circuitLessons[selectedLesson];
    const DiagramComp = diagramComponents[selectedLesson];
    return (
      <div className="page circuit-page">
        <button className="back-inline-btn" onClick={() => setSelectedLesson(null)}>
          ← きほんいちらんにもどる
        </button>

        <div className="lesson-hero" style={{ background: lesson.color }}>
          <div className="lesson-hero-emoji">{lesson.emoji}</div>
          <h1 className="lesson-hero-title">{lesson.title}</h1>
          <div className="lesson-step">
            {selectedLesson + 1} / {circuitLessons.length}
          </div>
        </div>

        {/* 回路図 */}
        {DiagramComp && (
          <div className="lesson-diagram-wrap">
            <h3 className="lesson-diagram-title">📊 かいろず・ダイアグラム</h3>
            <div className="lesson-diagram">
              <DiagramComp />
            </div>
          </div>
        )}

        <div className="lesson-content">
          <div className="lesson-text">
            {lesson.content.trim().split("\n").map((line, i) => {
              if (line.startsWith("**") && line.endsWith("**")) {
                return <h3 key={i} className="lesson-heading">{line.replace(/\*\*/g, "")}</h3>;
              }
              if (line.startsWith("💡") || line.startsWith("⚠️") || line.startsWith("📐")) {
                return <div key={i} className="lesson-highlight">{line}</div>;
              }
              if (line.startsWith("- ")) {
                return <li key={i} className="lesson-list-item">{line.slice(2)}</li>;
              }
              if (line.trim() === "") return <br key={i} />;
              return <p key={i}>{line}</p>;
            })}
          </div>

          <div className="lesson-points">
            <h3 className="points-title">📌 このレッスンのポイント</h3>
            <ul className="points-list">
              {lesson.points.map((point, i) => (
                <li key={i} className="point-item">
                  <span className="point-num">{i + 1}</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lesson-nav">
          {selectedLesson > 0 ? (
            <button
              className="lesson-nav-btn prev"
              onClick={() => setSelectedLesson(selectedLesson - 1)}
            >
              ← {circuitLessons[selectedLesson - 1].emoji} まえのレッスン
            </button>
          ) : <div />}
          {selectedLesson < circuitLessons.length - 1 ? (
            <button
              className="lesson-nav-btn next"
              onClick={() => setSelectedLesson(selectedLesson + 1)}
            >
              つぎのレッスン {circuitLessons[selectedLesson + 1].emoji} →
            </button>
          ) : (
            <button
              className="lesson-nav-btn next complete"
              onClick={() => setSelectedLesson(null)}
            >
              🎉 ぜんぶおわった！もどる
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="page circuit-page">
      <div className="page-header">
        <h1 className="page-title">⚡ かいろのきほん</h1>
        <p className="page-subtitle">でんきとかいろのしくみをかくにんしよう！</p>
      </div>

      <div className="lesson-intro">
        <div className="lesson-intro-text">
          でんきはどうやって流れるの？センサーはどうやってつなぐの？
          プログラミングの前にかいろのきほんをおぼえよう！
        </div>
      </div>

      <div className="lesson-list">
        {circuitLessons.map((lesson, index) => (
          <button
            key={lesson.id}
            className="lesson-card"
            style={{ "--lesson-color": lesson.color }}
            onClick={() => setSelectedLesson(index)}
          >
            <div className="lesson-card-left">
              <div className="lesson-card-num">{index + 1}</div>
              <div className="lesson-card-emoji">{lesson.emoji}</div>
            </div>
            <div className="lesson-card-body">
              <div className="lesson-card-title">{lesson.title}</div>
              <div className="lesson-card-points">
                {lesson.points.slice(0, 2).map((p, i) => (
                  <span key={i} className="lesson-card-point">• {p}</span>
                ))}
              </div>
            </div>
            <div className="lesson-card-arrow">›</div>
          </button>
        ))}
      </div>

      <div className="circuit-tip-box">
        <div className="tip-icon">⚠️</div>
        <div>
          <strong>あんぜんにつかおう！</strong>
          <p>でんきのじっけんをするときは、かならず先生といっしょにやりましょう。
          プラスとマイナスをじかにつなぐと危険です。</p>
        </div>
      </div>
    </div>
  );
}
