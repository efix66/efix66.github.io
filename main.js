let controlScrollUp = document.getElementById("keyup123");

controlScrollUp.style.display = "none";

window.addEventListener("scroll", function (e) {
  const firstSection = this.document.querySelector("#banner1");
  const secondSection = this.document.querySelector("#banner2");

  const firstSectionHeight = firstSection.clientHeight;
  const secondSectionHeight = secondSection.clientHeight;

  const positionY = window.scrollY;
  const sectionsSum = firstSectionHeight + secondSectionHeight;

  console.log(window.scrollY);

  if (window.scrollY == 0) {
    controlScrollUp.classList.remove("bounce-in-top");
    controlScrollUp.classList.add("swirl-out-bck");
    // controlScrollUp.style.display = "none";
    console.log("test1");
  } else if (positionY > sectionsSum) {
    controlScrollUp.style.display = "block";
    controlScrollUp.classList.remove("swirl-out-bck");
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

Cookies.set("name", "value");
