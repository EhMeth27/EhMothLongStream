function getTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
    return Math.max(timeRemaining, 0); // Ensure the countdown doesn't go negative
}

function updateCountdown() {
    const targetDate = new Date('2025-03-14T09:00:00-05:00').getTime();
    const timeRemaining = getTimeRemaining(targetDate);
    const seconds = Math.floor(timeRemaining / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `Countdown: ${days} days ${hours % 24} hours ${minutes % 60} minutes ${seconds % 60} seconds`;

    if (timeRemaining === 0) {
        clearInterval(interval); // Stop the countdown when it reaches 0
        countdownElement.innerHTML = 'The event has started!'; // Show a message when the event starts
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);