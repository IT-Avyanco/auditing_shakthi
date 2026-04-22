(function () {
  function initZohoEmbed(hostId) {
    try {
      var host = document.getElementById(hostId);
      if (!host) return;

      var f = document.createElement("iframe");
      var ifrmSrc = "https://forms.zohopublic.com/avyancobusinessconsultancyllc/form/GetAFreeQuoteInstantResponse/formperma/NiwSgUJoAzGPXaUIg7TZkWkIJrNir1KHJWYW1DaNEwE?zf_rszfm=1";
      var minH = window.matchMedia("(max-width:768px)").matches ? 620 : 500;

      f.src = ifrmSrc;
      f.style.border = "none";
      f.style.height = minH + "px";
      f.style.width = "100%";
      f.style.display = "block";
      f.setAttribute("aria-label", "Get A Free Quote - Instant Response");

      host.style.minHeight = minH + "px";
      host.appendChild(f);

      window.addEventListener("message", function (e) {
        var ev = e.data;
        if (ev && ev.constructor === String) {
          var a = ev.split("|");
          if (a.length === 2 || a.length === 3) {
            var h = (Math.max(parseInt(a[1], 10) + 15, minH)) + "px";
            var ifr = host.getElementsByTagName("iframe")[0];
            if (ifr && ifr.style.height !== h) {
              ifr.style.height = h;
            }
          }
        }
      }, false);
    } catch (e) {
      // no-op
    }
  }

  initZohoEmbed("zf_div_NiwSgUJoAzGPXaUIg7TZkWkIJrNir1KHJWYW1DaNEwE");
  initZohoEmbed("zf_div_NiwSgUJoAzGPXaUIg7TZkWkIJrNir1KHJWYW1DaNEwE11");

  var y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();

  var header = document.querySelector(".avy-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var prefersReduced = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  if (!prefersReduced) {
    var els = document.querySelectorAll(".reveal,.reveal-up,.stagger");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "120px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  var trustIndexHost = document.querySelector("#clients .logo-grid[data-trustindex-src]");
  if (trustIndexHost) {
    var loadTrustIndex = function () {
      if (trustIndexHost.dataset.loaded) return;
      var script = document.createElement("script");
      script.src = trustIndexHost.dataset.trustindexSrc;
      script.async = true;
      trustIndexHost.dataset.loaded = "true";
      trustIndexHost.appendChild(script);
    };

    if ("IntersectionObserver" in window) {
      var trustObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            loadTrustIndex();
            trustObserver.disconnect();
          }
        });
      }, { rootMargin: "300px 0px" });
      trustObserver.observe(trustIndexHost);
    } else {
      loadTrustIndex();
    }
  }

  var cards = document.querySelectorAll("#teamTrack .team-card");
  cards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      if (!window.matchMedia("(max-width:600px)").matches) return;
      if (e.target.closest("a")) return;
      this.classList.toggle("is-open");
    });
  });
})();