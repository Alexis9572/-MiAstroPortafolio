document.addEventListener("DOMContentLoaded", () => {
  if (!window.particlesJS) return;

  const mobile = window.innerWidth < 768;
  const cfg = {
    particles: {
      number: { value: mobile ? 35 : 75, density: { enable: true, value_area: 900 } },
      color:  { value: ["#e5f7ff", "#aee2ff", "#93c5fd"] },
      shape:  { type: "circle" },
      opacity:{ value: 0.45 },
      size:   { value: 2.5, random: true },
      line_linked: {
        enable: true,
        distance: mobile ? 120 : 160,
        color: "#e5f7ff",
        opacity: mobile ? 0.25 : 0.35,
        width: 1
      },
      move: { enable: true, speed: mobile ? 0.8 : 1.3, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: !mobile, mode: "grab" }, onclick: { enable: false }, resize: true },
      modes: { grab: { distance: 170, line_linked: { opacity: 0.6 } } }
    },
    retina_detect: true
  };

  particlesJS("particles-bg", cfg);
});
