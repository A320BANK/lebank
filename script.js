// -------------------- Core selectors --------------------
const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

// mode select
const modeSelect = document.getElementById("modeSelect");
const chooseQuiz = document.getElementById("chooseQuiz");
const chooseExam = document.getElementById("chooseExam");
const chooseSearch = document.getElementById("chooseSearch");

// quiz setup
const setupEl = document.getElementById("setup");
const numRange = document.getElementById("numQuestions");
const numLabel = document.getElementById("numLabel");
const startBtn = document.getElementById("startBtn");

// quiz / exam play
const quizEl = document.getElementById("quiz");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const mainMenuBtn = document.getElementById("mainMenuBtn");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

// results + review
const resultsEl = document.getElementById("results");
const finalTitle = document.getElementById("finalTitle");
const finalScore = document.getElementById("finalScore");
const playAgainBtn = document.getElementById("playAgainBtn");
const reviewBtn = document.getElementById("reviewBtn");
const retryBtn = document.getElementById("retryBtn");

// review section
const reviewEl = document.getElementById("review");
const reviewList = document.getElementById("reviewList");
const backToResultsBtn = document.getElementById("backToResultsBtn");
const retryFromReviewBtn = document.getElementById("retryFromReviewBtn");

// search section
const searchEl = document.getElementById("search");
const searchInput = document.getElementById("searchInput");
const searchList = document.getElementById("searchList");
const backToMenuFromSearch = document.getElementById("backToMenuFromSearch");

// -------------------- data + utils --------------------
function getQuestionsArray() {
  try { if (typeof questions !== "undefined" && Array.isArray(questions)) return questions.slice(); } catch {}
  if (Array.isArray(window.questions)) return window.questions.slice();
  return [];
}
let allQuestions = getQuestionsArray();

let selected = [];
let idx = 0;
let score = 0;
let userAnswers = [];
let MODE = "quiz";
let examTimer = null;
let examRemaining = 0;
const PASS_MARK = 75;

function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]] } return arr; }
function sample(arr,n){ arr=arr.slice(); shuffle(arr); return arr.slice(0,Math.min(n,arr.length)); }
function fmtTime(s){ const h=Math.floor(s/3600), m=Math.floor((s%3600)/60), sec=s%60; return `${h}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`; }
function recomputeScore(){ return userAnswers.reduce((a,ans,i)=>a+(ans===selected[i]?.correct?1:0),0); }

// -------------------- init --------------------
document.addEventListener("DOMContentLoaded", ()=>{
  if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark"); themeToggle.textContent="🌞";}
  setTimeout(()=>loadingScreen.style.display="none",800);
  if(!allQuestions.length) allQuestions=getQuestionsArray();
  numRange.max=String(allQuestions.length||100);
  numLabel.textContent=numRange.value;
  window.addEventListener("keydown",e=>{
    if(quizEl.classList.contains("hidden"))return;
    if(e.key==="ArrowRight"){e.preventDefault();nextBtn.click();}
    if(e.key==="ArrowLeft"){e.preventDefault();prevBtn.click();}
  });
});
numRange.addEventListener("input",()=>numLabel.textContent=numRange.value);

// -------------------- menu buttons --------------------
chooseQuiz.onclick=()=>{MODE="quiz"; hide(modeSelect); show(setupEl); scoreEl.textContent="Score: 0"; timerEl.classList.add("hidden");};
chooseExam.onclick=()=>{MODE="exam"; startExam();};
chooseSearch.onclick=()=>{startSearch();};
mainMenuBtn.onclick=()=>{ stopExamTimer(); hide(quizEl); hide(resultsEl); hide(reviewEl); hide(searchEl); show(modeSelect); };

// -------------------- quiz/exam --------------------
startBtn.onclick=()=>startQuiz(sample(allQuestions,parseInt(numRange.value,10)));

function startQuiz(set){
  MODE="quiz";
  selected=set; idx=0; score=0; userAnswers=new Array(set.length).fill(null);
  hideAll(); show(quizEl);
  scoreEl.textContent=`Score: 0`; timerEl.classList.add("hidden");
  renderQuestion();
}
function startExam(){
  MODE="exam";
  selected=sample(allQuestions,Math.min(100,allQuestions.length));
  idx=0; userAnswers=new Array(selected.length).fill(null); score=0;
  hideAll(); show(quizEl);
  scoreEl.textContent="Score: —";
  timerEl.classList.remove("hidden");
  examRemaining=3*60*60;
  timerEl.textContent=fmtTime(examRemaining);
  stopExamTimer();
  examTimer=setInterval(()=>{
    examRemaining--; timerEl.textContent=fmtTime(examRemaining);
    if(examRemaining<=0){ stopExamTimer(); finishQuiz(); }
  },1000);
  renderQuestion();
}
function stopExamTimer(){ if(examTimer){ clearInterval(examTimer); examTimer=null; } }
function hideAll(){ hide(modeSelect); hide(setupEl); hide(resultsEl); hide(reviewEl); hide(searchEl); }

function renderQuestion(){
  const q=selected[idx];
  progressEl.textContent=`Question ${idx+1} of ${selected.length}`;
  questionText.textContent=q.question;
  answersContainer.innerHTML="";
  q.answers.forEach((text,i)=>{
    const btn=document.createElement("button");
    btn.className="answer-btn";
    btn.textContent=text;
    // show selection highlight
    if(userAnswers[idx]===i){
      btn.classList.add(MODE==="exam"?"selected":"correct");
    }
    btn.onclick=()=>{
      userAnswers[idx]=i;
      if(MODE==="quiz"){
        [...answersContainer.children].forEach(b=>b.disabled=true);
        if(i===q.correct){btn.classList.add("correct");}else{
          btn.classList.add("wrong");
          [...answersContainer.children][q.correct].classList.add("correct");
        }
        score=recomputeScore(); scoreEl.textContent=`Score: ${score}`;
      }else{ // exam: blue highlight only
        [...answersContainer.children].forEach(b=>b.classList.remove("selected"));
        btn.classList.add("selected");
      }
      updateNav();
    };
    answersContainer.appendChild(btn);
  });
  updateNav();
}
function updateNav(){
  prevBtn.disabled=(idx===0);
  nextBtn.textContent=(idx===selected.length-1)?"Finish":"Next ➜";
  nextBtn.disabled=(MODE==="exam" && userAnswers[idx]===null);
}
prevBtn.onclick=()=>{ if(idx>0){idx--;renderQuestion();} };
nextBtn.onclick=()=>{ if(idx<selected.length-1){idx++;renderQuestion();} else finishQuiz(); };

function finishQuiz(){
  stopExamTimer(); hide(quizEl); show(resultsEl);
  score=recomputeScore();
  const incorrect=selected.filter((q,i)=>userAnswers[i]!==q.correct);
  const pct=Math.round((score/selected.length)*100);
  finalTitle.textContent=MODE==="exam"?"Exam complete!":"Quiz complete!";
  finalScore.innerHTML=`You scored <strong>${score}</strong> / <strong>${selected.length}</strong> (<strong>${pct}%</strong>)<br>
  <span class="result-badge ${pct>=75?"result-pass":"result-fail"}">${pct>=75?"PASS":"FAIL"} — Pass mark ${PASS_MARK}%</span>`;
  reviewBtn.onclick=()=>showReview(incorrect);
  retryBtn.onclick=()=>startQuiz(incorrect);
  if(incorrect.length){reviewBtn.classList.remove("hidden");retryBtn.classList.remove("hidden");}
  else{reviewBtn.classList.add("hidden");retryBtn.classList.add("hidden");}
}
function showReview(list){
  reviewList.innerHTML="";
  list.forEach(q=>{
    const div=document.createElement("div");
    div.className="review-item";
    div.innerHTML=`<p class="review-q">${q.question}</p><p class="review-a"><strong>Correct:</strong> ${q.answers[q.correct]}</p>`;
    reviewList.appendChild(div);
  });
  hide(resultsEl); show(reviewEl);
}
backToResultsBtn.onclick=()=>{hide(reviewEl);show(resultsEl);};
retryFromReviewBtn.onclick=()=>startQuiz(selected.filter((q,i)=>userAnswers[i]!==q.correct));
playAgainBtn.onclick=()=>{hide(resultsEl);show(modeSelect);};

// -------------------- search --------------------
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
    item.innerHTML=`<p class="q">${i+1}. ${q.question}</p>`;
    const ansDiv=document.createElement("div");
    ansDiv.className="search-answers";
    q.answers.forEach((a,idx)=>{
      const opt=document.createElement("div");
      opt.className="opt";
      opt.textContent=a;
      if(idx===q.correct) opt.classList.add("correct");
      ansDiv.appendChild(opt);
    });
    ansDiv.style.display="none";
    item.appendChild(ansDiv);
    item.onclick=()=>{ ansDiv.style.display=ansDiv.style.display==="none"?"grid":"none"; };
    searchList.appendChild(item);
  });
}
searchInput.oninput=()=>{
  const term=searchInput.value.toLowerCase();
  const filtered=allQuestions.filter(q=>q.question.toLowerCase().includes(term)||q.answers.some(a=>a.toLowerCase().includes(term)));
  renderSearch(filtered);
};
backToMenuFromSearch.onclick=()=>{ hide(searchEl); show(modeSelect); };

// -------------------- theme --------------------
themeToggle.onclick=()=>{
  document.body.classList.toggle("dark");
  const isDark=document.body.classList.contains("dark");
  themeToggle.textContent=isDark?"🌞":"🌙";
  localStorage.setItem("theme",isDark?"dark":"light");
};
