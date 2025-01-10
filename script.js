document.addEventListener("DOMContentLoaded", function() {
  
  /* Dropdown Menu */
  (function() {
    const $nav = document.querySelector('nav');
    const $btn = document.querySelector('.btn-menu');  
    if ($btn) {  // Check if button exists
      $btn.addEventListener('click', function() {
        $nav.classList.toggle('show');
      });
    }
  })();

  /* Video Popup */
  (function() {
    const popupButtons = document.querySelectorAll(".popup-button");
    const closeButtons = document.querySelectorAll(".close-button");

    popupButtons.forEach(button => {
      button.addEventListener("click", function() {
        const videoId = this.getAttribute("data-video-id");
        const popup = document.getElementById(videoId);
        if (popup) {
          popup.style.display = "flex"; // Show the popup
        }
      });
    });

    closeButtons.forEach(button => {
      button.addEventListener("click", function() {
        const popup = this.closest(".video-popup");
        if (popup) {
          popup.style.display = "none"; // Hide the popup
        }
      });
    });
  })();

  /* Slideshow */
  (function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    window.plusSlides = function(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    window.currentSlide = function(n) {
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
  })();
});
