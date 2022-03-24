const sections = document.querySelectorAll(".section");
const sectBtn = document.querySelectorAll(".controls");
const sectBtns = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");
// TODO: Fix the call back function
function pageTransitions() {
  // select active buttons
  for (let i = 0; sectBtn.i < length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += "active-btn";
    });
  }
}

pageTransitions();
