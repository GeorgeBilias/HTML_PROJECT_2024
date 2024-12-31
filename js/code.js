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


