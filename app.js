// 1. WhatsApp Modal Logic
const modal = document.getElementById("whatsappModal");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".close-btn");

contactBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";

// 2. CATEGORY POPUP LOGIC
const prodPopup = document.getElementById("productPopup");
const prodBtn = document.getElementById("productMenuBtn");
const closePopup = document.querySelector(".close-popup");

prodBtn.onclick = () => prodPopup.style.display = "block";
closePopup.onclick = () => prodPopup.style.display = "none";

// Close popup when a link is clicked
document.querySelectorAll('.popup-list a').forEach(link => {
    link.onclick = () => prodPopup.style.display = "none";
});

// 3. FEEDBACK SLIDER LOGIC
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
showSlides();

// Global click to close modals
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
    if (event.target == prodPopup) prodPopup.style.display = "none";
}