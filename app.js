const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  // select active buttons
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentActiveBtn = document.querySelectorAll(".active-btn");
      currentActiveBtn[0].className = currentActiveBtn[0].className.replace(
        "active-btn",
        ""
      );

      this.className += " active-btn";
    });
  }
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      //  Hide the other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

pageTransitions();
