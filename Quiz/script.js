const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
    time: 16,
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
    time: 16,
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    time: 16,
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    time: 6,
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
    time: 6,
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    time: 6,
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
    time: 6,
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    time: 6,
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
    time: 6,
  },
];

window.onload = function () {
  shuffleAnserts();
  displayQnA();
  // HINTS
  // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
  // For each question, create a container for wrapping it; then create a radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // with, as options, both the correct answer and the incorrect ones
  // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
  //
  // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  // Display the first question with the text and the radio buttons
  // when the user selects an answer, pick the next question from the array and replace the old one with it
  // saving the user's choice in a variable
};

// How to calculate the result? You can do it in 2 ways:
// If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer

let currentQuestion = 0;
let allAnswers = [];
let selectedAnswers = [];
let userScore = 0;
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

let TIME_LIMIT = questions[currentQuestion].time;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <div class="inner-timer-text">
  <span class="small">SECONDS</span>
  
  <span id="base-timer-label" class="base-timer__label">${formatTime(
  timeLeft
)}</span>
<span class="small">REMAINING</span>
</div>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
  timePassed = -1;
  nextQnA()
}


function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);
    if (timeLeft === 0) {
      onTimesUp();

    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (seconds < 60) {
    return seconds;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft > warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(alert.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(info.color);
  }
  else if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);

  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}


function getAllAnswers() {
  for (i = 0; i < questions.length; i++) {
    allAnswers.push(questions[i].incorrect_answers);
    allAnswers[i].push(questions[i].correct_answer);
  }
}
getAllAnswers();

function shuffleAnserts() {
  for (let singleArr of allAnswers) {
    let i = singleArr.length;
    let randomNumber = 0;
    let temp = 0;
    while (--i > 0) {
      randomNumber = Math.floor(Math.random() * (i + 1));
      temp = singleArr[randomNumber];
      singleArr[randomNumber] = singleArr[i];
      singleArr[i] = temp;
    }
  }
}

function displayQnA() {
  let areaForNewQuestion = document.getElementById("question-area");
  let newQuestion = document.createElement("div");
  areaForNewQuestion.appendChild(newQuestion);

  let createdQuestion = document.createElement("div");
  createdQuestion.innerHTML = questions[currentQuestion].question;

  newQuestion.appendChild(createdQuestion);
  createdQuestion.classList.add("question");
  for (let i = 0; i < allAnswers[currentQuestion].length; i++) {
    let createdAnswers = document.createElement("div");
    createdAnswers.innerHTML = allAnswers[currentQuestion][i];
    createdAnswers.classList.add("options");
    createdAnswers.addEventListener("click", function (event) {
      let previouslySelectedOption = document.querySelector(".selected");
      if (previouslySelectedOption !== null) {
        previouslySelectedOption.classList.remove("selected");
      }
      let clickedOptionNode = event.target;
      clickedOptionNode.classList.add("selected");
      // event.target.classList.toggle("selected");
    });
    newQuestion.appendChild(createdAnswers);
  }
  currentQuestion++;
}

function deleteQnA() {
  let parent = document.getElementById("question-area");
  parent.innerHTML = "";
}

function storeAnswers() {
  let userSelected = document.getElementsByClassName("selected");
  if (
    userSelected.length === 1 &&
    userSelected[0].innerText === questions[currentQuestion - 1].correct_answer
  ) {
    userScore++;
  }
}
let counter = 1;
let questionCounter = document.createElement('p')

function showCurrentQuestion() {
  let parentDiv = document.getElementById('bottom-part')
  parentDiv.appendChild(questionCounter)
  questionCounter.innerHTML = `<p style="font-size:25px">QUESTION ${counter}  <span style="color:#d20094">/ 10<span</p>`
  counter++;
}
showCurrentQuestion()

function nextQnA() {
  if (typeof questions[currentQuestion + 1] === "undefined") {
    document.getElementById("nextButton").onclick = function () {
      location.href = "../result-page/results-page.html";
    };
  }

  if (currentQuestion === questions.length) {
    location.replace("../result-page/results-page.html")
  }
  else {
    clearInterval(timerInterval);
    timePassed = -1;
    localStorage.setItem("userscore", userScore);
    storeAnswers();
    deleteQnA();
    displayQnA();
    startTimer();
    showCurrentQuestion()
  }
}










// function unselectSelected ()
// {
//   for (let i = 0; i < allAnswers[i].length; i++)
//     {
//         let selected = document.getElementsByClassName("selected")[i]
//         selected.addEventListener('click', function(event){
//             if (event.target.classList.contains("selected"))
//             event.target.classList.remove("selected")
//         })
//      }
// }
