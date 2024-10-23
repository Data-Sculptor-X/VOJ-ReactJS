const scenarios = [
    {
        text: "You are a tenant and your landlord has not fixed a broken heater. What do you do?",
        choices: [
            { text: "Contact the landlord", next: 1 },
            { text: "Ignore it", next: 2 }
        ]
    },
    {
        text: "You contacted the landlord, but they still haven't fixed it. What is your next step?",
        choices: [
            { text: "Document the issue", next: 3 },
            { text: "Move out", next: 2 }
        ]
    },
    {
        text: "You chose to ignore the issue. This may lead to further problems. It's important to address tenant rights.",
        choices: []
    },
    {
        text: "Documenting the issue is crucial. You should also consider contacting a local tenant's rights organization.",
        choices: []
    }
];

const quiz = {
    question: "What should you do if your landlord does not respond to your repair request?",
    choices: [
        { text: "Ignore the issue", correct: false },
        { text: "Document the issue and seek help", correct: true },
        { text: "Move out immediately", correct: false }
    ]
};

let currentScenario = 0;

function displayScenario() {
    const scenario = scenarios[currentScenario];
    document.getElementById('scenario-text').innerText = scenario.text;
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    scenario.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            currentScenario = choice.next;
            displayScenario();
        };
        choicesContainer.appendChild(button);
    });

    document.getElementById('next-button').style.display = scenario.choices.length ? 'none' : 'block';
}

function startQuiz() {
    document.getElementById('scenario-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-question').innerText = quiz.question;
    const quizChoices = document.getElementById('quiz-choices');
    quizChoices.innerHTML = '';

    quiz.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            const feedback = document.getElementById('feedback');
            feedback.style.display = 'block';
            feedback.innerText = choice.correct ? 'Correct!' : 'Incorrect. The correct answer is: Document the issue and seek help.';
        };
        quizChoices.appendChild(button);
    });
}

document.getElementById('next-button').addEventListener('click', () => {
    if (currentScenario === scenarios.length - 1) {
        startQuiz();
    } else {
        currentScenario++;
        displayScenario();
    }
});

displayScenario();