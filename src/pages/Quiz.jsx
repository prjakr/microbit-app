import { useState } from "react";
import { quizzes, quizCategories } from "../data/quizzes";

const QUIZ_STATES = { SELECT: "select", PLAYING: "playing", RESULT: "result" };

export default function Quiz() {
  const [state, setState] = useState(QUIZ_STATES.SELECT);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  const startQuiz = () => {
    const pool = selectedCategory === "all" ? quizzes : quizzes.filter((q) => q.category === selectedCategory);
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setState(QUIZ_STATES.PLAYING);
  };

  const handleAnswer = (choiceIndex) => {
    if (selected !== null) return;
    setSelected(choiceIndex);
    setShowExplanation(true);
    const isCorrect = choiceIndex === questions[currentIndex].answer;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { correct: isCorrect, question: questions[currentIndex] }]);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setState(QUIZ_STATES.RESULT);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  /* ── カテゴリ選択 ── */
  if (state === QUIZ_STATES.SELECT) {
    return (
      <div className="page quiz-page">
        <div className="page-header">
          <h1 className="page-title">🧠 クイズに挑戦！</h1>
          <p className="page-subtitle">学んだことをクイズで確認しよう！</p>
        </div>

        <div className="quiz-category-select">
          <h2 className="quiz-select-label">カテゴリを選ぼう</h2>
          <div className="quiz-categories">
            {quizCategories.map((cat) => (
              <button
                key={cat.id}
                className={`quiz-cat-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="quiz-cat-emoji">{cat.emoji}</span>
                <span>{cat.name}</span>
                <span className="quiz-cat-count">
                  {cat.id === "all" ? quizzes.length : quizzes.filter((q) => q.category === cat.id).length}問
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="quiz-start-box">
          <div className="quiz-info">
            <span>🎯 10問出題</span>
            <span>⏱️ 時間制限なし</span>
            <span>💡 解説あり</span>
          </div>
          <button className="btn btn-start" onClick={startQuiz}>
            🚀 クイズを始める！
          </button>
        </div>
      </div>
    );
  }

  /* ── 結果 ── */
  if (state === QUIZ_STATES.RESULT) {
    const percentage = Math.round((score / questions.length) * 100);
    const resultEmoji = percentage >= 80 ? "🎉" : percentage >= 60 ? "😊" : "💪";
    const resultMsg =
      percentage >= 80 ? "すばらしい！よくできました！"
      : percentage >= 60 ? "いいね！もう少しで満点！"
      : "もう1回挑戦してみよう！";

    return (
      <div className="page quiz-page">
        <div className="result-hero">
          <div className="result-emoji">{resultEmoji}</div>
          <h2 className="result-title">結果</h2>
          <div className="result-score">
            <span className="result-num">{score}</span>
            <span className="result-denom"> / {questions.length}</span>
          </div>
          <div className="result-percent">{percentage}点</div>
          <p className="result-msg">{resultMsg}</p>
        </div>

        <div className="result-review">
          <h3 className="review-title">📋 問題の復習</h3>
          {answers.map((ans, i) => (
            <div key={i} className={`review-item ${ans.correct ? "correct" : "wrong"}`}>
              <div className="review-item-header">
                <span className="review-mark">{ans.correct ? "⭕" : "✖️"}</span>
                <span className="review-q">{ans.question.question}</span>
              </div>
              <div className="review-answer">
                <strong>答え：</strong>
                {ans.question.choices[ans.question.answer]}
              </div>
            </div>
          ))}
        </div>

        <div className="result-actions">
          <button className="btn btn-primary" onClick={startQuiz}>🔄 もう一度チャレンジ！</button>
          <button className="btn btn-outline" onClick={() => setState(QUIZ_STATES.SELECT)}>
            カテゴリを選び直す
          </button>
        </div>
      </div>
    );
  }

  /* ── 問題画面 ── */
  const q = questions[currentIndex];
  const isCorrect = selected === q.answer;

  return (
    <div className="page quiz-page">
      <div className="quiz-progress">
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
        <div className="quiz-progress-label">
          <span>{currentIndex + 1} / {questions.length}問</span>
          <span>🌟 {score}正解</span>
        </div>
      </div>

      <div className="quiz-card">
        <div className="quiz-category-chip">{q.emoji} {q.category}</div>
        <h2 className="quiz-question">{q.question}</h2>

        <div className="quiz-choices">
          {q.choices.map((choice, i) => {
            let cls = "choice-btn";
            if (selected !== null) {
              if (i === q.answer) cls += " correct";
              else if (i === selected) cls += " wrong";
              else cls += " dimmed";
            }
            return (
              <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={selected !== null}>
                <span className="choice-letter">{["ア", "イ", "ウ", "エ"][i]}</span>
                <span className="choice-text">{choice}</span>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className={`explanation ${isCorrect ? "correct" : "wrong"}`}>
            <div className="explanation-header">
              {isCorrect ? "⭕ 正解！" : "✖️ 違います…"}
            </div>
            <p className="explanation-text">{q.explanation}</p>
          </div>
        )}

        {selected !== null && (
          <button className="btn btn-next" onClick={handleNext}>
            {currentIndex + 1 >= questions.length ? "🎯 結果を見る" : "次の問題 →"}
          </button>
        )}
      </div>
    </div>
  );
}
