document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.has-scrollbar'); // The slider container
    const slides = document.querySelectorAll('.scrollbar-item'); // All slides
    const slideCount = slides.length; // Total number of slides
    const slideWidth = slider.clientWidth; // Width of each slide
    let currentIndex = 0; // Current slide index
    const slideInterval = 2000; // Slide interval in milliseconds (3 seconds)
  
    // Clone the first slide and append it to the end of the slider
    const firstSlideClone = slides[0].cloneNode(true);
    slider.appendChild(firstSlideClone);
  
    // Function to go to the next slide
    function goToNextSlide() {
      currentIndex++; // Increment the index
  
      // Smoothly scroll to the new position
      slider.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth'
      });
  
      // If we've reached the cloned slide, reset to the start instantly
      if (currentIndex === slideCount) {
        setTimeout(() => {
          slider.scrollTo({
            left: 0,
            behavior: 'auto' // Instantly move back to the first slide
          });
          currentIndex = 0; // Reset index to the original first slide
        }, 500); // Wait for the smooth scroll to finish
      }
    }
  
    // Automatically slide every 3 seconds
    setInterval(goToNextSlide, slideInterval);
  });
  