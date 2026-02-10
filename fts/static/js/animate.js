// Select all sponsor sections
const sections = document.querySelectorAll(".sponsor-section");

sections.forEach(section => {
  const floating = section.querySelector(".floating-object");
  const cards = section.querySelectorAll(".sponsor-card");

  // initial parked position
  gsap.set(floating, {
    x: -140,
    rotation: 0
  });

  let lastX = -140;
  let currentRotation = 0; // Track total rotation for this section

  // unified motion controller for this specific floating object
  const moveX = gsap.quickTo(floating, "x", {
    duration: 1,
    ease: "power3.out"
  });

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      const cardRect = card.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();

      const targetX =
        cardRect.left +
        cardRect.width / 2 -
        sectionRect.left -
        floating.offsetWidth / 2;

      // move
      moveX(targetX);

      // direction-aware rotation - FULL 360° rotation
      const direction = targetX > lastX ? 1 : -1;
      currentRotation += direction * 360;
      
      gsap.to(floating, {
        rotation: currentRotation,
        duration: 1,
        ease: "power3.out"
      });

      lastX = targetX;
    });
  });
});

const main = document.querySelector(".main");

gsap.set("main", { perspective: 650 });

const outerRX = gsap.quickTo(".logo-outer", "rotationX", { ease: "power3" });
const outerRY = gsap.quickTo(".logo-outer", "rotationY", { ease: "power3" });
const innerX = gsap.quickTo(".logo", "x", { ease: "power3" });
const innerY = gsap.quickTo(".logo", "y", { ease: "power3" });

main.addEventListener("pointermove", (e) => {
  outerRX(gsap.utils.interpolate(15, -15, e.y / window.innerHeight));
  outerRY(gsap.utils.interpolate(-15, 15, e.x / window.innerWidth));
  innerX(gsap.utils.interpolate(-30, 30, e.x / window.innerWidth));
  innerY(gsap.utils.interpolate(-30, 30, e.y / window.innerHeight));
});

main.addEventListener("pointerleave", (e) => {
  outerRX(0);
  outerRY(0);
  innerX(0);
  innerY(0);
});


const sponsorLetter = document.querySelector(".sponsor");

// Make sure element exists
if (sponsorLetter) {
  // Set initial properties
  gsap.set(sponsorLetter, {
    transformPerspective: 500,
    transformStyle: "preserve-3d"
  });

  // Upside down rotating animation
  gsap.to(sponsorLetter, {
    rotationX: 360,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });
}

// text animation
const txt_animate = document.querySelector("#txt-animate")

// gsap.to(txt_animate, {
//   x:250,
//   repeat:-1,
//   yoyo: true,
//   duration: 2,
// })

gsap.from(txt_animate, {
  x:-100,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power5.out"
})


// final animation




