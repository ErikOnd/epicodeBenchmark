
let userScore = localStorage.getItem('userscore')

let userScorePercentage = userScore * 10;



function userScorePercentageDisplay() {
    let percentage = document.getElementsByClassName("per-heading")[0]
    console.log(percentage)
    percentage.innerText = userScorePercentage + "%";

    let subResult = document.getElementsByClassName("sub-text")[0]
    subResult.innerText = userScore + "/" + 10 + " questions"

}

userScorePercentageDisplay()

function userScorePercentageWrongDisplay() {
    let percentage = document.getElementsByClassName("per-heading")[1]
    percentage.innerText = 100 - userScorePercentage + "%";

    let subResult = document.getElementsByClassName("sub-text")[1]
    subResult.innerText = 10 - userScore + "/" + 10 + " questions"
}
userScorePercentageWrongDisplay()



let currentPie = `
--p: ${userScorePercentage};
  --b: 60px;
  --c: #00ffff;
  --w: 450px;

  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-size: 25px;
`;

function userScorePieChart() {
    let pie = document.getElementsByClassName("pie")[0]
    pie.style.cssText = "";
    pie.style.cssText = currentPie;
}

userScorePieChart()


function passedOrFailed() {
    if (userScore <= 5) {
        console.log('test');
        let child1 = document.getElementsByClassName("cong-heading")[0]
        child1.innerHTML = "<span>You haven't passed that exam</span>";
        let child2 = document.getElementsByClassName("highlight-color")[0]
        child2.innerText = '';
        let child3 = document.getElementsByClassName("sub-info-text")[0]
        child3.innerText = '';
        let child4 = document.getElementsByClassName("sub-info-text")[1]
        child4.innerText = '';
    }
}

passedOrFailed()

document.getElementsByClassName('rate-btn')[0].onclick = function () {
    location.href = "../feedback-page/feedback.html";
}