// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const button = document.getElementById('clickMeButton');

    // Add an event listener for the button click
    button.addEventListener('click', function() {
        // Get the paragraph element and update its content
        const p = document.querySelectorAll('p')[1]; // The second <p> element
        p.textContent = "The button was clicked! This is an updated message.";

        // Change the color of the paragraph text to blue
        p.style.color = 'blue';
    });
});
