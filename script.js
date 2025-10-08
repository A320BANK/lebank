// ==========================
// ELEMENTS
// ==========================
const modeSelect = document.getElementById("modeSelect");
const setupEl = document.getElementById("setup");
const quizEl = document.getElementById("quiz");
const resultsEl = document.getElementById("results");
const reviewEl = document.getElementById("review");
const searchEl = document.getElementById("search");

const quizCategorySel = document.getElementById("quizCategory");
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
const playAgainBtn = document.getElementById("playAgainBtn");
const reviewBtn = document.getElementById("reviewBtn");
const restartIncorrectBtn = document.getElementById("restartIncorrectBtn");
const backToMenuFromSearch = document.getElementById("backToMenuFromSearch");

const finalScoreEl = document.getElementById("finalScore");
const resultBadge = document.getElementById("resultBadge");

const navigatorContainer = document.getElementById("navigatorContainer");
const remainingText = document.getElementById("remainingText");
const flagBtn = document.getElementById("flagBtn");

const searchInput = document.getElementById("searchInput");
const searchList = document.getElementById("searchList");
let categoryButtonsContainer = null;

// ==========================
// STATE
// ==========================
let allQuestions = typeof questions !== "undefined" ? questions.slice() : [];
let quizQuestions = [];
let userAnswers = []; // per-run chosen index or null
let currentIndex = 0;
let score = 0;
let examMode = false;
let incorrectQs = [];
let flaggedSet = new Set(); // indices within current run
let timerInterval;
let timeRemaining = 0;
const PASS_MARK = 75;

// ==========================
// PERSISTENT FLAGS (per user)
// ==========================
const FLAGS_KEY = "a320bank_flags_v1";

// stable id from question text
function qid(q) {
  const s = (q?.question || "").toString();
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
  return "q_" + (h >>> 0).toString(16);
}

function loadPersistentFlags() {
  try {
    const raw = localStorage.getItem(FLAGS_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}
function savePersistentFlags(setOfIds) {
  localStorage.setItem(FLAGS_KEY, JSON.stringify(Array.from(setOfIds)));
}
let flaggedIdSet = loadPersistentFlags(); // persists across sessions

// ==========================
// HELPERS
// ==========================
const hide = el => el?.classList.add("hidden");
const show = el => el?.classList.remove("hidden");
function hideAll(){ [modeSelect, setupEl, quizEl, resultsEl, reviewEl, searchEl].forEach(hide); }
function getQuestionsArray(){ return typeof questions !== "undefined" ? questions.slice() : []; }
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function getAllCategories(list){ const set=new Set(list.map(q=>q.category||"Uncategorised")); return ["All", ...Array.from(set).sort()]; }

// ==========================
// MENU
// ==========================
document.getElementById("quizModeBtn").onclick = () => {
  hideAll(); show(setupEl); examMode = false;

  // ensure questions are loaded
  allQuestions = getQuestionsArray();

  // populate categories each time setup opens (in case file changed)
  const cats = getAllCategories(allQuestions);
  quizCategorySel.innerHTML = "";
  cats.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    quizCategorySel.appendChild(opt);
  });

  // set slider max based on current category
  const applyMax = () => {
    const cat = quizCategorySel.value;
    const pool = (cat === "All")
      ? allQuestions
      : allQuestions.filter(q => (q.category||"Uncategorised") === cat);
    numQuestionsInput.max = String(Math.max(1, pool.length));
    if (+numQuestionsInput.value > +numQuestionsInput.max) {
      numQuestionsInput.value = numQuestionsInput.max;
      numQuestionsLabel.textContent = numQuestionsInput.value;
    }
  };

  applyMax();
  quizCategorySel.onchange = applyMax;
};

document.getElementById("examModeBtn").onclick = startExam;
document.getElementById("searchModeBtn").onclick = startSearch;

numQuestionsInput.oninput = () => numQuestionsLabel.textContent = numQuestionsInput.value;

// ==========================
// QUIZ / EXAM BUTTONS
// ==========================
startQuizBtn.onclick = startQuiz;
nextBtn.onclick = nextQuestion;
prevBtn.onclick = prevQuestion;
mainMenuBtn.onclick = goToMainMenu;
playAgainBtn.onclick = goToMainMenu;
backToMenuFromSearch.onclick = goToMainMenu;
reviewBtn.onclick = showReview;
restartIncorrectBtn.onclick = retryIncorrect;

// ==========================
// STARTERS
// ==========================
function startQuiz(){
  hideAll(); show(quizEl);
  examMode = false;

  allQuestions = getQuestionsArray();
  const chosenCat = quizCategorySel.value || "All";
  const pool = (chosenCat === "All")
    ? allQuestions
    : allQuestions.filter(q => (q.category || "Uncategorised") === chosenCat);

  quizQuestions = shuffle(pool).slice(0, +numQuestionsInput.value);
  userAnswers = new Array(quizQuestions.length).fill(null);
  flaggedSet.clear();

  // Map persisted flags into this run
  quizQuestions.forEach((q, idx) => {
    if (flaggedIdSet.has(qid(q))) flaggedSet.add(idx);
  });

  score = 0; currentIndex = 0; incorrectQs = [];
  scoreText.textContent = "Score: 0";
  timerEl.classList.add("hidden");
  renderQuestion();
  renderNavigator();
  updateStatusBar();
}

function startExam(){
  hideAll(); show(quizEl);
  examMode = true;
  allQuestions = getQuestionsArray();
  quizQuestions = shuffle(allQuestions).slice(0, 100);
  userAnswers = new Array(quizQuestions.length).fill(null);
  flaggedSet.clear();

  // Map persisted flags into this run
  quizQuestions.forEach((q, idx) => {
    if (flaggedIdSet.has(qid(q))) flaggedSet.add(idx);
  });

  score = 0; currentIndex = 0; incorrectQs = [];
  scoreText.textContent = ""; // no running score in exam
  timeRemaining = 3 * 60 * 60;
  timerEl.classList.remove("hidden");
  startExamTimer();
  renderQuestion();
  renderNavigator();
  updateStatusBar();
}

// ==========================
// RENDER QUESTION
// ==========================
function renderQuestion(){
  const q = quizQuestions[currentIndex];
  progressText.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  questionText.textContent = q.question;

  answersContainer.innerHTML = "";
  q.answers.forEach((a, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = a;

    // reflect previous selection if any
    if (userAnswers[currentIndex] !== null) {
      if (!examMode) {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add("correct");
        if (i === userAnswers[currentIndex] && i !== q.correct) btn.classList.add("wrong");
      } else {
        // Exam: show selected in blue
        if (i === userAnswers[currentIndex]) btn.classList.add("selected");
      }
    }

    btn.onclick = () => selectAnswer(i);
    answersContainer.appendChild(btn);
  });

  updateNavButtons();
  updateStatusBar();
}

// ==========================
// SELECT ANSWER
// ==========================
function selectAnswer(i) {
  const q = quizQuestions[currentIndex];
  userAnswers[currentIndex] = i;

  if (!examMode) {
    // lock and show correctness immediately
    const buttons = answersContainer.querySelectorAll(".answer-btn");
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.correct) b.classList.add("correct");
      else if (idx === i) b.classList.add("wrong");
    });

    const isCorrect = (i === q.correct);
    if (isCorrect) score++;
    else incorrectQs.push(q);
    scoreText.textContent = `Score: ${score}`;

    renderNavigator();
    updateStatusBar();
    updateNavButtons();

    // ✅ NEW FEATURE: Auto-advance after 2s if correct
    if (isCorrect) {
      setTimeout(() => {
        if (currentIndex < quizQuestions.length - 1) {
          currentIndex++;
          renderQuestion();
          renderNavigator();
        } else {
          endRun(); // if it's the last question, end quiz
        }
      }, 2000);
    }

  } else {
    // Exam: highlight chosen in blue and allow navigation
    const buttons = answersContainer.querySelectorAll(".answer-btn");
    buttons.forEach((b, idx) => {
      b.classList.remove("selected");
      if (idx === i) b.classList.add("selected");
    });

    renderNavigator();
    updateStatusBar();
    updateNavButtons();
  }
}

// ==========================
// NAVIGATOR
// ==========================
function selectAnswer(i) {
  const q = quizQuestions[currentIndex];
  userAnswers[currentIndex] = i;

  if (!examMode) {
    // lock and show correctness immediately
    const buttons = answersContainer.querySelectorAll(".answer-btn");
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.correct) b.classList.add("correct");
      else if (idx === i) b.classList.add("wrong");
    });

    const isCorrect = (i === q.correct);
    if (isCorrect) score++;
    else incorrectQs.push(q);
    scoreText.textContent = `Score: ${score}`;

    renderNavigator();
    updateStatusBar();
    updateNavButtons();

    // ✅ NEW FEATURE: Auto-advance after 2s if correct
    if (isCorrect) {
      setTimeout(() => {
        if (currentIndex < quizQuestions.length - 1) {
          currentIndex++;
          renderQuestion();
          renderNavigator();
        } else {
          endRun(); // if it's the last question, end quiz
        }
      }, 2000);
    }

  } else {
    // Exam: highlight chosen in blue and allow navigation
    const buttons = answersContainer.querySelectorAll(".answer-btn");
    buttons.forEach((b, idx) => {
      b.classList.remove("selected");
      if (idx === i) b.classList.add("selected");
    });

    renderNavigator();
    updateStatusBar();
    updateNavButtons();
  }
}

// ==========================
// STATUS BAR (remaining + flag)
// ==========================
function updateStatusBar(){
  const answered = userAnswers.filter(v => v !== null).length;
  const left = quizQuestions.length - answered;
  remainingText.textContent = `Left: ${left}`;
  flagBtn.textContent = flaggedSet.has(currentIndex) ? "🚩 Unflag Question" : "🚩 Flag Question";
}
flagBtn.onclick = () => {
  const q = quizQuestions[currentIndex];
  const id = qid(q);

  if (flaggedSet.has(currentIndex)) {
    flaggedSet.delete(currentIndex);
    flaggedIdSet.delete(id);          // persist OFF
  } else {
    flaggedSet.add(currentIndex);
    flaggedIdSet.add(id);             // persist ON
  }

  savePersistentFlags(flaggedIdSet);   // write to localStorage
  updateStatusBar();
  renderNavigator();
};

// ==========================
// NAV BUTTONS
// ==========================
function updateNavButtons(){
  prevBtn.disabled = (currentIndex === 0);
  nextBtn.textContent = (currentIndex === quizQuestions.length - 1) ? "Finish" : "Next →";
  // In exam, require an answer before moving on
  nextBtn.disabled = (examMode && userAnswers[currentIndex] === null);
}
function nextQuestion(){
  if (currentIndex < quizQuestions.length - 1){ currentIndex++; renderQuestion(); renderNavigator(); }
  else endRun();
}
function prevQuestion(){
  if (currentIndex > 0){ currentIndex--; renderQuestion(); renderNavigator(); }
}

// ==========================
// FINISH / RESULTS
// ==========================
function endRun(){
  hideAll(); show(resultsEl);
  const total = quizQuestions.length;
  const rawScore = userAnswers.reduce((acc, ans, i) => acc + (ans === quizQuestions[i].correct ? 1 : 0), 0);
  const pct = Math.round((rawScore / total) * 100);
  const passed = pct >= PASS_MARK;

  finalScoreEl.textContent = `${rawScore} / ${total} (${pct}%)`;
  resultBadge.innerHTML = `<span class="result-badge ${passed ? "result-pass" : "result-fail"}">${passed ? "PASS" : "FAIL"}</span>`;

  incorrectQs = quizQuestions.filter((q, i) => userAnswers[i] !== q.correct);
  timerEl.classList.add("hidden");
  stopExamTimer();
}

function showReview(){
  hideAll(); show(reviewEl);
  const list = document.getElementById("reviewList");
  list.innerHTML = "";
  if (!incorrectQs.length){ list.innerHTML = "<p style='opacity:.7'>Nothing to review 🎉</p>"; return; }
  incorrectQs.forEach(q => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `<p class="review-q">${q.question}</p><p class="review-a">Correct: ${q.answers[q.correct]}</p>`;
    list.appendChild(div);
  });
}

function retryIncorrect(){
  if (!incorrectQs.length){ goToMainMenu(); return; }
  quizQuestions = incorrectQs.slice();
  userAnswers = new Array(quizQuestions.length).fill(null);
  flaggedSet.clear();

  // Map persisted flags to this retry deck
  quizQuestions.forEach((q, idx) => {
    if (flaggedIdSet.has(qid(q))) flaggedSet.add(idx);
  });

  incorrectQs = [];
  score = 0; currentIndex = 0; examMode = false;
  hideAll(); show(quizEl);
  scoreText.textContent = "Score: 0";
  renderQuestion(); renderNavigator(); updateStatusBar();
}

function goToMainMenu(){ stopExamTimer(); hideAll(); show(modeSelect); }

// ==========================
// EXAM TIMER
// ==========================
function startExamTimer(){
  updateTimer();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimer();
    if (timeRemaining <= 0){ clearInterval(timerInterval); endRun(); }
  }, 1000);
}
function stopExamTimer(){ if (timerInterval) clearInterval(timerInterval); }
function updateTimer(){
  const h = Math.floor(timeRemaining / 3600);
  const m = Math.floor((timeRemaining % 3600) / 60);
  const s = timeRemaining % 60;
  timerEl.textContent = `${h}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
}

// ==========================
// SEARCH
// ==========================
function startSearch(){
  allQuestions = getQuestionsArray();
  hideAll(); show(searchEl);

  searchInput.value = ""; searchInput.focus();

  const controls = document.querySelector(".search-controls");
  if (!categoryButtonsContainer){
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
function highlightCategory(activeBtn){
  document.querySelectorAll(".mode-buttons button.secondary").forEach(b => b.classList.remove("active-cat"));
  activeBtn.classList.add("active-cat");
}
function renderSearch(list){
  searchList.innerHTML = "";
  if (!list.length){ searchList.innerHTML = "<p style='opacity:.7'>No questions found.</p>"; return; }

  list.forEach((q, i) => {
    const item = document.createElement("div");
    item.className = "search-item";
    item.innerHTML = `<p class="q">${q.category ? `[${q.category}] ` : ""}${i + 1}. ${q.question}</p>`;

    // small persistent-flag badge
    if (flaggedIdSet.has(qid(q))) {
      const badge = document.createElement("span");
      badge.textContent = " 🚩";
      item.querySelector(".q").appendChild(badge);
    }

    const ans = document.createElement("div");
    ans.className = "search-answers";
    ans.style.gridTemplateColumns = "1fr";
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

// ==========================
// KEYBOARD SHORTCUTS
// ==========================

// Allow navigation and answer selection via keyboard
document.addEventListener("keydown", (e) => {
  // Only active in quiz/exam mode
  if (quizEl.classList.contains("hidden")) return;

  // Ignore if typing in an input
  if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

  const key = e.key.toLowerCase();

  // Navigation
  if (key === "arrowright" && !nextBtn.disabled) {
    nextQuestion();
    return;
  }
  if (key === "arrowleft" && !prevBtn.disabled) {
    prevQuestion();
    return;
  }

  // Answer selection (A/S/Z/X)
  const buttons = answersContainer.querySelectorAll(".answer-btn");
  if (!buttons.length) return;

  let index = null;
  if (key === "a") index = 0; // top-left
  if (key === "s") index = 1; // top-right
  if (key === "z") index = 2; // bottom-left
  if (key === "x") index = 3; // bottom-right

  if (index !== null && buttons[index]) {
    buttons[index].click(); // simulate click
  }

  // Optional: allow F to flag current question
  if (key === "f") {
    flagBtn.click();
  }
});
