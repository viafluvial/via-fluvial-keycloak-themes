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
    if (birthDateInput.dataset.vfaDatePickerReady === "1") return;
    birthDateInput.dataset.vfaDatePickerReady = "1";

    var initialValue = normalizeDateToIso(birthDateInput.value);
    var selectedDate = parseIsoDate(initialValue);
    var today = startOfDay(new Date());
    var currentMonth = selectedDate || today;

    birthDateInput.value = initialValue;
    birthDateInput.setAttribute("type", "hidden");
    birthDateInput.setAttribute("autocomplete", "bday");

    var wrapper = document.createElement("div");
    wrapper.className = "vfa-date-picker";

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "vfa-date-picker__trigger";
    trigger.setAttribute("aria-label", "Selecionar data de nascimento");

    var triggerText = document.createElement("span");
    triggerText.className = "vfa-date-picker__text";
    triggerText.textContent = selectedDate ? formatDateBr(selectedDate) : "dd/mm/aaaa";

    var triggerIcon = document.createElement("span");
    triggerIcon.className = "vfa-date-picker__icon";
    triggerIcon.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';

    trigger.appendChild(triggerText);
    trigger.appendChild(triggerIcon);

    var popup = document.createElement("div");
    popup.className = "vfa-date-picker__popup";
    popup.hidden = true;

    var header = document.createElement("div");
    header.className = "vfa-date-picker__header";

    var prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "vfa-date-picker__nav";
    prevBtn.textContent = "<";

    var monthSelect = document.createElement("select");
    monthSelect.className = "vfa-date-picker__select";

    var yearSelect = document.createElement("select");
    yearSelect.className = "vfa-date-picker__select";

    var nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "vfa-date-picker__nav";
    nextBtn.textContent = ">";

    header.appendChild(prevBtn);
    header.appendChild(monthSelect);
    header.appendChild(yearSelect);
    header.appendChild(nextBtn);

    var weekdays = document.createElement("div");
    weekdays.className = "vfa-date-picker__weekdays";
    ["dom", "seg", "ter", "qua", "qui", "sex", "sab"].forEach(function (label) {
      var cell = document.createElement("div");
      cell.textContent = label;
      weekdays.appendChild(cell);
    });

    var grid = document.createElement("div");
    grid.className = "vfa-date-picker__grid";

    popup.appendChild(header);
    popup.appendChild(weekdays);
    popup.appendChild(grid);

    wrapper.appendChild(trigger);
    wrapper.appendChild(popup);

    birthDateInput.parentNode.insertBefore(wrapper, birthDateInput.nextSibling);

    var monthNames = [
      "Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    function renderYearOptions() {
      var currentYear = today.getFullYear();
      var startYear = currentYear - 120;
      var endYear = currentYear;

      yearSelect.innerHTML = "";
      for (var y = endYear; y >= startYear; y -= 1) {
        var yOpt = document.createElement("option");
        yOpt.value = String(y);
        yOpt.textContent = String(y);
        if (y === currentMonth.getFullYear()) yOpt.selected = true;
        yearSelect.appendChild(yOpt);
      }
    }

    function renderMonthOptions() {
      monthSelect.innerHTML = "";
      monthNames.forEach(function (name, idx) {
        var mOpt = document.createElement("option");
        mOpt.value = String(idx);
        mOpt.textContent = name;
        if (idx === currentMonth.getMonth()) mOpt.selected = true;
        monthSelect.appendChild(mOpt);
      });
    }

    function setSelected(date) {
      selectedDate = startOfDay(date);
      birthDateInput.value = toIsoDate(selectedDate);
      triggerText.textContent = formatDateBr(selectedDate);
    }

    function renderDays() {
      grid.innerHTML = "";
      var year = currentMonth.getFullYear();
      var month = currentMonth.getMonth();
      var firstWeekDay = new Date(year, month, 1).getDay();
      var totalDays = new Date(year, month + 1, 0).getDate();

      for (var i = 0; i < firstWeekDay; i += 1) {
        var emptyCell = document.createElement("div");
        emptyCell.className = "vfa-date-picker__day vfa-date-picker__day--empty";
        grid.appendChild(emptyCell);
      }

      for (var day = 1; day <= totalDays; day += 1) {
        var cellDate = startOfDay(new Date(year, month, day));
        var dayBtn = document.createElement("button");
        dayBtn.type = "button";
        dayBtn.className = "vfa-date-picker__day";
        dayBtn.textContent = String(day);

        if (cellDate.getTime() > today.getTime()) {
          dayBtn.classList.add("vfa-date-picker__day--disabled");
          dayBtn.disabled = true;
        }

        if (selectedDate && cellDate.getTime() === selectedDate.getTime()) {
          dayBtn.classList.add("vfa-date-picker__day--selected");
        }

        dayBtn.addEventListener("click", function (event) {
          var pickedDay = Number(event.currentTarget.textContent);
          setSelected(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), pickedDay));
          popup.hidden = true;
        });

        grid.appendChild(dayBtn);
      }
    }

    function render() {
      renderMonthOptions();
      renderYearOptions();
      renderDays();
    }

    trigger.addEventListener("click", function () {
      popup.hidden = !popup.hidden;
    });

    prevBtn.addEventListener("click", function () {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
      render();
    });

    nextBtn.addEventListener("click", function () {
      var candidate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
      var candidateLastDay = startOfDay(new Date(candidate.getFullYear(), candidate.getMonth() + 1, 0));
      if (candidateLastDay.getTime() > today.getTime()) {
        candidate = new Date(today.getFullYear(), today.getMonth(), 1);
      }
      currentMonth = candidate;
      render();
    });

    monthSelect.addEventListener("change", function () {
      currentMonth = new Date(currentMonth.getFullYear(), Number(monthSelect.value), 1);
      render();
    });

    yearSelect.addEventListener("change", function () {
      currentMonth = new Date(Number(yearSelect.value), currentMonth.getMonth(), 1);
      render();
    });

    document.addEventListener("click", function (event) {
      if (!wrapper.contains(event.target)) {
        popup.hidden = true;
      }
    });

    render();
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

  function parseIsoDate(value) {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    var parts = value.split("-").map(Number);
    return startOfDay(new Date(parts[0], parts[1] - 1, parts[2]));
  }

  function toIsoDate(date) {
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0")
    ].join("-");
  }

  function formatDateBr(date) {
    return [
      String(date.getDate()).padStart(2, "0"),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getFullYear())
    ].join("/");
  }

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
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
