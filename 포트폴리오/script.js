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
  /* top버튼 스크롤 */
  $(window).scroll(function() {
    if($(window).scrollTop() > 700) {
      $(".go_top").addClass("go_top_active");
    } else {
      $(".go_top").removeClass("go_top_active");
    }
  });
  /* 다크모드버튼 스크롤 */
  $(window).scroll(function() {
    if($(window).scrollTop() > 700) {
      $(".day_night").addClass("day_night_visible");
    } else {
      $(".day_night").removeClass("day_night_visible");
    }
  });
  /* 인트로 마우스 */
  $(document).ready(function() {
    $(".intro_img_cover").on("mouseover",function() {
      $(this).css({
        "transform": "scale(105%)",
        "box-shadow": "15px 15px 10px rgba(0, 0, 0, 0.7)",
      })
    })
    $(".intro_img_cover").on("mouseleave",function() {
      $(this).css({
        "transform": "scale(100%)",
        "box-shadow": "none",
      })
    })
  })
});


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

  const commonTitle = document.querySelectorAll(".common_title");
  for(let i = 0; i < commonTitle.length; i++) {
    commonTitle[i].classList.toggle("colorWhite");
  }

  const commonTitleRight = document.querySelectorAll(".common_title_right");
  for(let i = 0; i < commonTitle.length; i++) {
    commonTitleRight[i].classList.toggle("backgroundWhite");
  }

  const projectH2 = document.querySelectorAll(".project_h2");
  for(let i = 0; i < projectH2.length; i++) {
    projectH2[i].classList.toggle("colorWhiteShadow");
  }

  const projectSquare = document.querySelectorAll(".project_square")
  for(let i = 0; i< projectSquare.length; i++) {
    projectSquare[i].classList.toggle("backgroundBlack");
  }

  const moreBtn = document.querySelectorAll(".more_btn");
  for(let i = 0; i<moreBtn.length; i++) {
    moreBtn[i].classList.toggle("moreBtn_active");
  }
})

/* Project slider */
/* ===== slider one ===== */
const projectOne = document.querySelector(".project_one_left");
const projectOneImages = ["반응형1-1.png", "반응형1-2.png", "반응형1-3.png", "반응형1-4.png", "반응형1-5.png", "반응형1-6.png"];
const projectOneArrows = document.querySelectorAll(".arrow_one");

projectOne.style.backgroundImage = `url(/img/${projectOneImages[0]})`;

let i = 0;
projectOneArrows.forEach(function(e) {
  e.addEventListener("click", (e) => {
    if(e.target.id === "left_one") {
      i--;
      if(i < 0) {
        i = projectOneImages.length - 1;
      }
    } else if(e.target.id === "right_one") {
      i++;
      if(i >= projectOneImages.length) {
        i = 0;
      }
    }
    projectOne.style.backgroundImage = `url(/img/${projectOneImages[i]})`;
  });
});


/* ===== slider two ===== */
const projectTwo = document.querySelector(".project_two_right");
const projectTwoImages = ["반응형2-1.png", "반응형2-2.png", "반응형2-3.png"];
const projectTwoArrows = document.querySelectorAll(".arrow_two");

projectTwo.style.backgroundImage = `url(/img/${projectTwoImages[0]})`;

let j = 0;
projectTwoArrows.forEach(function(e) {
  e.addEventListener("click", (e) => {
    if(e.target.id === "left_two") {
      j--;
      if(j < 0) {
        j = projectTwoImages.length - 1;
      }
    } else if(e.target.id === "right_two") {
      j++;
      if(j >= projectTwoImages.length) {
        j = 0;
      }
    }
    projectTwo.style.backgroundImage = `url(/img/${projectTwoImages[j]})`;
  });
});

/* ===== slider three ===== */
const projectThree = document.querySelector(".project_three_left");
const projectThreeImages = ["모바일1.png", "모바일2.png", "모바일3.png", "모바일4.png"];
const projectThreeArrows = document.querySelectorAll(".arrow_three");

projectThree.style.backgroundImage = `url(/img/${projectThreeImages[0]})`;

let k = 0;
projectThreeArrows.forEach(function(e) {
  e.addEventListener("click", (e) => {
    if(e.target.id === "left_three") {
      k--;
      if(k < 0) {
        k = projectThreeImages.length - 1;
      }
    } else if(e.target.id === "right_three") {
      k++;
      if(k >= projectThreeImages.length) {
        k = 0;
      }
    }
    projectThree.style.backgroundImage = `url(/img/${projectThreeImages[k]})`;
  });
});

/* Modal */
/* skill modal */
const detail = document.querySelectorAll(".detail");
const skillClose = document.querySelectorAll(".intro_close");
for(let i = 0; i < skillClose.length; i++) {
  skillClose[i].addEventListener("click", () => {
    detail[i].classList.remove("intro_active");
  })
}

const html = document.querySelector("#html");
const htmlDetail = document.querySelector(".html_detail");
const css = document.querySelector("#css");
const cssDetail = document.querySelector(".css_detail");
const js = document.querySelector("#js");
const jsDetail = document.querySelector(".js_detail");
const jquery = document.querySelector("#jquery");
const jqueryDetail = document.querySelector(".jquery_detail");

html.addEventListener("click", () => {
  htmlDetail.classList.add("intro_active");
})
css.addEventListener("click", () => {
  cssDetail.classList.add("intro_active");
})
js.addEventListener("click", () => {
  jsDetail.classList.add("intro_active");
})
jquery.addEventListener("click", () => {
  jqueryDetail.classList.add("intro_active");
})

/* tool modal */
const figma = document.querySelector("#figma");
const figmaDetail = document.querySelector(".figma_detail");
const github = document.querySelector("#github");
const githubDetail = document.querySelector(".github_detail");
const photoshop = document.querySelector("#photoshop");
const photoshopDetail = document.querySelector(".photoshop_detail");
const vscode = document.querySelector("#vscode");
const vscodeDetail = document.querySelector(".vscode_detail");

figma.addEventListener("click", () => {
  figmaDetail.classList.add("intro_active");
})
github.addEventListener("click", () => {
  githubDetail.classList.add("intro_active");
})
photoshop.addEventListener("click", () => {
  photoshopDetail.classList.add("intro_active");
})
vscode.addEventListener("click", () => {
  vscodeDetail.classList.add("intro_active");
})


/* ===== modal one ===== */
const firstModal = document.querySelector(".project_one_modal");
const firstBtn = document.querySelector(".pj_one_btn");
const firstClose = document.querySelector(".close_btn_one");

firstBtn.addEventListener("click", () => {
  firstModal.classList.add("modal_active");
  document.body.style.overflow = "hidden";
})
firstClose.addEventListener("click", () => {
  firstModal.classList.remove("modal_active");
  document.body.style.overflow = "unset";
})

/* ===== modal two ===== */
const secondModal = document.querySelector(".project_two_modal");
const secondBtn = document.querySelector(".pj_two_btn");
const secondClose = document.querySelector(".close_btn_two");

secondBtn.addEventListener("click", () => {
  secondModal.classList.add("modal_active");
  document.body.style.overflow = "hidden";
})
secondClose.addEventListener("click", () => {
  secondModal.classList.remove("modal_active");
  document.body.style.overflow = "unset";
})

/* ===== modal three ===== */
const thirdModal = document.querySelector(".project_three_modal");
const thirdBtn = document.querySelector(".pj_three_btn");
const thirdClose = document.querySelector(".close_btn_three");

thirdBtn.addEventListener("click", () => {
  thirdModal.classList.add("modal_active");
  document.body.style.overflow = "hidden";
})
thirdClose.addEventListener("click", () => {
  thirdModal.classList.remove("modal_active");
  document.body.style.overflow = "unset";
})




/* Scroll */
const logo = document.querySelector(".header_logo");
logo.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
})

const about = document.querySelector("#about");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");
const goTop = document.querySelector(".go_top");

about.addEventListener("click", () => {
  window.scrollTo({top: 1195, behavior: "smooth"});
});

project.addEventListener("click", () => {
  window.scrollTo({top: 2268, behavior: "smooth"});
})

contact.addEventListener("click", () => {
  window.scrollTo({top: 7000, behavior: "smooth"});
})

goTop.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
})

/* Mouse Event */
const closeBtn = document.querySelectorAll(".closeBtn");

for(let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("mouseover", () => {
    closeBtn[i].style.color = "red";
    closeBtn[i].classList.add("close_btn_effect");
  })
  closeBtn[i].addEventListener("mouseleave", () => {
    closeBtn[i].style.color = "#000";
    closeBtn[i].classList.remove("close_btn_effect");
  })
}



/* contact */
const userName = document.querySelector("#userName");
const button = document.querySelector("#form_button")

button.addEventListener("click", (event) => {
  event.preventDefault();
  if(userName.value != "") {
    if(email.value != "") {
      if(message.value != "") {
        alert(`${userName.value}님, 연락주셔서 감사합니다`)
        userName.value = "";
        email.value = "";
        message.value = "";
      } else if(message.value == "") {
        alert("메세지를 입력해주세요!")
      }
    } else if(email.value == "") {
      alert("이메일을 입력해주세요!")
    }
  } else if(userName.value == "") {
    alert("이름을 입력해주세요!")
  }
});


