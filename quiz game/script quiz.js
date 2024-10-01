function submitQuiz() {
    // Retrieve selected answers for each question
    var answer1 = document.querySelector('input[name="question1"]:checked');
    var answer2 = document.querySelector('input[name="question2"]:checked');
    var answer3 = document.querySelector('input[name="question3"]:checked');
    var answer4 = document.querySelector('input[name="question4"]:checked');
    // Check if all questions have been answered
    if (!answer1 || !answer2 || !answer3 || !answer4) {
        alert('Please answer all questions');
        return;
    }

    var correctAnswers = {
        question1: "delhi",
        question2: "narendra",
        question3: "15-08-1947",
        question4: "camel"
    };

    // Score calculation
    var score = 0;
    if (answer1.value === correctAnswers.question1) score++;
    if (answer2.value === correctAnswers.question2) score++;
    if (answer3.value === correctAnswers.question3) score++;
    if (answer4.value === correctAnswers.question4) score++;

    // Display the final score
    document.getElementById('quiz-result').innerText = 'Your score is: ' + score + '/4';
}