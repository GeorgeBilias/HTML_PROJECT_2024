
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
        question: "1. Ποιο είναι το πραγματικό όνομα του Travis Scott;",
        choices: ["Kanye West", "Jacques Webster", "Aubrey Graham", "Jeffery Williams"],
        correctAnswer: 1
    },
    {
        question: "2. Ποιος καλλιτέχνης είναι γνωστός ως 'Yeezy';",
        choices: ["Drake", "Kanye West", "Future", "21 Savage"],
        correctAnswer: 1
    },
    {
        question: "3. Ποιο είναι το πραγματικό όνομα του Drake;",
        choices: ["Aubrey Graham", "Jacques Webster", "Nayvadius Wilburn", "Shayaa Bin Abraham-Joseph"],
        correctAnswer: 0
    },
    {
        question: "4. Ποιος καλλιτέχνης είναι γνωστός για το άλμπουμ 'Astroworld';",
        choices: ["Kanye West", "Drake", "Travis Scott", "Gunna"],
        correctAnswer: 2
    },
    {
        question: "5. Ποιος καλλιτέχνης είναι γνωστός για το άλμπουμ 'To Pimp a Butterfly';",
        choices: ["Young Thug", "Lil Baby", "Future", "Kendrick Lamar"],
        correctAnswer: 3
    },
    {
        question: "6. Ποιος καλλιτέχνης είναι γνωστός για το τραγούδι 'Mask Off';",
        choices: ["Future", "21 Savage", "Kanye West", "Drake"],
        correctAnswer: 0
    },
    {
        question: "7. Ποιος καλλιτέχνης είναι γνωστός για το άλμπουμ 'My Beautiful Dark Twisted Fantasy';",
        choices: ["Drake","Kanye West", "Travis Scott", "Future"],
        correctAnswer: 1
    },
    {
        question: "8. Ποιο είναι το πραγματικό όνομα του Future;",
        choices: ["Nayvadius Wilburn", "Aubrey Graham", "Jacques Webster", "Shayaa Bin Abraham-Joseph"],
        correctAnswer: 0
    },
    {
        question: "9. Ποιος καλλιτέχνης είναι γνωστός για το άλμπουμ 'DAMN.';",
        choices: ["Lil Baby", "Young Thug", "21 Savage","Kendrick Lamar"],
        correctAnswer: 3
    },
    {
        question: "10. Ποιος καλλιτέχνης είναι γνωστός για το τραγούδι 'Hot';",
        choices: ["Drake","Kanye West","Gunna", "Travis Scott"],
        correctAnswer: 2
    },
    {
        question: "11. Ποιο είναι το πραγματικό όνομα του 21 Savage;",
        choices: ["Shayaa Bin Abraham-Joseph", "Jacques Webster", "Aubrey Graham", "Nayvadius Wilburn"],
        correctAnswer: 0
    },
    {
        question: "12. Ποιος καλλιτέχνης είναι γνωστός για το άλμπουμ 'Harder Than Ever';",
        choices: ["Future","Lil Baby", "Young Thug", "21 Savage"],
        correctAnswer: 1
    }
];

function submitName() {
    const userNameInput = document.getElementById('userNameInput').value; // Πάρε το όνομα που έχει δωθεί
    if (userNameInput === '') { // Αν δεν έχει δωθεί όνομα
        alert('Παρακαλώ εισάγετε το όνομά σας.'); // Εμφάνισε μήνυμα
        return;
    }else {
        document.getElementById('insert-username').style.display = 'none'; // Κρύψε το input για το όνομα
        document.getElementById('welcomeMessage').innerHTML = `Καλώς ήρθες, ${userNameInput}! <br> Πάτησε το κουμπί για να ξεκινήσεις το quiz.`; // Γραψε το μυνημα καλωσορισματος
        document.getElementById('welcomeMessage').style.display = 'block'; // Εμφάνισε το μήνυμα καλωσορίσματος
        document.getElementById('startQuiz').style.display = 'block'; // Εμφάνισε το κουμπί για να ξεκινήσει το quiz
        document.getElementById('userNameInput').style.display = 'none'; // Κρύψε το input για το όνομα
        document.getElementById('submitName').style.display = 'none'; // Κρύψε το κουμπί για υποβολή ονόματος
    }
}

let currentQuestionIndex = 0;
let score = 0;

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
    const userNameInput = document.getElementById('userNameInput').value; // Πάρε το όνομα που έχει δωθεί
    if (score === 0) { // Αν το σκορ είναι 0
        resultsElement.innerHTML = `<h3>Λυπάμαι, ${userNameInput}.<br> Δεν απάντησες σωστά σε καμία ερώτηση.</h3>`; // Εμφάνισε το μήνυμα
    }else if (score === questions.length) { // Αν το σκορ είναι ίσο με το πλήθος των ερωτήσεων
        resultsElement.innerHTML = `<h3>Συγχαρητήρια, ${userNameInput}!<br> Απάντησες σωστά σε όλες τις ερωτήσεις!</h3>`; // Εμφάνισε το μήνυμα
    } else {
        resultsElement.innerHTML = `<h3>Συγχαρητήρια, ${userNameInput}!<br> Το σκορ σου είναι ${score}/${questions.length}.</h3>`; // Εμφάνισε το μήνυμα με το σκορ
    }
    document.getElementById('question').style.display = 'none'; // Κρύψε την ερώτηση
    document.getElementById('choices').style.display = 'none'; // Κρύψε τις επιλογές
    document.getElementById('submit').style.display = 'none'; // Κρύψε το κουμπί για υποβολή απάντησης
}