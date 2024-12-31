document.addEventListener('DOMContentLoaded', (event) => {
    // Check if the greeting has already been shown
    if (!sessionStorage.getItem('greetingShown')) {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        let greeting;

    if (hours < 12) {
        greeting = 'Καλημέρα';
    } else if (hours < 18) {
        greeting = 'Καλησπέρα';
    } else {
        greeting = 'Καληνύχτα';
    }

    const welcomeMessage = `${greeting}! Σήμερα είναι ${currentDate.toLocaleDateString()}. Καλώς ήρθατε στον ιστότοπό μας. Εδώ θα βρείτε πληροφορίες για την Hip-Hop κουλτούρα.`;

    alert(welcomeMessage);
    // Set the flag in localStorage to indicate the greeting has been shown
    sessionStorage.setItem('greetingShown', 'true');
}
});
// Function to change the background color of the paragraph
function changeBackgroundColor() {
    const content = document.getElementById('content');
    const paragraph = content.querySelector('p');
    if (paragraph.style.backgroundColor === "rgb(51, 51, 51)") { // Check if the background color is #333
        paragraph.style.backgroundColor = "transparent";
        paragraph.style.color = "initial";
        paragraph.style.padding = "initial";
        paragraph.style.borderRadius = "initial";
    } else {
        paragraph.style.backgroundColor = "#333"; // Choose the color that fits
        paragraph.style.color = "#fff"; // Change the text color to white
        paragraph.style.padding = "10px"; // Add some padding to the paragraph
        paragraph.style.borderRadius = "5px"; // Add rounded corners
    }
}

function sendEmail(email) {
    window.location.href = `mailto:${email}`;
}

const questions = [
    {
        question: "1. Ποιος είναι ο ιδρυτής της Hip-Hop;",
        choices: ["DJ Kool Herc", "Grandmaster Flash", "Afrika Bambaataa", "Run-D.M.C."],
        correctAnswer: 0
    },
    {
        question: "2. Ποιο είναι το πρώτο Hip-Hop τραγούδι που έγινε επιτυχία;",
        choices: ["Rapper's Delight", "The Message", "Planet Rock", "Walk This Way"],
        correctAnswer: 0
    },
    {
        question: "3. Ποια χρονιά ξεκίνησε η Hip-Hop κουλτούρα;",
        choices: ["1973", "1980", "1985", "1990"],
        correctAnswer: 0
    },
    {
        question: "4. Ποιο είναι το πιο διάσημο Hip-Hop συγκρότημα;",
        choices: ["N.W.A", "Public Enemy", "Run-D.M.C.", "Wu-Tang Clan"],
        correctAnswer: 2
    },
    {
        question: "5. Ποιος είναι ο πιο διάσημος Hip-Hop καλλιτέχνης;",
        choices: ["Tupac Shakur", "The Notorious B.I.G.", "Jay-Z", "Eminem"],
        correctAnswer: 3
    },
    {
        question: "6. Ποιο είναι το πιο διάσημο Hip-Hop άλμπουμ;",
        choices: ["Illmatic", "The Chronic", "Ready to Die", "The Marshall Mathers LP"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userName = '';

function startQuiz() {
    userName = document.getElementById('username').value;
    if (userName === '') {
        alert('Παρακαλώ εισάγετε το όνομά σας.');
        return;
    }
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('start-quiz').style.display = 'none';
    document.getElementById('username').style.display = 'none';
    displayQuestion();
}

function displayQuestion() {
    document.getElementById('insert-username').style.display = 'none';
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const choiceElement = document.createElement('div');
        choiceElement.classList.add('choice');
        choiceElement.innerHTML = `<input type="radio" name="choice" value="${index}"> ${choice}`;
        choicesElement.appendChild(choiceElement);
    });
}

function submitAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) {
        alert('Παρακαλώ επιλέξτε μια απάντηση.');
        return;
    }

    const answer = parseInt(selectedChoice.value);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}

function displayResults() {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = `<h3>Συγχαρητήρια, ${userName}! Το σκορ σας είναι ${score} από ${questions.length}.</h3>`;
    document.getElementById('question').style.display = 'none';
    document.getElementById('choices').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
}