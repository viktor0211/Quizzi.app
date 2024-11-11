let score = 0;
let totalQuestions = 3;

function checkAnswer(button, answer) {
    if (answer === 'correct') {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }
    button.disabled = true;
    
    // Disable all other buttons in the same question
    let buttons = button.parentNode.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    // Show result if all questions are answered
    if (document.querySelectorAll('button:not([disabled])').length === 0) {
        displayResult();
    }
}

function displayResult() {
    let resultText = `You scored ${score} out of ${totalQuestions}!`;
    let resultElement = document.getElementById('result');
    resultElement.textContent = resultText;
}