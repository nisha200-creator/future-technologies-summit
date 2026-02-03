document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.config({
    force3D: true,
    nullTargetWarn: false
  });

  ScrollTrigger.config({
    ignoreMobileResize: true
  });







  

  /* ================= HERO ================= */

  const heroTL = gsap.timeline({ delay: 0.2 });

  heroTL.from(".hero-bg", {
    scale: 1.25,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
  });

  heroTL.from(".hero-content h1", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  }, "-=1.4");

  heroTL.from(".hero-content p", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.9");

  heroTL.from(".hero-cards .card", {
    y: 120,
    opacity: 0,
    stagger: 0.25,
    duration: 1.1,
    ease: "back.out(1.4)"
  }, "-=0.8");



  /* ================= ABOUT ================= */

  const aboutTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.to(".about-bg", {
    x: 120,
    y: 60,
    scale: 1.2,
    duration:40,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  aboutTL.from(".about-tag", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  aboutTL.from(".about-left h2", {
    y: 80,
    opacity: 0,
    duration: 1.1,
    ease: "power4.out"
  }, "-=0.5");

  aboutTL.from(".review-item", {
    y: 100,
    opacity: 0,
    stagger: 0.25,
    duration: 1,
    ease: "back.out(1.2)"
  }, "-=0.7");

  aboutTL.fromTo(".about-btn",
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    },
  "-=0.8");

  aboutTL.from(".about-images img", {
    y: 120,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.9");



  /* ================= SMALL DESCRIPTION ================= */

  gsap.to(".small_description-bg", {
    x: 100,
    y: 60,
    scale: 1.15,
    duration: 20,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.to(".sd-float.one", { y: -40, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".sd-float.two", { y: 50, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".sd-float.three", { y: -30, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".sd-float.four", { y: 45, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });

  const sdTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".small_description-section",
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  });

  sdTL.fromTo(".small_description-header",
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  );

  sdTL.fromTo(".small_description-card",
    { y: 120, opacity: 0, scale: 0.96 },
    { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" },
  "-=0.6");

  sdTL.fromTo(".small_description-left img",
    { scale: 1.2, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" },
  "-=0.9");

  sdTL.fromTo(".small_description-number",
    { opacity: 0 },
    { opacity: 1, duration: 1 },
  "-=1");

  sdTL.fromTo(".small_description-right p",
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
  "-=0.8");



  /* ================= PHOTO SLIDER ================= */

  const track = document.querySelector(".photo-slide-track");

  gsap.to(track, {
    xPercent: -50,
    duration: 30,
    ease: "none",
    repeat: -1
  });

  gsap.from(".small_description-tag", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".photo-slide-section",
      start: "top 80%"
    }
  });

  gsap.from(".photo-slide-title", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".photo-slide-section",
      start: "top 80%"
    }
  });



  /* ================= OPPORTUNITY ================= */

  const oppTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".opportunity-section",
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  });

  oppTL.fromTo(".opportunity-video",
    { scale:1.08 },
    { scale: 1, duration: 2.5, ease: "power2.out" }
  );

  oppTL.fromTo(".opportunity-title",
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
  "-=1.8");

  oppTL.fromTo(".opportunity-card",
    { y: 120, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.2,
      duration: 1.1,
      ease: "back.out(1.2)"
    },
  "-=0.9");



  /* ================= SPEAKERS ================= */

  gsap.fromTo(".speaker-title",
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".speaker-section",
        start: "top 75%"
      }
    }
  );

  gsap.fromTo(".speaker-card",
    { y: 120, opacity: 0, scale: 0.92 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: { amount: 0.8, from: "start" },
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".speaker-grid",
        start: "top 80%"
      }
    }
  );

});



/* ✅ FIX GALLERY AFTER IMAGES LOAD (VERY IMPORTANT) */
window.addEventListener("load", () => {

  const galleryWrapper = document.querySelector(".gallery-wrapper");
  const gallerySection = document.querySelector(".gallery-section");

  const scrollAmount = galleryWrapper.scrollWidth - window.innerWidth;

  gsap.to(galleryWrapper, {
    x: -scrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: gallerySection,
      start: "top top",
      end: () => "+=" + scrollAmount,
     scrub:1.2,
     fastScrollEnd:true,
      pin: true,
      anticipatePin: 1
    }
  });

});










  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");if (!window.gsap) return;

    });
  }




//  small description backhround animation

// const section = document.querySelector(".small_description-section");
// const bg = document.querySelector(".small_description-bg");

// section.addEventListener("mousemove", (e)=>{

//   const x = (e.clientX / window.innerWidth - 0.5) * 60;
//   const y = (e.clientY / window.innerHeight - 0.5) * 60;

//   bg.style.transform =
//    `translate(${x}px, ${y}px) scale(1.2)`;
// });
