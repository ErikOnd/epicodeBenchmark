document.getElementById("proceed-button").onclick = function () {
    let checkbox = document.getElementById("promise-checkbox")
    console.log(checkbox.checked)
    if (checkbox.checked) 
    location.href = "../feedback-page/feedback.html";
    else {
        alert("You have to agree!")
    }
};

