// Array of random messages to be typed
const randomMessages = [
    "Bước đi trên thiên đường",
    "Change - Beetle",
    "Người mà sẽ thống trị tất cả",
    "Nếu anh ta là Stronger, thì tôi sẽ là Strongest",
    "Không phiền nếu tôi đo đếm tội lỗi của bạn chứ?",
    "Thật tốt khi được gặp lại mọi người",
    "Chăm sóc cho các bạn, cũng là một phần công việc của tôi",
    "Quy luật chiến thắng đã được xác định",
    "Chúng ta cùng nhau lái một vòng chứ?",
    "Được. Đến giờ biểu diễn rồi!",
    "Bạn - tôi. Cặp đôi hoàn hảo",
    "Đây không phải là Rotterdam, tin tôi đi",
    "Change - Stag Beetle",
    "Hãy để thế giới xoay quanh bạn",
    "Bọ cánh cứng - Ong - Bọ cạp - Bọ xít",
    "Kick - Thunder - Mach",
    "Bạn là một chú thỏ và tôi là một cỗ xe tăng",
    "Chúng ta là một cặp đôi bất khả chiến bại",
    "DenLiner - Nơi những điều diệu kỳ xảy ra",
    "5-5-5 | 9-1-3 | 3-1-5 | 0-0-0 | Henshin",
    "Một cú nhày lên trời bỗng nhiên trở thành một cú đá",
    "Sải cánh và hãy chuẩn bị cho một luồn sóng xung kích",
    "Con mập với đôi hàm có thể nghiền nát bê tông",
    "secret material - hidden material",
    "Kích hoạt Một vụ nổ với sức mạnh của 100 quả bom",
    "Hơi thở băng giá lạnh lẽo như những cơn gió trên gác mái",
    "Trong túi của nó chứa vô vàn những cơ hội khác nhau",
    "Tiếp thêm sức mạnh trong mỗi cú đá bằng những tia ánh sáng",
    "Đập tan mọi định kiến để đến gần hơn với giấc mơ trên thiên đàng",
    "Có ai đó rảnh để đi cứu thế giới này không?",
    "Tôi chỉ là một người đi bộ vô tình đi ngang qua thôi. Hãy nhớ lấy điều đó",
    "Vì bà ngoại bảo thế",
    "Thêm một mảnh ký ức nữa vừa được mở khóa",
    "Bây giờ thì bạn thấy tôi. Bây giờ thì không",
    "Cà phê và tất vào buổi sáng. Nó vừa cứu tôi khỏi một cuộc đại họa",
    "Mắt bạn đẹp đấy. Sẽ thật là phí phạm nếu cứ để nó nhìn vào hư vô như vậy",
    "Hai chú thỏ đáng yêu tung tăng trên đồng cỏ hoa phượng với tốc độ cận âm",
];

const typingSpeed = 40 // Typing speed in milliseconds

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
                    welcomeText.textContent = "Chào mừng đến với dự án Porto 1";
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

document.getElementById('vn-link').addEventListener('click', function(event) {
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


