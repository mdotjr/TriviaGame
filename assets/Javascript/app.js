$(document).ready(function() {

//create a function that starts countdown once Start game is pressed
function countdown () {
var seconds = 60;
function tick () {
    var counter = document/getElementById("counter");
    seconds--;
    counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if ( seconds > 0 ) {
        setTimeout (tick, 1000);
    }else{
        alert("Game Over");
    } 
}
tick ();
}   
//start countdown
countdown();


//display questions, answers, and correct answers

var questionArray = [
{ 
    question:"What team did Michael Jordan play most of his career?",
    answers: {
        1: 'Chicago Bulls',
        2: 'Washington WIzards',
        3: 'Cleveland Cavaliers',
        4: 'Orlando Magic',
    },
       correctAnswers: '1.'
},  
{
    question: "Who scored 100 points in a single NBA game?",
    answers: {
        1: 'Kobe Bryant',
        2: 'Michael Jordan',
        3: 'Wilt Chamberlain',
        4: 'Larry Bird', 
    },
       correctAnswers: '3.'
},

{
    question: "How many championships did Shaq and Kobe win together?",
    answers: {
        1: 'Two',
        2: 'Three',
        3: 'One',
        4: 'Four',
    },
      correctAnswers: '2.'
},
{
    question: "Which team did Lebron James play against in his first ever Finals appearance?",
    answers: {
        1: 'San Antonio Spurs',
        2: 'Houston Rockets',
        3: 'Golden State Warriors',
        4: 'Los Angeles Lakers',
    },
    correctAnswers: '1.'
},
{
    question: "What  year did Allen Iverson win league MVP?",
    answers: {
        1: '1999',
        2: '2000',
        3: '2001',
        4: '2002',
    },
    correctAnswers: '3.'
},
{
    questions: "Which team had the most regular season wins in NBA history?",
    answers: {
        1: 'Los Angeles Lakers',
        2: 'Chicago Bulls',
        3: 'San Antonio Spurs',
        4: 'Golden State Warriors',
    },
    correctAnswers: '4.'
},
{
    question: "What city did the Oklahoma City Thunder come from?",
    answers: {
        1: 'New Orleans',
        2: 'Seattle',
        3: 'Miami',
        4: 'New York',
    },
    correctAnswers: '2.'
},
{
    question: "What was the only team Tim Duncan played for?",
    answers: {
        1: 'San Antonio Spurs',
        2: 'Dallas Mavericks',
        3: 'Toronto Raptors',
        4: 'New York Knicks',
    },
    correctAnswers: '1.'
 }   
];






function generateGame(questions, game, resultsContainer, submitButton); {

function showQuestions(questions, game); {
  var output = [];
  var answers;
  
  //for loop each question
  for (var i=0; i < questions.length; i++){

    //reset the list on answers

    answers = [];


  }   



}



function showResults(questions, game, resultsContainer) {

}

showQuestions(questions, game);


}














// Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;    

});


























var startScreen;
var gameHTML;
var seconds = 60;
var counter = 60;
var questionArray = ["What team did Michael Jordan play most of his career?", "Who scored 100 points in a single NBA game?", "How many championships did Shaq and Kobe win together?", "Which team did Lebron James play against in his first ever Finals appearance?", "What  year did Allen Iverson win league MVP?", "Which team had the most regular season wins in NBA history?", "What city did the Oklahoma City Thunder come from?", "What was the only team Tim Duncan played for?"];
var answerArray = [["Chicago Bulls", "Washington Wizards", "Cleveland Cavaliers", "Orlando Magic"], ["Kobe Bryant","Michael Jordan","Wilt Chamberlain","Larry Bird"], ["Two", "Three", "One", "Four"], ["San Antonio Spurs","Houston Rockets","Golden State Warriors","Los Angeles Lakers"], ["1999", "2000", "2001", "2002"], ["Los Angeles Lakers","Chicago Bulls","San Antonio Spurs","Golden State Warriors"], ["New Orleans", "Miami", "Seattle", "New York"], ["San Antonio Spurs","Dallas Mavericks","Toronto Raptors","New York Knicks"]];
var correctAnswers = ["1. Chicago Bulls", "3. Wilt Chamberlain", "2. Three", "1. San Antonio Spurs", "3. 2001", "4. Golden State Warriors", "3. Seattle", "1. San Antonio Spurs"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;
