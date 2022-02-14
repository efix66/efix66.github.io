let controlScrollUp = document.getElementById("keyup123");

window.addEventListener("scroll", function (e) {
  const firstSection = this.document.querySelector("#banner1");
  const secondSection = this.document.querySelector("#banner2");

  const firstSectionHeight = firstSection.clientHeight;
  const secodnSectionHeight = secondSection.clientHeight;

  const positionY = window.scrollY;
  const sectionsSum = firstSectionHeight + secodnSectionHeight;

  if (window.scrollY == 0) {
    console.log("test1");

    controlScrollUp.style.display = "none";
    // controlScrollUp.classList.add("swirl-out-bck");
  } else if (positionY > sectionsSum) {
    controlScrollUp.style.display = "block";
    controlScrollUp.classList.add("bounce-in-top");
    console.log("test2");
  }
});

//Scrool down on button press

const btnScrolDawn = document.getElementById("button");

btnScrolDawn.addEventListener("click", function () {
  window.scroll({
    top: 1600,
    left: 0,
    behavior: "smooth",
  });
});
