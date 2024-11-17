document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById("quiz-container");
    const quizQuestion = document.getElementById("quiz-question");
    const quizResult = document.getElementById("quiz-result");
    const quizEnd = document.getElementById("quiz-end");
    const nextQuestionBtn = document.getElementById("next-question");
    const restartQuizBtn = document.getElementById("restart-quiz");
    const scoreElement = document.getElementById("score");
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    // Array of questions, answers, and correct options
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: "Who developed the theory of relativity?",
            options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
            correctAnswer: "Albert Einstein"
        }
    ];
    
    // Function to display the current question and options
    function loadQuestion() {
        const question = questions[currentQuestionIndex];
        quizQuestion.innerHTML = `<h4>Question ${currentQuestionIndex + 1}: ${question.question}</h4>`;
        
        const optionsContainer = document.querySelector('.quiz-options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('quiz-option');
            button.textContent = option;
            button.setAttribute('data-answer', option === question.correctAnswer);
            button.addEventListener('click', handleAnswerClick);
            optionsContainer.appendChild(button);
        });
        
        quizResult.style.display = 'none';
    }

    // Function to handle answer selection
    function handleAnswerClick(e) {
        const selectedOption = e.target;
        const correctAnswer = selectedOption.getAttribute('data-answer') === 'true';
        
        if (correctAnswer) {
            score++;
            selectedOption.classList.add('selected');
        } else {
            selectedOption.classList.add('wrong');
        }
        
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.disabled = true; // Disable other options
        });
        
        quizResult.style.display = 'block';
    }

    // Function to go to the next question
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showQuizEnd();
        }
    }

    // Function to show the quiz end screen
    function showQuizEnd() {
        quizContainer.style.display = 'none';
        quizEnd.style.display = 'block';
        scoreElement.textContent = `Your score is ${score} out of ${questions.length}`;
    }

    // Function to restart the quiz
    function restartQuiz() {
        score = 0;
        currentQuestionIndex = 0;
        quizContainer.style.display = 'block';
        quizEnd.style.display = 'none';
        loadQuestion();
    }
    let currentIndex = 0;

    // Function to move the carousel images
    function moveCarousel(direction) {
        const images = document.querySelectorAll('.carousel-image');
        const totalImages = images.length;
    
        // Update currentIndex with the direction and loop back
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        const carouselImages = document.querySelector('.carousel-images');
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    // Add event listeners to buttons
    nextQuestionBtn.addEventListener('click', nextQuestion);
    restartQuizBtn.addEventListener('click', restartQuiz);

    // Load the first question when the page loads
    loadQuestion();
});
