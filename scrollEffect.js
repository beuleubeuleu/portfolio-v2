gsap.to(".intro .bg-intro-title", {
  xPercent     : 400,
  ease         : "none",
  scrollTrigger: {
    trigger: ".intro",
    start  : "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  },
});

gsap.to(".intro .bg-1", {
  xPercent     : 500,
  ease         : "none",
  scrollTrigger: {
    trigger: ".intro",
    start  : "bottom bottom", // the default values
    // end: "bottom top",
    scrub: true
  },
});

gsap.to(".intro .bg-2", {
  xPercent     : 150,
  ease         : "none",
  scrollTrigger: {
    trigger: ".intro",
    start  : "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  },
});

gsap.to(".intro__text", {
  yPercent     : 50,
  ease         : "none",
  scrollTrigger: {
    trigger: ".intro",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  },
});

//Section Competences ______________________________________

gsap.to(".bg-competence-title", {
  xPercent     : 500,
  ease         : "none",
  scrollTrigger: {
    trigger: ".competence",
    start  : "top bottom", // the default values
    end    : "bottom top",
    scrub  : true
  },
});
gsap.to(".bg-competence-vanilla", {
  xPercent     : 450,
  ease         : "none",
  scrollTrigger: {
    trigger: ".competence__card",
    start  : "top bottom", // the default values
    end    : "bottom top",
    scrub  : true,
  },
});
gsap.to('.competence__card--logo1', {
  xPercent: 400,
  ease    : "none",

  scrollTrigger: {
    trigger: ".competence__card",
    start  : "top bottom", // the default values
    end    : "center top",
    scrub  : true,
  },
})
gsap.to('.competence__card--logo2', {
  xPercent: 800,
  ease    : "none",

  scrollTrigger: {
    trigger: ".competence__card",
    start  : "top bottom", // the default values
    end    : "center top",
    scrub  : true,
  },
})
gsap.to('.competence__card--logo3', {
  xPercent: 600,
  ease    : "none",

  scrollTrigger: {
    trigger: ".competence__card",
    start  : "top bottom", // the default values
    end    : "bottom top",
    scrub  : true,
  },
})