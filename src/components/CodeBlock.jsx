import { useState } from "react";

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-title">📝 サンプルコード（MakeCode JavaScript）</span>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? "✅ コピーした！" : "📋 コピー"}
        </button>
      </div>
      <pre className="code-content">
        <code>{code}</code>
      </pre>
    </div>
  );
}
