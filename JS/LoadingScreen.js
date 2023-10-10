function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
}

const images = document.querySelectorAll('img');
let loadedImages = 0;

images.forEach(image => {
    image.addEventListener('load', () => {
        loadedImages++;
        if (loadedImages === images.length) {
            hideLoadingScreen();
        }
    });
});

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000);
}