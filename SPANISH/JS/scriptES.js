// Array of random messages to be typed
const randomMessages = [
    "Caminando por el camino del cielo",
    "Cambio - Escarabajo",
    "el hombre que gobernará todo",
    "Si él es más fuerte, entonces yo soy el más fuerte",
    "Ahora, ¡contemos tus pecados!",
    "Es bueno verlos chicos",
    "Cuidar de todos ustedes también es parte de mi trabajo",
    "La fórmula de la victoria ha sido establecida",
    "¿Vamos a dar un pequeño paseo?",
    "¡Ahora, es la hora del espectáculo!",
    "Tú - Yo. Mejor combinación",
    "Esto no es Róterdam, créeme",
    "Cambio - Escarabajo Ciervo",
    "Haz que el mundo gire a tu alrededor",
    "Cambio - Libélula",
    "Cambio - Avispa",
    "Espadas 10 - Jota - Reina - Rey - As",
    "Espada Corazón - Diamante - Trébol 6 - Espada Rey",
    "Tornado - Ventisca - Fuego",
    "Patada - Trueno - Mach",
    "Hiper Aceleración Reloj",
    "Hiper Desactivación",
    "Tú eres el Conejo y yo soy el Tanque",
    "Somos los mejores",
    "DenLiner - Donde la magia sucede",
    "Carga Excedente",
    "5-5-5 | 9-1-3 | 3-1-5 | 0-0-0 | Transformación",
    "Un salto hacia el cielo se convierte en una patada de Jinete",
    "Extiende tus alas y prepárate para una fuerza",
    "colmillo que puede morder a través del hormigón",
    "material secreto - material oculto",
    "Poder explosivo de 100 bombas",
    "Aliento feroz tan frío como vientos árticos",
    "en su bolsa contiene posibilidades infinitas",
    "La patada de Jinete aumentó el poder al agregar brillo",
    "Una patada de Jinete hacia el cielo se convierte en despegar hacia un sueño",
    "Salva este mundo",
    "Soy solo un Kamen Rider de paso. Trata de recordarlo",
    "Porque la abuela lo dijo",
    "G3 - Caballero - Kaixa",
    "Garren - Ibuki - Gattack",
    "Zeronos - Ixa - Diend - Accel",
    "Birth - Meteor - Beast - Barron",
    "mach - Specter - Brave",
    "Un nuevo Núcleo de Memoria acaba de desbloquearse",
    "Ahora me ves, ahora no me ves",
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
                    welcomeText.textContent = "Bienvenido al proyecto Porto 1";
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

document.getElementById('es-link').addEventListener('click', function(event) {
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


