// --- DOM refs ---
const container = document.getElementById("questionsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resetButton = document.getElementById("resetFilters");
const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

// --- Category mapping (runtime auto-categorize) ---
const CAT_MAP = {
  "Performance": ["takeoff","landing","climb","weight","distance","v1","flex","stop margin","screen height"],
  "Hydraulics": ["hydraulic","ptu","yellow system","blue system","green system"],
  "APU": ["apu","auxiliary power"],
  "Engine": ["engine","n1","n2","thrust","starter","fadec","autothrust","anti-ice (engine)"],
  "Electrical": ["battery","generator","ac bus","dc bus","ac ess","tr","elec","emergency generator","bus tie"],
  "Flight Controls": ["rudder","aileron","spoiler","elevator","flap","sidestick","elac","fac","sec","normal law","alternate law","direct law"],
  "Communications": ["vhf","hf","radio","rmp","acars","audio"],
  "Ice and Rain Protection": ["anti-ice","de-ice","ice","window heat","wai","eai","icing"],
  "Indicating/Recording Systems": ["ecam","warning","recorder","display","fma","pfd","nd","e/wd","sd","memo"],
  "Landing Gear": ["gear","brake","tyre","tire","wheel","lgciu","shock absorber"],
  "Fire Protection": ["fire","smoke","extinguisher","bottle","squib"],
  "Auto Flight": ["autopilot","flight director","autothrust","fmgs","appr","flare mode"],
  "Air Systems": ["bleed","pressurization","pack","air conditioning","pack flow","ram air","cond"],
  "Limitations": ["limitation","max ","maximum","minimum","demonstrated","vmo","mmo","crosswind"],
  "Navigation": ["ils","vor","gps","navigation","loc","g/s","dme","nd","adiru","irs","eosid"],
  "Other": []
};

function pickCategory(text) {
  const t = String(text || "").toLowerCase();
  for (const [cat, words] of Object.entries(CAT_MAP)) {
    if (cat === "Other") continue;
    if (words.some(w => t.includes(w))) return cat;
  }
  return "Other";
}

// Prefer categorized file if present, otherwise original
let allQuestions = Array.isArray(window.questions) ? window.questions.slice() : [];
// Add category at runtime if missing
allQuestions = allQuestions.map(q => ({
  ...q,
  category: (q.category && String(q.category).trim()) || pickCategory(q.question)
}));

function normCategory(q){ return (q.category && String(q.category).trim()) || "Other"; }

// --- Render ---
function renderQuestions(list) {
  container.innerHTML = "";
  if (!list || !list.length) {
    const empty = document.createElement("div");
    empty.className = "question-card";
    empty.innerHTML = `<em>No questions match your filters.</em>`;
    container.appendChild(empty);
    return;
  }
  list.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const title = document.createElement("h3");
    title.textContent = `${i + 1}. ${q.question}`;

    const meta = document.createElement("div");
    meta.style.fontSize = "0.9rem";
    meta.style.opacity = "0.7";
    meta.textContent = `Category: ${normCategory(q)}`;

    const answersList = document.createElement("ul");
    answersList.className = "answers";
    answersList.style.display = "none";

    (q.answers || []).forEach((a, j) => {
      const li = document.createElement("li");
      li.textContent = a;
      if (j === q.correct) li.classList.add("correct");
      answersList.appendChild(li);
    });

    title.addEventListener("click", () => {
      answersList.style.display = answersList.style.display === "none" ? "block" : "none";
    });

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(answersList);
    container.appendChild(card);
  });
}

// --- Filter / Reset ---
function filterQuestions() {
  const term = searchInput.value.toLowerCase();
  const sel = categoryFilter.value;
  const out = allQuestions.filter(q => {
    const matchesCat = sel === "All" || normCategory(q) === sel;
    const matchesTxt = q.question.toLowerCase().includes(term) ||
      (q.answers || []).some(a => a.toLowerCase().includes(term));
    return matchesCat && matchesTxt;
  });
  renderQuestions(out);
}

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "All";
  renderQuestions(allQuestions);
}

// --- Theme ---
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark"); themeToggle.textContent = "🌞";
  }
  setTimeout(() => { if (loadingScreen) loadingScreen.style.display = "none"; }, 3500);

  renderQuestions(allQuestions);
  searchInput.addEventListener("input", filterQuestions);
  categoryFilter.addEventListener("change", filterQuestions);
  resetButton.addEventListener("click", resetFilters);
  themeToggle.addEventListener("click", toggleTheme);
});
