
const imgContainer=document.getElementById("sliders");
const slide=document.querySelectorAll(".slide");
// const preBtn=document.getElementById("pre-btn");
// const nextBtn=document.getElementById("next-btn");
let slideIndex=0;
slide.forEach((img,index)=>
{
    img.style.left=`${index*100}%`
})
const previousSlide=()=>{
    console.log("prev");
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slide.length - 1;
    }
    imgSlide();
}
const nextSlide=()=>{
    console.log("Next");
    slideIndex++;
    if (slideIndex >slide.length - 1) {
      slideIndex = 0;
    }
    imgSlide();
}
const imgSlide = () => {
    slide.forEach((e) => {
    e.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
  };
  
// preBtn.addEventListener("click",previousSlide);
// nextBtn.addEventListener("click",nextSlide);

