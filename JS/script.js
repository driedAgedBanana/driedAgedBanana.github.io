// Array of random messages to be typed
const randomMessages = [
    "Walking on the path of heaven",
    "Change - Beetle",
    "the man who will rule everything",
    "If he's Stronger, then I am the Strongest",
    "Earth - Heaven",
    "Now, Let's Count Up Your Sins!",
    "Good to see you guys",
    "Taking care all of you, is also a part of my job",
    "The victory's formula has been set",
    "Shall we go for a little ride?",
    "Now, it's Showtime!",
    "You - Me. Best Match",
    "This is not Rotterdam, believe me",
    "Change - Stag Beetle",
    "Make the world revolve around you",
    "Change - Dragonfly",
    "Change - Wasp",
    "Spade 10 - Jack - Queen - King - Ace",
    "Spade Heart - Diamond - Club 6 - Spade King",
    "Tornado - Blizzard - Fire",
    "Kick -Thunder - Mach",
    "Hyper Clock Up",
    "Hyper Cast Off",
    "You are the Rabbit and I am the Tank",
    "We are the best",
    "DenLiner - Where magic happen",
    "Exceed Charge",
    "5-5-5 | 9-1-3 | 3-1-5 | 0-0-0 | Henshin",
    "a jump to the sky turns into a rider kick",
    "spread your wings and prepare for a force",
    "fang that can chomp through concrete",
    "secret material - hidden material",
    "Explosive power of 100 bombs",
    "Fierce breath as cold as arctic winds",
    "in its pouch contains infinite possibilities",
    "The rider kick increased the power by adding to brightness",
    "A rider kick to the sky turns to take off toward a dream",
    "Save th1s wrld",
    "I'm just a Kamen Rider passing through. Try to remember that",
    "Because Grandma said so",
    "G3 - Knight - Kaixa",
    "Garren - Ibuki - Gattack",
    "Zeronos - Ixa - Diend - Accel",
    "Birth - Meteor - Beast - Barron",
    "mach - Specter - Brave",
    "A new Memory Core has just unlocked",
];

const typingSpeed = 54 // Typing speed in milliseconds

// Get the element where the text will be typed
const typingTextElement = document.getElementById("typing-text");

// Function to get a random message from the array
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    console.log(randomMessages[randomIndex]);
    return randomMessages[randomIndex];
}

function typeText() {
    const textToType = getRandomMessage();
    let i = 0;
    function type() {
        if (i < textToType.length) {
            typingTextElement.textContent += textToType[i];
            i++;
            setTimeout(type, typingSpeed);
        } else {
            // Animation sequence after typing
            typingTextElement.classList.add('move-up');
            setTimeout(function() {
                const lineElement = document.createElement('span');
                lineElement.classList.add('draw-line');
                typingTextElement.appendChild(lineElement);
                setTimeout(function() {
                    const welcomeText = document.createElement('div');
                    welcomeText.textContent = "Welcome to Project Porto";
                    welcomeText.classList.add('fade-in');
                    typingTextElement.appendChild(welcomeText);
                    setTimeout(function()
                    {
                        const DownArrow = document.createElement('img')
                        DownArrow.src = './Img/arrowInverted.png';
                        DownArrow.style.opacity = 1;
                        typingTextElement.appendChild(DownArrow)
                    }, 500);
                }, 500);
            }, 500);
        }
    }
    type();
}

function handleScroll() {
    const exploreSection = document.querySelector('.explore');
    const exploreContent = document.querySelector('.explore-content');
    const exploreOffset = exploreSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition > exploreOffset - window.innerHeight) {
        exploreContent.classList.add('fade-in');
    }
}

window.addEventListener('scroll', handleScroll);

// Add this function to trigger the fade-in animation for the "About Me" section
function handleAboutMeScroll() {
    const aboutMeSection = document.querySelector('.aboutMe');
    const aboutMeContent = document.querySelector('.explore-me');
    const aboutMeOffset = aboutMeSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition > aboutMeOffset - window.innerHeight) {
        aboutMeContent.classList.add('fade-in');
    }
}

window.addEventListener('scroll', handleAboutMeScroll);

function operationScroll() {
    const exploreSection = document.querySelector('.operation');
    const exploreContent = document.querySelector('.operation-content');
    const exploreOffset = exploreSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition > exploreOffset - window.innerHeight) {
        exploreContent.classList.add('fade-in');
    }
}

window.addEventListener('scroll', operationScroll);

function mirageScroll() {
    const exploreSection = document.querySelector('.mirage');
    const exploreContent = document.querySelector('.mirage-content');
    const exploreOffset = exploreSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition > exploreOffset - window.innerHeight) {
        exploreContent.classList.add('fade-in');
    }
}

window.addEventListener('scroll', mirageScroll);

const videos = [
    './Img/y2mate.com%20-%20Criminal%20Being%20Chased%20By%20Police%20Stock%20Footage_1080p.mp4',
    './Img/Police%20Car%20Lights%20Royalty%20Free%20Video%20Stock%20Footage%20HD%204K.mp4',
    './Img/PoliceStock.mp4',
];

const videoElement = document.getElementById('background-video');
let currentVideo = 0;

function playNextVideo() {
    currentVideo = (currentVideo + 1) % videos.length;
    videoElement.src = videos[currentVideo];
    videoElement.play();
}

videoElement.addEventListener('ended', playNextVideo);


videoElement.addEventListener('ended', playNextVideo);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// For the mobile friendly thing
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuBar = document.querySelector('.menu-bar');

    menuButton.addEventListener('click', function() {
        menuBar.classList.toggle('show');

        // Toggle the hamburger icon
        const bars = menuButton.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('open'));
    });
});

//For the flag drop down
document.querySelector('.menu-button').addEventListener('click', function() {
    var languageSelector = document.querySelector('.language-selector');
    languageSelector.classList.toggle('show');
});







