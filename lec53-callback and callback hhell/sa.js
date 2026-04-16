const questionsData = [
    {
        statement:"What is capital of India?",
        marks:10,
        time:15,
        options:["New Delhi","Kolkata","Patna","Pune"],
        correctOption:0
    },
    {
        statement:"What is capital of US?",
        marks:20,
        time:30,
        options:["patna","Kolkata","Washington","Pune"],
        correctOption:2
    },
]

const qBox = document.getElementById("q-box");
const aBox = document.getElementById("a-box");
const timer = document.getElementById("timer");
const nextBtn = document.getElementById("next");


let intervalID = null;

class Question{
    constructor(statement,marks,time){
        this.statement = statement;
        this.marks = marks;
        this.time = time;
    }

    validate(){
    }

    display(){
    }

    startTimer(){
        if(intervalID){
            clearInterval(intervalID);
        }

        let timeLeft = this.time; // 60seconds

        intervalID = setInterval(() =>{
            timeLeft--;
            const min = Math.floor(timeLeft/60);
            const sec = timeLeft%60;
            timer.textContent = `${min < 10 ? '0' : " "}${min}:${sec < 10 ? '0' : ""}${sec}`

            if(timeLeft <= 0){
                clearInterval(intervalID);
                nextBtn.click();
            }
        },1000)
    }
}

class MCQQuestion extends Question{
    constructor(statement,marks,time,options,correctOption){
        super(statement,marks,time);
        this.options = options;
        this.correctOption = correctOption;
        this.userAnswer = null;
    }

    validate(){
        return this.userAnswer == this.correctOption;
    }

    display(){
        this.startTimer();
        qBox.textContent = this.statement;
        aBox.innerHTML = "";

        this.options.forEach((option,index) => {
            const button = document.createElement("button");
            button.textContent = option;

            button.addEventListener("click",()=>{
                this.userAnswer = index;
            });
            aBox.appendChild(button);
        })
    }
}

class Quiz{
    constructor(questions){
        this.questions = questions;
        this.currectQuestionIndex = 0;
        this.score = 0;
        this.totalScore = 0;
    }

    start(){
        this.questions[this.currectQuestionIndex].display();
    }

    nextQuestion(){
        const currentQuestion = this.questions[this.currectQuestionIndex];

        if(currentQuestion.validate()){
            this.score += currentQuestion.marks;
        }
        this.currectQuestionIndex++;
        this.questions[this.currectQuestionIndex].display();

        if(this.questions.length - 1 == this.currectQuestionIndex){
            nextBtn.textContent = "Submit";
        }
    }

    isFinished(){
        if(this.questions.length - 1 == this.currectQuestionIndex){
            const currentQuestion = this.questions[this.currectQuestionIndex];
            if(currentQuestion.validate()){
                this.score += currentQuestion.marks;
            }
            return true;
        }
        return false;
    }

}

const questions = questionsData.map((q) =>{
    const mcqQ = new MCQQuestion(q.statement,q.marks,q.time,q.options,q.correctOption);
    return mcqQ;
});

const quiz = new Quiz(questions);
quiz.start();

nextBtn.addEventListener('click',() =>{
    if(quiz.isFinished()){
        alert('Quiz is finished Score is '+quiz.score);
        return;
    }
    quiz.nextQuestion();
})