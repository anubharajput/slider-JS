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
showBtn()
const imgSlide = () => {
  slide.forEach((e) => {
    e.style.transform = `translateX(-${slideIndex * 100}%)`;
    showBtn();
    bulletPointsController();
  });
};
const invokeOnClick = (index) => {
  stopAutoSlider();
  slideIndex = index;
  imgSlide();
  startAutoSlider();
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
bulletPointsController()
const previousSlide = (e) => {
  slideIndex--;
  if(slideIndex<0)
  slideIndex=slide.length-1;
  imgSlide();
}
const nextSlide = () => {
  slideIndex++;
  if(slideIndex>slide.length-1)
  slideIndex=0;
  imgSlide();
}
let interValRef;
const startAutoSlider = () => {
  interValRef = setInterval(() => {
    nextSlide();
  }, 3000);
}
startAutoSlider();
const stopAutoSlider = () => {
  clearInterval(interValRef);
}
preBtn.addEventListener("click", () => {
  stopAutoSlider();
  previousSlide();
  startAutoSlider();
});
nextBtn.addEventListener("click", () => {
  stopAutoSlider();
  nextSlide();
  startAutoSlider();
});
