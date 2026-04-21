/* ============================================================
   SELECT: colour switch when value chosen
   ============================================================ */
(function () {
  const selects = document.querySelectorAll(".form__select");
  selects.forEach(function (sel) {
    sel.addEventListener("change", function () {
      if (this.value) {
        this.classList.add("has-value");
      } else {
        this.classList.remove("has-value");
      }
    });
  });
})();

/* ============================================================
   FORM VALIDATION
   ============================================================ */
(function () {
  const form = document.getElementById("consultationForm");
  if (!form) return;

  function setInvalid(input, message) {
    input.style.borderColor = "var(--color-accent)";
    input.style.boxShadow = "0 0 0 3px rgba(229,62,62,0.1)";
    const existing = input.parentElement.querySelector(".form__error");
    if (existing) existing.remove();
    const err = document.createElement("span");
    err.className = "form__error";
    err.style.cssText =
      "font-size:12px;color:var(--color-accent);margin-top:4px;display:block;";
    err.textContent = message;
    input.parentElement.appendChild(err);
  }

  function resetField(input) {
    input.style.borderColor = "";
    input.style.boxShadow = "";
    const existing = input.parentElement.querySelector(".form__error");
    if (existing) existing.remove();
  }

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  form.querySelectorAll("input, select").forEach(function (el) {
    el.addEventListener("input", function () {
      resetField(this);
    });
    el.addEventListener("change", function () {
      resetField(this);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const fullName = form.fullName;
    const company = form.companyName;
    const email = form.email;
    const phone = form.phone;
    const service = form.service;

    [fullName, company, email, phone, service].forEach(resetField);

    if (!fullName.value.trim()) {
      setInvalid(fullName, "Please enter your full name.");
      valid = false;
    }
    if (!company.value.trim()) {
      setInvalid(company, "Please enter your company name.");
      valid = false;
    }
    if (!email.value.trim() || !isValidEmail(email.value)) {
      setInvalid(email, "Please enter a valid email address.");
      valid = false;
    }
    if (!phone.value.trim()) {
      setInvalid(phone, "Please enter your phone number.");
      valid = false;
    }
    if (!service.value) {
      setInvalid(service, "Please select a service.");
      valid = false;
    }

    if (valid) {
      const btn = form.querySelector(".btn--primary");
      const original = btn.innerHTML;
      btn.innerHTML = "✓ Consultation Booked!";
      btn.style.background = "#1A8A5A";
      btn.disabled = true;

      setTimeout(function () {
        btn.innerHTML = original;
        btn.style.background = "";
        btn.disabled = false;
        form.reset();
        form.querySelectorAll(".form__select").forEach(function (s) {
          s.classList.remove("has-value");
        });
      }, 3000);
    }
  });
})();

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
(function () {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    const trigger = item.querySelector(".faq-item__trigger");
    const answer = item.querySelector(".faq-item__answer");
    if (!trigger || !answer) return;
    trigger.addEventListener("click", function () {
      const isOpen = item.classList.contains("is-open");
      items.forEach(function (i) {
        i.classList.remove("is-open");
        const tri = i.querySelector(".faq-item__trigger");
        const ans = i.querySelector(".faq-item__answer");
        if (tri) tri.setAttribute("aria-expanded", "false");
        if (ans) ans.setAttribute("hidden", "");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        answer.removeAttribute("hidden");
      }
    });
  });
})();

/* ============================================================
   SCROLL-TRIGGERED FADE-IN ANIMATIONS
   Uses IntersectionObserver for performance (no layout thrashing)
   ============================================================ */
(function () {
  // Skip if browser doesn't support IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    // Fallback: make everything visible immediately
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("revealed");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Once revealed, stop observing to save resources
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,        // element 12% visible before triggering
      rootMargin: "0px 0px -40px 0px"  // slight offset from bottom
    }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });
})();

/* ============================================================
   ANIMATED COUNTER NUMBERS
   Runs when stat counters scroll into view
   ============================================================ */
(function () {
  const counters = document.querySelectorAll(".stat__number[data-target]");
  if (!counters.length) return;

  if (!("IntersectionObserver" in window)) {
    counters.forEach(function (el) {
      el.textContent = el.dataset.target;
    });
    return;
  }

  function animateCounter(el) {
    const rawTarget = el.dataset.target;
    const isDecimal = rawTarget.includes(".");
    const target = parseFloat(rawTarget);
    const suffix = el.dataset.suffix || "";
    const duration = 1800; // ms
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = eased * target;

      if (isDecimal) {
        el.textContent = currentVal.toFixed(1) + suffix;
      } else {
        el.textContent = Math.round(currentVal) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
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

  counters.forEach(function (el) {
    counterObserver.observe(el);
  });
})();

/* ============================================================
   STICKY FLOATING CTA (mobile)
   Shows after scrolling past hero section
   ============================================================ */
(function () {
  const floatingCta = document.getElementById("floatingCta");
  const hero = document.querySelector(".hero");
  if (!floatingCta || !hero) return;

  var heroBottom = 0;

  function updateHeroBottom() {
    heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
  }

  updateHeroBottom();
  window.addEventListener("resize", updateHeroBottom, { passive: true });

  var lastScrollY = window.scrollY;
  var ticking = false;

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(function () {
        if (lastScrollY > heroBottom - 100) {
          floatingCta.classList.add("is-visible");
        } else {
          floatingCta.classList.remove("is-visible");
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ============================================================
   HEADER SCROLL SHADOW
   ============================================================ */
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    },
    { passive: true }
  );
})();

/* ============================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();


/* ================================================================
   pricing.js — Avyanco Pricing Section
   Lightweight scroll reveal via IntersectionObserver
   ================================================================ */

(function () {
  'use strict';

  /* ── Scroll reveal for cards (staggered) ── */
  if (!('IntersectionObserver' in window)) return;

  // Add base hidden state via JS (prevents flash if JS loads late)
  var cards = document.querySelectorAll('.pricing-card');
  var header = document.querySelector('.pricing__header');
  var footnote = document.querySelector('.pricing__footnote');

  function hide(el, delay) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1) ' + (delay || 0) + 'ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ' + (delay || 0) + 'ms';
  }

  function show(el) {
    el.style.opacity = '1';
    el.style.transform = 'none';
  }

  /* Hide initially */
  if (header) hide(header, 0);
  if (footnote) hide(footnote, 300);
  cards.forEach(function (card, i) {
    // Featured card slight scale reveal
    if (card.classList.contains('pricing-card--featured')) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px) scale(0.98)';
      card.style.transition = 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 120ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 120ms';
    } else {
      hide(card, i === 0 ? 60 : 180);
    }
  });

  /* Observer */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        show(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  if (header) observer.observe(header);
  if (footnote) observer.observe(footnote);
  cards.forEach(function (card) { observer.observe(card); });

})();