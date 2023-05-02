/* 다크모드 토글버튼 */
const container = document.querySelector(".container");
const dayNight = document.querySelector(".day_night");

dayNight.addEventListener("click", () => {
  const darkToggle = document.querySelector("#dark_toggle");
  if(darkToggle.classList.contains("fa-moon")) {
    darkToggle.classList.remove("fa-moon");
    darkToggle.classList.add("fa-sun");
  } else {
    darkToggle.classList.remove("fa-sun");
    darkToggle.classList.add("fa-moon");
  }
  
  dayNight.classList.toggle("day_night_active");

  const goTop = document.querySelector(".go_top");
  goTop.classList.toggle("day_night_active");

  const header = document.querySelector(".common_header");
  const home = document.querySelector(".home_wrap");
  const about = document.querySelector(".about_wrap");
  const project = document.querySelector(".project_wrap");
  const contact = document.querySelector(".contact_wrap");
  const contactFooter = document.querySelector(".contact_footer");
  const square = document.querySelector(".square")
  const square2 = document.querySelector(".square2")
  const contactContent = document.querySelector(".contact_content");
  const aboutContent = document.querySelector(".about_content");
  const profileWrap = document.querySelector(".profile_wrap");

  header.classList.toggle("day_night_active");
  home.classList.toggle("day_night_active");
  about.classList.toggle("about_active");
  project.classList.toggle("day_night_active");
  contact.classList.toggle("day_night_active");
  contactFooter.classList.toggle("backgroundBlack");
  square.classList.toggle("backgroundWhite");
  square2.classList.toggle("borderWhite");
  contactContent.classList.toggle("backgroundBlack");
  aboutContent.classList.toggle("backgroundBlack");
  profileWrap.classList.toggle("colorWhite");

  const commonTitle = document.querySelectorAll(".common_title");
  for(let i = 0; i < commonTitle.length; i++) {
    commonTitle[i].classList.toggle("colorWhite");
  }

  const commonTitleRight = document.querySelectorAll(".common_title_right");
  for(let i = 0; i < commonTitle.length; i++) {
    commonTitleRight[i].classList.toggle("backgroundWhite");
  }

  const projectTitle = document.querySelectorAll(".project_title");
  for(let i = 0; i < projectTitle.length; i++) {
    projectTitle[i].classList.toggle("borderWhite");
  }

  const projectH2 = document.querySelectorAll(".project_h2");
  for(let i = 0; i < projectH2.length; i++) {
    projectH2[i].classList.toggle("colorWhite");
  }

  const projectSquare = document.querySelectorAll(".project_square")
  for(let i = 0; i< projectSquare.length; i++) {
    projectSquare[i].classList.toggle("backgroundBlack");
  }

  const moreBtn = document.querySelectorAll(".more_btn");
  for(let i = 0; i < moreBtn.length; i++) {
    moreBtn[i].classList.toggle("moreBtn_active");
  }

  const linkSvg = document.querySelectorAll(".link img");
  for(let i = 0; i < linkSvg.length; i++) {
    linkSvg[i].classList.toggle("invert");
  }

  /* snow */
  const body = document.querySelector("body");
  const MIN_DURATION = 10;

  function snowFalling() {
    const snowfalling = document.createElement("div");
    const delay = Math.random() * 10;
    const opacity = Math.random();
    const duration = Math.random() * 20 + MIN_DURATION;
  
    snowfalling.classList.add("snowflake");
    snowfalling.style.left = `${Math.random() * window.screen.width}px`;
    snowfalling.style.animationDelay = `${delay}s`;
    snowfalling.style.opacity = opacity;
    snowfalling.style.animation = `fall ${duration}s linear`
  
    body.appendChild(snowfalling);
  
    setTimeout(() => {
      body.removeChild(snowfalling);
      snowFalling();
    }, (duration + delay) * 600);
  }
  
  for(let i = 0; i < 100; i ++) {
    setTimeout(snowFalling, 500 * i);
  }
})