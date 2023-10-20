// Dom elements

const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-button");

// State variables

let currentQuestionIndex = 0;

let questions = [
    {
        question: "Which planet is known as the red planet?",
        options: ["Mars", "Jupiter", "Cardiff"],
        correctAnswer: "Mars"
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7"],
        correctAnswer: "7"
    }
];

// Listeners

nextButton.addEventListener("click", loadNextQuestion);

// Initialise quiz

initialiseQuiz();

// Displaying first question

function initialiseQuiz() {
    displayQuestion(questions[currentQuestionIndex]
    )
}

function displayQuestion(questionObj) {
    quizContainer.innerHTML = "";
    const questionElement = document.createElement("h2");
    questionElement.innerText = questionObj.question
    quizContainer.appendChild(questionElement);
    // Display all options as buttons
    questionObj.options.forEach( option => {
        const button = createOptionButton(option);
        quizContainer.appendChild(button);
    });
}

function createOptionButton(option) {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("btn", "btn-outline-primary", "mt-2");
    button.addEventListener("click", () => handleOptionClick(option));
    return button;
}

function handleOptionClick(optionSelected) {
    const Answer = questions[currentQuestionIndex].correctAnswer
    if (optionSelected === Answer) {
        alert("Correct!");
    } else {
        alert("Wrong, you plonker!")
    }
    loadNextQuestion()
}

function loadNextQuestion() {
    // Advance to the next question
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `<h2>Game Over!</h2>`;
    nextButton.classList.add("d-none");

}