let hamButton = document.querySelector(".menu-btn");
let cancelButton = document.querySelector(".cancel");
let menu = document.querySelector(".menu");

function pageTransitionHome() {
  var tl = gsap.timeline();
  tl.to("div.overlay", {
    duration: 1,
    scale: 10,
    opacity: 1,
  });
  tl.to("#project-svg path", {
    duration: 1,
    strokeDashoffset: 0,
    fill: "white",
    stagger: 0.3,
  });
  tl.to("#project-svg", {
    opacity: 0,
  });
  tl.to("div.overlay", {
    duration: 0.5,
    scale: 1,
    delay: 0.1,
  });
  tl.to("div.overlay", {
    opacity: 0,
  });
}

function pageTransitionProjects() {
  var tl = gsap.timeline();
  tl.to("ul.overlay-box li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  });
  tl.to("ul.overlay-box li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.2,
    delay: 0.1,
  });
}

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  views: [
    {
      namespace: "home",
      async beforeLeave(data) {
        const done = this.async();
        pageTransitionHome();
        await delay(1000);
        done();
      },
      async beforeEnter(data) {},
    },
    {
      namespace: "projects",
      async beforeLeave(data) {
        const done = this.async();
        pageTransitionProjects();
        await delay(1500);
        done();
      },
      async beforeEnter(data) {},
    },
  ],
  transitions: [
    {
      async leave(data) {
        // const done = this.async();
        // pageTransition();
        // await delay(1500);
        // done();
      },
      async enter(data) {},
    },
  ],
});

hamButton.addEventListener("click", () => {
  menu.classList.add("display");
});
cancelButton.addEventListener("click", () => {
  menu.classList.remove("display");
});
