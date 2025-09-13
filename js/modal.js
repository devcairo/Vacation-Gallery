// Author: Sa'Cairo Bonner
// Create Date: 09/10/2025
// Class: ITN263
// Class Section: 601
// Assignment: Vacation Gallery
// Purpose: Handle the modal lightbox functionality for image gallery
// Notes: I know this isnt needed for the assignment but I wanted to 
// add this for the modal lightbox functionality

document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('modalCaption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modalImg.title = this.alt;
            captionText.innerHTML = this.nextElementSibling.innerHTML;
        });
    });

    // Used to close modal when clicking the X button in the top right corner
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Incase a user clicks outside the image we'll close the image here too
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Incase the user also uses the backspace key to close the image for some reason... IDK why someone would do this but just in case lol
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});