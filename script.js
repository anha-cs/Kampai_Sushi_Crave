

// Function to highlight the search term found by the search bar
function highlightSearch() {
    // Get the search term from input
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    // If no search term, return without doing anything
    if (!searchTerm) {
        alert("Please enter a keyword to search.");
        return;
    }

    // Clear previous highlights
    removeHighlight();

    // Find all relevant elements to search within them
    const contentElements = document.querySelectorAll('.content h1, .content h2, .content p, .content li, .about-content h2, .about-content p, .about-content li, .gallery-content h1, .gallery-content p, .menu-content h1, .contact-content, .footer, .btn');

    let found = false;

    contentElements.forEach(element => {
        const text = element.innerText.toLowerCase();
        if (text.includes(searchTerm)) {
            found = true;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
        }
    });

    if (!found) {
        alert("Keyword not found in the current page.");
    }
}

// Function to remove existing highlights
function removeHighlight() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.classList.remove('highlight');
        element.outerHTML = element.innerHTML; // Removes the span without losing the text
    });
}

// Event listener to clear highlights when the search input is cleared
document.getElementById('searchInput').addEventListener('input', function() {
    if (this.value.trim() === "") {
        removeHighlight();
    }
});



// Function to display the stack of menu images in menu page
let currentImageIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.menu-image');
    images[currentImageIndex].style.display = 'none'; // Hide the current image
    currentImageIndex = (currentImageIndex + 1) % images.length; // Move to the next image
    images[currentImageIndex].style.display = 'block'; // Show the next image
}



    // Function to clear all the input field in the form
    function clearForm() {
        document.getElementById("name").value = '';
        document.getElementById("phone").value = '';
        document.getElementById("email").value = '';
        document.getElementById("message").value = '';
    }
    

