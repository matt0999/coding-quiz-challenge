var scoreList = document.getElementById("scores");
var userName = document.getElementById("userName");
var submitButton = document.getElementById("submit");

let scoreBoard = [];

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    var userName = document.getElementById("userName").value;

    if (userName === "") {
        alert("error", "Please enter valid name.");
    }else {
        scoreBoard.push({name: userName, score: scores});
        
        localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
    }
localStorage.setItem("scores", JSON.stringify (scores));
    recordScore();

}); 



function recordScore() {
    scoreList.textContent = localStorage.getItem("userName") + ": " + localStorage.getItem("score");
   var grade = JSON.parse (localStorage.getItem("scores"));
};