       // Show the modal when the "Apply" button is clicked
       document.getElementById('applyButton').onclick = function() {
        document.getElementById('myModal').style.display = 'flex'; // Use flex to center modal
    }

    // Close the modal when the "x" is clicked
    document.getElementById('closeModal').onclick = function() {
        document.getElementById('myModal').style.display = 'none';
    }

    // Close the modal when clicking outside of the modal
    window.onclick = function(event) {
        if (event.target === document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = 'none';
        }
    }

    // Countdown timer
    const countdownDisplay = document.getElementById('countdownDisplay');
    const launchDate = new Date('2025-01-01T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(x);
            countdownDisplay.innerHTML = "EXPIRED";
        }
    }

    // Update the countdown every second
    const x = setInterval(updateCountdown, 1000);