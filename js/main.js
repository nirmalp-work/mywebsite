(function () {
  "use strict";

  var glow = document.getElementById("cursorGlow");
  var currentYear = document.getElementById("currentYear");
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  if (!glow || !canHover || reduceMotion) return;

  var x = window.innerWidth / 2;
  var y = window.innerHeight / 3;
  var tx = x;
  var ty = y;
  var running = false;

  function frame() {
    // Ease the glow toward the pointer for a smooth trailing effect
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    glow.style.transform = "translate3d(" + x + "px," + y + "px,0)";

    if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) {
      requestAnimationFrame(frame);
    } else {
      running = false;
    }
  }

  window.addEventListener("pointermove", function (e) {
    tx = e.clientX;
    ty = e.clientY;
    glow.classList.add("on");
    if (!running) {
      running = true;
      requestAnimationFrame(frame);
    }
  }, { passive: true });

  document.addEventListener("mouseleave", function () {
    glow.classList.remove("on");
  });
})();
