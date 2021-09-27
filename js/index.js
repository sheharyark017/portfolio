const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const contact = document.querySelector("#contact");
const aboutScrollBtn = document.querySelector(".about-scroll");
const skillScrollBtn = document.querySelector(".skill-scroll");
const constactScrollBtn = document.querySelector(".contact-scroll");

aboutScrollBtn.addEventListener("click", function () {
  about.scrollIntoView({ behavior: "smooth" });
});

skillScrollBtn.addEventListener("click", function () {
  skills.scrollIntoView({ behavior: "smooth" });
});

constactScrollBtn.addEventListener("click", function () {
  contact.scrollIntoView({ behavior: "smooth" });
});
