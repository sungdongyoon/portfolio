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
