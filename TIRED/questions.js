function saveAnswers() {
    const form = document.getElementById('questionForm');
    const answers = form.querySelectorAll('input[type="radio"]:checked');

    // Check if all questions have been answered
    const totalQuestions = form.querySelectorAll('.question-block').length;
    if (answers.length !== totalQuestions) {
        alert("Please don't leave any questions blank, Thank you!");
        return;
    }

    // Initialize counters for frequency of answers
    let frequency = {
        A: 0,  // High engagement
        B: 0,  // Moderate engagement
        C: 0   // Low engagement
    };

    // Count how many times each option was selected
    answers.forEach(answer => {
        if (answer.value === "1") {  // '1' is for high engagement (A)
            frequency.A += 1;
        } else if (answer.value === "2") {  // '2' is for moderate engagement (B)
            frequency.B += 1;
        } else if (answer.value === "3") {  // '3' is for low engagement (C)
            frequency.C += 1;
        }
    });

    // Store the frequencies in localStorage
    localStorage.setItem('frequencyA', frequency.A);
    localStorage.setItem('frequencyB', frequency.B);
    localStorage.setItem('frequencyC', frequency.C);

    // Calculate the engagement level based on the frequency counts
    let engagementLevel = '';
    if (frequency.A > frequency.B && frequency.A > frequency.C) {
        engagementLevel = 'High Engagement';
    } else if (frequency.B > frequency.A && frequency.B > frequency.C) {
        engagementLevel = 'Moderate Engagement';
    } else {
        engagementLevel = 'Low Engagement';
    }

    // Store engagement level in localStorage
    localStorage.setItem('engagementLevel', engagementLevel);

    // Redirect to the results page (results.html will display the result)
    window.location.href = 'engagement-score.html';
}


