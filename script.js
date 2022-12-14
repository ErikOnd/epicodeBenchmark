const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following syntax is correct to refer an external script called “formValidation.js”?",
    options: [
      "<script src = “formValidation.js”>",
      "<script name = “formValidation.js”>",
      "<script href = “formValidation.js”>",
      "<script source = “formValidation.js”>",
    ],
    correct_answer: 0,
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "myArray.____ is an array method useful for removing the last element.",
    options: ["extract()", "slice()", "pop()", "removeLast()"],
    correct_answer: 2,
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which one of the following is not a primitive data type in JavaScript?",
    options: ["undefined", "boolean", "number", "char"],
    correct_answer: 3,
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: `What is the result of document.querySelector("#test") when there is no element with id test in the DOM?`,
    options: ["null", "undefined", "[ ]", "error"],
    correct_answer: 1,
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: `The external JavaScript file must contain the <script> tag.`,
    options: ["false", "true"],
    correct_answer: 0,
  },
];
const questionText = document.querySelector("#question-text");
const optionContainer = document.querySelector(".option-container");
const questionNumber = document.querySelector(".question-number");
const nextBtn = document.getElementById("next-btn");
let timerCount = document.getElementById("timer-app");

let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
let availableOption = [];
let counter;
let timeValue = 20;
let correctAnswer = 0;
let attempt = 0;

// push the questions into availableQuestions array
function setAvailableQuestions() {
  const totalQuestion = questions.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestion.push(questions[i]);
  }
  //   console .log(availableQuestion);
}

// set question number and question options
function getNewQuestion() {
  questionNumber.innerHTML =
    "QUESTION " + (questionCounter + 1) + "/" + questions.length;
  // set question text
  // get random question
  const questionIndex =
    availableQuestion[Math.floor(Math.random() * availableQuestion.length)];
  console.log(questionIndex);
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.question; //   console.log(currentQuestion);
  const index1 = availableQuestion.indexOf(questionIndex); // get the position of 'questionIdex' from the availableQuestion array
  // remove the 'questionIndex' from the avalableQuestion array, so question not repeat
  availableQuestion.splice(index1, 1);

  // set options
  // length of the otions
  const optionLength = currentQuestion.options.length; // console.log("currentquestionsoption", optionLength);

  // push options in availableOptions

  for (let i = 0; i < optionLength; i++) {
    availableOption.push(i);
  }
  optionContainer.innerHTML = ""; // console.log("options", availableOption); // console.log("availableques", currentQuestion);

  //create options in html
  for (let i = 0; i < optionLength; i++) {
    // random option
    const optionIndex =
      availableOption[Math.floor(Math.random() * availableOption.length)];
    // get the position of otionIndex fron availableOptions
    const index2 = availableOption.indexOf(optionIndex);
    // remove the optionIndex fron AvailableOtions, so option not repeate
    availableOption.splice(index2, 1); // console.log("index", optionIndex); // console.log("options", availableOption);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex]; // console.log("options", option.innerHTML);
    option.id = optionIndex;
    option.className = "option btn-gradient";
    optionContainer.appendChild(option); // console.log("currentoption", currentOption);
    option.setAttribute("onclick", "getResult(this)");
    // option.setAttribute("onclick", function (event) {

    //   option.classList.add("select");
    // });
  }
  questionCounter++;
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timerCount.textContent = time;
    time--;
  }
}

// get the result of current attempt questions
function getResult(element) {
  element.classList.toggle("select");

  // const id = parseInt(element.id);
  // if (id === currentQuestion.correct_answer) {
  //   element.classList.add("correct");
  // } else {
  //   element.classList.add("wrong");

  // if answer is wrong show correct answer
  // const optionLength = optionContainer.children.length;
  // for (let i = 0; i < optionLength; i++) {
  //   if (
  //     parseInt(optionContainer.children[i].id) ===
  //     currentQuestion.correct_answer
  //   ) {
  //     optionContainer.children[i].classList.add("correct");
  //   }
  // }
  // }
  // unclickableOptions();
}

// make all options unclickable once user select a option
function unclickableOptions() {
  const optionLength = optionContainer.children.length;
  for (let i = 0; i < optionLength; i++) {
    optionContainer.children[i].classList.add("already-answered");
  }
}

function quizOver() {
  nextBtn.setAttribute("href", "./score page/score.html");
}

function nextButton() {
  if (questionCounter === questions.length) {
    console.log("quiz over");
    quizOver();
  } else {
    getNewQuestion();
  }
}

window.onload = function () {
  // first we set all questions in availableQuestion array
  setAvailableQuestions();
  clearInterval(counter);
  startTimer(timeValue);
  //  call getNewQuestion() function
  getNewQuestion();
  nextBtn.addEventListener("click", function () {
    nextButton();
  });
};
