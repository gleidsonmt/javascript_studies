const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

//
const CORRECT_BONUS = 10;


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionsCounter = 0;
let availableQuestions = [];
let max_questions = 0;

let questions = [];

fetch("questions.json")
    .then( res => {
       return res.json();
    })
    .then( loadedQuestions => {
        console.log(loadedQuestions);
        questions = loadedQuestions;
        max_questions = questions.length;
        setTimeout(updateView, 800);

        //startGame();
    })
    .catch(err => {
        console.error(err);
    })

updateView = () => {
    game.classList.remove('hidden');
    loader.classList.add('hidden');
    startGame();
}
    



startGame = () => {
    questionsCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions.length);
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter >= max_questions) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/quiz/end.html');
    }

    questionsCounter++;
    progressText.innerText = `Questões ${questionsCounter}/${max_questions}`;

    // updae progrress bar

    progressBarFull.style.width = `${(questionsCounter / max_questions ) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply == "correct") {
            incrementScore(CORRECT_BONUS);
        }
        
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);


    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score;
}
