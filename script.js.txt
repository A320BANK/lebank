const container = document.getElementById("questionsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resetButton = document.getElementById("resetFilters");
const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => loadingScreen.style.display = "none", 3500);

  renderQuestions(questions);

  searchInput.addEventListener("input", filterQuestions);
  categoryFilter.addEventListener("change", filterQuestions);
  resetButton.addEventListener("click", resetFilters);
  themeToggle.addEventListener("click", toggleTheme);

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "🌞";
  }
});

function renderQuestions(list) {
  container.innerHTML = "";
  list.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `${i + 1}. ${q.question}`;

    const answersList = document.createElement("ul");
    answersList.className = "answers";

    q.answers.forEach((a, j) => {
      const li = document.createElement("li");
      li.textContent = a;
      if (j === q.correct) li.classList.add("correct");
      answersList.appendChild(li);
    });

    questionTitle.addEventListener("click", () => {
      answersList.style.display = answersList.style.display === "none" ? "block" : "none";
    });

    card.appendChild(questionTitle);
    card.appendChild(answersList);
    container.appendChild(card);
  });
}

function filterQuestions() {
  const term = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = questions.filter(q => {
    const matchesCategory = category === "All" || q.category === category;
    const matchesSearch =
      q.question.toLowerCase().includes(term) ||
      q.answers.some(a => a.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  });
  renderQuestions(filtered);
}

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "All";
  renderQuestions(questions);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}