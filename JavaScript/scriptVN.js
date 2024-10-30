document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    const quoteContainer = document.getElementById('quote-container');
    const quoteElement = document.getElementById('quote'); // Correct target
    const mainContent = document.querySelector('.intro'); // Assuming '.intro' is the main content
    const body = document.body;

    // List of quotes
    const quotes = [
    "Lăn Tăn Trên Con Đường Tới Thiên Đàng",
    "Người Mà Sẽ Thống Trị Tất Cả",
    "Nếu Anh Ta Là Stronger, Thì Tôi Sẽ Là Strongest",
    "Không Phiền Nếu Tôi Đo Đếm Tội Lỗi Của Bạn Chứ?",
    "Thật Tốt Khi Được Gặp Lại Mọi Người",
    "Chăm Sóc Cho Các Bạn, Cũng Là Một Phần Công Việc Của Tôi,",
    "Quy Luật Chiến Thắng Đã Được Xác Định!",
    "Chúng Ta Cùng Nhau Lái Một Vòng Chứ?",
    "Được. Đến Giờ Biểu Diễn Rồi!",
    "Bạn - Tôi. Cặp Đôi Hoàn Hảo",
    "Đây Không Phải Là Rotterdam, Tin Tôi Đi",
    "Nhắm Mắt Và Để Bạn Là Trung Tâm Của Cả Thế Giới",
    "Bọ Cánh Cứng - Ong - Bọ Cạp - Bọ Xít",
    "Một Chú Thỏ Đáng Yêu Đang Nằm Ngủ Trên Nòng Pháo Cỗ Xe Tăng",
    "Chúng Ta Là Một Cặp Đôi Bất Khả Chiến Bại",
    "DenLiner - Nơi Những Điều Diệu Kỳ Xảy Ra",
    "Một Cú Nhảy Lên Trời Bỗng Nhiên Trở Thành Một Cú Đá Đầy Uy Lực",
    "Hãy Sải Cánh Và Chuẩn Bị Cho Một Luồng Sóng Xung Kích",
    "Con Mập Với Đôi Hàm Có Thể Nghiền Nát Một Tảng Bê Tông Khổng Lồ",
    "Kích Hoạt Một Vụ Nổ Với Sức Mạnh Của 100 Quả Bom",
    "Hơi Thở Băng Giá Lạnh Lẽo Như Những Cơn Gió Trên Gác Mái Nhà Bà Tôi",
    "Trong Túi Của Nó Chứa Vô Vàn Những Cơ Hội Khác Nhau",
    "Tiếp Thêm Sức Mạnh Trong Mỗi Cú Đá Bằng Những Tia Ánh Sáng Đầy Hy Vọng",
    "Đập Tan Mọi Định Kiến Để Đến Gần Hơn Với Giấc Mơ Của Bạn",
    "Có Ai Đó Rảnh Để Đi Cứu Thế Giới Này Không?",
    "Tôi Chỉ Là Một Người Đi Đường Vô Tình Đi Ngang Qua Thôi. Hãy Nhớ Lấy Điều Đó",
    "Vì Bà Ngoại Bảo Thế",
    "Vì Ba Mẹ Tôi Bảo Thế",
    "Thêm Một Mảnh Ký Ức Nữa Vừa Được Mở Khóa",
    "Cà Phê Và Tất Vào Buổi Sáng. Nó Vừa Cứu Tôi Khỏi Một Cuộc Đại Họa",
    "Mắt Bạn Đẹp Đấy. Sẽ Thật Là Phí Phạm Nếu Cứ Để Nó Nhìn Vào Hư Vô Như Vậy",
    "Hai Chú Thỏ Đáng Yêu Tung Tăng Trên Cánh Đồng Cỏ Hoa Phượng Với Tốc Độ Cận Âm",
    "Không Gì Bằng 5 Cánh Sao Thống Nhất Làm 1 Trên Tấm Vải Đỏ Tươi",
    "Không Gì Có Thể Ngăn Cản Chúng Ta",
    "Hãy Là Ngọn Lửa Kiến Tạo, Đừng Là Đám Khói Mù Mịt",
    "Sợ Hãi Là Một Rào Chắn Vô Hình. Vượt Qua Nó Và Bạn Sẽ Thống Trị Tất Cả",
    "Một Bể Nước Khổng Lồ Sẵn Sàng Nhấn Chìm Tất Cả",
    "Bức Phá Màn Đêm Với Những Màn Bắn Pháo Hoa Rực Rỡ Màu Sắc",
    "Hắn Ta Sẽ Thống Trị Những Cơn Gió",
    "Quyết Định Cuộc Đại Chiến Như Những Nắm Đấm Thép",
    "Những Con Đom Đóm Bay Lởn Vởn Thắp Sáng Ngọn Lửa Của Hy Vọng Trên Khắp Cánh Đồng",
    "Bạn Dễ Thương Đấy. Không Phiền Nếu Tôi Ăn Cắp Trái Tim Của Bạn Chứ?",
    "Mỗi Lần Ở Bên Bạn, Tôi Như Được Tái Sinh",
    "Vượt Qua Mọi Rào Cản Với Một Motion Còn Nhanh Hơn Cả Ánh Sáng",
    ];

     // Function to get a random quote from the list
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    const quote = getRandomQuote();
    let i = 0;

    function typeWriter() {
        // Scroll to the top immediately when typing starts
        window.scrollTo(0, 0);

        if (i < quote.length) {
            quoteElement.textContent += quote.charAt(i);
            i++;
            setTimeout(typeWriter, 20); // Adjusted delay for natural typing
        } else {
            setTimeout(() => {
                fadeOutLoadingScreen();
            }, 1200); // Wait a moment before fading out the loading screen
        }
    }

    function fadeOutLoadingScreen() {
        loadingScreen.style.transition = "opacity 1s";
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.display = "none";
            document.body.classList.add("loaded");
            mainContent.style.display = "flex"; // Ensure intro is displayed
            mainContent.classList.add('show'); // Add class to fade in the intro

            // Enable scrolling after loading screen is hidden
            body.style.overflow = "auto";
        }, 1000);
    }

    // Prevent scrolling during loading
    body.style.overflow = "hidden";

    // Start the typing effect after a slight delay
    setTimeout(() => {
        quoteContainer.style.display = "block";
        quoteElement.textContent = ""; // Clear any existing text
        typeWriter();
    }, 200);  // Slight delay before typing starts
    
    // Burger Menu Elements
    const navToggle = document.getElementById("nav-toggle"); // Burger menu toggle button
    const navList = document.getElementById("nav-list");     // Navigation links container

    // Language Menu Elements
    const langToggle = document.getElementById("lang-toggle"); // Language toggle button (Union Jack emoji)
    const languageList = document.getElementById("language-list"); // Language options container

    const toggleNavMenu = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
    
        // If language menu is open, close it
        if (languageList.classList.contains("show")) {
            languageList.classList.remove("show");
        }
    
        // Toggle navigation menu
        navList.classList.toggle("show");       // Toggle 'show' class to display/hide navigation links
        navToggle.classList.toggle("active");   // Toggle 'active' class for burger icon animation
    };
    

    const toggleLanguageMenu = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
    
        // If navigation menu is open, close it
        if (navList.classList.contains("show")) {
            navList.classList.remove("show");
            navToggle.classList.remove("active");
        }
    
        // Toggle language menu
        languageList.classList.toggle("show");  // Toggle 'show' class to display/hide language options
    };
    

    // Event listener for the burger menu toggle button
    navToggle.addEventListener("click", toggleNavMenu);

    // Event listener for the language menu toggle button
    langToggle.addEventListener("click", toggleLanguageMenu);

    const closeMenus = (event) => {
        // Check if the click is outside the navigation menu
        if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
            navList.classList.remove("show");     // Hide navigation links
            navToggle.classList.remove("active"); // Reset burger icon
        }

        // Check if the click is outside the language menu
        if (!languageList.contains(event.target) && !langToggle.contains(event.target)) {
            languageList.classList.remove("show"); // Hide language options
        }
    };

    // Event listener for clicks anywhere in the document
    document.addEventListener("click", closeMenus);

    const handleEscape = (event) => {
        if (event.key === "Escape") {
            // Close navigation menu if it's open
            if (navList.classList.contains("show")) {
                navList.classList.remove("show");
                navToggle.classList.remove("active");
            }

            // Close language menu if it's open
            if (languageList.classList.contains("show")) {
                languageList.classList.remove("show");
            }
        }
    };

    // Event listener for keydown events to handle 'Escape' key
    document.addEventListener("keydown", handleEscape);


    // Modal Elements
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const textBoxTitle = document.getElementById("textBoxTitle");
    const modalImages = document.getElementById("modalImages");
    const additionalBoxTitle = document.getElementById("additionalBoxTitle");
    const additionalModalText = document.getElementById("additionalModalText");
    const closeModalButton = modal.querySelector(".close");

    // Function to open the modal
    function openModal(projectData) {
        // Set the modal content from projectData
        modalTitle.innerHTML = projectData.title;
        textBoxTitle.innerHTML = projectData.textboxtitle || "Project Information";
        modalText.innerHTML = projectData.description || "More information about the project goes here.";
        additionalBoxTitle.innerHTML = projectData.additionalboxtitle || "";
        additionalModalText.innerHTML = projectData.additionaltext || "";

        // Set the banner image
        const bannerImg = modal.querySelector(".banner-img");
        bannerImg.src = projectData.banner || "";

        // Clear previous media content
        modalImages.innerHTML = "";

        // Handle images
        if (projectData.images && projectData.images.length > 0) {
            projectData.images.forEach(src => {
                if (src.trim() !== "") {
                    const imgElement = document.createElement("img");
                    imgElement.src = src.trim();
                    imgElement.classList.add("modal-image");
                    imgElement.onclick = () => zoomImage(src.trim());
                    modalImages.appendChild(imgElement);
                }
            });
        }

        // Handle videos
        if (projectData.videos && projectData.videos.length > 0) {
            projectData.videos.forEach(src => {
                if (src.trim() !== "") {
                    const videoElement = document.createElement("video");
                    videoElement.src = src.trim();
                    videoElement.controls = true;
                    videoElement.classList.add("modal-image");
                    modalImages.appendChild(videoElement);
                }
            });
        }

        // Show the modal with animation
        modal.style.display = "flex"; // Ensure display is flex
        setTimeout(() => {
            modal.classList.add("show"); // Add 'show' class to set opacity:1 and slide in
        }, 10); // Slight delay for transition

        // Prevent background scrolling when modal is open
        body.style.overflow = "hidden";
    }

    // Function to close the modal with animation
    function closeModalFunction() {
        modal.classList.remove("show"); // Remove 'show' class to set opacity:0 and slide out
        // After transition ends, hide the modal
        setTimeout(() => {
            modal.style.display = "none";
            // Re-enable background scrolling
            body.style.overflow = "auto";
        }, 800); // Match the duration of the CSS transition
    }

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener("click", closeModalFunction);

    // Close the modal when clicking outside of modal content
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModalFunction();
        }
    });

    // Close the modal when pressing the Escape key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.classList.contains("show")) {
            closeModalFunction();
        }
    });

    // Function to zoom the image
    function zoomImage(src) {
        const zoomModal = document.createElement("div");
        zoomModal.classList.add("zoom-modal");
        const zoomImg = document.createElement("img");
        zoomImg.src = src;
        zoomModal.appendChild(zoomImg);
        document.body.appendChild(zoomModal);
        
        // Prevent background scrolling when zoom modal is open
        body.style.overflow = "hidden";

        // Close zoom image on click
        zoomModal.addEventListener("click", () => {
            document.body.removeChild(zoomModal);
            // Re-enable background scrolling
            body.style.overflow = "auto";
        });
    }

    // Add event listeners to grid items
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.addEventListener("click", function () {
            // Get data attributes
            const projectData = {
                title: item.getAttribute("data-title"),
                description: item.getAttribute("data-description"),
                banner: item.getAttribute("data-banner"),
                images: item.getAttribute("data-images") ? item.getAttribute("data-images").split(',') : [],
                videos: item.getAttribute("data-videos") ? item.getAttribute("data-videos").split(',') : [],
                additionaltext: item.getAttribute("data-additional-text"),
                textboxtitle: item.getAttribute("data-textboxtitle"),
                additionalboxtitle: item.getAttribute("data-additionalboxtitle")
            };

            // Open the modal with the project data
            openModal(projectData);
        });
    });
});
