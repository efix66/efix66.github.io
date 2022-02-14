let controlScrollUp = document.getElementById("keyup123");

window.addEventListener("scroll", function (e) {
  const firstSection = this.document.querySelector("#banner1");
  const secondSection = this.document.querySelector("#banner2");

  const firstSectionHeight = firstSection.clientHeight;
  const secodnSectionHeight = secondSection.clientHeight;

  const positionY = window.scrollY;
  const sectionsSum = firstSectionHeight + secodnSectionHeight;

  if (window.scrollY == 0) {
    console.log("testing");
    controlScrollUp.style.display = "none";
  } else if (positionY > sectionsSum) {
    controlScrollUp.style.display = "block";
    console.log("test2");
  }
});

//Scrool dawn on button press

const btnScrolDawn = document.getElementById("button");

btnScrolDawn.addEventListener("click", function () {
  window.scroll({
    top: 1500,
    left: 0,
    behavior: "smooth",
  });
});
