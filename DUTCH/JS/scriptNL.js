// Array of random messages to be typed
const randomMessages = [
    "Wandelen op het pad van de hemel",
    "Change - Beetle",
    "de man die over alles zal heersen",
    "Als hij Stronger is, dan ben ik de Strongest",
    "Laten we nu je zonden gaan tellen!",
    "Goed om jullie te zien",
    "Voor jullie allemaal zorgen, is ook een deel van mijn werk",
    "De overwinningsformule is vastgesteld",
    "Zullen we een kleinje ritje maken?",
    "Nu is het showtime!",
    "Jij - Ik. Beste duo",
    "Dit is Rotterdam niet, geloof me",
    "Change - Stag Beetle",
    "Laat de wereld om jou draaien",
    "Kever - Wesp - Schorpioen - Bastaardkever",
    "Schoppen 10 - Boer - Vrouw - Koning - Aas",
    "Schoppen Harten - Ruiten - Klaveren 6 - Schoppen Koning",
    "Kick - Donder - Mach",
    "Jij bent het Konijn en ik ben de Tank",
    "Wij zijn de beste",
    "DenLiner - Waar magie ontstaat",
    "5-5-5 | 9-1-3 | 3-1-5 | 0-0-0 | Henshin",
    "een sprong in de hemel wordt een Rider kick",
    "Spreid je vleugels en bereid je voor op een kracht",
    "Hoektanden die door beton heen kunnen vreten",
    "geheim materiaal - verborgen materiaal",
    "Ontploffingskracht van 100 bommen",
    "Felle adem zo koud als poolwinden",
    "in haar buidel bevat oneindige mogelijkheden",
    "De Rider kick verhoogde de kracht door aan helderheid toe te voegen",
    "Een Rider schopt naar de hemel om op te stijgen naar een droom",
    "Kan iemand deze wereld alsjeblieft redden?",
    "Ik ben gewoon een voetganger die passeert. Probeer te onthouden dat",
    "Omdat grootmoeder het zei",
    "G3 - Knight - Kaixa",
    "Garren - Ibuki - Gattack",
    "Zeronos - Ixa - Diend - Accel",
    "Birth - Meteor - Beast - Barron",
    "Mach - Specter - Brave",
    "Er is zojuist een nieuwe geheugenkern ontgrendeld",
    "Nu zie je me, nu niet meer",
    "Koffie en sokken in de ochtend zijn redders in nood",
    "Omdat jullie dat vragen - Swansea is niet hetzelfde als Porto",
    "Zij een scheppend vuur, niet een wolk van mist",
    "In niets gaat er boven een wapperende rood wit blauw in de wind.",
    "Je denk te veel. Doe het gewoon",
    "Zullen we voor de grap een dagje gaan uithangen?",
];

const typingSpeed = 45 // Typing speed in milliseconds

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
                    welcomeText.textContent = "Welkom bij Project Porto 1";
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

document.getElementById('nl-link').addEventListener('click', function(event) {
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


