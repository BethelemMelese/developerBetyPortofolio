let slideIndex = 1;

// Display the first three items by default
window.onload = function () {
  showSlides(slideIndex);
  showSlides(slideIndex + 1);
  showSlides(slideIndex + 2);
  showSlides(slideIndex + 3);
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("icon-list");

  if (n > 6) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the first three slides
  for (i = slideIndex - 1; i < slideIndex + 4; i++) {
    if (slides[i]) {
      slides[i].style.display = "block";
    }
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});