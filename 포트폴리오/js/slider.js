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