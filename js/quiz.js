const questions = [
    "Do you feel energized when you are around a lot of people?",
    "Do you prefer to spend your free time alone or with a small group of close friends?",
    "Do you often initiate conversations with strangers or new acquaintances"
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQIndex = 0;
let answers = [];

function setActive(clickedBtn) {
    // Get all buttons within the answer-buttons div
    var buttons = document.querySelectorAll('.answer-buttons .btn');
    
    // Remove the 'active' class from all buttons
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    // Add the 'active' class to the clicked button
    clickedBtn.classList.add('active');
    
    // Show the next button
    nextButton.style.display = 'block';
}

function startQuiz() {
    currentQIndex = 0;
    answers = [];
    nextButton.innerHTML = "Next";
    nextButton.style.display = 'none';
    showQuestion();
}

function showQuestion() {
    // Clear any previous active button
    var buttons = document.querySelectorAll('.answer-buttons .btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Hide the next button until an answer is selected
    nextButton.style.display = 'none';

    let currentQ = questions[currentQIndex];
    let questionNum = currentQIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQ;
}

function showResults() {
    let resultsHTML = "<h2>Your Answers:</h2>";
    answers.forEach((answer, index) => {
        resultsHTML += `<p>${index + 1}. ${answer}</p>`;
    });
    resultsHTML += '<button id="home-btn" class="btn btn-primary" onclick="goHome()">Back Home</button>';
    questionElement.innerHTML = resultsHTML;
    answerButtons.style.display = 'none';
    nextButton.style.display = 'none';
}

function goHome() {
    // Redirect to home page or reset the quiz, depending on your requirement
    window.location.href = '/'; // Adjust this to your home page URL
}

nextButton.addEventListener('click', () => {
    const selectedButton = document.querySelector('.answer-buttons .btn.active');
    if (selectedButton) {
        const answer = selectedButton.innerText;
        answers.push(answer);
        currentQIndex++;
        
        if (currentQIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }
});

startQuiz();
