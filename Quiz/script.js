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
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
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
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

  window.onload = function () {
    shuffleAnserts()
    displayQnA ()
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



let allAnswers = [];

function getAllAnswers ()
{
    for (i = 0; i<questions.length; i++)
    {
        allAnswers.push(questions[i].incorrect_answers)
        allAnswers[i].push(questions[i].correct_answer)
    }
}
getAllAnswers ()


function shuffleAnserts() {
    for (let singleArr of allAnswers) {
        let i = singleArr.length;
        let randomNumber = 0;
        let temp = 0;
        while (--i > 0) {
            randomNumber = Math.floor(Math.random() * (i + 1));
            temp = singleArr[randomNumber];
            singleArr[randomNumber] = singleArr[i]
            singleArr[i] = temp;
        }
    }
}

 
let currentQuestion = 0;

function displayQnA ()
{
    let areaForNewQuestion = document.getElementById("question-area")
    let newQuestion = document.createElement("div")
    areaForNewQuestion.appendChild(newQuestion)

    let createdQuestion = document.createElement("div");
    createdQuestion.innerHTML = questions[currentQuestion].question
    newQuestion.appendChild(createdQuestion)

    for (let i = 0; i < allAnswers[currentQuestion].length; i++)
    {
        let createdAnswers = document.createElement("div")
        createdAnswers.innerHTML = allAnswers[currentQuestion][i]
        createdAnswers.classList.add("new-question")
        createdAnswers.addEventListener('click', function(event){
            event.target.classList.toggle("selected")
        })
        newQuestion.appendChild(createdAnswers)
    }
    currentQuestion++;    
}

function deleteQnA ()
{
    let parent = document.getElementById("question-area")
    parent.innerHTML= "";
}

let selectedAnswers = [];
let userScore = 0;

function storeAnswers() {
  let userSelected = document.getElementsByClassName("selected")
  if (userSelected.length === 1 && userSelected[0].innerText === questions[currentQuestion-1].correct_answer)
  {
    
    userScore++;
  }
  console.log(userScore)
}

function nextQnA ()
{

  if (typeof questions[currentQuestion] === 'undefined')
    {
      document.getElementById("nextButton").classList.add("disappear")
    }

    storeAnswers()
    deleteQnA ()
    displayQnA ()
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