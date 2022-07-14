//global variables
//connect JS to the question text, answer text, countdown, and highscore link

const timer = document.getElementById("countdown");
//const question = document.getElementById("question");
const answer1 = document.getElementById("answer1"); 
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const button = document.getElementById("playGameButton");
var secondsLeft = 76; //the 75 doesnt display so i changed it to 76 but im sure thats not the right way to fix it
var score = 0;
var questions = document.getElementById("question") [
    {
        prompt: "What is the name of the content you put inside of []?"
    },
    
    {
        prompt: "What special character is used in CSS to represent the 'universal selector'?"
    },

    {
        prompt: "What is a 'boolean object'?"
    },

    {
        prompt: "What HTML tag will insert line breaks in your text?"
    }
];



//functions
//function for button that begins timer and questions
//countdown function
//functions that include the questions and all the answer choices
//a wrong answer will subtract time 
//right or wrong it will move on and repopulate the question/answer boxes with new questions/answers
//link to highscores and store high scores with local storage

//if you click the button more than once it speeds up the time, I need to fix that later
function startButton(){
button.addEventListener('click', setTime);

button.addEventListener('click', playGame);
    
function setTime() {
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = " " + secondsLeft;

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        //pop up asking for name and if youd like to record your score
      }
  
    }, 1000);
  }
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

// function playGame() {
//     question.textContent = "What is the name of the content you put inside of [ ]?";

//     answer1.textContent = "Object";
//     answer1.addEventListener('click', wrongAnswer);
    
//     answer2.textContent = "String";
//     answer2.addEventListener('click', wrongAnswer);

//     answer3.textContent= "Array"; 
//     answer3.addEventListener('click', correctAnswer);

//     answer4.textContent = "number"
//     answer4.addEventListener('click', wrongAnswer);
    
    
//     correctAnswer();
    
//     wrongAnswer();
// };


// function correctAnswer() {
//     points ++;
//     secondsLeft ++;
// };

// function wrongAnswer() {
//  secondsLeft --;
//  points --;
// };


  


//call all the functions
startButton();
setTime();
// playGame();
// playGame2();
// correctAnswer();
// wrongAnswer();
console.log(points);
