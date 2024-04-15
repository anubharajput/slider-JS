const imgContainer = document.getElementById("sliders");
const bulletPointsContainer = document.getElementById("bullet-points");
const prevBtn = document.getElementById("pre-btn");
const nextBtn = document.getElementById("next-btn");
const slideImg = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpeg", "images/img5.jpg", "images/img6.webp", "images/img7.webp", "images/img8.jpeg", "images/img9.jpg"];
const createImages = () => {
  for (let i = 0; i < slideImg.length; i++) {
    const slideData = document.createElement("div");
    slideData.classList.add("slide");
    const image = document.createElement("img");
    image.src = slideImg[i];
    slideData.appendChild(image);
    imgContainer.appendChild(slideData);
    const bulletPoints = document.createElement("div");
    bulletPoints.classList.add("bullet");
    bulletPointsContainer.appendChild(bulletPoints);
  }
};
createImages();
const bullets = document.querySelectorAll(".bullet")
const slide = document.querySelectorAll(".slide");
let slideIndex = 0;
const showBtn = () => {
  if (slideIndex == 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
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
  if (slideIndex < 0)
    slideIndex = slide.length - 1;
  imgSlide();
}
const nextSlide = () => {
  slideIndex++;
  if (slideIndex > slide.length - 1)
    slideIndex = 0;
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
prevBtn.addEventListener("click", () => {
  stopAutoSlider();
  previousSlide();
  startAutoSlider();
});
nextBtn.addEventListener("click", () => {
  stopAutoSlider();
  nextSlide();
  startAutoSlider();
});
