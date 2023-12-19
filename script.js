// script.js

const heroSection = document.querySelector('.hero-section');
const heroText = document.querySelector('.hero-text');
const ctaButton = document.querySelector('.cta-button');

// Array of background images
const backgrounds = ['images/wedding-dress-5.jpg', 'images/wedding-dress-2.jpg', 'images/wedding-dress-4.jpg']; // Replace with your image paths

let currentBackground = 0;

// Function to change the background image
function changeBackground() {
  currentBackground = (currentBackground + 1) % backgrounds.length;
  heroSection.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
}

// Function to update the text and button
function updateContent() {
  // You can customize the text and button dynamically here based on the background
  // For simplicity, let's keep the same text and button for all backgrounds
  heroText.innerHTML = `
    <h1>Beautiful Wedding Dresses</h1>
    <p>Discover your perfect dress for the big day.</p>
  `;
  ctaButton.textContent = 'Explore Now';
}

// Initial content setup
updateContent();

// Change background and content every 5 seconds
setInterval(() => {
  changeBackground();
  updateContent();
}, 5000);
