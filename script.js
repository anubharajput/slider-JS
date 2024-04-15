const imgContainer = document.getElementById("sliders");
const bullets = document.querySelectorAll(".bullet");
const slide = document.querySelectorAll(".slide");
const preBtn = document.getElementById("pre-btn");
const nextBtn = document.getElementById("next-btn");
let slideIndex = 0;
const showBtn = () => {
  if (slideIndex == 0) {
    preBtn.style.display = "none";
  } else {
    preBtn.style.display = "block";
  }

  if (slideIndex == slide.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}
const imgSlide = () => {
  slide.forEach((e) => {
    e.style.transform = `translateX(-${slideIndex * 100}%)`;
    showBtn();
    bulletPointsController();
  });
};
const invokeOnClick = (index) => {
  slideIndex = index;
  imgSlide();
}
slide.forEach((img, index) => {
  img.style.left = `${index * 100}%`
  bullets[index].setAttribute("onClick", `invokeOnClick(${index})`);
})
const bulletPointsController = () => {
  bullets.forEach((bullet, index) => {
    if (slideIndex === index)
      bullet.classList.add("active");
    else
      bullet.classList.remove("active");
  })
}
const previousSlide = () => {
  console.log("prev");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slide.length - 1;
  }
  imgSlide();
}
const nextSlide = () => {
  console.log("Next");
  slideIndex++;
  if (slideIndex > slide.length - 1) {
    slideIndex = 0;
  }
  imgSlide();
}
let interValRef;
const autoSlider = () => {
  setInterval(() => {
    imgSlide();
    slideIndex++;
    if (slideIndex > slide.length - 1) {
      slideIndex = 0;
    }
  }, 2000);
}
autoSlider();
preBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);
