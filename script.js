const quizData = [
    { question: "What house is Harry Potter in?", options: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"], answer: "Gryffindor" },
    { question: "What is the name of Harry Potter's owl?", options: ["Hedwig", "Scabbers", "Crookshanks", "Fawkes"], answer: "Hedwig" },
    { question: "Who is the headmaster of Hogwarts?", options: ["Dumbledore", "McGonagall", "Snape", "Hagrid"], answer: "Dumbledore" },
    { question: "What is the spell for levitation?", options: ["Alohomora", "Lumos", "Expelliarmus", "Wingardium Leviosa"], answer: "Wingardium Leviosa" },
    { question: "Who is the Half-Blood Prince?", options: ["Harry Potter", "Sirius Black", "Severus Snape", "Albus Dumbledore"], answer: "Severus Snape" },
    { question: "What position does Harry play on the Quidditch team?", options: ["Keeper", "Beater", "Seeker", "Chaser"], answer: "Seeker" },
    { question: "What platform leads to the Hogwarts Express?", options: ["9", "9 1/2", "9 3/4", "10"], answer: "9 3/4" },
    { question: "What is Voldemort’s real name?", options: ["Tom Riddle", "Lucius Malfoy", "Peter Pettigrew", "Gellert Grindelwald"], answer: "Tom Riddle" },
    { question: "Who killed Dumbledore?", options: ["Bellatrix Lestrange", "Draco Malfoy", "Severus Snape", "Voldemort"], answer: "Severus Snape" },
    { question: "What is Hermione's cat's name?", options: ["Crookshanks", "Hedwig", "Fang", "Buckbeak"], answer: "Crookshanks" }
];

const quizForm = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const resultDisplay = document.getElementById("result");

// Generate quiz questions
quizData.forEach((data, index) => {
    const questionElem = document.createElement("div");
    questionElem.classList.add("question");
    questionElem.innerHTML = `
        <p>${index + 1}. ${data.question}</p>
        ${data.options.map(option => `
            <label>
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            </label><br>
        `).join('')}
    `;
    quizForm.appendChild(questionElem);
});

// Calculate the score
submitBtn.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((data, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === data.answer) {
            score++;
        }
    });
    resultDisplay.textContent = `You scored ${score} out of ${quizData.length}!`;
});
