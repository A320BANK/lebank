const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

// Setup/quiz/results nodes
const setupEl = document.getElementById("setup");
const numRange = document.getElementById("numQuestions");
const numLabel = document.getElementById("numLabel");
const startBtn = document.getElementById("startBtn");

const quizEl = document.getElementById("quiz");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");

const resultsEl = document.getElementById("results");
const finalTitle = document.getElementById("finalTitle");
const finalScore = document.getElementById("finalScore");
const playAgainBtn = document.getElementById("playAgainBtn");
const reviewBtn = document.getElementById("reviewBtn");
const retryBtn = document.getElementById("retryBtn");

// Review section
const reviewEl = document.getElementById("review");
const reviewList = document.getElementById("reviewList");
const backToResultsBtn = document.getElementById("backToResultsBtn");
const retryFromReviewBtn = document.getElementById("retryFromReviewBtn");

// Pull questions regardless of declaration style
function getQuestionsArray() {
  try { if (typeof questions !== "undefined" && Array.isArray(questions)) return questions.slice(); } catch {}
  if (Array.isArray(window.questions)) return window.questions.slice();
  return [];
}
let allQuestions = getQuestionsArray();

// ---- Quiz state
let selected = [];
let idx = 0;
let score = 0;
let locked = false;
let incorrect = []; // store missed question objects for review/retry

const PASS_MARK = 75; // percent

// UI helpers
function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]] } return arr; }
function sample(arr,n){ arr = arr.slice(); shuffle(arr); return arr.slice(0,Math.min(n,arr.length)); }

// Setup slider label
numLabel.textContent = numRange.value;
numRange.addEventListener("input", () => { numLabel.textContent = numRange.value; });

// Start quiz from full bank
startBtn.addEventListener("click", () => startNewQuiz(sample(allQuestions, parseInt(numRange.value,10))));

// Core starter (also used by retry incorrect)
function startNewQuiz(questionSet){
  selected = questionSet.slice();
  idx = 0; score = 0; incorrect = [];
  scoreEl.textContent = `Score: 0`;
  hide(setupEl); hide(resultsEl); hide(reviewEl); show(quizEl);
  renderQuestion();
}

// Render one question
function renderQuestion() {
  locked = false;
  nextBtn.disabled = true; nextBtn.textContent = "Next ➜";
  restartBtn.classList.add("hidden");

  const q = selected[idx];
  progressEl.textContent = `Question ${idx+1} of ${selected.length}`;
  questionText.textContent = q.question;

  const options = q.answers.map((text, i) => ({ text, i, correct: i === q.correct }));
  shuffle(options);

  answersContainer.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt.text;
    btn.dataset.correct = String(opt.correct);

    btn.addEventListener("click", () => {
      if (locked) return;
      locked = true;

      // disable and mark
      [...answersContainer.children].forEach(b => b.disabled = true);
      if (opt.correct) {
        btn.classList.add("correct");
        score++; scoreEl.textContent = `Score: ${score}`;
      } else {
        btn.classList.add("wrong");
        // highlight the correct one
        [...answersContainer.children].find(b => b.dataset.correct === "true")?.classList.add("correct");
        // remember this missed question
        incorrect.push(q);
      }
      nextBtn.disabled = false;
      if (idx === selected.length - 1) nextBtn.textContent = "Finish";
    });

    answersContainer.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  if (idx < selected.length - 1) { idx++; renderQuestion(); return; }

  // Finished
  hide(quizEl); show(resultsEl);
  const pct = Math.round((score / selected.length) * 100);
  const pass = pct >= PASS_MARK;

  finalTitle.textContent = "Quiz complete!";
  finalScore.innerHTML = `
    You scored <strong>${score}</strong> / <strong>${selected.length}</strong>
    (<strong>${pct}%</strong>)<br />
    <span class="result-badge ${pass ? "result-pass" : "result-fail"}">
      ${pass ? "PASS" : "FAIL"} — Pass mark ${PASS_MARK}%
    </span>
  `;

  // Toggle review/retry buttons based on whether there are any mistakes
  if (incorrect.length) {
    reviewBtn.classList.remove("hidden");
    retryBtn.classList.remove("hidden");
  } else {
    reviewBtn.classList.add("hidden");
    retryBtn.classList.add("hidden");
  }
});

// Show list of incorrect questions with correct answers
reviewBtn.addEventListener("click", () => {
  renderReviewList();
  hide(resultsEl); show(reviewEl);
});

backToResultsBtn.addEventListener("click", () => {
  hide(reviewEl); show(resultsEl);
});

// Retry only incorrect questions
retryBtn.addEventListener("click", () => {
  startNewQuiz(incorrect);
});
retryFromReviewBtn.addEventListener("click", () => {
  startNewQuiz(incorrect);
});

function renderReviewList(){
  reviewList.innerHTML = "";
  if (!incorrect.length) {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = "<em>No incorrect questions 🎉</em>";
    reviewList.appendChild(div);
    return;
  }

  incorrect.forEach((q) => {
    const div = document.createElement("div");
    div.className = "review-item";
    const correctText = q.answers[q.correct];

    const qEl = document.createElement("p");
    qEl.className = "review-q";
    qEl.textContent = q.question;

    const aEl = document.createElement("p");
    aEl.className = "review-a";
    aEl.innerHTML = `<strong>Correct:</strong> ${correctText}`;

    div.appendChild(qEl);
    div.appendChild(aEl);
    reviewList.appendChild(div);
  });
}

// Theme + loading
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
themeToggle.addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") { document.body.classList.add("dark"); themeToggle.textContent = "🌞"; }
  setTimeout(() => { loadingScreen && (loadingScreen.style.display = "none"); }, 800);
  if (!allQuestions.length) allQuestions = getQuestionsArray();
});
