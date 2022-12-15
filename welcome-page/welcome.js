document.getElementById("proceed-button").onclick = function () {
    let checkbox = document.getElementById("promise-checkbox")
    console.log(checkbox.checked)
    if (checkbox.checked)
        location.href = "../quiz/quiz.html";
    else {
        alert("Promise us that you are not going to cheat ;)")
    }
};

