let examBox = document.getElementById("exam");
let startButton = document.getElementById("start");
let submitButton = document.getElementById("submit");
let resultspage = document.getElementById("results");
function startQuiz(){};
function showResults(){};
startButton.addEventListener('click',startQuiz);
submitButton.addEventListener('click', Results);
let questionNumber= ("question1","question2","question3")

let theQuestions = [{
        Question1: "What is preventing default?",
        answers: {
            a: "Banana",
            b: "If the event does not get explicity handled, its defaul action should not be taken as normal.",
            c: "List like object, has methods to perform operations"
        },
        correctAnswer: "b"
    } ,
    {
        question2: "What is an array?",
        answers: {
            a: "Stylesheet",
            b: "Banana",
            c: "List like object, has methods to perform operations."
        },
        correctAnswer: "c",
    },
    {
        question3: "what is append used for in js?",
        answers:{
            a: "banana",
            b: "insert a set of objects or DOMstring objects.",
            c: "returns an element whose id property matches the specific string.",
                },
        correctAnswer: "b",
    }
];
function createQuiz(){
    let output = [];
    theQuestions.forEach(
        (currentQuestion, questionNumber) => {
        let answers = [];
        for(letter in theQuestions.answers){
            answers.push(
                <label>
                <input type= "radio" name ="question${questionNumber}" value= "${letter}"></input>
                ${letter};
                ${currentQuestion.answers[letter]}
                </label>
            )
        }
        output.push(answers );
        examBox.innerHTML = output.join('')}