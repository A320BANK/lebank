const container = document.getElementById("questionsContainer"); // (unused now)
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

// Pull questions regardless of how they were declared
function getQuestionsArray() {
  try { if (typeof questions !== "undefined" && Array.isArray(questions)) return questions.slice(); } catch {}
  if (Array.isArray(window.questions)) return window.questions.slice();
  return [];
}
let allQuestions = getQuestionsArray();

// --- Quiz state ---
let selected = [];   // chosen subset
let idx = 0;         // current question index within selected
let score = 0;       // correct answers
let locked = false;  // prevent re-answering

// UI helpers
function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]] } return arr; }
function sample(arr,n){ arr = arr.slice(); shuffle(arr); return arr.slice(0,Math.min(n,arr.length)); }

// Setup
numLabel.textContent = numRange.value;
numRange.addEventListener("input", () => { numLabel.textContent = numRange.value; });

// Start quiz
startBtn.addEventListener("click", () => {
  const n = parseInt(numRange.value,10);
  selected = sample(allQuestions, n);
  idx = 0; score = 0;
  scoreEl.textContent = `Score: ${score}`;
  hide(setupEl); hide(resultsEl); show(quizEl);
  renderQuestion();
});

// Render one question
function renderQuestion() {
  locked = false;
  nextBtn.disabled = true;
  restartBtn.classList.add("hidden");

  const q = selected[idx];
  progressEl.textContent = `Question ${idx+1} of ${selected.length}`;
  questionText.textContent = q.question;

  // Prepare answers (shuffle but keep track of which is correct)
  const options = q.answers.map((text, i) => ({ text, i, correct: i === q.correct }));
  shuffle(options);

  answersContainer.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt.text;

    btn.addEventListener("click", () => {
      if (locked) return;
      locked = true;

      // mark all
      [...answersContainer.children].forEach(b => b.disabled = true);
      if (opt.correct) {
        btn.classList.add("correct");
        score++; scoreEl.textContent = `Score: ${score}`;
      } else {
        btn.classList.add("wrong");
        // highlight the correct one
        [...answersContainer.children].find(b => b.dataset.correct === "true")?.classList.add("correct");
      }
      nextBtn.disabled = false;
      if (idx === selected.length - 1) {
        nextBtn.textContent = "Finish";
      }
    });

    btn.dataset.correct = String(opt.correct);
    answersContainer.appendChild(btn);
  });

  // Reset button label each question
  nextBtn.textContent = "Next ➜";
}

nextBtn.addEventListener("click", () => {
  if (idx < selected.length - 1) {
    idx++;
    renderQuestion();
  } else {
    // finished
    hide(quizEl); show(resultsEl);
    finalTitle.textContent = "Quiz complete!";
    finalScore.textContent = `You scored ${score} / ${selected.length}`;
    restartBtn.classList.add("hidden");
  }
});

playAgainBtn.addEventListener("click", () => {
  // back to setup
  hide(resultsEl); show(setupEl);
});

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

  // If questions weren’t ready at parse time, grab them now
  if (!allQuestions.length) allQuestions = getQuestionsArray();
});
