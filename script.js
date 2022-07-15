//global variables
//connect JS to the question text, answer text, countdown, and highscore link

var button = document.getElementById("playGameButton");
var quizContainer = document.getElementById("quizContainer")
var quizQuestions = document.getElementById("question");
var a = document.getElementById("answer1"); 
var b = document.getElementById("answer2");
var c = document.getElementById("answer3");
var d = document.getElementById("answer4");
var timer = document.getElementById("countdown");
var score = document.getElementById("scoreContainer");
var secondsLeft = 75;//the 75 doesnt display so i changed it to 76 but im sure thats not the right way to fix it
var score = 0;
var index = 0;
button.addEventListener('click', playGame);
button.addEventListener('click', setTime);
a.addEventListener('click', nextQuestion);
b.addEventListener('click', nextQuestion);
c.addEventListener('click', nextQuestion);
d.addEventListener('click', nextQuestion);
//array containing questions answers and correct answer
quizArray = [
    {
        question: "What is the name of the content you put inside of []?",
        answers: {
            a: 'Object',
            b: 'String',
            c: 'Array',
            d: 'Number'
        },
        correctAnswer: 'Array'
    },
    
    {
        question: "What special character is used in CSS to represent the 'universal selector'?",
        answers: {
            a: '*',
            b: '!',
            c: '=',
            d: '$'
        },
        correctAnswer: '*'
    },

    {
        question: "What is a value a 'boolean object' can represent?",
        answers: {
            a: 'String',
            b: 'For Loop',
            c: 'Math',
            d: 'True'
        },
        correctAnswer: 'True'
    },

    {
        question: "What HTML tag will insert line breaks in your text?",
        answers: {
            a: '<p>',
            b: '<space>',
            c: '<br>',
            d: '<indent>'
        },
        correctAnswer: '<br>'
    },

    {
        question: "",
        answers: {
            a: '',
            b: '',
            c: '',
            d: ''
        },
        correctAnswer: '' 
    }

];
 

console.log(quizArray[index]);
   
    

    var timer;
    var timerInterval;  
    var clearInterval; 
    function setTime() {
        
        
        var timerInterval = setInterval(() => {
            timer.textContent = secondsLeft;
            secondsLeft--;
            
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                timer.textContent = "";
                gameEnd();
            };
            if (index === 4) {
                clearInterval(timerInterval);
                timer.textContent = "";
            };
            
        }, 1000);
        

    };

    

function playGame() {

   var currentQuestion = quizArray[index];
    
   var question = currentQuestion.question;
   var choiceA = currentQuestion.answers.a;
   var choiceB = currentQuestion.answers.b;
   var choiceC = currentQuestion.answers.c;
   var choiceD = currentQuestion.answers.d;

    quizQuestions.textContent = question;
    a.textContent = choiceA;
    b.textContent = choiceB;
    c.textContent = choiceC;
    d.textContent = choiceD;
};
    
function nextQuestion(event) {
    
    var user = event.target.textContent;
    var correctAnswer = quizArray[index].correctAnswer;
    
    index++;
    //user click == correct answer, ++ score and move on to next question
    //else -- score and - 5 seconds
    
    if (correctAnswer == user) { 
        score++;
        
    }else{
        score--;
        secondsLeft = secondsLeft -5;
           
    };

    if (index == 4){
        gameEnd();
    };

    playGame();
         
};

function gameEnd(){
    
    confirm("Your score is " + score + ". Would you like to record it?");
};





//functions
//function for button that begins timer and questions
//countdown function
//functions that include the questions and all the answer choices
//a wrong answer will subtract time 
//right or wrong it will move on and repopulate the question/answer boxes with new questions/answers
//link to highscores and store high scores with local storage

//if you click the button more than once it speeds up the time, I need to fix that later

    




  


//call all the functions

console.log(score);
