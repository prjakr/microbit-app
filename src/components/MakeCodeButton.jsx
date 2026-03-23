import { useState } from "react";

/**
 * MakeCodeで開くボタン
 * - コードをクリップボードにコピー
 * - MakeCode エディタを新しいタブで開く
 * - 使い方モーダルを表示
 */
export default function MakeCodeButton({ code }) {
  const [state, setState] = useState("idle"); // idle | copied | error

  const handleOpen = async () => {
    // 1. コードをクリップボードへコピー
    try {
      await navigator.clipboard.writeText(code);
      setState("copied");
    } catch {
      setState("error");
    }

    // 2. MakeCode エディタを新しいタブで開く
    window.open("https://makecode.microbit.org/", "_blank", "noopener,noreferrer");

    // 3. 3秒後にリセット
    setTimeout(() => setState("idle"), 4000);
  };

  return (
    <div className="makecode-btn-wrap">
      <button
        className={`makecode-open-btn ${state === "copied" ? "copied" : ""}`}
        onClick={handleOpen}
      >
        {state === "copied" ? (
          <>✅ コピー完了！MakeCodeが開きました</>
        ) : state === "error" ? (
          <>⚠️ コピーに失敗しました — 手動でコピーして開いてください</>
        ) : (
          <>🚀 MakeCodeで開く</>
        )}
      </button>

      {state === "copied" && (
        <div className="makecode-steps">
          <div className="makecode-step">
            <span className="step-num">①</span>
            <span>MakeCodeのタブが開いたら「<strong>新しいプロジェクト</strong>」をクリック</span>
          </div>
          <div className="makecode-step">
            <span className="step-num">②</span>
            <span>画面上の「<strong>JavaScript</strong>」タブをクリック</span>
          </div>
          <div className="makecode-step">
            <span className="step-num">③</span>
            <span>コードをぜんぶ消して、<strong>Ctrl+V</strong>（はりつけ）</span>
          </div>
          <div className="makecode-step">
            <span className="step-num">④</span>
            <span>▶️ ボタンで<strong>シミュレーター</strong>をうごかそう！</span>
          </div>
        </div>
      )}

      {state === "idle" && (
        <p className="makecode-hint-text">
          💡 ボタンを押すとコードが<strong>自動でコピー</strong>され、MakeCodeが開きます
        </p>
      )}
    </div>
  );
}
