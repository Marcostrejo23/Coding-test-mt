let examBox = document.getElementById("#exam");
let startButton = document.getElementById("start");
let submitButton = document.getElementById("submit");
let resultspage = document.getElementById("results");
var timeEl = document.getElementById("#time");
function startQuiz(){};
function showResults(){};
// startButton.addEventListener('click',startQuiz);
// submitButton.addEventListener('click', Results);
// let questionNumber= ("question1","question2","question3")

startButton.addEventListener('click', start);

let theQuestions = [{
        Question: "What is preventing default?",
        answers: {
            a: "Banana",
            b: "If the event does not get explicity handled, its defaul action should not be taken as normal.",
            c: "List like object, has methods to perform operations"
        },
        correctAnswer: "b"
    } ,
    {
        question: "What is an array?",
        answers: {
            a: "Stylesheet",
            b: "Banana",
            c: "List like object, has methods to perform operations."
        },
        correctAnswer: "c",
    },
    {
        question: "what is append used for in js?",
        answers:{
            a: "banana",
            b: "insert a set of objects or DOMstring objects.",
            c: "returns an element whose id property matches the specific string.",
                },
        correctAnswer: "b",
    }
];

// setInterval()
// startButton.addEventListener("start", startButton){
//     for (let i =0;i<theQuestions.length; i++)
// }

function start() {
  onclick= document.getElementById("exam").textContent = theQuestions;

//   return.theQuestions;
   
//     var timeInterval = setInterval(function(){
//         secondsLeft--;
//         timeInterval.textContent = secondsLeft + "seconds left in exam";
        
//         if (secondsLeft=== 0){
//             clearInterval(timeInterval);
//             sendMessage();
//         } 
//     }, 999);
// }
// function sendMessage(){
//     timeEL.textContent = '';
//     return resultspage();
// }


    
// function createQuiz(){
//     let output = [];
//     theQuestions.forEach(
//         (currentQuestion, questionNumber) => {
//         let answers = [];
//         for(letter in theQuestions.answers){
//             answers.push(
//                 <label>
//                 <input type= "radio" name ="question${questionNumber}" value= "${letter}"></input>
//                 ${letter};
//                 ${currentQuestion.answers[letter]}
//                 </label>
//             )
//         }
//         output.push(answers );
//         examBox.innerHTML = output.join('')}