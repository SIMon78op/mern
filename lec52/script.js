class Question {
    constructor () {
        this.operators = ["+", "-", "*", "%", "/", "^"];
        this.operand1 = this.random(100);
        this.operand2 = this.random(100);
        this.operator = this.operators[Math.floor(Math.random()*this.operators.length)] ; //{+,-,*,%,/,^}
        this.score = this.random(50);
        this.correcAnswer = this.calculateAnswer();
    }
    
      /*
    min value of this function - 1
    max value of this function - high
    */
    random(high) {
        return 1 * Math.floor(Math.random() * high);
    }

  calculateAnswer() {
    switch (this.operator) {
      case "+":
        return this.operand1 + this.operand2;
      case "-":
        return this.operand1 - this.operand2;
      case "/":
        return Math.floor(this.operand1 / this.operand2);
      case "*":
        return this.operand1 * this.operand2;
      case "%":
        return this.operand1 % this.operand2;
      case "^":
        return this.operand1 ** this.operand2;
      default:
        alert("Invalid input" + this.operator);
    }
  }

    display() {
        // console.log(this.operand1, this.operator, this.operand2);
        return `${this.operand1} ${this.operator} ${this.operand2}`;
    }

    validateAnswer(answer) {
        return this.correcAnswer === Number(answer) ? this.score : 0 ;
    }
}



class Quiz {
    constructor() {
        this.time = this.random(60);
        this.question = new Question();
        this.questionCount = 1;
        this.score = 0;
    }

    displayCurrentQuestion() {
      return  this.question.display();
    }

    random(high) {
        return 1 + Math.floor(Math.random() * high);
    }

    nextQuestion(currentQuestionAnswer) {
        this.score += this.question.validateAnswer(currentQuestionAnswer);
        this.question = new Question();
        this.displayCurrentQuestion();
    }


    getScore() {
        return this.score;
    }
}

const questionEle = document.querySelector("#questionText");
const answerEle = document.querySelector("#answerInput");
const scoreEle = document.querySelector("#score");


const quiz = new Quiz();
questionEle.textContent = quiz.displayCurrentQuestion();

answerEle.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        e.preventDefault();
        const userInput = Number(answerEle.value);
        quiz.nextQuestion(userInput);

        questionEle.textContent = quiz.displayCurrentQuestion();

        answerEle.value = "";
        finalScore.textContent = quiz.getScore();
    }
})
