const about = document.querySelector("#about");
const aboutScrollBtn = document.querySelector(".about-scroll");
const squares = document.querySelectorAll(".square");

aboutScrollBtn.addEventListener("click", function () {
  about.scrollIntoView({ behavior: "smooth" });
});

squares.forEach((square) => {
  squares.addEventListener("click", function () {
    squares.style.opacity = 0;
  });
});