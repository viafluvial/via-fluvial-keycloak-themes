/* ==========================================================================
   ViaFluvialAM — Aprimoramentos de UX do tema de login (Keycloak 26)
   - Autofoco e navegacao entre campos OTP
   - Mostrar/ocultar senha
   - Medidor de forca de senha
   Tudo opcional e degradavel: se o elemento nao existir, nada acontece.
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initPasswordToggles();
    initPasswordStrength();
    initOtpInputs();
    initAutoRedirect();
  });

  /* ----------------------------------------------------- Mostrar senha --- */
  function initPasswordToggles() {
    document.querySelectorAll("[data-vfa-password]").forEach(function (wrap) {
      var input = wrap.querySelector("input");
      var btn = wrap.querySelector(".vfa-password-toggle");
      if (!input || !btn) return;
      btn.addEventListener("click", function () {
        var show = input.type === "password";
        input.type = show ? "text" : "password";
        btn.setAttribute("aria-pressed", String(show));
        btn.classList.toggle("is-visible", show);
      });
    });
  }

  /* ------------------------------------------------- Forca da senha ------ */
  function initPasswordStrength() {
    document.querySelectorAll("[data-vfa-strength-for]").forEach(function (meter) {
      var id = meter.getAttribute("data-vfa-strength-for");
      var input = document.getElementById(id);
      if (!input) return;
      input.addEventListener("input", function () {
        meter.setAttribute("data-score", String(scorePassword(input.value)));
      });
    });
  }

  function scorePassword(pw) {
    if (!pw) return 0;
    var score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
    if (/\d/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    if (pw.length >= 12 && score >= 3) score = 4;
    return Math.min(score, 4);
  }

  /* ------------------------------------------------------- OTP inputs ---- */
  function initOtpInputs() {
    var group = document.querySelector("[data-vfa-otp]");
    if (!group) return;
    var boxes = Array.prototype.slice.call(group.querySelectorAll("input[data-otp-box]"));
    var hidden = document.getElementById(group.getAttribute("data-vfa-otp-target"));
    if (!boxes.length) return;

    function sync() {
      if (hidden) hidden.value = boxes.map(function (b) { return b.value; }).join("");
    }

    boxes.forEach(function (box, idx) {
      box.addEventListener("input", function () {
        box.value = box.value.replace(/\D/g, "").slice(0, 1);
        if (box.value && idx < boxes.length - 1) boxes[idx + 1].focus();
        sync();
      });
      box.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !box.value && idx > 0) boxes[idx - 1].focus();
      });
      box.addEventListener("paste", function (e) {
        e.preventDefault();
        var data = (e.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "");
        boxes.forEach(function (b, i) { b.value = data[i] || ""; });
        var next = Math.min(data.length, boxes.length - 1);
        boxes[next].focus();
        sync();
      });
    });
  }

  function bindManualRedirect(redirectTarget, fallbackTarget) {
    document.querySelectorAll("[data-vfa-manual-redirect]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var destination = redirectTarget || fallbackTarget;
        if (!destination) return;
        window.location.assign(destination);
      });
    });
  }

  function startRedirectCountdown(delay) {
    var countdownEls = document.querySelectorAll("[data-vfa-redirect-countdown]");
    if (!countdownEls.length) return;

    var total = Math.max(1, Math.ceil(delay / 1000));
    var remaining = total;
    countdownEls.forEach(function (el) { el.textContent = String(remaining); });

    var interval = window.setInterval(function () {
      remaining -= 1;
      if (remaining < 0) {
        window.clearInterval(interval);
        return;
      }
      countdownEls.forEach(function (el) { el.textContent = String(remaining); });
    }, 1000);
  }

  /* ----------------------------------------- Redirecionamento pos-logout -- */
  function initAutoRedirect() {
    var redirect = document.querySelector("[data-vfa-auto-redirect]");
    if (!redirect) return;

    var target = redirect.getAttribute("data-vfa-auto-redirect-url");
    var fallback = redirect.getAttribute("data-vfa-auto-redirect-fallback-url");
    var delay = Number(redirect.getAttribute("data-vfa-auto-redirect-delay")) || 5000;
    var scope = redirect.getAttribute("data-vfa-auto-redirect-scope");

    if (scope === "logout") {
      var path = (window.location && window.location.pathname) || "";
      if (path.indexOf("/protocol/openid-connect/logout/") === -1) return;
    }

    bindManualRedirect(target, fallback);
    startRedirectCountdown(delay);

    window.setTimeout(function () {
      var destination = target || fallback;
      if (!destination) return;
      window.location.assign(destination);
    }, delay);
  }
})();
