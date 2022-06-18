const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);

// arrange slides next to each other
const setSlidePosition = (slide, i) => {
  slide.style.left = slideWidth * i + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(currentSlide, nextSlide);
});

prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(currentSlide, prevSlide);
});
// prevButton.addEventListener("click", () => {
//   const currentSlide = track.querySelector(".current-slide");
//   const prevSlide = currentSlide.previousElementSibling;
//   const amountToMove = prevSlide.style.left;

//   // move to prev slide
//   track.style.transform = `translateX(${amountToMove})`;

//   // reassign current-slide class to next slide
//   currentSlide.classList.remove("current-slide");
//   prevSlide.classList.add("current-slide");
// });
