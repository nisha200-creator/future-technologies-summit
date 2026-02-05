document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.config({
    force3D: true,
    nullTargetWarn: false
  });

  ScrollTrigger.config({
    ignoreMobileResize: true
  });

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
    { scale: 1.08 },
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
      scrub: 1.2,
      fastScrollEnd: true,
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
    navLinks.classList.toggle("active"); if (!window.gsap) return;

  });
}



//  hero content H1 text animation



document.addEventListener("DOMContentLoaded", function(){

 const el = document.querySelector(".shatter");

 if(!el) return;

 const nodes = [...el.childNodes];

 el.innerHTML = "";

 let delay = 0;

 nodes.forEach(node=>{

   // keep <br>
   if(node.nodeName === "BR"){
      el.appendChild(document.createElement("br"));
      return;
   }

   const text = node.textContent;

   text.split("").forEach(letter=>{

      const span = document.createElement("span");

      span.innerHTML = letter === " " ? "&nbsp;" : letter;
      span.style.animationDelay = delay + "ms";

      delay += 40;

      el.appendChild(span);
   });

 });

  el.style.visibility = "visible";

});


//  animation for hero section image slide

document.addEventListener("DOMContentLoaded", ()=>{

  const media = document.querySelectorAll(".bg-media");
  let index = 0;
  let imageTimer;

  function showMedia(i){


    media.forEach(m => m.classList.remove("active"));

    const current = media[i];
    current.classList.add("active");

   
    if(current.tagName === "VIDEO"){

        clearTimeout(imageTimer);

        current.currentTime = 0;
        current.play();

        current.onended = nextMedia;
    }

 
    else{

        imageTimer = setTimeout(nextMedia, 4000); 
    }
  }

  function nextMedia(){

    index++;

    if(index >= media.length){
        index = 0; 
    }

    showMedia(index);
  }

 
  showMedia(index);

});



//  about section animation

// document.addEventListener("DOMContentLoaded", ()=>{

//  const reveals = document.querySelectorAll(".reveal");

//  const observer = new IntersectionObserver((entries)=>{

//     entries.forEach(entry=>{

//       if(entry.isIntersecting){
//         entry.target.classList.add("show");
//       }

//     });

//  },{
//     threshold:0.18
//  });

//  reveals.forEach(el => observer.observe(el));

// });



document.addEventListener("DOMContentLoaded", function(){

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
          if(entry.isIntersecting){
              entry.target.classList.add("show");
          }
      });
  },{
      threshold:0.2
  });

  reveals.forEach(el => observer.observe(el));

});




//  event booking js


   
    



