$(function() {
  /* 헤더 스크롤 */
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $(".common_header").addClass("header_eft");
      $(".header_logo span").addClass("logo_eft");
    } else {
      $(".common_header").removeClass("header_eft");
      $(".header_logo span").removeClass("logo_eft");
    }
  });
});

/* Project slider */
const projectOne = document.querySelector(".project_one_left");
const images = ["반응형1-1.png", "반응형1-2.png", "반응형1-3.png", "반응형1-4.png", "반응형1-5.png", "반응형1-6.png"];
const arrows = document.querySelectorAll(".arrow");

projectOne.style.backgroundImage = `url(/img/${images[0]})`;

let i = 0;
arrows.forEach(function(e) {
  e.addEventListener("click", (e) => {
    if(e.target.id === "left") {
      i--;
      if(i < 0) {
        i = images.length - 1;
      }
    } else if(e.target.id === "right") {
      i++;
      if(i >= images.length) {
        i = 0;
      }
    }
    projectOne.style.backgroundImage = `url(/img/${images[i]})`;
  });
});
