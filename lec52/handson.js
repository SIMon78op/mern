class Question {
    constructor(ops, diff) {
        const ranges = {easy: 50, medium: 100, hard: 200};
        this.operators = ops.length ? ops : ['+', '-', '*', '/'];
        this.range = ranges[diff] || 100;
        this.op1 = Math.floor(Math.random() * this.range) + 1;
        this.op2 = Math.floor(Math.random() * this.range) + 1;
        this.operator = this.operators[Math.floor(Math.random() * this.operators.length)];
        
        // Prevent division by zero
        if ((this.operator === '/' || this.operator === '%') && this.op2 === 0) {
            this.op2 = 1;
        }
        
        this.answer = this.calculate();
        this.score = Math.floor(this.range / 20) + 5; // Dynamic scoring
    }
    
    calculate() {
        const ops = {
            '+': (a,b) => a + b,
            '-': (a,b) => a - b,
            '*': (a,b) => a * b,
            '/': (a,b) => Math.floor(a / b)
        };
        return ops[this.operator](this.op1, this.op2);
    }
    
    display() {
        return `${this.op1} ${this.operator} ${this.op2}`;
    }
}

class Game {
    constructor() {
        this.score = 0;
        this.questionNum = 1;
        this.totalQuestions = 10;
        this.timeLeft = 60;
        this.timer = null;
        this.currentQuestion = null;
    }
    
    start(operators, difficulty) {
        this.score = 0;
        this.questionNum = 1;
        this.timeLeft = 60;
        this.updateDisplay();
        this.nextQuestion(operators, difficulty);
        this.startTimer();
    }
    
    nextQuestion(operators, difficulty) {
        this.currentQuestion = new Question(operators, difficulty);
        return this.currentQuestion.display();
    }
    
    checkAnswer(userAnswer) {
        const correct = parseInt(userAnswer) === this.currentQuestion.answer;
        if (correct) {
            this.score += this.currentQuestion.score;
            return {correct: true, points: this.currentQuestion.score};
        }
        return {correct: false, points: 0};
    }
    
    startTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            document.getElementById('timer').textContent = this.timeLeft;
            if (this.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);
    }
    
    updateDisplay() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('questionNum').textContent = this.questionNum;
    }
    
    endGame() {
        clearInterval(this.timer);
        alert(`Game Over! Final Score: ${this.score}`);
        document.getElementById('game').style.display = 'none';
        document.getElementById('answerInput').value = '';
    }
}

// Game Instance
const game = new Game();

// Start Game Function
function startGame() {
    const operators = Array.from(document.querySelectorAll('.operator:checked'))
        .map(cb => cb.value);
    const difficulty = document.getElementById('difficulty').value;
    
    document.getElementById('game').style.display = 'block';
    document.getElementById('questionText').textContent = game.nextQuestion(operators, difficulty);
    game.start(operators, difficulty);
}

// Handle Answer Input
document.getElementById('answerInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const result = game.checkAnswer(this.value);
        const feedback = document.getElementById('feedback');
        
        if (result.correct) {
            feedback.textContent = `Correct! +${result.points} points`;
            feedback.style.color = 'green';
        } else {
            feedback.textContent = `Wrong! Answer: ${game.currentQuestion.answer}`;
            feedback.style.color = 'red';
        }
        
        game.questionNum++;
        game.updateDisplay();
        
        if (game.questionNum > game.totalQuestions) {
            game.endGame();
            return;
        }
        
        const operators = Array.from(document.querySelectorAll('.operator:checked'))
            .map(cb => cb.value);
        const difficulty = document.getElementById('difficulty').value;
        
        document.getElementById('questionText').textContent = 
            game.nextQuestion(operators, difficulty);
        this.value = '';
    }
});