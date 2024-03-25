
// Optionally, you can adjust the height of the notice board dynamically based on the content height
window.addEventListener('load', function() {
    var noticeContent = document.querySelector('.notice-content');
    var noticeBoard = document.querySelector('.notice-board');
    if (noticeContent.clientHeight > noticeBoard.clientHeight) {
        noticeBoard.style.height = noticeContent.clientHeight + 'px';
    }
});

const images = []; // List of image URLs
let currentIndex = 0;
const bannerImg = document.querySelector('.banner-img');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
    bannerImg.src = images[currentIndex]; // Change image source
}

setInterval(changeImage, 3000); // Change image every 3 seconds

// Function to add new image to the banner
function addImage(newImageUrl) {
    images.push(newImageUrl); // Add new image URL to the array
}

// Example usage: addImage("new-image.jpg");


document.getElementById("whwh").addEventListener("click", function() {
    window.open("https://alvo.chat/4bQ9", "_blank"); // Replace URL with the link you want to open
});