const container = document.getElementById("questionsContainer");
const themeToggle = document.getElementById("themeToggle");
const loadingScreen = document.getElementById("loading-screen");

// Grab questions from whichever global is present
function getQuestionsArray() {
  try {
    if (typeof questions !== "undefined" && Array.isArray(questions)) return questions.slice();
  } catch (_) {}
  if (Array.isArray(window.questions)) return window.questions.slice();
  return [];
}

let allQuestions = getQuestionsArray();

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
  if (loadingScreen) setTimeout(() => (loadingScreen.style.display = "none"), 1000);

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "🌞";
  }

  // In case the data script loaded after this file parsed:
  if (!allQuestions.length) allQuestions = getQuestionsArray();

  renderAll();
  themeToggle.addEventListener("click", toggleTheme);
});
