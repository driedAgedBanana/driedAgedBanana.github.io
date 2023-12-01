// Array of random messages to be typed
const randomMessages = [
    "Walking on the path of heaven",
    "Change - Beetle",
    "the man who will rule everything",
    "If he's Stronger, then I am the Strongest",
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
    "Hyper Clock Up",
    "Hyper Cast Off",
    "You are the Rabbit and I am the Tank",
    "We are the best",
    "DenLiner - Where magic happen",
    "Exceed Charge",
    "a jump to the sky turns into a rider kick",
    "spread your wings and prepare for a force",
    "fang that can chomp through concrete",
    "secret material - hidden material",
    "Explosive power of 100 bombs",
    "Fierce breath as cold as arctic winds",
    "The rider kick increased the power by adding to brightness",
    "A rider kick to the sky turns to take off toward a dream",
    "This is not a drill. It's a real thing",
    "Save th1s wrld",
    "I'm just a Kamen Rider passing through. Try to remember that",
    "Because Grandma said so",
    "A new Memory Core has just unlocked",
    "Now you see me, now you don't",
    "The elevation increases as the bullet is fired",
    "With mighty horn-like pincers that flip others helpless",
    "He wields the very winds as his command",
    "Deciding the fate of a battle like a Valkyrie",
    "Bursting sparks fly at full force",
];

const typingSpeed = 33 // Typing speed in milliseconds

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
                    welcomeText.textContent = "Welcome to project Porto 1";
                    welcomeText.classList.add('fade-in');
                    typingTextElement.appendChild(welcomeText);
                    setTimeout(function()
                    {
                        const DownArrow = document.createElement('img')
                        //DownArrow.src = './Img/arrowInverted.png';
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

document.getElementById('uk-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior (i.e., following the link)

    // Toggle the display property of the dropdown content
    const dropdownContent = document.querySelector('.language-dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('languageSelector');

    // Event listener to handle clicks on the body
    document.body.addEventListener('click', function(event) {
        const languageDropdown = languageSelector.querySelector('.language-dropdown-content');

        if (languageDropdown.style.display === 'block') {
            languageDropdown.style.display = 'none';
        }
    });

    // Event listener to prevent clicks inside the language selector from hiding the dropdown
    languageSelector.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Event listeners for hover effect
    languageSelector.addEventListener('mouseover', function() {
        const languageDropdown = languageSelector.querySelector('.language-dropdown-content');
        languageDropdown.style.display = 'block';
    });

    languageSelector.addEventListener('mouseout', function() {
        const languageDropdown = languageSelector.querySelector('.language-dropdown-content');
        languageDropdown.style.display = 'none';
    });
});


