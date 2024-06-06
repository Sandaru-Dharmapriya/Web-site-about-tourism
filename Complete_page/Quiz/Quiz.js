let questions = [
    {
        question: "01.What is the capital of SriLanka?",
        options: ["a)Piliyandala", "b)Balangoda", "c)Sri Jayawardanapura", "d)Jaffna"],
        answer: "2"
    },
    {
        question: "02.Which country is the closet to the SriLanka?",
        options: ["a)England", "b)India", "c)USA", "d)Antarctica"],
        answer: "1"
    },
    {
        question: "03.What is the highest mountain in Sri Lanka??",
        options: ["a)Mount Kilimanjaro", "b)Mount Everest", "c)Pidurutalagala", "d)Bathalegale"],
        answer: "2"
    },
    {
        question: "04.What is the ancient palace complex located in the ancient city of Polonnaruwa?",
        options: ["a)Temple of the Tooth", "b)Sigiriya Rock Fortress", "c)Dambulla Cave Temple", "d)Quadrangle (Dalada Maluwa)"],
        answer: "2"
    },
    {
        question: "05.What is the famous dance festival celebrated in Kandy, SriLanka?",
        options: ["a)Vesak", "b)Kandy Esala Perahera", "c)Pongal", "d)Ramazan"],
        answer: "1"
    },
    {
        question: "06.What is the famous festival celebrated in Sri Lanka to commemorate the rice harvest?",
        options: ["a)Wesak", "b)Pongal", "c)Diwali", "d)Sinhala and Tamil New Year (Aluth Avurudu)"],
        answer: "3"
    },
    {
        question: "07.Sri Lanka is famous for its traditional:",
        options: ["a)Batik art", "b)Pottery", "c)Stilt fishing", "d)Tea ceremony"],
        answer: "0"
    },
    {
        question: "08.Sri Lanka is famous for its traditional wooden masks used in:",
        options: ["a)Mask dance", "b)Kandyan dance", "c)Salsa dance", "d)Ballet dance"],
        answer: "0"
    },
    {
        question: "09.traditional Sri Lankan rice and curry dish served on a banana leaf?",
        options: ["a)Hoppers (Appa)", "b)Kottu Roti", "c)Lamprais", "d)Pol Sambol"],
        answer: "2"
    },
    {
        question: "10.What is the famous bird sanctuary located in the northwest of SriLanka?",
        options: ["a)Sinharaja Forest Reserve", "b)Bundala National Parka", "c)Knuckles Mountain Range", "d)Kumana National Park"],
        answer: "3"
    }
    
];
let currentQuestion = 0;
let correctAnswers = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButtonElement = document.getElementById("nextButton");

function displayQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    answersElement.innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const answerElement = document.createElement("div");
        answerElement.classList.add("answer");
        answerElement.textContent = questions[currentQuestion].options[i];
        answerElement.addEventListener("click", handleAnswerClick);
        answersElement.appendChild(answerElement);
    }

    nextButtonElement.disabled = true;
}

function handleAnswerClick(event) {
    const selectedAnswer = event.target;
    const answers = document.getElementsByClassName("answer");
    const selectedAnswerText = selectedAnswer.textContent;
    const correctAnswer = questions[currentQuestion].answer;

    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("selected", "wrong", "correct");
    }

    if (selectedAnswerText === questions[currentQuestion].options[correctAnswer]) {
        selectedAnswer.classList.add("selected", "correct");
        correctAnswers++;
    } else {
        selectedAnswer.classList.add("selected", "wrong");

        // Highlight the correct answer in green
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].textContent === questions[currentQuestion].options[correctAnswer]) {
                answers[i].classList.add("correct");
                break;
            }
        }
    }

    nextButtonElement.disabled = false;
}

function handleNextQuestionClick() {
    const selectedAnswer = document.querySelector(".answer.selected");

    if (selectedAnswer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    answersElement.innerHTML = `You got ${correctAnswers} out of ${questions.length} questions correct.`;
    nextButtonElement.style.display = "none";
}

// Start Quiz
displayQuestion();

// Attach click event listener to "Next Question" button
nextButtonElement.addEventListener("click", handleNextQuestionClick);