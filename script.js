const questions = [
    { question: "¿Qué significa Q en el contexto del potencial inteligente?", answer: "Cociente intelectual" },
    { question: "¿Cuántos continentes hay en el mundo?", answer: "7" },
    { question: "¿Cuál es la capital de Francia?", answer: "París" }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
}

submitButton.addEventListener('click', () => {
    const userAnswer = answerElement.value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        resultElement.innerText = "¡Correcto!";
    } else {
        resultElement.innerText = `Incorrecto. La respuesta correcta es: ${correctAnswer}`;
    }
    nextButton.style.display = 'block';
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        resultElement.innerText = '';
        answerElement.value = '';
        nextButton.style.display = 'none';
    } else {
        resultElement.innerText = "¡Has completado el juego!";
        questionElement.innerText = '';
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
    }
});

showQuestion();