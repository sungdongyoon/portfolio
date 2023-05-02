$(function() {
  /* 헤더 스크롤 */
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $(".common_header").addClass("header_eft");
      $(".header_logo span").addClass("span_eft");
      $(".header_logo strong").addClass("strong_eft");
    } else {
      $(".common_header").removeClass("header_eft");
      $(".header_logo span").removeClass("span_eft");
      $(".header_logo strong").removeClass("strong_eft");
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


