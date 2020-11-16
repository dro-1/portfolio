let sections = document.querySelectorAll(".projects .project").length;
const projectArr = gsap.utils.toArray(".projects .project");

gsap.registerPlugin(ScrollTrigger);

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
      duration: { min: 0.1, max: 0.3 },
      delay: 0.05,
    },
    pin: true,
    pinSpacing: false,
  });
});
