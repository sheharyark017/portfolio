const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const contact = document.querySelector("#contact");
const aboutScrollBtn = document.querySelector(".about-scroll");
const skillScrollBtn = document.querySelector(".skill-scroll");
const constactScrollBtn = document.querySelector(".contact-scroll");
const contactbtn = document.querySelector(".intro-contact-btn");

aboutScrollBtn.addEventListener("click", function () {
  about.scrollIntoView({ behavior: "smooth" });
});

skillScrollBtn.addEventListener("click", function () {
  skills.scrollIntoView({ behavior: "smooth" });
});

constactScrollBtn.addEventListener("click", function () {
  contact.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);

  // matching strategy
  console.log(e.target);
  if (e.target.classList.contains("nav-link")) {
    const id = `${e.target.getAttribute("href")}`;
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

contactbtn.addEventListener("click", function (e) {
  e.preventDefault();

  contact.scrollIntoView({ behavior: "smooth" });
});
