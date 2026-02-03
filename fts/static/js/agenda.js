document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".agenda-tab");
  const days = document.querySelectorAll(".agenda-day");

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      const selectedDay = tab.dataset.day;

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      days.forEach(day => {
        day.classList.toggle("hidden", day.dataset.day !== selectedDay);
      });

    });
  });


  if (window.gsap && document.querySelector(".agenda-card")) {

    gsap.from(".agenda-card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

  }

});
