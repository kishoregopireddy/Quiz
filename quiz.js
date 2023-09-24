const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

const quizData = [
  {
    question: "1.What is the capital of Telangana?",
    options: ["Hyderabad", "Kurnool", "Warangal", "Vizag"],
    answer: "Hyderabad",
  },
  {
    question: "2.Where is thousand pillars in Telangana?",
    options: ["Hyderabad", "Karimnagar", "Warangal", "Adilabad"],
    answer: "Warangal",
  },
  // Add more quiz questions here
];

let currentQuestion = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";
  currentQuizData.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", checkAnswer);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(event) {
  const selectedOption = event.target.innerText;
  const correctAnswer = quizData[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    resultElement.innerText = "Correct!";
  } else {
    resultElement.innerText = "Incorrect. Try again.";
  }
}

submitButton.addEventListener("click", () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
    resultElement.innerText = "";
  } else {
    resultElement.innerText = "Quiz completed!";
    optionsElement.innerHTML = "";
  }
});

loadQuestion();