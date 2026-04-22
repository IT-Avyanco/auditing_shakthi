(function () {
  const menuButton = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav-links");
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }

  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      nav && nav.classList.remove("show");
    });
  });
})();


(function () {
  const faqButtons = document.querySelectorAll(".faq-q");
  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const parent = button.closest(".faq-item");
      if (!parent) return;

      document.querySelectorAll(".faq-item").forEach(function (item) {
        if (item !== parent) item.classList.remove("open");
      });

      parent.classList.toggle("open");
    });
  });
})();

(function () {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (node) {
      node.classList.add("in");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach(function (node) {
    observer.observe(node);
  });
})();

(function () {
  const counters = document.querySelectorAll("[data-target]");
  if (!counters.length) return;

  function animateCounter(node) {
    const target = Number(node.dataset.target || 0);
    const suffix = node.dataset.suffix || "";
    const startTime = performance.now();
    const duration = 1500;

    function run(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      node.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(run);
      }
    }

    requestAnimationFrame(run);
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (counter) {
    counterObserver.observe(counter);
  });
})();
