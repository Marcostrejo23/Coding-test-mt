


let question1= {
    question: "What is preventing default?",
    numberedAnswers:3,
    correctA:"1",
    answer0: "Banana",
    answer1: "If the event does not get explicity handled, its default action should not be taken as normal.",
    answer2: "List like object, has methods to perform operations"
}
let question2={
    question: "What is an array?",
    numberedAnswers:3,
    correctA:"1",
    answer0: "Stylesheet",
    answer1: "List like object",
    answer2: "has methods to perform operations"
}
let question3={
    question: "What is append used for?",
    numberedAnswers: 3,
    correctA:"1",
    answer0: "banana",
    answer1: "insert a set of objects or DOMstring objects",
    answer2: "returns an element whose id property matches the specific string"
}

let headerEL=document.querySelector("#informationHeader");
let contentArea =document.querySelector("#contentArea");
let infoBox= document.querySelector("#infoBox");
let mainEL= document.querySelector("#main");
let timerEL=document.querySelector("#timer");

let quizLength = 120;
let quizIndex = 0;
let quizScore= 0;
let completedQuiz= false;
let questions = [question1,question2,question3];
let highScores= [];
let quizTimer;

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
    quizButton.setAttribute("id","quizBtn");
    quizButton.addEventListener("click","startQuiz");
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

function EnterInitials(){
    let containerDiv= document.createElement("div");
    let initials= document.createElement("input");
    let submitB= document.createElement("button");
    let scoreText= document.createElement("p");
    mainEL.style.setProperty("--content-width", "40vw");
    contentArea.textContent="";
    headerEL.textContent="Please write your initials here"
    scoreText.textContent= `Your score was ${quizScore}`;
    initials.setAttribute("type","text");
    initials.setAttribute("id","initialsInput");
    initials.setAttribute("placeholder","Enter your initials");
    submitB.textContent= "Submit";
    submitB.setAttribute=("id","submitButton");
    contentArea.append(scoreText);
    containerDiv.append(initials);

        submitB.addEventListener("click",function(event){
            event.preventDefault();
            if(initials.value !== ""){
              highScores.push(`${quizScore} - ${initials.value}`);
              highScores.sort(sortScores);
              localStorage.setItem("scorecard", JSON.stringify(highScores));
              createHighScores()  
            }else{
                alert('Enter your initials')
            }
        });
        containerDiv.append(submitB);
        contentArea.append(containerDiv);
}

function createHighScores(){
    let backButton= document.createElement("button");
    let clearButton=document.createElement("button");
    contentArea.textContent="";
    infoBox.textContent="";
    headerEL.textContent="High scores!";
    let scorecard= document.createElement("ol");
    for (let score of highScores){
        let listEL= document.createElement('li');
        listEL.textContent= score;
        scorecard.append(listEL);
    }
    contentArea.append(scorecard);
    backButton.textContent="return";
    clearButton.textContent="clear scores";
    backButton.addEventListener("click",quizReset);
    clearButton.addEventListener("click", clearScores);
    infoBox.append(backButton);
    infoBox.append(clearButton);     
}

function startQuiz(event){
    event.preventDefault();
    createQuestions();
    quizTimer=setInterval(quizProctor,1000);
}

function selectedAnswer(event){
    event.preventDefault();
    let target= event.target;
    if(target.matches("button")){
        let elId= target.getAttribute("id");
        let statusDuration = 1;
        if(elId === questions[quizIndex].correctA){
            infoBox.textContent=`You're right!`;
            quizScore += 5;
        } else{
            infoBox.textContent=`wrong!`;
        }
        infoBox.setProperty("--status-border-width","3px");
        let clearStatus= setInterval(function(){
            statusDuration--;
            if(statusDuration <= 0){
                infoBox.textContent="";
                infoBox.style.setProperty("--status-border-width","0px");
                clearInterval(clearStatus)
            }
        },500);
        if(quizIndex + 1 < questions.length){
            quizIndex++;
            createQuestions();
        } else{
            quizCompleted= true;
        }
    }
}
 function quizReset(){
     let quizLength = 120;
     let quizIndex = 0;
     let quizScore= 0;
     completedQuiz= false;
     renderMainPage();
 }
 function clearScores(){
     quizHighScores=[];
     localStorage.removeItem("scorecard");
     createHighScores();
 }

 function quizProctor(){
     quizDuration--;
     timerEL.textContent = `time ${quizDuration}`
     if(quizDuration <=0 || quizCompleted){
         contentArea.textContent = "thank you for playing";
         timerEL.textContent = "";
         EnterInitials();
         clearInterval(quizTimer);
     }
 }
 
 function scoreSorting(item1,item2){
     let number1= 0;
     let number2= 0;
     item1= item1.split("-"[0].trim())
     item2= item2.split("-"[0].trim())
    number1= Number(item1);
    number2= Number(item2);
    if(number1> number2){
        return -1;
    }
    if(number1<number2){
        return 1;
    }
    return 0;
 }

 init();
