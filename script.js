document.addEventListener('mousemove', (e) => {
// JUST save the actual cursor position to our target variables
targetX = e.pageX;
targetY = e.pageY;

// Make the tag visible after the first movement
cursorTag.style.opacity = 1;
});



// Get the custom elements once
const customPointer = document.getElementById('custom-pointer');
const cursorTag = document.getElementById('cursor-tag');

// Check if user is already logged in
let userName = localStorage.getItem('userName') || 'Guest';
cursorTag.textContent = userName;

// 1. Target Position: Where the actual mouse is
let targetX = 0;
let targetY = 0;

// 2. Current Position: Where the custom elements currently are
let currentX = 0;
let currentY = 0;

// 3. Easing Factor: How fast the custom elements "catch up" (Lower is slower)
const easingFactor = 0.30; // 0.15 is 15% of the distance per frame (good starting point)

// Offsets (same as before)
const tagOffsetX = 8; 
const tagOffsetY = 8;

// Login functionality
const loginButton = document.querySelector('.login-but');

loginButton.addEventListener('click', () => {
    const name = prompt('Please enter your name:');
    if (name && name.trim() !== '') {
        userName = name.trim();
        localStorage.setItem('userName', userName);
        cursorTag.textContent = userName;
    }
});


function animateFollow() {
// 1. Calculate the new CURRENT position (Interpolation/Lerp)
// The new current position is the old current position plus 15% (easingFactor) 
// of the distance to the target position.
currentX += (targetX - currentX) * easingFactor;
currentY += (targetY - currentY) * easingFactor;

// 2. Apply the calculated position to the Custom Pointer
customPointer.style.left = currentX + 'px';
customPointer.style.top = currentY + 'px';

// 3. Apply the calculated position (plus offset) to the Guest Tag
cursorTag.style.left = currentX + tagOffsetX + 'px';
cursorTag.style.top = currentY + tagOffsetY + 'px';

// Request the next frame, creating a smooth loop
requestAnimationFrame(animateFollow);
    }

    // Start the animation loop
animateFollow();


const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.getElementById('close-menu');


hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevents background scroll
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enables scroll
});

