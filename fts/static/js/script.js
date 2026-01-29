document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded");

  // REGISTER ONCE
  gsap.registerPlugin(ScrollTrigger);

  /* ================= NAV + HERO ================= */

  gsap.from(".navbar", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".hero-content .date", {
    y: 20,
    opacity: 0,
    delay: 0.6,
    duration: 0.8
  });

  gsap.from(".hero-content h1", {
    y: 60,
    opacity: 0,
    delay: 0.9,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".hero-content p", {
    y: 30,
    opacity: 0,
    delay: 1.3,
    duration: 0.8
  });

  gsap.from(".card", {
    x: 100,
    opacity: 0,
    stagger: 0.2,
    delay: 1.4,
    duration: 1,
    ease: "power3.out"
  });

  /* ================= HERO BACKGROUND ================= */

  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    const mediaList = [
      { src: "/static/images/img1.avif", duration: 3 },
      { src: "/static/images/img2.avif", duration: 3 },
      { src: "/static/images/img3.avif", duration: 3 }
    ];

    let index = 0;

    function playNext() {
      heroBg.innerHTML = "";
      const img = document.createElement("img");
      img.src = mediaList[index].src;
      img.style.opacity = 0;
      heroBg.appendChild(img);

      gsap.to(img, { opacity: 1, duration: 1 });

      index = (index + 1) % mediaList.length;
      setTimeout(playNext, mediaList[index].duration * 1000);
    }

    playNext();
  }

  /* ================= ABOUT SECTION ================= */

  gsap.from(".about-tag", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
    },
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  gsap.from(".about-left h2", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".about-right p", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 70%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from(".about-images img", {
    scrollTrigger: {
      trigger: ".about-images",
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    stagger: 0.25,
    duration: 0.9,
    ease: "power3.out",
  });

  gsap.to(".about-bg", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    x: 200,
    y: -150,
    scale: 1.25,
    rotate: 8,
    ease: "none",
  });

  /* ================= SMALL DESCRIPTION SECTION ================= */

  gsap.to(".small_description-bg", {
    scrollTrigger: {
      trigger: ".small_description-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false // set true temporarily to debug
    },
    x: 220,
    y: -160,
    scale: 1.3,
    rotate: 6,
    ease: "none",
  });

});
