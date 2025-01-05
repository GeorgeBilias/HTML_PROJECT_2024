
document.addEventListener('DOMContentLoaded', (event) => { // Κατα το ανοιγμα του site
    if (!sessionStorage.getItem('greetingShown')) { // Αν δεν έχει εμφανιστεί το μήνυμα καλωσορίσματος
        const currentDate = new Date(); // Πάρε την τρέχουσα ημερομηνία
        const hours = currentDate.getHours(); // Πάρε την τρέχουσα ώρα
        let greeting; 

    if (hours < 12) { // Αν η ώρα είναι μικρότερη από 12
        greeting = 'Καλημέρα'; // Εμφάνισε το καλημέρα
    } else {
        greeting = 'Καληνύχτα'; // Αλλιώς εμφάνισε το καληνύχτα
    }

    const welcomeMessage = `${greeting}! Σήμερα είναι ${currentDate.toLocaleDateString()}. Καλώς ήρθατε στον ιστότοπό μας. Εδώ θα βρείτε πληροφορίες για την Hip-Hop κουλτούρα.`; // Το μήνυμα καλωσορίσματος

    alert(welcomeMessage); // Εμφάνισε το μήνυμα καλωσορίσματος
    
    sessionStorage.setItem('greetingShown', 'true'); // Αποθήκευσε το ότι το μήνυμα καλωσορίσματος έχει εμφανιστεί
}
});

function changeBackgroundColor() { // Όταν πατηθεί το κουμπί
    const content = document.getElementById('content'); // Πάρε το περιεχόμενο
    const paragraph = content.querySelector('p'); // Πάρε την πρώτο παράγραφο
    if (paragraph.style.backgroundColor === "rgb(51, 51, 51)") { // Αν το χρώμα του background είναι μαύρο δηλαδή εχει ηδη αλλαχθεί
        paragraph.style.backgroundColor = "transparent"; // Κάνε το background διαφανές
        paragraph.style.color = "initial"; // Κάνε το χρώμα του κειμένου το αρχικό
        paragraph.style.padding = "initial"; // Κάνε το padding το αρχικό
        paragraph.style.borderRadius = "initial"; // Κάνε το border radius το αρχικό
        
    } else { // Αλλιώς αν δεν εχει αλλαγθεί το background
        paragraph.style.backgroundColor = "#333"; // Κάνε το background μαύρο
        paragraph.style.color = "#fff"; // Κάνε το χρώμα του κειμένου λευκό
        paragraph.style.padding = "10px"; // Κάνε το padding 10px
        paragraph.style.borderRadius = "5px"; // Κάνε το border radius 5px
    }
}

function sendEmail(email) { // Όταν πατηθεί το κουμπί για το email
    window.location.href = `mailto:${email}`; // Ανοίξε το email client για να στειλεις mail
}

const questions = [ // Οι ερωτήσεις του quiz
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

const userNameInput = '';

function submitName() {
    const userNameInput = document.getElementById('userNameInput').value; // Πάρε το όνομα που έχει δωθεί
    if (userNameInput === '') { // Αν δεν έχει δωθεί όνομα
        alert('Παρακαλώ εισάγετε το όνομά σας.'); // Εμφάνισε μήνυμα
        return;
    }else {
        document.getElementById('insert-username').style.display = 'none'; // Κρύψε το input για το όνομα
        document.getElementById('welcomeMessage').innerHTML = `Καλώς ήρθες, ${userNameInput}! <br> Πατήστε το κουμπί για να ξεκινήσετε το quiz.`; // Γραψε το μυνημα καλωσορισματος
        document.getElementById('welcomeMessage').style.display = 'block'; // Εμφάνισε το μήνυμα καλωσορίσματος
        document.getElementById('startQuiz').style.display = 'block'; // Εμφάνισε το κουμπί για να ξεκινήσει το quiz
        document.getElementById('userNameInput').style.display = 'none'; // Κρύψε το input για το όνομα
        document.getElementById('submitName').style.display = 'none'; // Κρύψε το κουμπί για υποβολή ονόματος
    }
}

let currentQuestionIndex = 0;
let score = 0;
let userName = '';

function startQuiz() { // Όταν πατηθεί το κουμπί για να ξεκινησει το quiz

    document.getElementById('welcomeMessage').style.display = 'none'; // Κρύψε το μήνυμα καλωσορίσματος
    document.getElementById('startQuiz').style.display = 'none'; // Κρύψε το κουμπί για να ξεκινήσει το quiz
    document.getElementById('quiz').style.display = 'block'; // Εμφάνισε το quiz
    document.getElementById('question').style.display = 'block'; // Εμφάνισε την ερώτηση
    document.getElementById('choices').style.display = 'block'; // Εμφάνισε τις επιλογές
    document.getElementById('submit').style.display = 'block'; // Εμφάνισε το κουμπί για υποβολή απάντησης

    displayQuestion(); // Εμφάνισε την πρώτη ερώτηση
}

function displayQuestion() { // Εμφάνισε την ερώτηση

    const questionElement = document.getElementById('question'); // Πάρε το element της ερώτησης
    const choicesElement = document.getElementById('choices'); // Πάρε το element των επιλογών
    const currentQuestion = questions[currentQuestionIndex]; // Πάρε την τρέχουσα ερώτηση

    questionElement.innerText = currentQuestion.question; // Εμφάνισε την ερώτηση
    choicesElement.innerHTML = ''; // Κάνε κενό τις επιλογές

    currentQuestion.choices.forEach((choice, index) => { // Για κάθε επιλογή
        const choiceElement = document.createElement('div'); // Δημιούργησε ένα div
        choiceElement.classList.add('choice'); // Πρόσθεσε την κλάση choice
        choiceElement.innerHTML = `<input type="radio" name="choice" value="${index}"> ${choice}`; // Εμφάνισε την επιλογή
        choicesElement.appendChild(choiceElement); // Πρόσθεσε την επιλογή στο element των επιλογών
    });
}

function submitAnswer() { // Όταν πατηθεί το κουμπί για να υποβληθεί η απάντηση
    const selectedChoice = document.querySelector('input[name="choice"]:checked'); // Πάρε την επιλογή που έχει επιλεγεί
    if (!selectedChoice) { // Αν δεν έχει επιλεγεί κάποια απάντηση
        alert('Παρακαλώ επιλέξτε μια απάντηση.'); // Εμφάνισε μήνυμα
        return;
    }

    const answer = parseInt(selectedChoice.value); // Πάρε την απάντηση που έχει επιλεγεί
    if (answer === questions[currentQuestionIndex].correctAnswer) { // Αν η απάντηση είναι σωστή
        score++; // Αύξησε το σκορ
    }

    currentQuestionIndex++; // Πήγαινε στην επόμενη ερώτηση
    if (currentQuestionIndex < questions.length) { // Αν υπάρχουν ακόμα ερωτήσεις
        displayQuestion(); // Εμφάνισε την επόμενη ερώτηση
    } else {
        displayResults(); // Εμφάνισε τα αποτελέσματα
    }
}

function displayResults() { // Εμφάνισε τα αποτελέσματα
    const resultsElement = document.getElementById('results'); // Πάρε το element των αποτελεσμάτων
    resultsElement.innerHTML = `<h3>Συγχαρητήρια, ${userName}! Το σκορ σας είναι ${score} από ${questions.length}.</h3>`; // Εμφάνισε το μήνυμα με το σκορ
    document.getElementById('question').style.display = 'none'; // Κρύψε την ερώτηση
    document.getElementById('choices').style.display = 'none'; // Κρύψε τις επιλογές
    document.getElementById('submit').style.display = 'none'; // Κρύψε το κουμπί για υποβολή απάντησης
}