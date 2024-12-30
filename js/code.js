document.addEventListener('DOMContentLoaded', (event) => {
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

    // Dynamically create the mailto link
const emailCell = document.getElementById('email-cell');
const email = emailCell.textContent;
print(email);
emailCell.innerHTML = `<a href="mailto:${email}">${email}</a>`;
});

