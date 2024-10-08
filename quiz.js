const questions = [
    { question: "What is 2 + 2?", answers: { a: "3", b: "4", c: "5", d: "6" }, correctAnswer: "b" },
    { question: "What is the capital of France?", answers: { a: "Berlin", b: "Madrid", c: "Paris", d: "Rome" }, correctAnswer: "c" },
    // Add 8 more questions here
];

const quizContainer = document.getElementById('quiz');
const circlesContainer = document.getElementById('circles');
const submitButton = document.getElementById('submit');

function generateQuiz() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        
        for (let letter in q.answers) {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${letter}">
                    ${letter}: ${q.answers[letter]}
                </label><br>
            `;
        }
        
        quizContainer.appendChild(questionDiv);
        
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.id = `circle${index}`;
        circlesContainer.appendChild(circle);
    });
}

function showResults() {
    let allCorrect = true;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        const circle = document.getElementById(`circle${index}`);
        
        if (selected && selected.value === q.correctAnswer) {
            circle.style.backgroundColor = 'green';
        } else {
            circle.style.backgroundColor = 'red';
            allCorrect = false;
        }
    });
    
    if (!allCorrect) {
        alert('Please correct the wrong answers.');
    } else {
        alert('All answers are correct!');
    }
}

submitButton.addEventListener('click', showResults);

generateQuiz();
