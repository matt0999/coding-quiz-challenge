//global variables
//connect JS to the question text, answer text, countdown, and highscore link

const timer = document.getElementById("countdown");
const question = document.getElementById("question");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const button = document.getElementById("playGameButton");
var secondsLeft = 76; //the 75 doesnt display so i changed it to 76 but im sure thats not the right way to fix it
//functions
//function for button that begins timer and questions
//countdown function
//functions that include the questions and all the answer choices
//a wrong answer will subtract time 
//right or wrong it will move on and repopulate the question/answer boxes with new questions/answers
//link to highscores and store high scores with local storage

//if you click the button more than once it speeds up the time, I need to fix that later

button.addEventListener('click', function setTime(){ 
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = " " + secondsLeft;
        
        if(secondsLeft === 0){
          clearInterval(timernterval);
          //pop up asking forname and if youd like to record your score
        }
    
      }, 1000);
});

function playgame(){
    question.textContent = "What is the name of the content you put inside of []?";
};

// function setTime() {
    
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timer.textContent = " " + secondsLeft;

//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         //pop up asking for name and if youd like to record your score
//       }
  
//     }, 1000);
//   }

  


//call all the functions
button();
setTime();
playgame();
