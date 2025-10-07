const container = document.getElementById("questionsContainer");
const searchInput = document.getElementById("searchInput");
const resetButton = document.getElementById("resetFilters");
const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

// Copy array so we never mutate the original
let allQuestions = Array.isArray(window.questions) ? window.questions.slice() : [];

function renderQuestions(list) {
  container.innerHTML = "";

  if (!list || !list.length) {
    const empty = document.createElement("div");
    empty.className = "question-card";
    empty.innerHTML = `<em>No questions match your search.</em>`;
    container.appendChild(empty);
    return;
  }

  list.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const title = document.createElement("h3");
    title.textContent = `${i + 1}. ${q.question}`;

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
    card.appendChild(answersList);
    container.appendChild(card);
  });
}

function filterQuestions() {
  const term = searchInput.value.toLowerCase();
  const filtered = allQuestions.filter(q =>
    q.question.toLowerCase().includes(term) ||
    (q.answers || []).some(a => a.toLowerCase().includes(term))
  );
  renderQuestions(filtered);
}

function resetFilters() {
  searchInput.value = "";
  renderQuestions(allQuestions);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  // Hide loading after a moment
  if (loadingScreen) setTimeout(() => (loadingScreen.style.display = "none"), 3500);

  // Restore theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "🌞";
  }

  // Safety: if data hasn’t loaded yet, warn (page will still show message)
  if (!allQuestions.length && Array.isArray(window.questions)) {
    allQuestions = window.questions.slice();
  }

  renderQuestions(allQuestions);

  searchInput.addEventListener("input", filterQuestions);
  resetButton.addEventListener("click", resetFilters);
  themeToggle.addEventListener("click", toggleTheme);
});
