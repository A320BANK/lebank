// ==========================
// GLOBAL ELEMENTS
// ==========================
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

const navigatorContainer = document.getElementById("navigatorContainer");

// ==========================
// GLOBAL STATE
// ==========================
let allQuestions = typeof questions !== "undefined" ? questions.slice() : [];
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let examMode = false;
let incorrectQs = [];
let flaggedQs = new Set();
let timerInterval;
let timeRemaining = 0;
let hints = {}; // {questionIndex: ["hint1", "hint2"]}

// ==========================
// BASIC HELPERS
// ==========================
const hide = el => el?.classList.add("hidden");
const show = el => el?.classList.remove("hidden");
function hideAll() { [modeSelect, setupEl, quizEl, resultsEl, reviewEl, searchEl].forEach(hide); }
function getQuestionsArray() { return typeof questions !== "undefined" ? questions.slice() : []; }
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ==========================
// MENU BUTTONS
// ==========================
document.getElementById("quizModeBtn").onclick = () => { hideAll(); show(setupEl); examMode = false; };
document.getElementById("examModeBtn").onclick = startExam;
document.getElementById("searchModeBtn").onclick = startSearch;

numQuestionsInput.oninput = () => numQuestionsLabel.textContent = numQuestionsInput.value;

// ==========================
// QUIZ / EXAM LOGIC
// ==========================
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
  hideAll(); show(quizEl);
  examMode = false;
  allQuestions = getQuestionsArray();
  quizQuestions = shuffle(allQuestions).slice(0, +numQuestionsInput.value);
  startQuizRun();
}
function startExam() {
  hideAll(); show(quizEl);
  examMode = true;
  allQuestions = getQuestionsArray();
  quizQuestions = shuffle(allQuestions).slice(0, 100);
  timeRemaining = 3 * 60 * 60;
  startExamTimer();
  startQuizRun();
}
function startQuizRun() {
  currentIndex = 0;
  score = 0;
  incorrectQs = [];
  flaggedQs.clear();
  renderQuestion();
  renderNavigator();
}
function renderQuestion() {
  const q = quizQuestions[currentIndex];
  if (!q) return;
  progressText.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  scoreText.textContent = examMode ? "" : `Score: ${score}`;
  questionText.textContent = q.question;
  answersContainer.innerHTML = "";
  q.answers.forEach((a, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = a;
    btn.onclick = () => selectAnswer(i);
    answersContainer.appendChild(btn);
  });

  // Flag + remaining indicator + hint
  const flagSection = document.createElement("div");
  flagSection.style.textAlign = "center";
  flagSection.style.marginTop = "12px";

  const flagBtn = document.createElement("button");
  flagBtn.textContent = flaggedQs.has(currentIndex) ? "🚩 Unflag Question" : "Flag Question";
  flagBtn.className = "secondary";
  flagBtn.onclick = () => toggleFlag(flagBtn);

  const left = quizQuestions.length - currentIndex - 1;
  const leftTxt = document.createElement("p");
  leftTxt.style.marginTop = "8px";
  leftTxt.style.opacity = "0.8";
  leftTxt.textContent = `${left} question${left === 1 ? "" : "s"} left`;

  const hintBox = document.createElement("div");
  hintBox.innerHTML = `
    <textarea id="hintInput" placeholder="Add a hint/comment..." style="width:100%;padding:8px;margin-top:8px;border-radius:8px;background:rgba(255,255,255,.05);color:inherit;border:1px solid rgba(255,255,255,.15);"></textarea>
    <button id="saveHintBtn" class="secondary" style="margin-top:6px;">💬 Save Hint</button>
  `;

  flagSection.appendChild(flagBtn);
  flagSection.appendChild(leftTxt);
  flagSection.appendChild(hintBox);
  answersContainer.appendChild(flagSection);

  document.getElementById("saveHintBtn").onclick = saveHint;
}
function toggleFlag(btn) {
  if (flaggedQs.has(currentIndex)) flaggedQs.delete(currentIndex);
  else flaggedQs.add(currentIndex);
  btn.textContent = flaggedQs.has(currentIndex) ? "🚩 Unflag Question" : "Flag Question";
  renderNavigator();
}
function saveHint() {
  const text = document.getElementById("hintInput").value.trim();
  if (!text) return;
  if (!hints[currentIndex]) hints[currentIndex] = [];
  hints[currentIndex].push(text);
  alert("Hint saved!");
  document.getElementById("hintInput").value = "";
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
  renderNavigator();
}
function nextQuestion() {
  if (currentIndex < quizQuestions.length - 1) { currentIndex++; renderQuestion(); renderNavigator(); }
  else endQuiz();
}
function prevQuestion() {
  if (currentIndex > 0) { currentIndex--; renderQuestion(); renderNavigator(); }
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

// ==========================
// NAVIGATOR DOTS
// ==========================
function renderNavigator() {
  navigatorContainer.innerHTML = "";
  quizQuestions.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "nav-dot";
    dot.textContent = i + 1;
    if (i === currentIndex) dot.classList.add("active");
    if (flaggedQs.has(i)) dot.classList.add("flagged");
    dot.onclick = () => { currentIndex = i; renderQuestion(); renderNavigator(); };
    navigatorContainer.appendChild(dot);
  });
}

// ==========================
// TIMER (EXAM)
// ==========================
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

// ==========================
// REVIEW + RETRY
// ==========================
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
  renderNavigator();
}
function goToMainMenu() { stopExamTimer(); hideAll(); show(modeSelect); }

// ==========================
// SEARCH MODE
// ==========================
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
  if (!list.length) { searchList.innerHTML = "<p style='opacity:.7'>No questions found.</p>"; return; }
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
  if (activeCategory !== "All") filtered = filtered.filter(q => (q.category || "Uncategorised") === activeCategory);
  renderSearch(filtered);
};
