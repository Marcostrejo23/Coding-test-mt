let headerEL=document.querySelector("#informationHeader");
let contentArea =document.querySelector("#contentArea");
let infoBox= document.querySelector("#infoBox");
let mainEL= document.querySelector("#main");
let timerEL=document.querySelector("#timer");

let quizLength = 120;
let quizIndex = 0;
let quizScored= 0;
let completedQuiz= false;
let questions = [question1,question2,question3];
let highScores= [];
let quizTimer;


let question1={
    questions: "What is preventing default?",
    numberedAnswers= 3,
    correctA="1",

    answer0: "Banana",
    answer1: "If the event does not get explicity handled, its default action should not be taken as normal.",
    answer2: "List like object, has methods to perform operations"
}
let question2={
    questions: "What is an array?",
    numberedAnswers= 3,
    correctA="1",

    answer0: "Stylesheet",
    answer1: "List like object",
    answer2: "has methods to perform operations"
}
let question3={
    questions: "What is append used for?",
    numberedAnswers= 3,
    correctA="1",

    answer0: "banana",
    answer1: "insert a set of objects or DOMstring objects",
    answer2: "returns an element whose id property matches the specific string"
}

function init(){
    let renderScores = JSON.parse(localStorage.getItem("scorecard"));
    if(renderScores !== null){
        highScores=renderScores;
    }
    renderMainPage();
}

function renderMainPage(){
    let pTag = document.createElement("p");
    let quizButton= document.createElement("button");
    mainEL.style.setProperty("--qAlignment","center");
    mainEL.style.setProperty("--content-width","70vw");
    headerEL.textContent= "Take the coding quiz";
    contentArea.textContent="";
    infoBox.textContent="";
    pTag.textContent="Answer all the questions in the allotted time";
    quizButton.textContent="Let's go!";
    quizButton.setAttribute("id","quiz-Button");
    quizButton.addEventListener("click", "startQuiz");
    contentArea.append(pTag);
    contentArea.append(quizButton);
}

function createQuestions(){
    let currentQuestion=questions[quizIndex];
    mainEL.style.setProperty("--qAlignment", "flex-start");
    headerEL.textContent=currentQuestion.question;
    contentArea.textContent="";
    
    for (let i = 0; i < currentQuestion.length; i++) {
        let answerButton = document.createElement("button");
        answerButton.textContent=`${i}. ${currentQuestion[`answer${i}`]}`;
        answerButton.setAttribute("id", i);
        answerButton.addEventListener("click", answerSelected);
        contentArea.append(answerButton);
        
    }
}








// let examBox = document.getElementById("#exam");
// let startButton = document.getElementById("start-button");
// let submitButton = document.getElementById("submit");
// let resultsPage = document.getElementById("results");
// var timeEl = document.getElementById("#time");
// let answerNum = 0
// function startQuiz(){};
// function showResults(){};

// startButton.addEventListener('click', start);

// var theQuestions = [
//     {
//         question: "What is preventing default?",
//         answers:[
//             "Banana",
//             "If the event does not get explicity handled, its default action should not be taken as normal.",
//            "List like object, has methods to perform operations"
//         ],
        
//         correctAnswer: 1
//     } ,
//     {
//         question: "What is an array?",
//         answers: [ "Stylesheet", "Banana", "List like object, has methods to perform operations."
//         ],
//         correctAnswer: 2,
//     },
//     {
//         question: "what is append used for in js?",
//         answers:{
//             a: "banana",
//             b: "insert a set of objects or DOMstring objects.",
//             c: "returns an element whose id property matches the specific string.",
//                 },
//         correctAnswer: 1,
//     }
// ];


// //when the user clicks start, 
// TODO://the start button will hide, 
// function start() {
//   onclick= document.getElementById("code-header").textContent = theQuestions[answerNum].question;
//   //question options will appear 
//   //they will be presented with the first question. question i and its three choices
//   // they will be presented with three choices 
//   //each choice will have a button 
//   document.getElementById("answer1").textContent =theQuestions[answerNum].answers[0];
//   document.getElementById("answer2").textContent =theQuestions[answerNum].answers[1];
//   document.getElementById("answer3").textContent =theQuestions[answerNum].answers[2];



//   console.log(theQuestions);
//   console.log(theQuestions[0]);
//   console.log(theQuestions[0].answers[1]);

// }
// document.getElementById("answerDiv").addEventListener("click", function(){
//     //user will select their choice 
//     //if they choose wrong, timer will decrease. 
//     var answer = theQuestions[answerNum].correctAnswer
//     console.log(answer)
    
// //if our answer is = to the button we clicked. 


//     //if they choose correct, timer is unchanged. 
//     //once first question is answered, 
// console.log(event.target)
// console.log(event.target.getAttribute("data-index"));

// })
// cc