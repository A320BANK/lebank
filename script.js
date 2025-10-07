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
const backToMainFromSetup = document.getElementById("backToMainFromSetup");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const mainMenuBtn = document.getElementById("mainMenuBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const playAgainBtn2 = document.getElementById("playAgainBtn2");
const reviewBtn = document.getElementById("reviewBtn");
const restartIncorrectBtn = document.getElementById("restartIncorrectBtn");
const backToMenuFromSearch = document.getElementById("backToMenuFromSearch");
const srsModeBtn = document.getElementById("srsModeBtn");

const finalScoreEl = document.getElementById("finalScore");
const resultBadge = document.getElementById("resultBadge");
const categoryBreakdown = document.getElementById("categoryBreakdown");

const navigatorContainer = document.getElementById("navigatorContainer");
const remainingText = document.getElementById("remainingText");
const flagBtn = document.getElementById("flagBtn");

const searchInput = document.getElementById("searchInput");
const searchList = document.getElementById("searchList");

const examBuilderList = document.getElementById("examBuilderList");
const builderTotal = document.getElementById("builderTotal");
const startCustomExamBtn = document.getElementById("startCustomExamBtn");

let categoryButtonsContainer = null;

// ==========================
// STATE
// ==========================
let allQuestions = Array.isArray(questions) ? questions.slice() : [];
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
function qid(q) {
  const s = (q?.question || "").toString();
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
  return "q_" + (h >>> 0).toString(16);
}
function loadPersistentFlags() {
  try { const raw = localStorage.getItem(FLAGS_KEY); return raw ? new Set(JSON.parse(raw)) : new Set(); }
  catch { return new Set(); }
}
function savePersistentFlags(setOfIds) {
  localStorage.setItem(FLAGS_KEY, JSON.stringify(Array.from(setOfIds)));
}
let flaggedIdSet = loadPersistentFlags();

// ==========================
// SRS (Spaced Repetition) for incorrects
// ==========================
const SRS_KEY = "a320bank_srs_v1";
// queue item: { id, nextDue: ts, stage: n }
function now() { return Date.now(); }
function srsLoad() {
  try { const raw = localStorage.getItem(SRS_KEY); return raw ? JSON.parse(raw) : []; } catch { return []; }
}
function srsSave(list) { localStorage.setItem(SRS_KEY, JSON.stringify(list)); }
function srsStagesDays(stage) {
  return [1, 3, 7][Math.min(stage, 2)];
}
function srsAddIncorrect(q) {
  const id = qid(q);
  const list = srsLoad();
  const e = list.find(x => x.id === id);
  if (!e) list.push({ id, nextDue: now() + srsStagesDays(0)*86400000, stage: 0 });
  else {
    // if already exists, keep earliest due
    e.nextDue = Math.min(e.nextDue, now() + srsStagesDays(e.stage)*86400000);
  }
  srsSave(list);
}
function srsAdvance(id, correct) {
  const list = srsLoad();
  const e = list.find(x => x.id === id);
  if (!e) return;
  if (correct) e.stage = Math.min(e.stage+1, 2);
  else e.stage = 0;
  e.nextDue = now() + srsStagesDays(e.stage)*86400000;
  srsSave(list);
}

// ==========================
// HELPERS
// ==========================
const hide = el => el?.classList.add("hidden");
const show = el => el?.classList.remove("hidden");
function hideAll(){ [modeSelect, setupEl, quizEl, resultsEl, reviewEl, searchEl].forEach(hide); }
function getQuestionsArray(){ return Array.isArray(questions) ? questions.slice() : []; }
function shuffleSeeded(arr, seed) {
  const a = arr.slice();
  let s = seed >>> 0;
  function rnd() { s = (s * 1664525 + 1013904223) >>> 0; return s / 0x100000000; }
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function getAllCategories(list){ const set=new Set(list.map(q=>q.category||"Uncategorised")); return Array.from(set).sort(); }
function getSeed() {
  const p = new URLSearchParams(location.search);
  const s = p.get("seed");
  if (!s) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

// Data guard
if (!Array.isArray(allQuestions) || !allQuestions.every(q => q && q.question && q.answers && Number.isInteger(q.correct))) {
  alert("Questions file invalid. Please check questions_categorized.js");
}

// ==========================
// MENU + SETUP
// ==========================
document.getElementById("quizModeBtn").onclick = () => {
  hideAll(); show(setupEl); examMode = false;

  allQuestions = getQuestionsArray();

  // Category dropdown
  const cats = ["All", ...getAllCategories(allQuestions)];
  quizCategorySel.innerHTML = "";
  cats.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    quizCategorySel.appendChild(opt);
  });

  // Range max based on selected category
  const applyMax = () => {
    const cat = quizCategorySel.value;
    const pool = (cat === "All") ? allQuestions : allQuestions.filter(q => (q.category||"Uncategorised") === cat);
    numQuestionsInput.max = String(Math.max(1, pool.length));
    if (+numQuestionsInput.value > +numQuestionsInput.max) {
      numQuestionsInput.value = numQuestionsInput.max;
    }
    numQuestionsLabel.textContent = numQuestionsInput.value;
  };
  quizCategorySel.onchange = applyMax;
  numQuestionsInput.oninput = () => numQuestionsLabel.textContent = numQuestionsInput.value;
  applyMax();

  // Build Custom Exam list
  renderExamBuilder();
};
document.getElementById("examModeBtn").onclick = startExam;
document.getElementById("searchModeBtn").onclick = startSearch;
srsModeBtn.onclick = startSRS;
backToMainFromSetup.onclick = () => { hideAll(); show(modeSelect); };

// ==========================
// QUIZ / EXAM BUTTONS
// ==========================
startQuizBtn.onclick = startQuiz;
nextBtn.onclick = nextQuestion;
prevBtn.onclick = prevQuestion;
mainMenuBtn.onclick = goToMainMenu;
playAgainBtn.onclick = goToMainMenu;
playAgainBtn2.onclick = goToMainMenu;
backToMenuFromSearch.onclick = goToMainMenu;
reviewBtn.onclick = showReview;
restartIncorrectBtn.onclick = retryIncorrect;
startCustomExamBtn.onclick = startCustomExam;

// ==========================
// SAVE & RESUME (autosave)
// ==========================
const STATE_KEY = "a320bank_state_v1";
function saveState() {
  const state = {
    mode: examMode ? "exam" : (quizQuestions.length ? "quiz" : "menu"),
    currentIndex, score, userAnswers, timeRemaining,
    flagged: Array.from(flaggedSet),
    quizQuestions,
  };
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}
function loadState() {
  const saved = localStorage.getItem(STATE_KEY);
  if (!saved) return false;
  try {
    const s = JSON.parse(saved);
    if (!s.quizQuestions || !s.quizQuestions.length) return false;

    examMode = s.mode === "exam";
    quizQuestions = s.quizQuestions;
    userAnswers = s.userAnswers;
    flaggedSet = new Set(s.flagged || []);
    currentIndex = s.currentIndex || 0;
    score = s.score || 0;
    timeRemaining = s.timeRemaining || 3 * 60 * 60;

    hideAll(); show(quizEl);
    if (examMode) {
      timerEl.classList.remove("hidden");
      startExamTimer();
    } else {
      timerEl.classList.add("hidden");
      scoreText.textContent = `Score: ${score}`;
    }
    renderQuestion(); renderNavigator(); updateStatusBar();
    return true;
  } catch (e) { console.error(e); return false; }
}
window.addEventListener("beforeunload", saveState);

// Deep links on load
window.addEventListener("load", () => {
  // Try restore session first
  if (loadState()) return;

  const hash = location.hash || "";
  if (hash.startsWith("#/mode=exam")) startExam();
  else if (hash.startsWith("#/search")) {
    const p = new URLSearchParams(hash.split("?")[1]||"");
    const q = p.get("q") || "";
    const cat = p.get("cat") || "All";
    startSearch(q, cat);
  } else {
    hideAll(); show(modeSelect);
  }
});

// ==========================
// STARTERS
// ==========================
function startQuiz(){
  hideAll(); show(quizEl);
  examMode = false;

  allQuestions = getQuestionsArray();
  const chosenCat = quizCategorySel.value || "All";
  const pool = (chosenCat === "All") ? allQuestions
    : allQuestions.filter(q => (q.category || "Uncategorised") === chosenCat);

  const seed = getSeed();
  const deck = seed != null ? shuffleSeeded(pool, seed) : shuffle(pool);

  quizQuestions = deck.slice(0, +numQuestionsInput.value);
  userAnswers = new Array(quizQuestions.length).fill(null);
  flaggedSet.clear();
  // Map persisted flags
  quizQuestions.forEach((q, idx) => { if (flaggedIdSet.has(qid(q))) flaggedSet.add(idx); });

  score = 0; currentIndex = 0; incorrectQs = [];
  scoreText.textContent = "Score: 0";
  timerEl.classList.add("hidden");
  renderQuestion(); renderNavigator(); updateStatusBar();
  location.hash = "#/mode=quiz";
}

function startExam(){
  hideAll(); show(quizEl);
  examMode = true; allQuestions = getQuestionsArray();

  const seed = getSeed();
  const deck = seed != null ? shuffleSeeded(allQuestions, seed) : shuffle(allQuestions);

  quizQuestions = deck.slice(0, 100);
  userAnswers = new Array(quizQuestions.length).fill(null);
  flaggedSet.clear();
  quizQuestions.forEach((q, idx) => { if (flaggedIdSet.has(qid(q))) flaggedSet.add(idx); });

  score = 0; currentIndex = 0; incorrectQs = [];
  scoreText.textContent = ""; // no running score in exam
  timeRemaining = 3*60*60;
  timerEl.classList.remove("hidden");
  startExamTimer();
  renderQuestion(); renderNavigator(); updateStatusBar();
  location.hash = "#/mode=exam";
}

function startCustomExam(){
  // Collect from builder
  const rows = examBuilderList.querySelectorAll(".builder-row");
  const plan = [];
  let total = 0;
  rows.forEach(row => {
    const cat = row.dataset.cat;
    const count = Math.max(0, Math.min(100, Number(row.querySelector("input").value || 0)));
    if (count > 0) { plan.push({cat, count}); total += count; }
  });
  if (total === 0 || total > 100) { alert("Total must be between 1 and 100."); return; }

  // Build pool & sample per category
  hideAll(); show(quizEl);
  examMode = true; allQuestions = getQuestionsArray();

  const deck = [];
  const seed = getSeed();
  const shuffler = seed != null ? (arr)=>shuffleSeeded(arr, seed) : shuffle;

  plan.forEach(({cat, count}) => {
    const pool = allQuestions.filter(q => (q.category||"Uncategorised") === cat);
    deck.push(...shuffler(pool).slice(0, count));
  });

  quizQuestions = deck;
  userAnswers = new Array(quizQuestions.length).fill(null);
  flaggedSet.clear();
  quizQuestions.forEach((q, idx) => { if (flaggedIdSet.has(qid(q))) flaggedSet.add(idx); });

  score = 0; currentIndex = 0; incorrectQs = [];
  scoreText.textContent = "";
  timeRemaining = 3*60*60;
  timerEl.classList.remove("hidden");
  startExamTimer();
  renderQuestion(); renderNavigator(); updateStatusBar();
  location.hash = "#/mode=exam";
}

// SRS mode: pull due items & quiz them like quiz (answers instant)
function startSRS(){
  const due = srsLoad().filter(e => e.nextDue <= now());
  if (!due.length) { alert("No SRS items due yet. Answer some incorrects first or come back later."); return; }

  const idSet = new Set(due.map(d => d.id));
  const pool = getQuestionsArray().filter(q => idSet.has(qid(q)));
  if (!pool.length) { alert("Your SRS items reference old questions. Clearing SRS."); srsSave([]); return; }

  hideAll(); show(quizEl);
  examMode = false;
  quizQuestions = shuffle(pool);
  userAnswers = new Array(quizQuestions.length).fill(null);
  flaggedSet.clear();
  quizQuestions.forEach((q, idx) => { if (flaggedIdSet.has(qid(q))) flaggedSet.add(idx); });

  score = 0; currentIndex = 0; incorrectQs = [];
  scoreText.textContent = "Score: 0";
  timerEl.classList.add("hidden");
  renderQuestion(); renderNavigator(); updateStatusBar();
  location.hash = "#/mode=srs";
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

    if (userAnswers[currentIndex] !== null) {
      if (!examMode) {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add("correct");
        if (i === userAnswers[currentIndex] && i !== q.correct) btn.classList.add("wrong");
      } else {
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
function selectAnswer(i){
  const q = quizQuestions[currentIndex];
  const wasNull = userAnswers[currentIndex] === null;
  userAnswers[currentIndex] = i;

  if (!examMode){
    const buttons = answersContainer.querySelectorAll(".answer-btn");
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.correct) b.classList.add("correct");
      else if (idx === i) b.classList.add("wrong");
    });

    if (i === q.correct) score++; else { incorrectQs.push(q); srsAddIncorrect(q); }
    scoreText.textContent = `Score: ${score}`;
  } else {
    const buttons = answersContainer.querySelectorAll(".answer-btn");
    buttons.forEach((b, idx) => {
      b.classList.remove("selected");
      if (idx === i) b.classList.add("selected");
    });
  }

  if (wasNull) saveState(); // autosave after fresh answer
  renderNavigator(); updateStatusBar(); updateNavButtons();
}

// ==========================
// NAVIGATOR
// ==========================
function renderNavigator(){
  navigatorContainer.innerHTML = "";
  quizQuestions.forEach((q, i) => {
    const dot = document.createElement("button");
    dot.className = "nav-dot";
    dot.textContent = i + 1;

    if (i === currentIndex) dot.classList.add("active");
    if (flaggedSet.has(i)) dot.classList.add("flagged");

    const ans = userAnswers[i];
    if (ans !== null){
      if (!examMode){
        if (ans === q.correct) dot.classList.add("correct");
        else dot.classList.add("wrong");
      } else {
        dot.classList.add("answered");
      }
    }

    dot.onclick = () => { currentIndex = i; renderQuestion(); renderNavigator(); saveState(); };
    navigatorContainer.appendChild(dot);
  });
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
    flaggedIdSet.delete(id);
  } else {
    flaggedSet.add(currentIndex);
    flaggedIdSet.add(id);
  }
  savePersistentFlags(flaggedIdSet);
  saveState();
  updateStatusBar(); renderNavigator();
};

// ==========================
// NAV BUTTONS
// ==========================
function updateNavButtons(){
  prevBtn.disabled = (currentIndex === 0);
  nextBtn.textContent = (currentIndex === quizQuestions.length - 1) ? "Finish" : "Next →";
  nextBtn.disabled = (examMode && userAnswers[currentIndex] === null);
}
function nextQuestion(){
  if (currentIndex < quizQuestions.length - 1){ currentIndex++; renderQuestion(); renderNavigator(); saveState(); }
  else endRun();
}
function prevQuestion(){
  if (currentIndex > 0){ currentIndex--; renderQuestion(); renderNavigator(); saveState(); }
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

  // Weak-area breakdown
  const byCat = {};
  quizQuestions.forEach((q,i)=>{
    const cat = q.category || "Other";
    byCat[cat] ??= {right:0,total:0};
    byCat[cat].total++;
    if (userAnswers[i] === q.correct) byCat[cat].right++;
  });
  categoryBreakdown.innerHTML = "";
  Object.entries(byCat).sort().forEach(([cat, v]) => {
    const p = Math.round((v.right / v.total) * 100);
    const row = document.createElement("div");
    row.className = "breakdown-row";
    row.innerHTML = `<span>${cat}</span><span>${v.right}/${v.total} (${p}%)</span>`;
    categoryBreakdown.appendChild(row);
  });

  // Exam: update SRS only now (we didn’t add mid-run)
  if (examMode) {
    quizQuestions.forEach((q,i) => {
      if (userAnswers[i] !== q.correct) srsAddIncorrect(q);
    });
  }

  timerEl.classList.add("hidden");
  stopExamTimer();
  localStorage.removeItem(STATE_KEY); // end the session; keep flags & SRS
}

function showReview(){
  hideAll(); show(reviewEl);
  const list = document.getElementById("reviewList");
  list.innerHTML = "";
  const wrong = quizQuestions.filter((q,i)=>userAnswers[i]!==q.correct);
  if (!wrong.length){ list.innerHTML = "<div class='question-card'>Nothing to review 🎉</div>"; return; }
  wrong.forEach(q => {
    const div = document.createElement("div");
    div.className = "review-item question-card";
    div.innerHTML = `<p class="review-q"><strong>Q:</strong> ${q.question}</p><p class="review-a"><strong>Correct:</strong> ${q.answers[q.correct]}</p>`;
    list.appendChild(div);
  });
}

function retryIncorrect(){
  const wrong = quizQuestions.filter((q,i)=>userAnswers[i]!==q.correct);
  if (!wrong.length){ goToMainMenu(); return; }
  quizQuestions = wrong.slice();
  userAnswers = new Array(quizQuestions.length).fill(null);
  flaggedSet.clear();
  quizQuestions.forEach((q, idx) => { if (flaggedIdSet.has(qid(q))) flaggedSet.add(idx); });
  incorrectQs = []; score = 0; currentIndex = 0; examMode = false;
  hideAll(); show(quizEl);
  scoreText.textContent = "Score: 0";
  renderQuestion(); renderNavigator(); updateStatusBar();
}

function goToMainMenu(){
  if (quizQuestions.length && userAnswers.some(a => a !== null)) {
    if (!confirm("Exit and lose current session?")) return;
  }
  stopExamTimer(); hideAll(); show(modeSelect);
  localStorage.removeItem(STATE_KEY);
}

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
// EXAM BUILDER UI
// ==========================
function renderExamBuilder(){
  const cats = getAllCategories(getQuestionsArray());
  examBuilderList.innerHTML = "";
  let total = 0;
  cats.forEach(cat => {
    const row = document.createElement("div");
    row.className = "builder-row";
    row.dataset.cat = cat;
    const catCount = allQuestions.filter(q => (q.category||"Uncategorised") === cat).length;
    row.innerHTML = `
      <label>${cat} <span class="muted">(${catCount} available)</span></label>
      <input type="number" min="0" max="100" value="0">
    `;
    const input = row.querySelector("input");
    input.addEventListener("input", () => {
      clampBuilderTotals();
    });
    examBuilderList.appendChild(row);
  });
  clampBuilderTotals();
}
function clampBuilderTotals(){
  let total = 0;
  examBuilderList.querySelectorAll("input").forEach(inp => {
    let v = Number(inp.value||0);
    v = Math.max(0, Math.min(100, v));
    inp.value = v;
    total += v;
  });
  if (total > 100) {
    // reduce last edited
    const diff = total - 100;
    const inputs = Array.from(examBuilderList.querySelectorAll("input"));
    const last = inputs[inputs.length - 1];
    last.value = Math.max(0, Number(last.value) - diff);
    total = 100;
  }
  builderTotal.textContent = String(total);
}

// ==========================
// SEARCH (with deep-link)
// ==========================
function startSearch(initialQuery = "", initialCat = "All"){
  allQuestions = getQuestionsArray();
  hideAll(); show(searchEl);

  // Build top category buttons
  const controls = document.querySelector(".search-controls");
  if (!categoryButtonsContainer){
    categoryButtonsContainer = document.createElement("div");
    categoryButtonsContainer.className = "mode-buttons";
    controls.appendChild(categoryButtonsContainer);
  }
  const categories = ["All", ...getAllCategories(allQuestions)];
  categoryButtonsContainer.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "secondary";
    if (cat === initialCat) btn.classList.add("active-cat");
    btn.onclick = () => {
      highlightCategory(btn);
      renderSearch(filterBy(searchInput.value, cat));
      location.hash = `#/search?q=${encodeURIComponent(searchInput.value||"")}&cat=${encodeURIComponent(cat)}`;
    };
    categoryButtonsContainer.appendChild(btn);
  });

  searchInput.value = initialQuery;
  searchInput.oninput = () => {
    const activeCatBtn = document.querySelector(".mode-buttons button.active-cat");
    const cat = activeCatBtn ? activeCatBtn.textContent : "All";
    renderSearch(filterBy(searchInput.value, cat));
    location.hash = `#/search?q=${encodeURIComponent(searchInput.value||"")}&cat=${encodeURIComponent(cat)}`;
  };

  renderSearch(filterBy(initialQuery, initialCat));
}
function highlightCategory(activeBtn){
  document.querySelectorAll(".mode-buttons button.secondary").forEach(b => b.classList.remove("active-cat"));
  activeBtn.classList.add("active-cat");
}
function filterBy(text, cat){
  const t = (text||"").toLowerCase();
  let filtered = allQuestions.filter(
    q => q.question.toLowerCase().includes(t) || q.answers.some(a => a.toLowerCase().includes(t))
  );
  if (cat && cat !== "All") filtered = filtered.filter(q => (q.category || "Uncategorised") === cat);
  return filtered;
}
function renderSearch(list){
  // Simple virtualization: render in chunks
  searchList.innerHTML = "";
  if (!list.length){ searchList.innerHTML = "<p class='muted'>No questions found.</p>"; return; }

  const CHUNK = 80;
  let index = 0;
  function renderChunk(){
    const end = Math.min(index+CHUNK, list.length);
    for (let i=index; i<end; i++){
      const q = list[i];
      const item = document.createElement("div");
      item.className = "search-item";
      item.innerHTML = `<p class="q">${q.category ? `[${q.category}] ` : ""}${i + 1}. ${q.question}${flaggedIdSet.has(qid(q)) ? " 🚩" : ""}</p>`;
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
    }
    index = end;
  }
  renderChunk();
  const onScroll = () => {
    if (searchList.scrollTop + searchList.clientHeight >= searchList.scrollHeight - 40 && index < list.length) {
      renderChunk();
    }
  };
  searchList.removeEventListener("scroll", onScroll);
  searchList.addEventListener("scroll", onScroll);
}
