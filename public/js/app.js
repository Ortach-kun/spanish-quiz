document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const quizContainer = document.getElementById('quiz-container');
    const resultsScreen = document.getElementById('results-screen');
    const startButton = document.getElementById('start-btn');
    const restartButton = document.getElementById('restart-btn');
    const questionText = document.getElementById('question-text');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');
    const scoreElement = document.getElementById('score');
    const totalQuestionsElement = document.getElementById('total-questions');
    
    // Audio element
    const backgroundMusic = document.getElementById('background-music');
    
    let shuffledQuestions, currentQuestionIndex, score;
    let isMusicPlaying = false;
    
    // Make sure audio is loaded
    backgroundMusic.load();
    
    // Start quiz button starts the quiz and plays music
    startButton.addEventListener('click', () => {
        startQuiz();
        playBackgroundMusic();
    });
    
    // Also play music when restarting the quiz
    restartButton.addEventListener('click', () => {
        startQuiz();
        playBackgroundMusic();
    });
    
    // Function to play background music
    function playBackgroundMusic() {
        if (!isMusicPlaying) {
            const playPromise = backgroundMusic.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Audio started playing');
                        isMusicPlaying = true;
                    })
                    .catch(error => {
                        console.error('Error playing audio:', error);
                        isMusicPlaying = false;
                    });
            }
        }
    }
    
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });
    
    function startQuiz() {
        introScreen.classList.add('hidden');
        resultsScreen.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        
        shuffledQuestions = [...quizQuestions];
        currentQuestionIndex = 0;
        score = 0;
        
        totalQuestionsElement.textContent = shuffledQuestions.length;
        setNextQuestion();
    }
    
    function setNextQuestion() {
        resetState();
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
        } else {
            showResults();
        }
    }
    
    function showQuestion(question) {
        questionText.textContent = question.question;
        
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer-btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }
    
    function resetState() {
        nextButton.classList.add('hidden');
        feedback.classList.add('hidden');
        feedback.classList.remove('correct', 'wrong');
        
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
    function selectAnswer(e) {
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct === "true";
        
        if (isCorrect) {
            selectedButton.classList.add('correct');
            feedback.textContent = '¡Correcto!';
            feedback.classList.add('correct');
            score++;
        } else {
            selectedButton.classList.add('wrong');
            
            // Find the correct answer and highlight it
            Array.from(answerButtons.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add('correct');
                }
            });
            
            feedback.textContent = '¡Incorrecto!';
            feedback.classList.add('wrong');
        }
        
        feedback.classList.remove('hidden');
        
        // Disable all answer buttons after a choice is made
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        
        nextButton.classList.remove('hidden');
    }
    
    function showResults() {
        quizContainer.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
        scoreElement.textContent = score;
        
        let resultMessage;
        const percentage = (score / shuffledQuestions.length) * 100;
        
        if (percentage >= 90) {
            resultMessage = '¡Excelente! ¡Tienes un conocimiento excepcional del español!';
        } else if (percentage >= 70) {
            resultMessage = '¡Muy bien! Estás progresando muy bien en tu aprendizaje.';
        } else if (percentage >= 50) {
            resultMessage = 'Bien. Continúa practicando para mejorar tus habilidades.';
        } else {
            resultMessage = 'Necesitas practicar más. ¡No te rindas!';
        }
        
        // Create a result message paragraph if it doesn't exist
        let resultMessageElement = document.querySelector('#result-message');
        if (!resultMessageElement) {
            resultMessageElement = document.createElement('p');
            resultMessageElement.id = 'result-message';
            document.querySelector('#results-screen').insertBefore(
                resultMessageElement, 
                document.querySelector('#restart-btn')
            );
        }
        
        resultMessageElement.textContent = resultMessage;
    }
}); 