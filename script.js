const messages = [
    "are you sure?😦",
    "really sure??🥺👉👈",
    "what if I asked really nicely?",
    "are you positive?😔",
    "PLEASE POOKIE",
    "just think about it!",
    "if you say no, I will be really sad...",
    "i will be very sad...",
    "i will be very very very sad...",
    "dont make Jay(pookie) sad",
    "i am going to die",
    "yep im dead",
    "ok you are talking to jay's ghost",
    "please babe",
    "ok fine, I will stop asking...",
    "just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex++;
    messageIndex = Math.min(messageIndex,messages.length-1)
    const currentSize = messageIndex * 20 + 16
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}