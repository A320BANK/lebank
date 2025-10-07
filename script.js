// ===== GLOBALS =====
const modeSelect = document.getElementById("modeSelect");
const setupEl = document.getElementById("setup");
const quizEl = document.getElementById("quiz");
const resultsEl = document.getElementById("results");
const reviewEl = document.getElementById("review");
const searchEl = document.getElementById("search");
const loadingScreen = document.getElementById("loading-screen");

const startQuizBtn = document.getElementById("startQuizBtn");
const numQuestionsInput = document.getElementById("numQuestions");
const numQuestionsLabel = document.getElementById("numQuestionsLabel");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const mainMenuBtn = document.getElementById("mainMenuBtn");
const mainMenuBtn2 = document.getElementById("mainMenuBtn2");
const playAgainBtn = document.getElementById("playAgainBtn");
const reviewBtn = document.getElementById("reviewBtn");
const restartIncorrectBtn = document.getElementById("restartIncorrectBtn");
const backToMenuFromSearch = document.getElementById("backToMenuFromSearch");
const searchInput = document.getElementById("searchInput");
const searchList = document.getElementById("searchList");
let categoryButtonsContainer = null;

let allQuestions = typeof questions !== "undefined" ? questions.slice() : [];
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let examMode = false;
let incorrectQs = [];
let timerInterval;
let timeRemaining = 0;

// ===== HELPERS =====
const hide = el => el?.classList.add("hidden");
const show = el => el?.classList.remove("hidden");
function hideAll() {
  [modeSelect, setupEl, quizEl, resultsEl, reviewEl, searchEl].forEach(hide);
}
function getQuestionsArray() {
  return typeof questions !== "undefined" ? questions.slice() : [];
}

// ===== MAIN MENU =====
document.getElementById("quizModeBtn").onclick = () => { hideAll(); show(setupEl); examMode = false; };
document.getElementById("examModeBtn").onclick = startExam;
document.getElementById("searchModeBtn").onclick = startSearch;

numQuestionsInput.oninput = () => numQuestionsLabel.textContent = numQuestionsInput.value;

// ===== QUIZ/EXAM FUNCTIONS =====
startQuizBtn.onclick = startQuiz;
nextBtn.onclick = nextQuestion;
prevBtn.onclick = prevQuestion;
mainMenuBtn.onclick = goToMainMenu;
mainMenuBtn2.onclick = goToMainMenu;
playAgainBtn.onclick = goToMainMenu;
backToMenuFromSearch.onclick = goToMainMenu;
reviewBtn.onclick = showReview;
restartIncorrectBtn.onclick = retryIncorrect;

function startQuiz() {
  hideAll();
  show(quizEl);
  allQuestions = getQuestionsArray();
  quizQuestions = shuffle(allQuestions).slice(0, +numQuestionsInput.value);
  startQuizRun();
}
function startExam() {
  hideAll(); show(quizEl); examMode = true;
  allQuestions = getQuestionsArray();
  quizQuestions = shuffle(allQuestions).slice(0, 100);
  timeRemaining = 3 * 60 * 60; // 3 hours
  startExamTimer();
  startQuizRun();
}
function startQuizRun() {
  currentIndex = 0;
  score = 0;
  incorrectQs = [];
  renderQuestion();
}
function renderQuestion() {
  const q = quizQuestions[currentIndex];
  if (!q) return;
  progressText.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  scoreText.textContent = `Score: ${score}`;
  questionText.textContent = q.question;
  answersContainer.innerHTML = "";
  q.answers.forEach((a, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = a;
    btn.onclick = () => selectAnswer(i);
    answersContainer.appendChild(btn);
  });
}
function selectAnswer(i) {
  const q = quizQuestions[currentIndex];
  const correct = q.correct;
  if (!examMode) {
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === correct) b.classList.add("correct");
      else if (idx === i) b.classList.add("wrong");
    });
  }
  if (i === correct) score++;
  else incorrectQs.push(q);
  if (!examMode) scoreText.textContent = `Score: ${score}`;
}
function nextQuestion() {
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else endQuiz();
}
function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}
function endQuiz() {
  hideAll(); show(resultsEl);
  const pct = Math.round((score / quizQuestions.length) * 100);
  const passed = pct >= 75;
  document.getElementById("finalScore").textContent = `${score} / ${quizQuestions.length} (${pct}%)`;
  const badge = document.getElementById("resultBadge");
  badge.innerHTML = `<span class="result-badge ${passed ? "result-pass" : "result-fail"}">${passed ? "PASS" : "FAIL"}</span>`;
  stopExamTimer();
}
function startExamTimer() {
  show(timerEl);
  updateTimer();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimer();
    if (timeRemaining <= 0) { clearInterval(timerInterval); endQuiz(); }
  }, 1000);
}
function stopExamTimer() { clearInterval(timerInterval); hide(timerEl); }
function updateTimer() {
  const h = Math.floor(timeRemaining / 3600);
  const m = Math.floor((timeRemaining % 3600) / 60);
  const s = timeRemaining % 60;
  timerEl.textContent = `${h}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
}
function goToMainMenu() { stopExamTimer(); hideAll(); show(modeSelect); }

// ===== REVIEW MODE =====
function showReview() {
  hideAll(); show(reviewEl);
  const list = document.getElementById("reviewList");
  list.innerHTML = "";
  incorrectQs.forEach(q => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `<p class="review-q">${q.question}</p><p class="review-a">Correct: ${q.answers[q.correct]}</p>`;
    list.appendChild(div);
  });
}
function retryIncorrect() {
  if (!incorrectQs.length) { goToMainMenu(); return; }
  quizQuestions = incorrectQs.slice();
  incorrectQs = [];
  currentIndex = 0;
  score = 0;
  hideAll(); show(quizEl);
  renderQuestion();
}

// ===== SEARCH MODE =====
function startSearch() {
  allQuestions = getQuestionsArray();
  hideAll(); show(searchEl);

  searchInput.value = "";
  searchInput.focus();

  const controls = document.querySelector(".search-controls");
  if (!categoryButtonsContainer) {
    categoryButtonsContainer = document.createElement("div");
    categoryButtonsContainer.className = "mode-buttons";
    controls.appendChild(categoryButtonsContainer);
  }

  const categories = Array.from(new Set(allQuestions.map(q => q.category || "Uncategorised")));
  categoryButtonsContainer.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.className = "secondary active-cat";
  allBtn.onclick = () => { highlightCategory(allBtn); renderSearch(allQuestions); };
  categoryButtonsContainer.appendChild(allBtn);

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "secondary";
    btn.onclick = () => {
      highlightCategory(btn);
      renderSearch(allQuestions.filter(q => (q.category || "Uncategorised") === cat));
    };
    categoryButtonsContainer.appendChild(btn);
  });

  renderSearch(allQuestions);
}
function highlightCategory(activeBtn) {
  document.querySelectorAll(".mode-buttons button.secondary").forEach(b => b.classList.remove("active-cat"));
  activeBtn.classList.add("active-cat");
}
function renderSearch(list) {
  searchList.innerHTML = "";
  if (!list.length) {
    searchList.innerHTML = "<p style='opacity:.7'>No questions found.</p>";
    return;
  }
  list.forEach((q, i) => {
    const item = document.createElement("div");
    item.className = "search-item";
    item.innerHTML = `<p class="q">${q.category ? `[${q.category}] ` : ""}${i + 1}. ${q.question}</p>`;
    const ans = document.createElement("div");
    ans.className = "search-answers";
    q.answers.forEach((a, ix) => {
      const opt = document.createElement("div");
      opt.className = "opt";
      opt.textContent = a;
      if (ix === q.correct) opt.classList.add("correct");
      ans.appendChild(opt);
    });
    item.appendChild(ans);
    item.onclick = () => item.classList.toggle("open");
    searchList.appendChild(item);
  });
}
searchInput.oninput = () => {
  const t = searchInput.value.toLowerCase();
  const activeCatBtn = document.querySelector(".mode-buttons button.active-cat");
  const activeCategory = activeCatBtn ? activeCatBtn.textContent : "All";
  let filtered = allQuestions.filter(
    q => q.question.toLowerCase().includes(t) || q.answers.some(a => a.toLowerCase().includes(t))
  );
  if (activeCategory !== "All") {
    filtered = filtered.filter(q => (q.category || "Uncategorised") === activeCategory);
  }
  renderSearch(filtered);
};

// ===== UTILITIES =====
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
