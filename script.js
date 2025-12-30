document.addEventListener('mousemove', (e) => {
targetX = e.pageX;
targetY = e.pageY;

cursorTag.style.opacity = 1;
});

const customPointer = document.getElementById('custom-pointer');
const cursorTag = document.getElementById('cursor-tag');


let userName = localStorage.getItem('userName') || 'Guest';
cursorTag.textContent = userName;


let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

const easingFactor = 0.30; 

const tagOffsetX = 8; 
const tagOffsetY = 8;


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
currentX += (targetX - currentX) * easingFactor;
currentY += (targetY - currentY) * easingFactor;

customPointer.style.left = currentX + 'px';
customPointer.style.top = currentY + 'px';


cursorTag.style.left = currentX + tagOffsetX + 'px';
cursorTag.style.top = currentY + tagOffsetY + 'px';


requestAnimationFrame(animateFollow);
    }
animateFollow();


const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.getElementById('close-menu');


hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    document.body.style.overflow = 'hidden'; 
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = 'auto'; 
});

