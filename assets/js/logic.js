// The buttons and trigger
let startBtn = document.getElementById('start');
let submitBtn = document.getElementById('submit');
// The container element
let scoreEl = document.getElementsByClassName('scores');
let startEl = document.getElementById('start-screen');
let qtEl = document.getElementById('questions');
let endEl = document.getElementById('end-screen');
let feedbackEl = document.getElementById('feedback')
// The timer 
let timeEl = document.getElementById('time');
let timeLeft = 61;
// The scores
let finalScoreEl = document.getElementById('final-score');
let initialEl = document.getElementById('initials')
// The questions and answers
let titleEl = document.getElementById('question-title')
let choicesEl = document.getElementById('choices')
let currentQuestionIndex = 0;
let answerBtn = "";

let correctSound = () => new Audio("./assets/sfx/correct.wav").play();

let incorrectSound = () => new Audio("./assets/sfx/incorrect.wav").play();

const startQuiz = () => {
    startEl.classList.add('hide');
    qtEl.classList.remove('hide');
    feedbackEl.classList.remove('hide');
    timerStart();
    setQuestion();
};

const timerStart = () => {
    let timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft <= 0 || currentQuestionIndex === quizQuestions.length) {
            clearInterval(timerInterval);
            endQuiz();
        } 
    }, 1000)
}

let setQuestion = function() {
    resetAnswer();
    let currentQuestion = quizQuestions[currentQuestionIndex];
    titleEl.textContent = currentQuestion.title;
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        answerBtn = document.createElement('button')
        answerBtn.textContent = currentQuestion.choices[i];
        choicesEl.appendChild(answerBtn);
        answerBtn.onclick = answerCheck;
    }   
}

let resetAnswer = function() {
    choicesEl.innerHTML = null;
    titleEl.innerHTML = null;
}

let answerCheck = function() {
    if (this.textContent !== quizQuestions[currentQuestionIndex].answer) {
    incorrectSound();
    timeLeft -= 10;
    feedbackEl.textContent = 'Wrong!';
    feedbackEl.style.color = 'red';
  } else {
    correctSound();
    feedbackEl.textContent = 'Correct!';
    feedbackEl.style.color = 'green';
    feedbackEl.style.fontSize = '200%';
  }
  currentQuestionIndex++;
  nextQuestion();
};


let nextQuestion = function() {
    if (currentQuestionIndex < quizQuestions.length) {
        setQuestion();
    } else {
        endQuiz();
    };
};

let endQuiz = function() {
    qtEl.classList.add('hide');
    feedbackEl.classList.add('hide');
    endEl.classList.remove('hide');
    if (timeLeft > 0) {
        finalScoreEl.textContent = timeLeft;
    } else if (timeLeft <= 0) {
        finalScoreEl.textContent = 0;
    }
}

let getPlayerScore = function() {
    let playerName = initialEl.value.trim();
    let playerScore = timeLeft;
    if (playerScore < 0) {
        playerScore = 0;
    };
    let playerRecord = JSON.parse(localStorage.getItem("playerRecord"))||[];
    let player = {
        name: playerName,
        score: playerScore
    }
    if (playerName.length > 3 ) {
        alert('The maximum lenght of initial is 3');
        return endQuiz();
    } else {
    playerRecord.push(player);
    console.log(player)
    localStorage.setItem('playerRecord', JSON.stringify(playerRecord))};
    window.location.href = "highscores.html";
}

// Start button logic: click start button to trigger start function
startBtn.addEventListener('click',startQuiz);
submitBtn.addEventListener('click',getPlayerScore)