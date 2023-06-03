var quesArray = [
    {
        num: 1,
        question: "Q1 : HTML Stand for?",
        Option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        num: 2,
        question: "Q2 : Which type of JavaScript Languages is?",
        Option: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    {
        num: 3,
        question: "Q3 : The 'function' and  'var' are known as?",
        Option: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    {
        num: 4,
        question: "Q4 : who is the present president of pakistan?",
        Option: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        num: 5,
        question: "Q5 : How many prayers in a day?",
        Option: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },

]


var Ques = document.getElementById("Ques")
// console.log(Ques)

var opt = document.getElementById("opt").children;
// console.log(opt)

var nextQuesBtn = document.getElementById("nextQuesBtn")

var resultsSection = document.querySelector(".resultsSection")
var quizSection = document.querySelector(".quizSection")


var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")

var totalQues = document.getElementById("totalQues")
// console.log(totalQues)
var correctAns = document.getElementById("correctAns")
var wrongAns = document.getElementById("wrongAns")
var totalScore = document.getElementById("totalScore")
var Percentage = document.getElementById("Percentage");


for (var li of opt) {
    li.setAttribute("onclick", "selectOpt(this)")
    li.removeAttribute("class", "wrongAns")
}

Ques.innerHTML = quesArray[0].question;

opt[0].innerHTML = quesArray[0].Option.a
opt[1].innerHTML = quesArray[0].Option.b
opt[2].innerHTML = quesArray[0].Option.c
opt[3].innerHTML = quesArray[0].Option.d



counter = 0;
function nextQuestionBtn() {
    
    if (counter < quesArray.length -1) {
        counter++;
        

          Ques.innerHTML = quesArray[counter].question;

    opt[0].innerHTML = quesArray[counter].Option.a
    opt[1].innerHTML = quesArray[counter].Option.b
    opt[2].innerHTML = quesArray[counter].Option.c
    opt[3].innerHTML = quesArray[counter].Option.d
    }else{
        // nextQuesBtn.innerHTML = "See Result"
        quizSection.style.display = "none"
        resultsSection.style.display = "flex"
        totalQues.innerHTML = quesArray.length;
        correctAns.innerHTML = CorrectAnsCounter;
        wrongAns.innerHTML = WrongAnsCounter
        totalScore.innerHTML = TotalScore;
        Percentage.innerHTML = percent + "%";
   }


    for (var li of opt) {
                li.classList.remove("liDisable")
                li.classList.remove("rigthAns")
                li.classList.remove("wrongAns") 
                nextQuesBtn.style.display = "none"
            }

            
    
        

}






var counter = 0;
var CorrectAnsCounter = 0;
var WrongAnsCounter = 0;
var TotalScore = 0;
// var percent = 



var startQuizBtn = document.querySelector(".startQuizBtn")
var quizSection = document.querySelector(".quizSection")

// console.log(startQuizBtn)
function formControl() {
    var formCtrl = document.getElementById("QuizForm");
    var inputFields = formCtrl.querySelectorAll("input")

    for(var input of inputFields){
        if(!input.value){
            alert("Required Fields Can't be Empty")
            return
        }

    }

    var inputUserName = document.getElementById("inputUserName").value  
    var InputUserEmail = document.getElementById("InputUserEmail").value
    userName.innerHTML = inputUserName;
    userEmail.innerHTML = InputUserEmail; 


    formCtrl.style.display = "none"
    startQuizBtn.style.display = "flex"

    // console.log(quizSection)

}


function strtQuiz() {
    nextQuesBtn.style.display = "none"
    startQuizBtn.style.display = "none"
    quizSection.style.display = "block"
}



function selectOpt(element){
    nextQuesBtn.style.display = "block"

    if (element.innerHTML === quesArray[counter].answer) {
        element.classList.add("rigthAns")
        CorrectAnsCounter++
        TotalScore = TotalScore + 5
        // console.log(CorrectAnsCounter)
        // console.log(TotalScore)
    } else {
        WrongAnsCounter++
        element.classList.add("wrongAns")
        for (var li of opt) {
            // console.log(li.innerHTML)
            if (li.innerHTML == quesArray[counter].answer) {
                li.classList.add("rigthAns")
                break
            }
    
        }
    
    
    }
    
    
    for (var li of opt) {
        li.classList.add("liDisable")
    
    }


}



