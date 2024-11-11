function saveAnswers() {
    const form = document.getElementById('questionForm');
    const answers = form.querySelectorAll('input[type="radio"]:checked');

    // Check if all questions have been answered
    const totalQuestions = form.querySelectorAll('.question-block').length;
    if (answers.length !== totalQuestions) {
        alert("Please don't leave any questions blank, Thank you!");
        return;
    }

    function saveName() {
        // Retrieve the value from the name input field
        const participantName = document.getElementById('participantName').value;
        console.log("Retrieved participantName:", participantName); // Debug line
        
    
        // Check if the input field is empty
        if (!participantName) {
            alert("Please enter your name.");
            console.log("Name input is empty"); // Debug line
            return;
        }
    
        // Check if localStorage is accessible
        if (typeof Storage === "undefined") {
            alert("Local storage is not supported by this browser.");
            console.log("localStorage is not supported"); // Debug line
            return;
        }
    
        try {
            // Save the name to localStorage
            localStorage.setItem('participantName', participantName);
    
            // Confirm successful save
            alert("Name saved successfully!");
            console.log("Name saved in localStorage:", localStorage.getItem('participantName'));
        } catch (e) {
            console.error("Failed to save to localStorage", e);
            alert("An error occurred while saving. Please try again or check your browser settings.");
        }
    }
    
    

    let frequency = {
        A: 0,
        B: 0,
        C: 0
    };

    // Count how many times each option was selected
    answers.forEach(answer => {
        if (answer.value === "1") {
            frequency.A += 1;
        } else if (answer.value === "2") {
            frequency.B += 1;
        } else if (answer.value === "3") {
            frequency.C += 1;
        }
    });

    // Store frequencies in localStorage
    localStorage.setItem('frequencyA', frequency.A);
    localStorage.setItem('frequencyB', frequency.B);
    localStorage.setItem('frequencyC', frequency.C);

// Define tips for each learning style with images
const visualTips = [
    'Visual learners prefer to absorb information through images, diagrams, and visual aids. They excel when concepts are presented in a visual format, helping them retain information more effectively.</div>',
    '&nbsp;',
    '<div class="visual-tip3"><strong>Wanna know how to be more engaged while learning and improve your learning experience?</strong></div>',
    '&nbsp;',
    '<div class="visual-tip5"><strong>Tips to improve your learning engagement:</strong></div>',
    '&nbsp;',
    '<div class="visual-tip7"><img src="checking-the-numbers.png" alt="Diagram Tip" class="tip-image"><strong>Use Diagrams and Charts:</strong> Create visual representations like mind maps, flowcharts, or graphs to understand complex information.</div>',
    '<div class="visual-tip8"><img src="Color-Code-with-Sticky-Notes.png" alt="Color Code Tip" class="tip-image"><strong>Color Code Notes:</strong> Highlight or use different colors for different concepts to organize information visually.</div>',
    '<div class="visual-tip9"><img src="pensive-thoughtful-contemplating.png" alt="Visualize Tip" class="tip-image"><strong>Visualize Information:</strong> Try picturing what you\'re learning in your mind, turning abstract ideas into images.</div>',
    '<div class="visual-tip10"><img src="images (8).png" alt="Video Tip" class="tip-image"><strong>Watch Educational Videos:</strong> Use educational platforms that offer video tutorials on various subjects.</div>',
    '<div class="visual-tip11"><img src="Using-Flash-Cards-H.png" alt="Flashcard Tip" class="tip-image"><strong>Use Flashcards:</strong> Create flashcards with images or diagrams to help memorize facts and definitions.</div>'
];

const auditoryTips = [
    'Auditory learners thrive on listening and verbal communication. They grasp concepts better through lectures, discussions, and audio materials, benefiting from spoken explanations and auditory cues.</div>',
    '&nbsp;',
    '<div class="auditory-tip3"><strong>Wanna know how to be more engaged while learning and improve your learning experience?</strong></div>',
    '&nbsp;',
    '<div class="auditory-tip5"><strong>Tips to improve your learning engagement:</strong></div>',
    '&nbsp;',
    '<div class="auditory-tip7"><img src="784784p888EDNmain6_Cimo.png" alt="Read Aloud Tip" class="tip-image"><strong>Read Aloud:</strong> Verbalize what you\'re studying to reinforce learning through hearing. Speaking aloud activates auditory learning by engaging both your eyes and ears. Verbalizing concepts reinforces their memory, as hearing yourself speak can help solidify information in your mind.</div>',
    '<div class="auditory-tip8"><img src="iStock_94825851_MEDIUM.160622.png" alt="Participate in Discussions" class="tip-image"><strong>Participate in Discussions:</strong> Join study groups or class discussions to talk through concepts. Study groups or class discussions provide diverse perspectives, aiding in deeper information processing, clarifying misconceptions, and enhancing understanding of concepts.</div>',
    '<div class="auditory-tip9"><img src="Untitled-design-78-1024x576.png" alt="Listen to Recordings" class="tip-image"><strong>Listen to Recordings:</strong> Use podcasts or audiobooks to review the material by listening. Audiobooks, lectures, and podcasts offer passive review methods, enhancing memory and understanding of important points and definitions by repeatedly listening to them.</div>',
    '<div class="auditory-tip10"><img src="images (7).png" alt="Teach Others Tip" class="tip-image"><strong>Teach Someone Else:</strong> Explaining concepts to someone else out loud can strengthen your understanding. Teaching simplifies and clarifies concepts, strengthening comprehension, and organizes thoughts by dividing complex ideas into manageable chunks, making the material easier to remember.</div>',
    '<div class="auditory-tip11"><img src="woman-writing-taking-notes-on-he.png" alt="Mnemonic Tip" class="tip-image"><strong>Use Mnemonic Devices:</strong> Create rhymes or mnemonic phrases to remember facts and figures. Mnemonics are memory aids that aid in remembering complex information by creating catchy cues through rhymes or verbalized phrases.</div>'
];

const kinestheticTips = [
    'Kinesthetic learners engage best through hands-on experiences and physical activity. They learn effectively by doing, using movement and tactile engagement to understand concepts and retain information.</strong></div>',
    '&nbsp;',
    '<div class="kinesthetic-tip3">Wanna know how to be more engaged while learning and improve your learning experience?</strong></div>',
    '&nbsp;',
    '<div class="kinesthetic-tip5">Tips to improve your learning engagement:</strong></div>',
    '&nbsp;',
    '<div class="kinesthetic-tip7"><img src="best-hand-on-activities-for-kids.png" alt="Hands-On Activity Tip" class="tip-image"><strong>Use Hands-On Activities:</strong> Engage in experiments or building models to understand concepts.</div>',
    '<div class="kinesthetic-tip8"><img src="1711814025222.png" alt="Take Breaks Tip" class="tip-image"><strong>Take Frequent Breaks:</strong> Move around during study sessions to stay physically active.</div>',
    '<div class="kinesthetic-tip9"><img src="Students-engages-in-role-play-ac.png" alt="Role Play Tip" class="tip-image"><strong>Role-Play or Act Out Concepts:</strong> Act out scenes to better grasp the material.</div>',
    '<div class="kinesthetic-tip10"><img src="The-Value-of-Learning-and-Moveme.png" alt="Movement Tip" class="tip-image"><strong>Incorporate Movement into Learning:</strong> Study while standing or walking to keep your body active.</div>',
    '<div class="kinesthetic-tip11"><img src="May-19-Using-Interactive-Learnin.png" alt="Physical Objects Tip" class="tip-image"><strong>Use Physical Objects:</strong> Work with real-world objects related to what you\'re learning.</div>'
];
    function removeEmptyDivs(tipsArray) {
    return tipsArray.map(item => {
        // Check if item contains only "<div class='...'><strong>&nbsp;</strong></div>"
        if (item.includes("<strong>&nbsp;</strong>") && item.startsWith('<div') && item.endsWith('</div>')) {
            return '<strong>&nbsp;</strong>'; // Return just the <strong> element
        }
        return item; // Otherwise, keep the original item
    });
}

// Apply to each array
const updatedVisualTips = removeEmptyDivs(visualTips);
const updatedAuditoryTips = removeEmptyDivs(auditoryTips);
const updatedKinestheticTips = removeEmptyDivs(kinestheticTips);

// Now use updatedVisualTips, updatedAuditoryTips, and updatedKinestheticTips in your code


// Generate overall tips based on the user's choices
let learningStyleMessage = "";
let tips = "";

// Check for the learning style
if (frequency.A > frequency.B && frequency.A > frequency.C) {
    learningStyleMessage = '<strong>Learning Style:</strong> You are a Visual Learner.<br><br>';  // Added <br><br> for space
    tips += visualTips.join('');  // Add visual tips after the message
} else if (frequency.B > frequency.A && frequency.B > frequency.C) {
    learningStyleMessage = '<strong>Learning Style:</strong> You are an Auditory Learner.<br><br>';  // Added <br><br> for space
    tips += auditoryTips.join('');  // Add auditory tips after the message
} else if (frequency.C > frequency.A && frequency.C > frequency.B) {
    learningStyleMessage = '<strong>Learning Style:</strong> You are a Kinesthetic Learner.<br><br>';  // Added <br><br> for space
    tips += kinestheticTips.join('');  // Add kinesthetic tips after the message
} else {
    learningStyleMessage = "<strong>Learning Style:</strong> Your learning style is mixed.<br><br><strong>Tips for you:</strong><br><br> Try using multiple methods to enhance your learning experience.<br><br>";
}

// Combine the learning style message and tips
tips = learningStyleMessage + tips;


    // Store the tips in localStorage
    localStorage.setItem('learningTips', tips);

    // Redirect to the tips page
    window.location.href = 'tipstoenjoy.html'; // Redirect once after storing data
}

document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 50) { // Adjust threshold as needed
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on page load

    const fadeElements = document.querySelectorAll(".fade-scroll");

    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (elementInView) {
            element.classList.add("fade-in");
            element.classList.remove("fade-out");
        } else {
            element.classList.add("fade-out");
            element.classList.remove("fade-in");
        }
    });
});

// Function to save the participant's name
function saveName() {
    // Retrieve the value from the name input field
    const participantName = document.getElementById('participantName').value;

    // Check if the input field is empty
    if (!participantName) {
        alert("Please enter your name.");
        return;
    }

    // Save the name to localStorage
    localStorage.setItem('participantName', participantName);

    // Confirm successful save
    alert("Name saved successfully!");

    // Optional: log to console for debugging
    console.log("Name saved in localStorage:", localStorage.getItem('participantName'));
}

// Function to load the participant's name into the certificate
function displayCertificate() {
    // Retrieve the name from localStorage
    const savedName = localStorage.getItem('participantName');

    // Check if a name was saved, and if so, display it in the certificate section
    if (savedName) {
        const certificateContainer = document.getElementById('certificate-container');
        if (certificateContainer) {
            certificateContainer.innerHTML = `
                <h1>Certificate of Completion</h1>
                <p>This certifies that <strong>${savedName}</strong> has successfully completed the activity.</p>
            `;
        }
    }
}


// Developer's Note: This script creates a falling shapes background effect with circles that fall infinitely in random positions.

document.addEventListener("DOMContentLoaded", function() {
    const shapesContainer = document.createElement("div");
    shapesContainer.classList.add("falling-shapes-container");
    document.body.appendChild(shapesContainer);
  
    function createShape() {
        const shape = document.createElement("div");
        shape.classList.add("falling-shape");
        
        // Randomly assign one of the two images (img1 or img2)
        const randomImageClass = Math.random() > 0.5 ? 'img1' : 'img2';
        shape.classList.add(randomImageClass);
      
        // Random size, position, and fall duration for each shape
        const size = Math.random() * 40 + 30; // Increased size range to between 30px and 70px
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
      
        shape.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        shape.style.animationDuration = Math.random() * 5 + 5 + "s"; // Random fall speed between 5s and 10s
      
        shapesContainer.appendChild(shape);
      
        // Remove shape once animation completes
        shape.addEventListener("animationend", function() {
            shapesContainer.removeChild(shape);
            createShape(); // Continuously create new shapes for an infinite effect
        });
    }
  
    // Generate multiple shapes at once for a dense effect
    for (let i = 0; i < 20; i++) {
        createShape();
    }
});




// Function to toggle the sidebar and button visibility
function toggleMenu() {
    const sidebar = document.getElementById("navSidebar");
    const menuButton = document.querySelector(".menu-button");
    const closeButton = document.querySelector(".close-btn");

    if (sidebar.style.left === "0px") {
        // Close sidebar and show the menu button
        sidebar.style.left = "-250px";
        menuButton.style.display = "block"; // Show the menu button
        closeButton.style.display = "none"; // Hide the close button
    } else {
        // Open sidebar and show the close button
        sidebar.style.left = "0px";
        menuButton.style.display = "none"; // Hide the menu button
        closeButton.style.display = "block"; // Show the close button
    }
}

// Function to close the sidebar when the close button is clicked
function closeMenu() {
    const sidebar = document.getElementById("navSidebar");
    const menuButton = document.querySelector(".menu-button");
    const closeButton = document.querySelector(".close-btn");

    sidebar.style.left = "-250px"; // Hide the sidebar
    menuButton.style.display = "block"; // Show the menu button
    closeButton.style.display = "none"; // Hide the close button
}

