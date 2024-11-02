// Show the modal when the "Apply" button is clicked
document.getElementById("applyButton").onclick = function () {
  document.getElementById("myModal").style.display = "flex"; // Use flex to center modal
};

// Close the modal when the "x" is clicked
document.getElementById("closeModal").onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

// Close the modal when clicking outside of the modal
window.onclick = function (event) {
  if (event.target === document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};

// Countdown timer
const countdownDisplay = document.getElementById("countdownDisplay");
const launchDate = new Date("2025-01-01T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
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

// JavaScript to toggle the side menu
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

// Show side menu when menu icon is clicked
menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

// Hide side menu when close button is clicked
closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

// Show modal when the apply button is clicked
document
  .getElementById("applyButtonSide")
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "flex"; // Show the modal
  });

// Close the modal
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

// Optional: Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
