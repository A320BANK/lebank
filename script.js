// ==========================
// ELEMENTS
// ==========================
const loadingScreen = document.getElementById("loading-screen");

// Mode select (always first screen)
const modeSelect = document.getElementById("modeSelect");
const chooseQuiz  = document.getElementById("chooseQuiz");
const chooseExam  = document.getElementById("chooseExam");
const chooseSearch= document.getElementById("chooseSearch");

// Quiz setup (only visible after clicking “Quiz mode”)
const setupEl   = document.getElementById("setup");
const numRange  = document.getElementById("numQuestions");
const numLabel  = document.getElementById("numLabel");
const startBtn  = document.getElementById("startBtn");

// Play UI (used for quiz & exam)
const quizEl = document.getElementById("quiz");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const mainMenuBtn = document.getElementById("mainMenuBtn");
const progressEl = document.getElementById("progress");
const leftCountEl = document.getElementById("leftCount");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

// Results & review
const resultsEl = document.getElementById("results");
const finalTitle = document.getElementById("finalTitle");
const finalScore = document.getElementById("finalScore");
const playAgainBtn = document.getElementById("playAgainBtn");
const reviewBtn = document.getElementById("reviewBtn");
const retryBtn  = document.getElementById("retryBtn");

const reviewEl = document.getElementById("review");
const reviewList = document.getElementById("reviewList");
const backToResultsBtn = document.getElementById("backToResultsBtn");
const retryFromReviewBtn = document.getElementById("retryFromReviewBtn");

// Search
const searchEl = document.getElementById("search");
const searchInput = document.getElementById("searchInput");
const searchList  = document.getElementById("searchList");
const backToMenuFromSearch = document.getElementById("backToMenuFromSearch");

// Navigator + flag + comments
const questionNavigator = document.getElementById("questionNavigator");
const flagBtn = document.getElementById("flagBtn");
const commentsSection = document.getElementById("comments");
const commentsList = document.getElementById("commentsList");
const commentInput = document.getElementById("commentInput");
const saveCommentBtn = document.getElementById("saveCommentBtn");

// ==========================
// STATE & UTILS
// ==========================
function getQuestionsArray(){
  try{ if(typeof questions!=="undefined" && Array.isArray(questions)) return questions.slice(); }catch{}
  if(Array.isArray(window.questions)) return window.questions.slice();
  return [];
}
let allQuestions = getQuestionsArray();

let selected = [];
let idx = 0;
let userAnswers = [];
let flagged = [];
let MODE = "quiz";           // "quiz" | "exam"
let examTimer = null;
let examRemaining = 0;
const PASS_MARK = 75;

// convenience
function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }
function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function sample(a,n){ a=a.slice(); shuffle(a); return a.slice(0,Math.min(n,a.length)); }
function fmtTime(s){ const h=Math.floor(s/3600), m=Math.floor((s%3600)/60), sec=s%60; return `${h}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`; }
function recomputeScore(){ return userAnswers.reduce((acc,ans,i)=> acc + (ans===selected[i]?.correct ? 1 : 0), 0); }
function stopExamTimer(){ if(examTimer){ clearInterval(examTimer); examTimer=null; }}

// simple stable id per question (hash of text)
function qid(q){ let h=0,s=String(q.question); for(let i=0;i<s.length;i++){h=(h*31 + s.charCodeAt(i))|0;} return String(h); }
const COMMENT_KEY = "a320_comments";
function loadAllComments(){ try{ return JSON.parse(localStorage.getItem(COMMENT_KEY)||"{}"); }catch{ return {}; } }
function saveAllComments(obj){ localStorage.setItem(COMMENT_KEY, JSON.stringify(obj)); }
function getCommentsFor(q){ const store=loadAllComments(); return store[qid(q)] || []; }
function addCommentFor(q,text){ const store=loadAllComments(); const id=qid(q); if(!store[id]) store[id]=[]; store[id].push(text); saveAllComments(store); }

// Central “go home”
function goToMainMenu(){
  stopExamTimer();
  hide(setupEl); hide(quizEl); hide(resultsEl); hide(reviewEl); hide(searchEl);
  questionNavigator.innerHTML = "";
  answersContainer.innerHTML = "";
  commentsList.innerHTML = ""; commentInput.value = "";
  hide(commentsSection);
  scoreEl.textContent = "Score: 0";
  timerEl.classList.add("hidden");
  show(modeSelect);        // ONLY the three buttons
}

// Hide everything but keep state; used on starts
function hideAll(){
  hide(modeSelect); hide(setupEl); hide(quizEl); hide(resultsEl); hide(reviewEl); hide(searchEl);
}

// ==========================
// INIT
// ==========================
document.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(()=> loadingScreen.style.display="none", 800);
  if(!allQuestions.length) allQuestions = getQuestionsArray();
  numRange.max = String(allQuestions.length || 100);
  numLabel.textContent = numRange.value;

  // Start at main menu (slider hidden)
  goToMainMenu();

  // Arrow key nav while in quiz/exam
  window.addEventListener("keydown", e=>{
    if(quizEl.classList.contains("hidden")) return;
    if(e.key==="ArrowRight"){ e.preventDefault(); nextBtn.click(); }
    if(e.key==="ArrowLeft"){  e.preventDefault(); prevBtn.click(); }
  });
});
numRange.addEventListener("input", () => numLabel.textContent = numRange.value);

// ==========================
// MODE CHOICES
// ==========================
chooseQuiz.onclick  = ()=>{ MODE="quiz"; hide(modeSelect); show(setupEl); scoreEl.textContent="Score: 0"; timerEl.classList.add("hidden"); };
chooseExam.onclick  = ()=>{ MODE="exam"; startExam(); };
chooseSearch.onclick= ()=>{ startSearch(); };

mainMenuBtn.onclick = goToMainMenu;
playAgainBtn.onclick= goToMainMenu;
backToMenuFromSearch.onclick = goToMainMenu;

// ==========================
// STARTERS
// ==========================
startBtn.onclick = ()=> startQuiz(sample(allQuestions, parseInt(numRange.value,10)));

function startQuiz(set){
  MODE="quiz";
  selected=set; idx=0; userAnswers=new Array(set.length).fill(null); flagged=[];
  hideAll(); show(quizEl);
  scoreEl.textContent="Score: 0";
  timerEl.classList.add("hidden");
  renderQuestion();
}

function startExam(){
  MODE="exam";
  selected=sample(allQuestions, Math.min(100, allQuestions.length));
  idx=0; userAnswers=new Array(selected.length).fill(null); flagged=[];
  hideAll(); show(quizEl);
  scoreEl.textContent="Score: —";       // hide running score
  timerEl.classList.remove("hidden");
  examRemaining = 3*60*60;              // 3 hours
  timerEl.textContent = fmtTime(examRemaining);
  stopExamTimer();
  examTimer = setInterval(()=>{
    examRemaining--; timerEl.textContent = fmtTime(examRemaining);
    if(examRemaining<=0){ stopExamTimer(); finishRun(); }
  }, 1000);
  renderQuestion();
}

// ==========================
// RENDER ONE QUESTION
// ==========================
function renderQuestion(){
  const q = selected[idx];
  progressEl.textContent = `Question ${idx+1} of ${selected.length}`;

  // Left: remaining unanswered (in this run)
  const answered = userAnswers.filter(a => a !== null).length;
  leftCountEl.textContent = `Left: ${selected.length - answered}`;

  questionText.textContent = q.question;
  answersContainer.innerHTML = "";

  q.answers.forEach((text, i)=>{
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = text;

    if(userAnswers[idx]===i){
      btn.classList.add(MODE==="exam" ? "selected" : "correct");
    }

    btn.onclick = ()=>{
      userAnswers[idx] = i;
      if(MODE==="quiz"){
        [...answersContainer.children].forEach(b=>b.disabled=true);
        if(i===q.correct){ btn.classList.add("correct"); }
        else{
          btn.classList.add("wrong");
          [...answersContainer.children][q.correct].classList.add("correct");
        }
        scoreEl.textContent = `Score: ${recomputeScore()}`;
      }else{
        [...answersContainer.children].forEach(b=>b.classList.remove("selected"));
        btn.classList.add("selected"); // light blue
      }
      renderNavigator();
      updateFlagButton();
      updateNavButtons();
      leftCountEl.textContent = `Left: ${selected.length - userAnswers.filter(a=>a!==null).length}`;
    };

    answersContainer.appendChild(btn);
  });

  renderNavigator();
  updateFlagButton();
  updateNavButtons();

  // Comments: only in quiz mode
  if(MODE==="quiz"){
    show(commentsSection);
    renderCommentsFor(q);
  }else{
    hide(commentsSection);
  }
}

// ==========================
// NAVIGATOR & FLAG
// ==========================
function renderNavigator(){
  questionNavigator.innerHTML = "";
  show(questionNavigator);
  selected.forEach((q, i)=>{
    const dot = document.createElement("div");
    dot.className = "nav-item";
    dot.textContent = i+1;

    if(i===idx) dot.classList.add("active");
    if(flagged.includes(i)) dot.classList.add("flagged");

    if(MODE==="quiz"){
      if(userAnswers[i]!==null){
        dot.classList.add(userAnswers[i]===q.correct ? "correct" : "wrong");
      }
    }else{
      if(userAnswers[i]!==null) dot.classList.add("answered");
    }

    dot.onclick = ()=>{ idx=i; renderQuestion(); };
    questionNavigator.appendChild(dot);
  });
}

function toggleFlag(){
  if(flagged.includes(idx)) flagged = flagged.filter(n=>n!==idx);
  else flagged.push(idx);
  updateFlagButton();
  renderNavigator();
}
function updateFlagButton(){
  flagBtn.textContent = flagged.includes(idx) ? "🚩 Unflag Question" : "🚩 Flag Question";
}
flagBtn.onclick = toggleFlag;

// ==========================
// COMMENTS (QUIZ MODE ONLY)
// ==========================
function renderCommentsFor(q){
  commentsList.innerHTML = "";
  const entries = getCommentsFor(q);
  if(!entries.length){
    const empty = document.createElement("div");
    empty.className = "comment";
    empty.innerHTML = "<em>No hints yet. Be the first!</em>";
    commentsList.appendChild(empty);
  }else{
    entries.forEach(text=>{
      const c = document.createElement("div");
      c.className = "comment";
      c.textContent = text;
      commentsList.appendChild(c);
    });
  }
}
saveCommentBtn.onclick = ()=>{
  const q = selected[idx];
  const val = commentInput.value.trim();
  if(!val) return;
  addCommentFor(q, val);
  commentInput.value = "";
  renderCommentsFor(q);
};

// ==========================
// CONTROLS & FINISH
// ==========================
function updateNavButtons(){
  prevBtn.disabled = (idx===0);
  nextBtn.textContent = (idx===selected.length-1) ? "Finish" : "Next ➜";
  nextBtn.disabled = (MODE==="exam" && userAnswers[idx]===null);
}
prevBtn.onclick = ()=>{ if(idx>0){ idx--; renderQuestion(); } };
nextBtn.onclick = ()=>{ if(idx<selected.length-1){ idx++; renderQuestion(); } else finishRun(); };

function finishRun(){
  stopExamTimer();
  hide(quizEl); show(resultsEl);

  const score = recomputeScore();
  const incorrect = selected.filter((q,i)=> userAnswers[i]!==q.correct);
  const pct = Math.round((score/selected.length)*100);
  finalTitle.textContent = (MODE==="exam") ? "Exam complete!" : "Quiz complete!";
  finalScore.innerHTML = `
    You scored <strong>${score}</strong> / <strong>${selected.length}</strong>
    (<strong>${pct}%</strong>)<br>
    <span class="result-badge ${pct>=PASS_MARK ? "result-pass" : "result-fail"}">
      ${pct>=PASS_MARK ? "PASS" : "FAIL"} — Pass mark ${PASS_MARK}%
    </span>
  `;

  reviewBtn.onclick = ()=> showReview(incorrect);
  retryBtn.onclick  = ()=> startQuiz(incorrect);
  if(incorrect.length){ reviewBtn.classList.remove("hidden"); retryBtn.classList.remove("hidden"); }
  else{ reviewBtn.classList.add("hidden"); retryBtn.classList.add("hidden"); }
}

// ==========================
// REVIEW
// ==========================
function showReview(list){
  reviewList.innerHTML = "";
  list.forEach(q=>{
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `<p class="review-q">${q.question}</p>
                     <p class="review-a"><strong>Correct:</strong> ${q.answers[q.correct]}</p>`;
    reviewList.appendChild(div);
  });
  hide(resultsEl); show(reviewEl);
}
backToResultsBtn.onclick = ()=>{ hide(reviewEl); show(resultsEl); };
retryFromReviewBtn.onclick = ()=> startQuiz(selected.filter((q,i)=> userAnswers[i]!==q.correct));

// ==========================
// SEARCH MODE
// ==========================
function startSearch(){
  hideAll(); show(searchEl);
  searchInput.value=""; searchInput.focus();
  renderSearch(allQuestions);
}
function renderSearch(list){
  searchList.innerHTML="";
  list.forEach((q,i)=>{
    const item=document.createElement("div");
    item.className="search-item";
    item.innerHTML = `<p class="q">${i+1}. ${q.question}</p>`;
    const ans = document.createElement("div");
    ans.className="search-answers";
    q.answers.forEach((a,ix)=>{
      const opt=document.createElement("div");
      opt.className="opt"; opt.textContent=a;
      if(ix===q.correct) opt.classList.add("correct");
      ans.appendChild(opt);
    });
    item.appendChild(ans);
    item.onclick=()=> item.classList.toggle("open");
    searchList.appendChild(item);
  });
}
searchInput.oninput = ()=>{
  const t=searchInput.value.toLowerCase();
  renderSearch(allQuestions.filter(q =>
    q.question.toLowerCase().includes(t) || q.answers.some(a=>a.toLowerCase().includes(t))
  ));
};
