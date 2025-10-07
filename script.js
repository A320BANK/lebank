// --- Safe globals & DOM refs ---
const container = document.getElementById("questionsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resetButton = document.getElementById("resetFilters");
const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

// Pick up questions from whichever data file loaded first
// (questions_categorized.js or questions.js)
let allQuestions = Array.isArray(window.questions) ? window.questions.slice() : [];

// Normalize category (missing => "Other")
function normCategory(q) {
  return (q.category && String(q.category).trim()) || "Other";
}

// --- Render ---
function renderQuestions(list) {
  container.innerHTML = "";
  if (!list || list.length === 0) {
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
      const show = answersList.style.display === "none";
      answersList.style.display = show ? "block" : "none";
    });

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(answersList);
    container.appendChild(card);
  });
}

// --- Filtering ---
function filterQuestions() {
  const term = searchInput.value.toLowerCase();
  const selected = categoryFilter.value; // "All" or a real category

  const filtered = allQuestions.filter((q) => {
    const cat = normCategory(q);
    const matchesCategory = selected === "All" || cat === selected;
    const matchesSearch =
      q.question.toLowerCase().includes(term) ||
      (q.answers || []).some((a) => a.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  });

  renderQuestions(filtered);
}

// --- Reset ---
function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "All";
  renderQuestions(allQuestions); // always restore full list
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
  // Hide loading screen after a tick
  if (loadingScreen) setTimeout(() => (loadingScreen.style.display = "none"), 3500);

  // Theme restore
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "🌞";
  }

  // If data hasn’t loaded yet (rare on GH Pages), retry briefly
  if (!allQuestions.length && Array.isArray(window.questions)) {
    allQuestions = window.questions.slice();
  }

  // Final safety: if still empty, show an info card instead of blank
  if (!allQuestions.length) {
    console.warn("No questions found. Did the data file load?");
  }

  renderQuestions(allQuestions);

  // Listeners
  searchInput.addEventListener("input", filterQuestions);
  categoryFilter.addEventListener("change", filterQuestions);
  resetButton.addEventListener("click", resetFilters);
  themeToggle.addEventListener("click", toggleTheme);
});