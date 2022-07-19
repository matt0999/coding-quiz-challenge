var scoreList = document.getElementById("scores");
var userName = document.getElementById("userName");
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    var userName = document.getElementById("userName").value;

    if (userName === "") {
        alert("error", "Please enter valid name.");
    }else {
        localStorage.setItem("userName", userName);
    }
localStorage.setItem("scores", JSON.stringify (scores));
    recordScore();

}); 



function recordScore() {
    scoreList.textContent = localStorage.getItem("userName") + ": " + localStorage.getItem("score");
   var grade = JSON.parse (localStorage.getItem("scores"));
};