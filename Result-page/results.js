let userScore = localStorage.getItem("userscore");

let userScorePercentage = userScore * 10;

function userScorePercentageDisplay() {
  let percentage = document.getElementsByClassName("per-heading")[0];
  console.log(percentage);
  percentage.innerText = userScorePercentage + "%";

  let subResult = document.getElementsByClassName("sub-text")[0];
  subResult.innerText = userScore + "/" + 10 + " questions";
}

userScorePercentageDisplay();

function userScorePercentageWrongDisplay() {
  let percentage = document.getElementsByClassName("per-heading")[1];
  percentage.innerText = 100 - userScorePercentage + "%";

  let subResult = document.getElementsByClassName("sub-text")[1];
  subResult.innerText = 10 - userScore + "/" + 10 + " questions";
}
userScorePercentageWrongDisplay();

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
  let pie = document.getElementsByClassName("pie")[0];
  pie.style.cssText = "";
  pie.style.cssText = currentPie;
}

userScorePieChart();
