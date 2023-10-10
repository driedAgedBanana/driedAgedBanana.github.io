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