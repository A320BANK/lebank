const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

// Mode picker
const modeSelect = document.getElementById("modeSelect");
const chooseQuiz  = document.getElementById("chooseQuiz");
const chooseExam  = document.getElementById("chooseExam");
const chooseSearch= document.getElementById("chooseSearch");

// Quiz setup (quiz only)
const setupEl   = document.getElementById("setup");
const numRange  = document.getElementById("numQuestions");
const numLabel  = document.getElementById("numLabel");
const startBtn  = document.getElementById("startBtn");

// Play UI
const quizEl = document.getElementById("quiz");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

// Results + review
const resultsEl = document.getElementById("results");
const finalTitle = document.getElementById("finalTitle");
const finalScore = document.getElementById("finalScore");
const playAgainBtn = document.getElementById("playAgainBtn");
const reviewBtn = document.getElementById("reviewBtn");
const retryBtn  = document.getElementById("retryBtn");

// Review section
const reviewEl = document.getElementById("review");
const reviewList = document.getElementById("reviewList");
const backToResultsBtn = document.getElementById("backToResultsBtn");
const retryFromReviewBtn = document.getElementById("retryFromReviewBtn");

// Search section
const searchEl = document.getElementById("search");
const searchInput = document.getElementById("searchInput");
const searchList = document.getElementById("searchList");
const backToMenuFromSearch = document.getElementById("backToMenuFromSearch");

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
let userAnswers = []; // chosen index per question (null if unanswered)
let MODE = "quiz";    // "quiz" or "exam"
const PASS_MARK = 75;

let examTimer = null;
let examRemaining = 0; // seconds

// utils
function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]] } return arr; }
function sample(arr,n){ arr = arr.slice(); shuffle(arr); return arr.slice(0,Math.min(n,arr.length)); }
function fmtTime(s){ const h=Math.floor(s/3600), m=Math.floor((s%3600)/60), sec=s%60; return `${String(h).padStart(1,"0")}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`; }
function recomputeScoreFromUserAnswers(){ return userAnswers.reduce((acc,ans,i)=> acc + (ans===selected[i]?.correct ? 1 : 0), 0); }

// init
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") { document.body.classList.add("dark"); themeToggle.textContent = "🌞"; }
  setTimeout(() => { loadingScreen && (loadingScreen.style.display = "none"); }, 700);

  // If questions weren’t ready at parse time, grab them now
  if (!allQuestions.length) allQuestions = getQuestionsArray();

  // slider max = total questions
  const total = allQuestions.length || 100;
  numRange.max = String(total);
  if (+numRange.value > total) numRange.value = Math.min(10, total);
  numLabel.textContent = numRange.value;

  // Keyboard nav
  window.addEventListener("keydown", (e) => {
    if (quizEl.classList.contains("hidden")) return;
    if (e.key === "ArrowRight") { e.preventDefault(); nextBtn.click(); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); prevBtn.click(); }
  });
});

// slider label
numRange.addEventListener("input", () => { numLabel.textContent = numRange.value; });

// mode selection
chooseQuiz.addEventListener("click", () => { MODE = "quiz"; hide(modeSelect); show(setupEl); scoreEl.textContent = "Score: 0"; timerEl.classList.add("hidden"); });
chooseExam.addEventListener("click", () => { MODE = "exam"; startExam(); });
chooseSearch.addEventListener("click", () => { startSearch(); });

// start quiz (quiz mode)
startBtn.addEventListener("click", () => {
  const n = parseInt(numRange.value,10);
  startQuiz(sample(allQuestions, n));
});

// common starters
function startQuiz(questionSet){
  selected = questionSet.slice();
  idx = 0; userAnswers = new Array(selected.length).fill(null);
  score = 0; incorrect = [];
  hide(modeSelect); hide(resultsEl); hide(reviewEl); hide(setupEl); hide(searchEl); show(quizEl);
  scoreEl.textContent = `Score: 0`;
  timerEl.classList.add("hidden");
  renderCurrent();
}

function startExam(){
  // fixed 100 (or all if fewer)
  const n = Math.min(100, allQuestions.length);
  selected = sample(allQuestions, n);
  idx = 0; userAnswers = new Array(selected.length).fill(null);
  score = 0; incorrect = [];
  hide(modeSelect); hide(resultsEl); hide(reviewEl); hide(setupEl); hide(searchEl); show(quizEl);
  scoreEl.textContent = `Score: —`; // no running score
  // 3h timer
  examRemaining = 3 * 60 * 60; // seconds
  timerEl.textContent = fmtTime(examRemaining);
  timerEl.classList.remove("hidden");
  if (examTimer) clearInterval(examTimer);
  examTimer = setInterval(() => {
    examRemaining--;
    timerEl.textContent = fmtTime(examRemaining);
    if (examRemaining <= 0) {
      clearInterval(examTimer);
      finishQuizOrExam("exam"); // auto-submit
    }
  }, 1000);

  renderCurrent();
}

// unified renderer: behaves per MODE
function renderCurrent(){
  const q = selected[idx];
  const total = selected.length;

  progressEl.textContent = `Question ${idx+1} of ${total}`;
  questionText.textContent = q.question;

  answersContainer.innerHTML = "";
  // keep original order; if you want shuffle, call shuffle(q.answers.map(...))
  const options = q.answers.map((text, i) => ({ text, i, correct: i === q.correct }));

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt.text;

    // If already answered, show selection; in quiz mode also show correctness styling
    if (userAnswers[idx] !== null) {
      if (userAnswers[idx] === opt.i) {
        btn.classList.add(MODE === "quiz" ? (opt.correct ? "correct" : "wrong") : "correct"); // exam: just a selection tint
      }
      if (MODE === "quiz") {
        // also show correct answer highlight
        if (opt.correct) btn.classList.add("correct");
        btn.disabled = true; // lock after answered (can change by clicking another button)
      }
    }

    btn.addEventListener("click", () => {
      userAnswers[idx] = opt.i;
      if (MODE === "quiz") {
        // instant feedback
        [...answersContainer.children].forEach(b => b.disabled = true);
        // mark chosen
        btn.classList.add(opt.correct ? "correct" : "wrong");
        // show correct
        if (!opt.correct) {
          [...answersContainer.children].forEach(b => {
            if (b.textContent === q.answers[q.correct]) b.classList.add("correct");
          });
        }
        // live score
        score = recomputeScoreFromUserAnswers();
        scoreEl.textContent = `Score: ${score}`;
      } else {
        // exam: just selection highlight (no correctness)
        [...answersContainer.children].forEach(b => b.classList.remove("correct","wrong"));
        btn.classList.add("correct");
      }
      updateNavButtons();
    });

    answersContainer.appendChild(btn);
  });

  updateNavButtons();
}

function updateNavButtons(){
  const total = selected.length;
  prevBtn.disabled = (idx === 0);
  // In exam, require an answer to advance
  nextBtn.disabled = (MODE === "exam" && userAnswers[idx] === null);
  nextBtn.textContent = (idx === total-1) ? "Finish" : "Next ➜";
}

// navigation
prevBtn.addEventListener("click", () => {
  if (idx > 0) { idx--; renderCurrent(); }
});
nextBtn.addEventListener("click", () => {
  const total = selected.length;
  if (idx < total-1) { idx++; renderCurrent(); }
  else { finishQuizOrExam(MODE); }
});

// ---------- FINISH ----------
function finishQuizOrExam(mode){
  show(resultsEl); hide(quizEl); hide(reviewEl);
  if (mode === "exam" && examTimer) { clearInterval(examTimer); examTimer = null; }

  score = recomputeScoreFromUserAnswers();
  incorrect = [];
  selected.forEach((q,i)=> { if (userAnswers[i] !== q.correct) incorrect.push(q); });

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

  if (incorrect.length){ reviewBtn.classList.remove("hidden"); retryBtn.classList.remove("hidden"); }
  else { reviewBtn.classList.add("hidden"); retryBtn.classList.add("hidden"); }
}

// ----- Review / Retry incorrect -----
reviewBtn.addEventListener("click", () => {
  renderReviewList(); hide(resultsEl); show(reviewEl);
});
retryBtn.addEventListener("click", () => startQuiz(incorrect));
retryFromReviewBtn.addEventListener("click", () => startQuiz(incorrect));
backToResultsBtn.addEventListener("click", () => { hide(reviewEl); show(resultsEl); });

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

// ----- SEARCH MODE -----
function startSearch(){
  hide(modeSelect); hide(setupEl); hide(quizEl); hide(resultsEl); hide(reviewEl); show(searchEl);
  renderSearchList(allQuestions);
  searchInput.value = "";
  searchInput.focus();
}
function renderSearchList(list){
  searchList.innerHTML = "";
  list.forEach((q, i) => {
    const item = document.createElement("div");
    item.className = "search-item";
    item.innerHTML = `<p class="q">${i+1}. ${q.question}</p>
                      <p class="a"><strong>Answer:</strong> ${q.answers[q.correct]}</p>`;
    item.addEventListener("click", () => item.classList.toggle("open"));
    searchList.appendChild(item);
  });
}
searchInput.addEventListener("input", () => {
  const t = searchInput.value.toLowerCase();
  const filtered = allQuestions.filter(q =>
    q.question.toLowerCase().includes(t) ||
    q.answers.some(a => a.toLowerCase().includes(t))
  );
  renderSearchList(filtered);
});
backToMenuFromSearch.addEventListener("click", () => { hide(searchEl); show(modeSelect); });

// Theme toggle
function toggleTheme(){
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
themeToggle.addEventListener("click", toggleTheme);
