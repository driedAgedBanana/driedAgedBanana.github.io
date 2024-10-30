document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    const quoteContainer = document.getElementById('quote-container');
    const quoteElement = document.getElementById('quote'); // Correct target
    const mainContent = document.querySelector('.intro'); // Assuming '.intro' is the main content
    const body = document.body;

    // List of quotes
    const quotes = [
    "Wandelen Op Het Pad Van De Hemel",
    "Change - Beetle",
    "De Man Die Over Alles Zal Heersen",
    "Als Hij Stronger Is, Dan Ben Ik De Strongest",
    "Laten We Nu Je Zonden Gaan Tellen!",
    "Goed Om Jullie Te Zien",
    "Voor Jullie Allemaal Zorgen, Is Ook Een Deel Van Mijn Werk",
    "De Overwinningsformule Is Vastgesteld",
    "Zullen We Een Klein Ritje Maken?",
    "Nu Is Het Showtime!",
    "Jij - Ik. Beste Duo",
    "Dit Is Rotterdam Niet, Geloof Me",
    "Change - Stag Beetle",
    "Laat De Wereld Om Jou Draaien",
    "Kever - Wesp - Schorpioen - Bastaardkever",
    "Schoppen 10 - Boer - Vrouw - Koning - Aas",
    "Schoppen Harten - Ruiten - Klaveren 6 - Schoppen Koning",
    "Jij Bent Het Konijn En Ik Ben De Tank",
    "Wij Zijn De Beste",
    "DenLiner - Waar Magie Ontstaat",
    "Een Sprong In De Hemel Wordt Een Rider Kick",
    "Spreid Je Vleugels En Bereid Je Voor Op Een Kracht",
    "Hoektanden Die Door Beton Heen Kunnen Vreten",
    "Dit Is Niet Een Test",
    "Geheim Materiaal - Verborgen Materiaal",
    "Ontploffingskracht Van 100 Bommen",
    "Felle Adem Zo Koud Als Poolwinden",
    "In Haar Buidel Bevat Oneindige Mogelijkheden",
    "De Rider Kick Verhoogde De Kracht Door Aan Helderheid Toe Te Voegen",
    "Een Rider Schopt Naar De Hemel Om Op Te Stijgen Naar Een Droom",
    "Kan Iemand Deze Wereld Alsjeblieft Redden?",
    "Ik Ben Gewoon Een Voetganger Die Passeert. Probeer Te Onthouden Dat",
    "Omdat Grootmoeder Het Zei",
    "Nu Zie Je Me, Nu Niet Meer",
    "Koffie En Sokken In De Ochtend Zijn Redders In Nood",
    "Zij Een Scheppend Vuur, Niet Een Wolk Van Mist",
    "In Niets Gaat Er Boven Een Wapperende Rood Wit Blauw In De Wind",
    "Zullen We Voor De Grap Een Dagje Gaan Uithangen?",
    "Genoeg Kracht Om Een Berg Te Vernietigen",
    "Oneindige Stekels Schieten Op De Vijand Af",
    "Priknaald Met Ongelooflijke Kracht",
    "Voor Haar Ogen Is Niets Onbekend",
    "Het Lot Van Een Gevecht Bepalen Als Een Valkyrie",
    "Uitbarstende Vonken Vliegen Met Volle Kracht Naar De Donkere Afdaling",
    "Kèk Toch Hoe Stèrk",
    "Je Bent Schattig, Mag Ik Jouw Hart Mee Naar Huis Nemen?",
    "Naast Jou Word Ik Elke Keer Als Ik Vecht Herboren",
    "Met Een MOTION Die Sneller Is Dan Het Licht",
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
