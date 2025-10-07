const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

// Mode picker
const modeSelect = document.getElementById("modeSelect");
const chooseQuiz = document.getElementById("chooseQuiz");
const chooseExam = document.getElementById("chooseExam");

// Quiz setup (quiz mode only)
const setupEl = document.getElementById("setup");
const numRange = document.getElementById("numQuestions");
const numLabel = document.getElementById("numLabel");
const startBtn = document.getElementById("startBtn");

// Play UI
const quizEl = document.getElementById("quiz");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");

// Results + review
const resultsEl = document.getElementById("results");
const finalTitle = document.getElementById("finalTitle");
const finalScore = document.getElementById("finalScore");
const playAgainBtn = document.getElementById("playAgainBtn");
const reviewBtn = document.getElementById("reviewBtn");
const retryBtn = document.getElementById("retryBtn");

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

// ----- State -----
let selected = [];
let idx = 0;
let score = 0;
let locked = false;
let incorrect = [];
let userAnswers = []; // for exam mode (stores chosen index)
let MODE = "quiz";    // "quiz" or "exam"
const PASS_MARK = 75;

// utils
function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]] } return arr; }
function sample(arr,n){ arr = arr.slice(); shuffle(arr); return arr.slice(0,Math.min(n,arr.length)); }

// init
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") { document.body.classList.add("dark"); themeToggle.textContent = "🌞"; }
  setTimeout(() => { loadingScreen && (loadingScreen.style.display = "none"); }, 700);

  // If questions weren’t ready at parse time, grab them now
  if (!allQuestions.length) allQuestions = getQuestionsArray();

  // Dynamically set slider max = total questions
  const total = allQuestions.length || 100;
  numRange.max = String(total);
  if (+numRange.value > total) numRange.value = Math.min(10, total);
  numLabel.textContent = numRange.value;
});

// slider label
numRange.addEventListener("input", () => { numLabel.textContent = numRange.value; });

// mode selection
chooseQuiz.addEventListener("click", () => {
  MODE = "quiz";
  hide(modeSelect);
  show(setupEl);
  scoreEl.textContent = "Score: 0";
});

chooseExam.addEventListener("click", () => {
  MODE = "exam";
  startExam();
});

// start quiz (quiz mode)
startBtn.addEventListener("click", () => {
  const n = parseInt(numRange.value,10);
  startQuiz(sample(allQuestions, n));
});

// common starters
function startQuiz(questionSet){
  selected = questionSet.slice();
  idx = 0; score = 0; incorrect = []; userAnswers = [];
  hide(modeSelect); hide(resultsEl); hide(reviewEl); hide(setupEl); show(quizEl);
  scoreEl.textContent = `Score: ${score}`;
  renderQuestionQuiz();
}

function startExam(){
  // fixed 100 (or all if fewer)
  const n = Math.min(100, allQuestions.length);
  selected = sample(allQuestions, n);
  idx = 0; score = 0; incorrect = []; userAnswers = new Array(n).fill(null);
  hide(modeSelect); hide(resultsEl); hide(reviewEl); hide(setupEl); show(quizEl);
  scoreEl.textContent = `Score: —`; // hide running score in exam
  renderQuestionExam();
}

// ---------- QUIZ MODE (instant feedback) ----------
function renderQuestionQuiz(){
  const q = selected[idx];
  const total = selected.length;
  progressEl.textContent = `Question ${idx+1} of ${total}`;
  questionText.textContent = q.question;
  nextBtn.disabled = true;
  locked = false;

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
      [...answersContainer.children].forEach(b => b.disabled = true);
      if (opt.correct){
        btn.classList.add("correct"); score++; scoreEl.textContent = `Score: ${score}`;
      }else{
        btn.classList.add("wrong");
        [...answersContainer.children].find(b => b.dataset.correct === "true")?.classList.add("correct");
        incorrect.push(q);
      }
      nextBtn.disabled = false;
      nextBtn.textContent = (idx === total-1) ? "Finish" : "Next ➜";
    });
    answersContainer.appendChild(btn);
  });

  nextBtn.onclick = () => {
    if (idx < total-1){ idx++; renderQuestionQuiz(); }
    else { finishQuizOrExam("quiz"); }
  };
}

// ---------- EXAM MODE (no instant feedback) ----------
function renderQuestionExam(){
  const q = selected[idx];
  const total = selected.length;
  progressEl.textContent = `Question ${idx+1} of ${total}`;
  questionText.textContent = q.question;
  nextBtn.disabled = (userAnswers[idx] === null); // must select to proceed
  locked = false;

  const options = q.answers.map((text, i) => ({ text, i, correct: i === q.correct }));
  shuffle(options);

  answersContainer.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt.text;

    // highlight selection (not correctness)
    if (userAnswers[idx] === opt.i) btn.classList.add("correct"); // just a visual, not correctness indicator

    btn.addEventListener("click", () => {
      // store chosen index relative to original answers
      userAnswers[idx] = opt.i;
      nextBtn.disabled = false;
      // simple selection highlight
      [...answersContainer.children].forEach(b => b.classList.remove("correct", "wrong"));
      btn.classList.add("correct");
    });

    answersContainer.appendChild(btn);
  });

  nextBtn.textContent = (idx === total-1) ? "Finish" : "Next ➜";
  nextBtn.onclick = () => {
    if (idx < total-1){ idx++; renderQuestionExam(); }
    else { finishQuizOrExam("exam"); }
  };
}

// ---------- FINISH ----------
function finishQuizOrExam(mode){
  hide(quizEl); show(resultsEl);

  // compute score (quiz already tracked; exam must evaluate now)
  if (mode === "exam"){
    score = 0; incorrect = [];
    selected.forEach((q, i) => {
      const chosen = userAnswers[i];
      if (chosen === q.correct) score++;
      else incorrect.push(q);
    });
  }

  const pct = Math.round((score / selected.length) * 100);
  const pass = pct >= PASS_MARK;
  finalTitle.textContent = mode === "exam" ? "Exam complete!" : "Quiz complete!";
  finalScore.innerHTML = `
    You scored <strong>${score}</strong> / <strong>${selected.length}</strong>
    (<strong>${pct}%</strong>)<br />
    <span class="result-badge ${pass ? "result-pass" : "result-fail"}">
      ${pass ? "PASS" : "FAIL"} — Pass mark ${PASS_MARK}%
    </span>
  `;

  if (incorrect.length){
    reviewBtn.classList.remove("hidden");
    retryBtn.classList.remove("hidden");
  } else {
    reviewBtn.classList.add("hidden");
    retryBtn.classList.add("hidden");
  }
}

// ----- Review / Retry incorrect (works for both modes) -----
reviewBtn.addEventListener("click", () => {
  renderReviewList();
  hide(resultsEl); show(reviewEl);
});

function renderReviewList(){
  reviewList.innerHTML = "";
  if (!incorrect.length){
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = "<em>No incorrect questions 🎉</em>";
    reviewList.appendChild(div);
    return;
  }
  incorrect.forEach(q => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <p class="review-q">${q.question}</p>
      <p class="review-a"><strong>Correct:</strong> ${q.answers[q.correct]}</p>
    `;
    reviewList.appendChild(div);
  });
}

retryBtn.addEventListener("click", () => startQuiz(incorrect));            // retry missed with feedback
retryFromReviewBtn.addEventListener("click", () => startQuiz(incorrect));
backToResultsBtn.addEventListener("click", () => { hide(reviewEl); show(resultsEl); });

// back to main menu
playAgainBtn.addEventListener("click", () => {
  hide(resultsEl); hide(reviewEl); show(modeSelect);
});

// Theme toggle
function toggleTheme(){
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
themeToggle.addEventListener("click", toggleTheme);
