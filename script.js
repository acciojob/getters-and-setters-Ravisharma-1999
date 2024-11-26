// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const button = document.getElementById('clickMeButton');

    // Add an event listener for the button click
    button.addEventListener('click', function() {
        // Get the second paragraph element
        const p = document.querySelectorAll('p')[1]; // Index 1 refers to the second <p>
        
        // Update the text content of the paragraph
        p.textContent = "The button was clicked! This is an updated message.";
        
        // Change the color of the paragraph text to blue
        p.style.color = 'blue';
    });
});
