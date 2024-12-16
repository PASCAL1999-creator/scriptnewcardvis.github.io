const quizData = [
    {
        question: "Wat is de bijnaam van FC Groningen?",
        options: ["De Trots van het Noorden", "De Groene Draak", "De Noorderlingen", "De Stadjes"],
        correct: 0
    },
    {
        question: "Welk Gronings gerecht bestaat uit roggebrood met spek?",
        options: ["Pottertwist", "Mollebonen", "Snert", "Spekdikken"],
        correct: 3
    },
    {
        question: "Wat betekent 'Moi' in het Gronings?",
        options: ["Tot ziens", "Goedemorgen", "Hallo/Dag", "Welkom"],
        correct: 2
    },
    {
        question: "Welk bekend gebouw staat op de Grote Markt?",
        options: ["Martinitoren", "Academiegebouw", "Groninger Museum", "Forum Groningen"],
        correct: 0
    },
    {
        question: "Wat is een 'kneup'?",
        options: ["Een knoop", "Een borrel", "Een koekje", "Een knuffel"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuiz = quizData[currentQuestion];

    questionElement.textContent = currentQuiz.question;
    optionsElement.innerHTML = '';

    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsElement.appendChild(button);
    });

    document.getElementById('result').textContent = '';
    document.getElementById('submit-btn').disabled = false;
}

function selectOption(index) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
    selectedOption = index;
}

function checkAnswer() {
    if (selectedOption === null) return;

    const options = document.querySelectorAll('.quiz-option');
    const correct = quizData[currentQuestion].correct;

    if (selectedOption === correct) {
        score++;
        document.getElementById('result').textContent = 'Correct!';
        options[selectedOption].classList.add('correct');
    } else {
        document.getElementById('result').textContent = 'Helaas, dat is niet juist.';
        options[selectedOption].classList.add('wrong');
        options[correct].classList.add('correct');
    }

    document.getElementById('submit-btn').disabled = true;
    setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
    selectedOption = null;
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const quizElement = document.getElementById('quiz');
    quizElement.innerHTML = `
        <h3>Quiz Afgelopen!</h3>
        <p id="score">Je score: ${score} van de ${quizData.length}</p>
        <button onclick="restartQuiz()" id="submit-btn">Opnieuw Proberen</button>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    loadQuestion();
}

// Start de quiz wanneer de pagina is geladen
document.addEventListener('DOMContentLoaded', loadQuestion);
document.getElementById('submit-btn').addEventListener('click', checkAnswer); 