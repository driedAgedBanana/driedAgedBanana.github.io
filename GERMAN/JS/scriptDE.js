// Array of random messages to be typed
const randomMessages = [
    "Auf dem Pfad des Himmels wandeln",
    "Change - Beetle",
    "der Mann, der alles beherrschen wird",
    "Wenn er der Stärkere ist, dann bin ich der Stärkste",
    "Erde - Himmel",
    "Jetzt lasst uns eure Sünden zusammenzählen!",
    "Schön, euch zu sehen",
    "Sich um Sie alle zu kümmern, ist auch Teil meiner Arbeit.",
    "Die Formel für den Sieg wurde festgelegt",
    "Sollen wir einen kleinen Ausflug machen?",
    "Jetzt ist es Showtime!",
    "Du - Ich. Beste Übereinstimmung",
    "Dies ist nicht Rotterdam, glauben Sie mir",
    "Change - Stag Beetle",
    "Bring die Welt dazu, sich um dich zu drehen",
    "Change - Dragonfly",
    "Change - Wasp",
    "Pik 10 - Bube - Dame - König - Ass",
    "Pik Herz - Karo - Kreuz 6 - Pik König",
    "Tornado - Schneesturm - Feuer",
    "Kick - Donner - Mach",
    "Hyper Clock Up",
    "Hyper Cast Off",
    "Du bist das Kaninchen und ich bin der Panzer",
    "Wir sind die Besten",
    "DenLiner - Wo Magie geschieht",
    "Exceed Charge",
    "5-5-5 | 9-1-3 | 3-1-5 | 0-0-0 | Henshin",
    "ein Sprung in den Himmel wird zu einem Rider Kick",
    "Breite deine Flügel aus und bereite dich auf eine Kraft vor",
    "Reißzähne, die sich durch Beton fressen können",
    "geheimes Material - verstecktes Material",
    "Explosionskraft von 100 Bomben",
    "Heftiger Atem, kalt wie arktische Winde",
    "in seinem Beutel unendliche Möglichkeiten enthält",
    "Der Rider-Kick erhöht die Leistung, indem er die Helligkeit erhöht",
    "Ein Reiter, der in den Himmel stößt, dreht sich, um einem Traum entgegen zu fliegen",
    "Save th1s wrld",
    "Ich bin nur ein Kamen Rider auf der Durchreise. Versuchen Sie, sich daran zu erinnern.",
    "Weil Oma das gesagt hat",
    "G3 - Knight - Kaixa",
    "Garren - Ibuki - Gattack",
    "Zeronos - Ixa - Diend - Accel",
    "Birth - Meteor - Beast - Barron",
    "Mach - Specter - Brave",
    "Ein neuer Speicherkern wurde gerade freigeschaltet",
    "Jetzt siehst du mich, jetzt nicht mehr",
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
                    welcomeText.textContent = "Willkommen beim Projekt Porto 1";
                    welcomeText.classList.add('fade-in');
                    typingTextElement.appendChild(welcomeText);
                    setTimeout(function()
                    {
                        const DownArrow = document.createElement('img')
                        DownArrow.src = '../../Img/arrowInverted.png';
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

document.getElementById('de-link').addEventListener('click', function(event) {
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


