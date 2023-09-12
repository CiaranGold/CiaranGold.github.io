
    // Text to type out
    const textToType = "Web developer";
  
    // Randomized speed of typing in ms
    const typingSpeed = Math.floor(Math.random() * 150) + 50;
    const textElement = document.getElementById("hero-text");
  
    function typeText() {
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < textToType.length) {
                textElement.textContent += textToType.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, typingSpeed);
    }
  
    // Start typing animation when the page loads
    window.onload = typeText;


    