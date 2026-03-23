import { useState } from "react";

export default function MakeCodeButton({ code }) {
  const [state, setState] = useState("idle"); // idle | copied | error

  const handleOpen = () => {
    // ① まず先にウィンドウを開く（クリック直後の同期処理 = ポップアップブロック回避）
    window.open("https://makecode.microbit.org/", "_blank", "noopener,noreferrer");

    // ② その後にクリップボードへコピー
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code)
        .then(() => setState("copied"))
        .catch(() => fallbackCopy());
    } else {
      fallbackCopy();
    }

    setTimeout(() => setState("idle"), 5000);
  };

  const fallbackCopy = () => {
    try {
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setState("copied");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="makecode-btn-wrap">
      <button
        className={`makecode-open-btn ${state === "copied" ? "copied" : ""}`}
        onClick={handleOpen}
      >
        {state === "copied"
          ? "✅ コードをコピーしました！"
          : state === "error"
          ? "⚠️ 手動でコードをコピーしてください"
          : "🚀 MakeCodeで開く（コードも自動コピー）"}
      </button>

      {state === "copied" && (
        <div className="makecode-steps">
          <div className="makecode-step">
            <span className="step-num">①</span>
            <span>MakeCodeのタブで <strong>「新しいプロジェクト」</strong> を作成</span>
          </div>
          <div className="makecode-step">
            <span className="step-num">②</span>
            <span>画面上の <strong>「JavaScript」</strong> タブをクリック</span>
          </div>
          <div className="makecode-step">
            <span className="step-num">③</span>
            <span>コードを全て選択して削除し、<strong>Ctrl+V</strong> で貼り付け</span>
          </div>
          <div className="makecode-step">
            <span className="step-num">④</span>
            <span>▶ ボタンでシミュレーターを動かしてみよう！</span>
          </div>
        </div>
      )}

      {state === "idle" && (
        <p className="makecode-hint-text">
          💡 ボタンを押すとMakeCodeが開き、コードが<strong>自動でコピー</strong>されます
        </p>
      )}
    </div>
  );
}
