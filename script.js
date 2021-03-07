let sections = document.querySelectorAll(".projects .project").length;
let nameInput = document.querySelector("input.name");
let emailInput = document.querySelector("input.email");
let message = document.querySelector("textarea");
let submitBtn = document.querySelector("button.submit-btn");
const projectArr = gsap.utils.toArray(".projects .project");
let footerNote = document.querySelector("footer > p");

const currentYear = new Date().getFullYear();
footerNote.innerHTML = `Copyright &copy;${currentYear} | Made by theDro💖`;

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap.to("#dro-svg path", {
  duration: 1,
  strokeDashoffset: 0,
  fill: "white",
  stagger: 0.3,
});

document.querySelector(".project-btn").addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: { y: ".projects" } });
});

var options = {
  strings: [
    "I'm <span>Seun Taiwo</span> AKA <span>Dro</span>",
    "I'm a Front End Web Developer",
    "I build fully responsive websites",
    "I love Games😍",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1500,
  cursorChar: "_",
  smartBackspace: true,
  loop: true,
};

var typed = new Typed("#mainText", options);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var templateParams = {
    name: nameInput.value,
    email: emailInput.value,
    message: message.value,
  };

  if (templateParams.name && templateParams.email && templateParams.message) {
    emailjs.send("contact_service", "contact_template", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.querySelector("p.success").style.display = "block";
        setTimeout(() => {
          document.querySelector("p.success").style.display = "none";
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);
        document.querySelector("p.error").style.display = "block";
        setTimeout(() => {
          document.querySelector("p.error").style.display = "none";
        }, 5000);
      }
    );
  } else {
    document.querySelector("p.empty").style.display = "block";
    setTimeout(() => {
      document.querySelector("p.empty").style.display = "none";
    }, 5000);
  }
});

projectArr.map((project, index) => {
  if (index === projectArr.length - 1) {
    return ScrollTrigger.create({
      trigger: project,
      start: "top top",
    });
  }
  ScrollTrigger.create({
    trigger: project,
    start: "top top",
    snap: {
      snapTo: 1,
      duration: 1,
      delay: 0.05,
    },
    pin: true,
    pinSpacing: false,
  });
});
