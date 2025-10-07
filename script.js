const container = document.getElementById("questionsContainer");
const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

// Copy array so we don't mutate original
let allQuestions = Array.isArray(window.questions) ? window.questions.slice() : [];

function renderAll() {
  container.innerHTML = "";

  if (!allQuestions.length) {
    const msg = document.createElement("div");
    msg.className = "question-card";
    msg.innerHTML = "<em>No questions loaded.</em>";
    container.appendChild(msg);
    return;
  }

  allQuestions.forEach((q, i) => {
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

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  // Hide loading screen after a moment (optional)
  if (loadingScreen) setTimeout(() => (loadingScreen.style.display = "none"), 3500);

  // Restore theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "🌞";
  }

  // If questions became available after parse time, pick them up
  if (!allQuestions.length && Array.isArray(window.questions)) {
    allQuestions = window.questions.slice();
  }

  renderAll();
  themeToggle.addEventListener("click", toggleTheme);
});
