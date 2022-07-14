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

// playGame();
// playGame2();
// correctAnswer();
// wrongAnswer();