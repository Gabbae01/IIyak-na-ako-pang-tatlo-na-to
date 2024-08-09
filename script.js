function calculateAverage() {
    const form = document.getElementById('questionForm');
    const answers = form.querySelectorAll('input[type="checkbox"]:checked');
    
    let total = 0;

    // Loop through checked answers and sum their values
    answers.forEach(answer => {
        total += parseInt(answer.value, 10);
    });

    // Calculate average
    const average = (answers.length > 0) ? (total / answers.length) : 0;

    // Display average
    document.getElementById('averageAnswer').innerText = `Average Answer: ${average.toFixed(2)}`;

    // Place comment about the average calculation
    const commentSection = document.querySelector('.output .comment');
    if (commentSection) {
        commentSection.innerText = `/* The average is calculated by summing the values of selected options and dividing by the number of options selected. */`;
    }
}
function calculateAverage() {
    console.log("Function executed"); // Check if the function is being called

    const form = document.getElementById('questionForm');
    const answers = form.querySelectorAll('input[type="checkbox"]:checked');
    console.log("Checked answers:", answers); // Log checked answers

    let total = 0;

    // Loop through checked answers and sum their values
    answers.forEach(answer => {
        total += parseInt(answer.value, 15);
    });

    // Calculate average
    const average = (answers.length > 0) ? (total / answers.length) : 0;
    console.log("Total:", total, "Average:", average); // Log total and average

    // Display average
    document.getElementById('averageAnswer').innerText = `Average Answer: ${average.toFixed(2)}`;
}
