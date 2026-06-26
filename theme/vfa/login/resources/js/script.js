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
    initProfileFieldEnhancements();
  });

  /* ----------------------------------- Perfil (first broker/update profile) */
  function initProfileFieldEnhancements() {
    initBrazilPhoneMaskForProfile();
    initBirthDatePickerForProfile();
  }

  function initBrazilPhoneMaskForProfile() {
    var phoneInput = findFirstInput([
      "#phone",
      "input[name='phone']",
      "input[name='user.attributes.phone']",
      "input[id*='phone' i]",
      "input[name*='phone' i]",
      "input[id*='telefone' i]",
      "input[name*='telefone' i]"
    ]);

    if (!phoneInput) return;

    phoneInput.setAttribute("type", "tel");
    phoneInput.setAttribute("inputmode", "numeric");
    phoneInput.setAttribute("autocomplete", "tel");
    phoneInput.setAttribute("placeholder", "+55 (92) 99999-9999");

    if (phoneInput.value) {
      phoneInput.value = formatBrazilPhoneWithCountry(phoneInput.value);
    }

    phoneInput.addEventListener("input", function () {
      phoneInput.value = formatBrazilPhoneWithCountry(phoneInput.value);
    });
  }

  function initBirthDatePickerForProfile() {
    var birthDateInput = findFirstInput([
      "#birthDate",
      "input[name='birthDate']",
      "input[name='user.attributes.birthDate']",
      "input[name='user.attributes.dateOfBirth']",
      "input[id*='birth' i]",
      "input[name*='birth' i]",
      "input[id*='nascimento' i]",
      "input[name*='nascimento' i]"
    ]);

    if (!birthDateInput) return;

    // Native date input gives browser datepicker with month/year navigation.
    birthDateInput.setAttribute("type", "date");
    birthDateInput.setAttribute("inputmode", "none");
    birthDateInput.setAttribute("autocomplete", "bday");

    var today = new Date();
    var maxDate = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0")
    ].join("-");
    birthDateInput.setAttribute("max", maxDate);

    if (birthDateInput.value) {
      birthDateInput.value = normalizeDateToIso(birthDateInput.value);
    }
  }

  function findFirstInput(selectors) {
    for (var i = 0; i < selectors.length; i += 1) {
      var el = document.querySelector(selectors[i]);
      if (el && el.tagName === "INPUT") {
        return el;
      }
    }
    return null;
  }

  function formatBrazilPhoneWithCountry(rawValue) {
    var digits = String(rawValue || "").replace(/\D/g, "");
    if (!digits) return "";

    if (digits.startsWith("55")) {
      digits = digits.slice(2);
    }

    if (digits.length > 11) {
      digits = digits.slice(0, 11);
    }

    var area = digits.slice(0, 2);
    var subscriber = digits.slice(2);

    var formatted = "+55";
    if (area) {
      formatted += " (" + area;
      if (area.length === 2) {
        formatted += ")";
      }
    }

    if (subscriber.length > 0) {
      formatted += " ";
      if (subscriber.length <= 4) {
        formatted += subscriber;
      } else if (subscriber.length <= 8) {
        formatted += subscriber.slice(0, 4) + "-" + subscriber.slice(4);
      } else {
        formatted += subscriber.slice(0, 5) + "-" + subscriber.slice(5);
      }
    }

    return formatted;
  }

  function normalizeDateToIso(rawValue) {
    var value = String(rawValue || "").trim();
    if (!value) return "";

    // Already ISO (yyyy-mm-dd)
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return value;
    }

    // dd/mm/yyyy -> yyyy-mm-dd
    var brMatch = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (brMatch) {
      return brMatch[3] + "-" + brMatch[2] + "-" + brMatch[1];
    }

    return value;
  }

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
