

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



// Function to get information from the submit form in contact page, and write the collected data to an excel file
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Create a new workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws_data = [
        ["Name", "Email", "Phone Number", "Message"],
        [name, email, phone, message]
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Write the workbook to a file
    XLSX.writeFile(wb, "data.xlsx");
});

    // Function to clear all the input field in the form
    function clearForm() {
        document.getElementById("name").value = '';
        document.getElementById("phone").value = '';
        document.getElementById("email").value = '';
        document.getElementById("message").value = '';
    }
    

