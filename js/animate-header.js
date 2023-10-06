  // Texts to type out
const textsToType = ["Ciaran Gold.","Web developer."];
let currentIndex = 0;
const textElement = document.getElementById("hero-text");

typeText = () => {
  let charIndex = 0;
  const textToType = textsToType[currentIndex];
  const typingSpeed = Math.floor(Math.random() * 150) + 50; //simulates typing

  const typeInterval = setInterval(() => {
    if (charIndex < textToType.length) {
      textElement.textContent += textToType.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typeInterval);
      setTimeout(eraseText, 3000); // Wait for 1 second before erasing
    }
  }, typingSpeed);
}

// function to 'delete' text and type next string in array
eraseText = () => {
  const eraseSpeed = 40;
  const eraseInterval = setInterval(() => {
    if (textElement.textContent.length > 0) {
      textElement.textContent = textElement.textContent.slice(0, -1);
    } else {
      clearInterval(eraseInterval);
      currentIndex = (currentIndex + 1) % textsToType.length; // Loop through texts in array
      setTimeout(typeText, 1000); // Wait for 1 second before typing the next text
    }
  }, eraseSpeed);
}

// Start typing animation when the page loads
window.onload = typeText;
