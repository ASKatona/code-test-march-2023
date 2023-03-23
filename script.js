// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const firstName = event.target[0].value.trim();
        const lastName = event.target[1].value.trim();
        const email = event.target[2].value.trim();
        const phoneNumber = event.target[3].value.trim();

        // Hide the form and show a personalized message
        contactForm.style.display = 'none';
        thankYouMessage.textContent = `Thank you for your interest, ${firstName} ${lastName}! We'll be in touch soon at ${email} or ${phoneNumber}.`;
        thankYouMessage.style.display = 'block';
    });
});

// slideshow-gallery

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Menu repsonsive 

function responsiveMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}