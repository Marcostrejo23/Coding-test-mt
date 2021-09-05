let examBox = document.getElementById("#exam");
let startButton = document.getElementById("start-button");
let submitButton = document.getElementById("submit");
let resultsPage = document.getElementById("results");
var timeEl = document.getElementById("#time");
let answerNum = 0
function startQuiz(){};
function showResults(){};

startButton.addEventListener('click', start);

var theQuestions = [
    {
        question: "What is preventing default?",
        answers:[
            "Banana",
            "If the event does not get explicity handled, its default action should not be taken as normal.",
           "List like object, has methods to perform operations"
        ],
        
        correctAnswer: 1
    } ,
    {
        question: "What is an array?",
        answers: [ "Stylesheet", "Banana", "List like object, has methods to perform operations."
        ],
        correctAnswer: 2,
    },
    {
        question: "what is append used for in js?",
        answers:{
            a: "banana",
            b: "insert a set of objects or DOMstring objects.",
            c: "returns an element whose id property matches the specific string.",
                },
        correctAnswer: 1,
    }
];


//when the user clicks start, 
TODO://the start button will hide, 
function start() {
  onclick= document.getElementById("code-header").textContent = theQuestions[answerNum].question;
  //question options will appear 
  //they will be presented with the first question. question i and its three choices
  // they will be presented with three choices 
  //each choice will have a button 
  document.getElementById("answer1").textContent =theQuestions[answerNum].answers[0];
  document.getElementById("answer2").textContent =theQuestions[answerNum].answers[1];
  document.getElementById("answer3").textContent =theQuestions[answerNum].answers[2];



  console.log(theQuestions);
  console.log(theQuestions[0]);
  console.log(theQuestions[0].answers[1]);

}
document.getElementById("answerDiv").addEventListener("click", function(){
    //user will select their choice 
    //if they choose wrong, timer will decrease. 
    var answer = theQuestions[answerNum].correctAnswer
    console.log(answer)
    
//if our answer is = to the button we clicked. 


    //if they choose correct, timer is unchanged. 
    //once first question is answered, 
console.log(event.target)
console.log(event.target.getAttribute("data-index"));

})
cc