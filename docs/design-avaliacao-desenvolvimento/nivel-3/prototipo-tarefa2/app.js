/* =========================================================
   Diolinux Plus — Protótipo Interativo (Tarefa 2: Eventos Presenciais)
   Implementa: PB-01, PB-02 (Wizard), PM-01 (24h), PM-02, PM-03 (Mapa), PB-03
   ========================================================= */

(() => {
  "use strict";

  // Campus landmarks (UnB Gama - FGA) in SVG coordinate space (640 x 360)
  const LANDMARKS = {
    UAC: {
      id: "UAC",
      name: "Bloco UAC",
      address: "Bloco UAC — UnB Campus Gama",
      defaultRoom: "Sala I-04",
      x: 245,
      y: 122,
    },
    UED: {
      id: "UED",
      name: "Bloco UED",
      address: "Bloco UED — UnB Campus Gama",
      defaultRoom: "Laboratório Mocap / Sala S-02",
      x: 118,
      y: 150,
    },
    RU: {
      id: "RU",
      name: "Restaurante Universitário (RU)",
      address: "RU — UnB Campus Gama",
      defaultRoom: "Área de Convivência",
      x: 255,
      y: 248,
    },
    MESP: {
      id: "MESP",
      name: "MESP / Auditório",
      address: "MESP / Auditório — UnB Campus Gama",
      defaultRoom: "Auditório Principal",
      x: 425,
      y: 162,
    },
  };

  let isMapDragging = false;

  // Seed events matching PB-01 paper prototype
  const state = {
    currentScreen: "home",
    hubFilter: "all",
    hubSearch: "",
    wizardStep: 1,
    publishedZoom: 1,
    themes: [
      { id: "dark", label: "Modo Escuro" },
      { id: "light", label: "Modo Claro" },
      { id: "contrast", label: "Alto Contraste" },
    ],
    themeIndex: 0,
    draft: {
      title: "",
      category: "Workshops e Capacitação",
      description: "",
      date: "2026-11-14",
      timeStart: "",
      timeEnd: "",
      locationSelected: false,
      landmarkId: "UAC",
      pinX: LANDMARKS.UAC.x,
      pinY: LANDMARKS.UAC.y,
      address: LANDMARKS.UAC.address,
      room: LANDMARKS.UAC.defaultRoom,
      quorumMin: "",
      maxCapacity: "",
      ticketType: "Gratuito (1 por usuário)",
      pixInfo: "",
      emitQrCode: true,
      sendReminder: true,
    },
    tempTime: { start: "14:00", end: "18:00" },
    clockMode: { start: "hour", end: "hour" },
    tempMap: {
      landmarkId: "UAC",
      pinX: LANDMARKS.UAC.x,
      pinY: LANDMARKS.UAC.y,
      address: LANDMARKS.UAC.address,
      room: LANDMARKS.UAC.defaultRoom,
    },
    events: [
      {
        id: "evt-installfest",
        title: "Install-Fest & Customização Linux Mint",
        category: "Linux Geral",
        badgeClass: "badge-green",
        dateText: "8 de Novembro de 2026",
        timeStart: "09:00",
        timeEnd: "13:00",
        location: "UnB Campus Gama, Bloco UED — Sala S-02",
        landmarkId: "UED",
        pinX: LANDMARKS.UED.x,
        pinY: LANDMARKS.UED.y,
        organizer: "Natan_Freitas",
        registered: 42,
        quorumMin: 15,
        maxCapacity: 50,
        ticketType: "Gratuito (1 por usuário)",
        emitQrCode: true,
        sendReminder: true,
        nearby: true,
        hasTicket: true,
        addedCalendar: false,
        description:
          "Mutirão de instalação dual-boot do Linux Mint e customização de ambiente de trabalho para calouros.",
      },
      {
        id: "evt-devops",
        title: "Mesa Redonda: Carreira DevOps & Kernel Linux",
        category: "Infraestrutura",
        badgeClass: "badge-blue",
        dateText: "10 de Novembro de 2026",
        timeStart: "19:00",
        timeEnd: "21:00",
        location: "UnB Campus Gama, MESP / Auditório Principal",
        landmarkId: "MESP",
        pinX: LANDMARKS.MESP.x,
        pinY: LANDMARKS.MESP.y,
        organizer: "Gustavo-A",
        registered: 28,
        quorumMin: 10,
        maxCapacity: 40,
        ticketType: "Gratuito (1 por usuário)",
        emitQrCode: true,
        sendReminder: true,
        nearby: true,
        hasTicket: false,
        addedCalendar: false,
        description:
          "Bate-papo técnico sobre cultura DevOps, contêineres em produção e fundamentos do Kernel Linux.",
      },
    ],
    activeEventId: null,
  };

  // ---------- Utility Helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function showToast(message, variant = "info") {
    const container = $("#toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${variant === "success" ? "toast-success" : ""}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  function formatDatePtBr(isoDate) {
    if (!isoDate || !isoDate.includes("-")) return "14 de Novembro de 2026";
    const [y, m, d] = isoDate.split("-").map(Number);
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
    ];
    return `${d} de ${months[(m - 1) % 12]} de ${y}`;
  }

  function getCategoryBadgeClass(category) {
    if (category.includes("Linux")) return "badge-green";
    if (category.includes("Mesa") || category.includes("Hardware")) return "badge-purple";
    return "badge-blue";
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function isValidTime24(val) {
    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(val);
  }

  function timeToMinutes(val) {
    const [h, m] = val.split(":").map(Number);
    return h * 60 + m;
  }

  // Deterministic lightweight SVG QR code matrix for visual ticket authenticity
  function buildQrSvg(seedText) {
    const size = 21;
    const cell = 6;
    let hash = 2166136261;
    for (let i = 0; i < seedText.length; i += 1) {
      hash ^= seedText.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }

    const isFinder = (r, c) =>
      (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7);

    const finderPixel = (r, c) => {
      const lr = r < 7 ? r : r - (size - 7);
      const lc = c < 7 ? c : c - (size - 7);
      if (lr === 0 || lr === 6 || lc === 0 || lc === 6) return true;
      if (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4) return true;
      return false;
    };

    let rects = "";
    for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        let on = false;
        if (isFinder(r, c)) {
          on = finderPixel(r, c);
        } else {
          const v = Math.abs(Math.imul(hash ^ (r * 31 + c * 17), 2654435761));
          on = (v % 100) < 48;
        }
        if (on) {
          rects += `<rect x="${c * cell}" y="${r * cell}" width="${cell}" height="${cell}" fill="#16171B"/>`;
        }
      }
    }

    const dim = size * cell;
    return `<svg width="136" height="136" viewBox="0 0 ${dim} ${dim}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="QR Code de ingresso">${rects}</svg>`;
  }

  // Shared Interactive / Display Campus Map SVG (PM-03 + PROB-PP-T2-05)
  function renderCampusMapSvg({ pinX, pinY, interactive = false, showRoute = false }) {
    const routePath = showRoute
      ? `<path d="M 380 280 L 380 185 L ${pinX} 185 L ${pinX} ${pinY + 18}" fill="none" stroke="#2ECC71" stroke-width="3" stroke-dasharray="6 5" />`
      : "";

    const buildingAttrs = (id) =>
      interactive
        ? `class="map-building-target" data-select-landmark="${id}" style="cursor:pointer;"`
        : "";

    return `
      <svg viewBox="0 0 640 360" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gridPattern" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#1b1e26" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="640" height="360" fill="#101216"/>
        <rect width="640" height="360" fill="url(#gridPattern)"/>

        <!-- Campus Roads (Avenidas FGA/UnB Gama) -->
        <rect x="24" y="34" width="592" height="24" rx="4" fill="#1a1d24" stroke="#2d2f36"/>
        <text x="40" y="50" fill="#707786" font-size="11" font-family="sans-serif">Área Especial de Indústria · Projeção A · UnB Gama (FGA)</text>
        <path d="M 332 58 L 332 330" stroke="#222630" stroke-width="18"/>
        <path d="M 48 185 L 590 185" stroke="#222630" stroke-width="14"/>
        <circle cx="332" cy="185" r="22" fill="#161920" stroke="#2d2f36" stroke-width="2"/>

        <!-- Campus Green Area -->
        <rect x="372" y="210" width="220" height="114" rx="10" fill="rgba(46, 204, 113, 0.06)" stroke="rgba(46, 204, 113, 0.25)"/>
        <text x="482" y="272" text-anchor="middle" fill="#4f8f69" font-size="12" font-family="sans-serif">Área de Convivência / Estacionamento</text>

        <!-- Building: UED -->
        <g ${buildingAttrs("UED")}>
          <rect x="64" y="102" width="108" height="72" rx="6" fill="#23252c" stroke="#3a3d46" stroke-width="2"/>
          <text x="118" y="136" text-anchor="middle" fill="#f5f6f8" font-size="16" font-weight="700" font-family="sans-serif">UED</text>
          <text x="118" y="155" text-anchor="middle" fill="#a0a5b1" font-size="10.5" font-family="sans-serif">Ensino e Docência</text>
        </g>

        <!-- Building: UAC -->
        <g ${buildingAttrs("UAC")}>
          <rect x="192" y="88" width="108" height="68" rx="6" fill="#23252c" stroke="#0084ff" stroke-width="2"/>
          <text x="246" y="120" text-anchor="middle" fill="#f5f6f8" font-size="16" font-weight="700" font-family="sans-serif">UAC</text>
          <text x="246" y="139" text-anchor="middle" fill="#a0a5b1" font-size="10.5" font-family="sans-serif">Unidade Acadêmica</text>
        </g>

        <!-- Building: RU -->
        <g ${buildingAttrs("RU")}>
          <rect x="206" y="216" width="96" height="64" rx="6" fill="#23252c" stroke="#3a3d46" stroke-width="2"/>
          <text x="254" y="246" text-anchor="middle" fill="#f5f6f8" font-size="15" font-weight="700" font-family="sans-serif">RU</text>
          <text x="254" y="264" text-anchor="middle" fill="#a0a5b1" font-size="10" font-family="sans-serif">Restaurante Univ.</text>
        </g>

        <!-- Building: MESP / Auditório -->
        <g ${buildingAttrs("MESP")}>
          <rect x="372" y="94" width="114" height="68" rx="6" fill="#23252c" stroke="#3a3d46" stroke-width="2"/>
          <text x="429" y="125" text-anchor="middle" fill="#f5f6f8" font-size="15" font-weight="700" font-family="sans-serif">MESP</text>
          <text x="429" y="143" text-anchor="middle" fill="#a0a5b1" font-size="10.5" font-family="sans-serif">Auditório / Salas</text>
        </g>

        <!-- Compass Rose -->
        <g transform="translate(572, 92)">
          <circle cx="0" cy="0" r="20" fill="#1e1f24" stroke="#3a3d46"/>
          <polygon points="0,-14 5,4 0,0 -5,4" fill="#0084ff"/>
          <polygon points="0,14 5,4 0,0 -5,4" fill="#5e6573"/>
          <text x="0" y="-23" text-anchor="middle" fill="#a0a5b1" font-size="11" font-weight="700">N</text>
        </g>

        ${routePath}

        <!-- Interactive Pin -->
        <g id="map-pin-marker" transform="translate(${pinX}, ${pinY})" style="${interactive ? "cursor:grab;" : ""}">
          <circle cx="0" cy="0" r="22" fill="rgba(0, 132, 255, 0.20)"/>
          <path d="M 0 -28 C -10 -28 -18 -20 -18 -10 C -18 4 0 18 0 18 C 0 18 18 4 18 -10 C 18 -20 10 -28 0 -28 Z" fill="#0084ff" stroke="#ffffff" stroke-width="2"/>
          <circle cx="0" cy="-10" r="5" fill="#ffffff"/>
        </g>
      </svg>
    `;
  }

  // ---------- Navigation ----------
  function navigateTo(screenName) {
    state.currentScreen = screenName;
    $$(".screen").forEach((sec) => {
      sec.hidden = sec.id !== `screen-${screenName}`;
      sec.classList.toggle("active", sec.id === `screen-${screenName}`);
    });

    // Update Sidebar Active Pill
    $("#nav-sidebar-home").classList.toggle("active", screenName === "home");
    $("#nav-sidebar-events").classList.toggle("active", screenName !== "home");

    if (screenName === "hub") {
      renderEventsFeed();
    } else if (screenName === "wizard") {
      updateWizardUI();
    } else if (screenName === "event") {
      renderPublishedEvent();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- Hub of Events (Tela 1) ----------
  function renderEventsFeed() {
    const container = $("#events-list");
    const q = state.hubSearch.trim().toLowerCase();

    const filtered = state.events.filter((ev) => {
      if (state.hubFilter === "upcoming" && !ev.dateText.includes("2026")) return false;
      if (state.hubFilter === "nearby" && !ev.nearby) return false;
      if (state.hubFilter === "tickets" && !ev.hasTicket) return false;
      if (!q) return true;
      return (
        ev.title.toLowerCase().includes(q) ||
        ev.location.toLowerCase().includes(q) ||
        ev.organizer.toLowerCase().includes(q) ||
        ev.category.toLowerCase().includes(q)
      );
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state-box">
          <p>Nenhum evento encontrado para os critérios selecionados.</p>
          <button type="button" class="btn btn-primary" id="btn-empty-create">+ Criar Novo Evento</button>
        </div>
      `;
      const emptyBtn = $("#btn-empty-create");
      if (emptyBtn) emptyBtn.addEventListener("click", () => startNewEventWizard());
      return;
    }

    container.innerHTML = filtered
      .map((ev) => {
        const remaining = Math.max(0, ev.maxCapacity - ev.registered);
        return `
          <article class="event-card" tabindex="0" data-open-event="${ev.id}">
            <div class="event-card-main">
              <div class="event-card-badges">
                <span class="category-badge ${ev.badgeClass}">${ev.category}</span>
                ${ev.hasTicket ? '<span class="tag-pill">Ingresso emitido</span>' : ""}
              </div>
              <h2 class="event-card-title">${ev.title}</h2>
              <div class="event-card-meta">
                <span>📅 ${ev.dateText} • ${ev.timeStart} às ${ev.timeEnd}</span>
                <span>📍 ${ev.location}</span>
                <span>👤 Organizado por ${ev.organizer}</span>
              </div>
            </div>
            <div class="event-card-side">
              <span class="vacancies-pill">${ev.registered} inscritos · ${remaining} vagas restantes</span>
              <span class="tag-pill">${ev.ticketType}</span>
            </div>
          </article>
        `;
      })
      .join("");

    $$("[data-open-event]").forEach((card) => {
      const open = () => {
        state.activeEventId = card.dataset.openEvent;
        $("#published-success-banner").hidden = true;
        navigateTo("event");
      };
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }

  // ---------- Wizard Logic (Tela 2) ----------
  function startNewEventWizard() {
    state.wizardStep = 1;
    state.draft = {
      title: "",
      category: "Workshops e Capacitação",
      description: "",
      date: "2026-11-14",
      timeStart: "",
      timeEnd: "",
      locationSelected: false,
      landmarkId: "UAC",
      pinX: LANDMARKS.UAC.x,
      pinY: LANDMARKS.UAC.y,
      address: LANDMARKS.UAC.address,
      room: LANDMARKS.UAC.defaultRoom,
      quorumMin: "",
      maxCapacity: "",
      ticketType: "Gratuito (1 por usuário)",
      pixInfo: "",
      emitQrCode: true,
      sendReminder: true,
    };

    $("#input-event-title").value = "";
    $("#title-char-count").textContent = "0/120";
    $("#select-event-category").value = state.draft.category;
    $("#input-event-desc").value = "";
    $("#input-event-date").value = state.draft.date;
    $("#display-time-summary").textContent = "Não definido";
    $("#display-location-summary").textContent = "Nenhum local selecionado no mapa";
    $("#display-location-sub").textContent = "Clique ao lado para posicionar o marcador no campus";
    $("#input-quorum-min").value = "";
    $("#input-max-capacity").value = "";
    $$("input[name='ticketType']").forEach((r) => {
      r.checked = r.value.startsWith("Gratuito");
      r.closest(".radio-card").classList.toggle("active", r.checked);
    });
    $("#pix-extra-field").hidden = true;
    $("#chk-qrcode").checked = true;
    $("#chk-reminder").checked = true;
    hideWizardError();
    updateStep3Summary();
    navigateTo("wizard");
  }

  function showWizardError(msg) {
    const banner = $("#wizard-error-banner");
    banner.textContent = msg;
    banner.hidden = false;
  }

  function hideWizardError() {
    $("#wizard-error-banner").hidden = true;
  }

  function updateWizardUI() {
    [1, 2, 3].forEach((stepNum) => {
      const pane = $(`#wizard-step-${stepNum}`);
      pane.hidden = stepNum !== state.wizardStep;
      pane.classList.toggle("active", stepNum === state.wizardStep);

      const stepEl = $(`.stepper-step[data-step="${stepNum}"]`);
      stepEl.classList.toggle("active", stepNum === state.wizardStep);
      stepEl.classList.toggle("completed", stepNum < state.wizardStep);
    });
    hideWizardError();
  }

  function validateStep(step) {
    if (step === 1) {
      const title = $("#input-event-title").value.trim();
      if (title.length < 5) {
        showWizardError("Informe um título descritivo com pelo menos 5 caracteres para o seu evento.");
        $("#input-event-title").focus();
        return false;
      }
      state.draft.title = title;
      state.draft.category = $("#select-event-category").value;
      state.draft.description = $("#input-event-desc").value.trim();
      return true;
    }

    if (step === 2) {
      const dateVal = $("#input-event-date").value;
      if (!dateVal) {
        showWizardError("Selecione a data do evento antes de avançar.");
        $("#input-event-date").focus();
        return false;
      }
      if (!state.draft.timeStart || !state.draft.timeEnd) {
        showWizardError("Defina o horário de início e término no formato 24 horas.");
        $("#btn-open-time-modal").focus();
        return false;
      }
      if (!state.draft.locationSelected) {
        showWizardError("Selecione o local de encontro no mapa interativo antes de continuar.");
        $("#btn-open-map-modal").focus();
        return false;
      }
      state.draft.date = dateVal;
      return true;
    }

    if (step === 3) {
      const q = Number($("#input-quorum-min").value);
      const m = Number($("#input-max-capacity").value);
      if (!q || q < 1) {
        showWizardError("Informe o Quórum Mínimo de viabilidade (pelo menos 1 participante).");
        $("#input-quorum-min").focus();
        return false;
      }
      if (!m || m < q) {
        showWizardError("A Lotação Máxima deve ser igual ou maior que o Quórum Mínimo.");
        $("#input-max-capacity").focus();
        return false;
      }
      state.draft.quorumMin = q;
      state.draft.maxCapacity = m;
      state.draft.emitQrCode = $("#chk-qrcode").checked;
      state.draft.sendReminder = $("#chk-reminder").checked;
      state.draft.pixInfo = $("#input-pix-info").value.trim();
      return true;
    }
    return true;
  }

  function updateStep3Summary() {
    const q = $("#input-quorum-min").value || "--";
    const m = $("#input-max-capacity").value || "--";
    const qr = $("#chk-qrcode").checked ? "QR Code Ativo" : "Sem QR Code";
    const rem = $("#chk-reminder").checked ? "Lembrete 24h" : "Sem lembrete";
    $("#step3-live-summary").innerHTML = `
      <strong>Resumo:</strong> Quórum mínimo: <strong>${q}</strong> · Lotação máxima: <strong>${m} vagas</strong> · ${state.draft.ticketType} · ${qr} · ${rem}
    `;
  }

  // ---------- Modal PM-01: Seletor de Horário 24h (Relógio Analógico) ----------
  function renderClockDial(side) {
    const dialEl = $(`#clock-dial-${side}`);
    if (!dialEl) return;

    const mode = state.clockMode[side];
    const [hhStr, mmStr] = (state.tempTime[side] || "14:00").split(":");
    const hourVal = Math.max(0, Math.min(23, parseInt(hhStr, 10) || 0));
    const minVal = Math.max(0, Math.min(59, parseInt(mmStr, 10) || 0));

    const dialSize = 236;
    const center = dialSize / 2;
    const outerRadius = 92;
    const innerRadius = 58;

    let selectedAngle = 0;
    let handLength = outerRadius;
    let showExactDot = false;

    if (mode === "hour") {
      const isInner = hourVal >= 12;
      selectedAngle = (hourVal % 12) * 30;
      handLength = isInner ? innerRadius : outerRadius;
    } else {
      selectedAngle = minVal * 6;
      handLength = outerRadius;
      showExactDot = minVal % 5 !== 0;
    }

    let html = `
      <div class="clock-center-dot"></div>
      <div class="clock-hand" style="height:${handLength}px;transform:translate(-50%,-100%) rotate(${selectedAngle}deg)">
        <div class="clock-hand-tip">
          ${showExactDot ? '<span class="clock-hand-tip-dot"></span>' : ""}
        </div>
      </div>
    `;

    if (mode === "hour") {
      for (let i = 0; i < 12; i += 1) {
        const rad = ((i * 30 - 90) * Math.PI) / 180;
        const x = center + outerRadius * Math.cos(rad);
        const y = center + outerRadius * Math.sin(rad);
        const label = pad2(i);
        const selClass = hourVal === i ? " selected" : "";
        html += `<button type="button" class="clock-num${selClass}" data-clock-val="${i}" style="left:${x.toFixed(1)}px;top:${y.toFixed(1)}px" tabindex="-1">${label}</button>`;
      }
      for (let i = 12; i < 24; i += 1) {
        const rad = (((i - 12) * 30 - 90) * Math.PI) / 180;
        const x = center + innerRadius * Math.cos(rad);
        const y = center + innerRadius * Math.sin(rad);
        const label = pad2(i);
        const selClass = hourVal === i ? " selected" : "";
        html += `<button type="button" class="clock-num inner${selClass}" data-clock-val="${i}" style="left:${x.toFixed(1)}px;top:${y.toFixed(1)}px" tabindex="-1">${label}</button>`;
      }
    } else {
      for (let i = 0; i < 12; i += 1) {
        const val = i * 5;
        const rad = ((i * 30 - 90) * Math.PI) / 180;
        const x = center + outerRadius * Math.cos(rad);
        const y = center + outerRadius * Math.sin(rad);
        const label = pad2(val);
        const selClass = minVal === val ? " selected" : "";
        html += `<button type="button" class="clock-num${selClass}" data-clock-val="${val}" style="left:${x.toFixed(1)}px;top:${y.toFixed(1)}px" tabindex="-1">${label}</button>`;
      }
    }

    dialEl.innerHTML = html;
  }

  function syncTimeModalUI(skipInputSide) {
    ["start", "end"].forEach((side) => {
      const [hh, mm] = (state.tempTime[side] || "14:00").split(":");
      const mode = state.clockMode[side];
      const hourInput = $(`#clock-input-${side}-hour`);
      const minInput = $(`#clock-input-${side}-min`);
      const modeLabel = $(`#clock-mode-label-${side}`);

      if (skipInputSide !== `${side}-hour` && hourInput) {
        hourInput.value = hh || "00";
      }
      if (skipInputSide !== `${side}-min` && minInput) {
        minInput.value = mm || "00";
      }

      if (hourInput) hourInput.classList.toggle("active", mode === "hour");
      if (minInput) minInput.classList.toggle("active", mode === "min");
      if (modeLabel) {
        modeLabel.textContent = mode === "hour" ? "Selecionando Hora" : "Selecionando Minuto";
      }

      renderClockDial(side);
    });
  }

  function setupClockDialInteractions() {
    ["start", "end"].forEach((side) => {
      const dialEl = $(`#clock-dial-${side}`);
      if (!dialEl) return;

      let dragging = false;
      let startX = 0;
      let startY = 0;
      let moved = false;

      const updateFromPointer = (clientX, clientY, snapMinutes) => {
        const rect = dialEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const dist = Math.hypot(dx, dy);

        let deg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        if (deg < 0) deg += 360;

        const [curH, curM] = (state.tempTime[side] || "14:00").split(":");
        if (state.clockMode[side] === "hour") {
          const step = Math.round(deg / 30) % 12;
          const isInner = dist < rect.width * 0.31;
          const nextH = pad2(isInner ? step + 12 : step);
          state.tempTime[side] = `${nextH}:${curM || "00"}`;
        } else {
          const nextMVal = snapMinutes
            ? (Math.round(deg / 30) * 5) % 60
            : Math.round(deg / 6) % 60;
          state.tempTime[side] = `${curH || "14"}:${pad2(nextMVal)}`;
        }
        syncTimeModalUI();
      };

      dialEl.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        dragging = true;
        moved = false;
        startX = e.clientX;
        startY = e.clientY;
        dialEl.setPointerCapture(e.pointerId);

        const numBtn = e.target.closest(".clock-num");
        if (numBtn) {
          const val = parseInt(numBtn.dataset.clockVal, 10);
          const [curH, curM] = (state.tempTime[side] || "14:00").split(":");
          if (state.clockMode[side] === "hour") {
            state.tempTime[side] = `${pad2(val)}:${curM || "00"}`;
          } else {
            state.tempTime[side] = `${curH || "14"}:${pad2(val)}`;
          }
          syncTimeModalUI();
        } else {
          updateFromPointer(e.clientX, e.clientY, false);
        }
      });

      dialEl.addEventListener("pointermove", (e) => {
        if (!dragging) return;
        if (Math.hypot(e.clientX - startX, e.clientY - startY) > 4) {
          moved = true;
        }
        if (moved) {
          updateFromPointer(e.clientX, e.clientY, false);
        }
      });

      const endDrag = (e) => {
        if (!dragging) return;
        dragging = false;
        if (dialEl.hasPointerCapture(e.pointerId)) {
          dialEl.releasePointerCapture(e.pointerId);
        }
        if (state.clockMode[side] === "hour") {
          state.clockMode[side] = "min";
          syncTimeModalUI();
        }
      };

      dialEl.addEventListener("pointerup", endDrag);
      dialEl.addEventListener("pointercancel", endDrag);
    });
  }

  function openTimeModal() {
    state.tempTime.start = state.draft.timeStart || "14:00";
    state.tempTime.end = state.draft.timeEnd || "18:00";
    state.clockMode.start = "hour";
    state.clockMode.end = "hour";
    $("#time-modal-error").hidden = true;
    syncTimeModalUI();
    openModal("modal-time");
  }

  function bindClockSegmentInputs() {
    ["start", "end"].forEach((side) => {
      const hourInput = $(`#clock-input-${side}-hour`);
      const minInput = $(`#clock-input-${side}-min`);

      hourInput.addEventListener("focus", () => {
        state.clockMode[side] = "hour";
        syncTimeModalUI(`${side}-hour`);
        hourInput.select();
      });

      hourInput.addEventListener("click", () => {
        state.clockMode[side] = "hour";
        syncTimeModalUI(`${side}-hour`);
      });

      hourInput.addEventListener("input", () => {
        const digits = hourInput.value.replace(/\D/g, "").slice(0, 2);
        hourInput.value = digits;
        if (digits.length === 2) {
          const val = Math.min(23, Math.max(0, parseInt(digits, 10) || 0));
          const [, curM] = (state.tempTime[side] || "14:00").split(":");
          state.tempTime[side] = `${pad2(val)}:${curM || "00"}`;
          state.clockMode[side] = "min";
          syncTimeModalUI();
          minInput.focus();
        }
      });

      hourInput.addEventListener("blur", () => {
        const digits = hourInput.value.replace(/\D/g, "");
        if (digits.length > 0) {
          const val = Math.min(23, Math.max(0, parseInt(digits, 10) || 0));
          const [, curM] = (state.tempTime[side] || "14:00").split(":");
          state.tempTime[side] = `${pad2(val)}:${curM || "00"}`;
        }
        syncTimeModalUI();
      });

      minInput.addEventListener("focus", () => {
        state.clockMode[side] = "min";
        syncTimeModalUI(`${side}-min`);
        minInput.select();
      });

      minInput.addEventListener("click", () => {
        state.clockMode[side] = "min";
        syncTimeModalUI(`${side}-min`);
      });

      minInput.addEventListener("input", () => {
        const digits = minInput.value.replace(/\D/g, "").slice(0, 2);
        minInput.value = digits;
        if (digits.length === 2) {
          const val = Math.min(59, Math.max(0, parseInt(digits, 10) || 0));
          const [curH] = (state.tempTime[side] || "14:00").split(":");
          state.tempTime[side] = `${curH || "14"}:${pad2(val)}`;
          syncTimeModalUI();
        }
      });

      minInput.addEventListener("blur", () => {
        const digits = minInput.value.replace(/\D/g, "");
        if (digits.length > 0) {
          const val = Math.min(59, Math.max(0, parseInt(digits, 10) || 0));
          const [curH] = (state.tempTime[side] || "14:00").split(":");
          state.tempTime[side] = `${curH || "14"}:${pad2(val)}`;
        }
        syncTimeModalUI();
      });
    });
  }

  // ---------- Modal PM-03: Mapa Interativo ----------
  function renderInteractiveModalMap() {
    const container = $("#interactive-map-container");
    container.innerHTML = renderCampusMapSvg({
      pinX: state.tempMap.pinX,
      pinY: state.tempMap.pinY,
      interactive: true,
      showRoute: false,
    });

    const svg = container.querySelector("svg");
    const pinEl = container.querySelector("#map-pin-marker");

    const selectLandmark = (id) => {
      const lm = LANDMARKS[id];
      if (!lm) return;
      state.tempMap.landmarkId = id;
      state.tempMap.pinX = lm.x;
      state.tempMap.pinY = lm.y;
      state.tempMap.address = lm.address;
      state.tempMap.room = lm.defaultRoom;
      $("#input-map-address").value = lm.address;
      $("#input-map-room").value = lm.defaultRoom;
      $("#map-coord-readout").textContent = `Campus UnB Gama (FGA) · ${lm.name}`;
      renderInteractiveModalMap();
    };

    $$("[data-select-landmark]").forEach((g) => {
      g.addEventListener("click", (e) => {
        e.stopPropagation();
        selectLandmark(g.dataset.selectLandmark);
      });
    });

    const updatePinFromPointer = (clientX, clientY) => {
      const rect = svg.getBoundingClientRect();
      const x = Math.max(20, Math.min(620, ((clientX - rect.left) / rect.width) * 640));
      const y = Math.max(20, Math.min(340, ((clientY - rect.top) / rect.height) * 360));
      state.tempMap.pinX = Math.round(x);
      state.tempMap.pinY = Math.round(y);
      pinEl.setAttribute("transform", `translate(${state.tempMap.pinX}, ${state.tempMap.pinY})`);

      // Snap description to nearest building if close
      let nearest = null;
      let minDist = 68;
      Object.values(LANDMARKS).forEach((lm) => {
        const d = Math.hypot(lm.x - x, lm.y - y);
        if (d < minDist) {
          minDist = d;
          nearest = lm;
        }
      });
      if (nearest) {
        state.tempMap.landmarkId = nearest.id;
        state.tempMap.address = nearest.address;
        $("#input-map-address").value = nearest.address;
        $("#map-coord-readout").textContent = `Campus UnB Gama (FGA) · ${nearest.name}`;
      } else {
        $("#map-coord-readout").textContent = `Ponto personalizado (${state.tempMap.pinX}, ${state.tempMap.pinY})`;
      }
    };

    pinEl.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      isMapDragging = true;
    });

    svg.addEventListener("mousemove", (e) => {
      if (isMapDragging) updatePinFromPointer(e.clientX, e.clientY);
    });

    svg.addEventListener("click", (e) => {
      if (!e.target.closest("[data-select-landmark]")) {
        updatePinFromPointer(e.clientX, e.clientY);
      }
    });
  }

  function openMapModal() {
    state.tempMap = {
      landmarkId: state.draft.landmarkId || "UAC",
      pinX: state.draft.pinX || LANDMARKS.UAC.x,
      pinY: state.draft.pinY || LANDMARKS.UAC.y,
      address: state.draft.address || LANDMARKS.UAC.address,
      room: state.draft.room || LANDMARKS.UAC.defaultRoom,
    };
    $("#input-map-search").value = "";
    $("#input-map-address").value = state.tempMap.address;
    $("#input-map-room").value = state.tempMap.room;
    $("#map-coord-readout").textContent = `Campus UnB Gama (FGA) · ${LANDMARKS[state.tempMap.landmarkId]?.name || "Bloco UAC"}`;
    renderInteractiveModalMap();
    openModal("modal-map");
  }

  // ---------- Modal Helpers ----------
  function openModal(modalId) {
    const modal = $(`#${modalId}`);
    modal.hidden = false;
    const firstInput = modal.querySelector("input, button:not(.modal-close-btn)");
    if (firstInput) firstInput.focus();
  }

  function closeModal(modalId) {
    $(`#${modalId}`).hidden = true;
  }

  function closeAllModals() {
    $$(".modal-backdrop").forEach((m) => {
      m.hidden = true;
    });
  }

  // ---------- Tela 3: Evento Publicado ----------
  function renderPublishedEvent() {
    const ev = state.events.find((e) => e.id === state.activeEventId) || state.events[0];
    if (!ev) return;

    state.publishedZoom = 1;
    $("#pub-zoom-level").textContent = "100%";
    $("#published-map-stage").style.transform = "scale(1)";

    $("#published-breadcrumb-name").textContent = ev.title;
    $("#published-event-title").textContent = ev.title;
    $("#published-organizer-name").textContent = `${ev.organizer} (Comunidade)`;
    $("#published-datetime").textContent = `${ev.dateText} • ${ev.timeStart} às ${ev.timeEnd}`;
    $("#published-location").textContent = ev.location;
    $("#published-map-subtitle").textContent = ev.location;
    $("#published-description").textContent =
      ev.description ||
      "Encontro presencial colaborativo da comunidade Diolinux Plus na UnB Campus Gama.";

    const badge = $("#pub-category-badge");
    badge.textContent = ev.category;
    badge.className = `category-badge ${ev.badgeClass}`;
    $("#pub-reminder-tag").hidden = !ev.sendReminder;

    // Quorum Progress Bar
    const pct = Math.min(100, Math.round((ev.quorumMin / ev.maxCapacity) * 100));
    $("#published-quorum-text").textContent = `Quórum mínimo: ${ev.quorumMin}/${ev.maxCapacity} participantes`;
    $("#published-quorum-fill").style.width = `${Math.max(12, pct)}%`;
    $("#published-quorum-note").textContent =
      `${ev.registered} inscrito(s) · Meta mínima de ${ev.quorumMin} participantes para viabilização do encontro.`;

    // Ticket Card
    const ticketCard = $("#published-ticket-card");
    ticketCard.hidden = !ev.emitQrCode;
    $("#published-ticket-type").textContent = ev.ticketType;
    $("#qrcode-svg-mount").innerHTML = buildQrSvg(`${ev.id}-${ev.title}-${ev.dateText}`);
    $("#ticket-code-text").textContent = `DLX-${ev.id.slice(-4).toUpperCase()}-2026`;

    // 16:9 Expanded Map (PROB-PP-T2-05)
    $("#published-map-stage").innerHTML = renderCampusMapSvg({
      pinX: ev.pinX || LANDMARKS.UAC.x,
      pinY: ev.pinY || LANDMARKS.UAC.y,
      interactive: false,
      showRoute: true,
    });

    // Calendar Button State
    const calBtn = $("#btn-add-calendar");
    calBtn.textContent = ev.addedCalendar ? "✓ Adicionado na Agenda" : "+ Adicionar na Agenda";
  }

  function publishCurrentDraft(e) {
    e.preventDefault();
    if (!validateStep(3)) return;

    const newEvent = {
      id: `evt-${Date.now()}`,
      title: state.draft.title,
      category: state.draft.category,
      badgeClass: getCategoryBadgeClass(state.draft.category),
      dateText: formatDatePtBr(state.draft.date),
      timeStart: state.draft.timeStart,
      timeEnd: state.draft.timeEnd,
      location: `${state.draft.address}${state.draft.room ? ` — ${state.draft.room}` : ""}`,
      landmarkId: state.draft.landmarkId,
      pinX: state.draft.pinX,
      pinY: state.draft.pinY,
      organizer: "Carlos Eduardo (@carlos_edu)",
      registered: 1,
      quorumMin: state.draft.quorumMin,
      maxCapacity: state.draft.maxCapacity,
      ticketType: state.draft.ticketType,
      emitQrCode: state.draft.emitQrCode,
      sendReminder: state.draft.sendReminder,
      nearby: true,
      hasTicket: true,
      addedCalendar: false,
      description: state.draft.description,
    };

    state.events.unshift(newEvent);
    state.activeEventId = newEvent.id;
    $("#published-success-banner").hidden = false;
    navigateTo("event");
    showToast("Evento publicado com sucesso no Diolinux Plus!", "success");
  }

  // ---------- Event Listeners & Initialization ----------
  function bindEvents() {
    // Sidebar & Navigation
    $("#btn-toggle-sidebar").addEventListener("click", () => {
      const collapsed = $("#app-layout").classList.toggle("sidebar-collapsed");
      $("#btn-toggle-sidebar").setAttribute("aria-expanded", String(!collapsed));
    });

    $("#btn-logo-home").addEventListener("click", () => navigateTo("home"));

    $$("[data-nav]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const target = el.dataset.nav;
        if (el.dataset.filter) {
          state.hubFilter = el.dataset.filter;
          $$("[data-hub-filter]").forEach((t) => {
            const active = t.dataset.hubFilter === state.hubFilter;
            t.classList.toggle("active", active);
            t.setAttribute("aria-selected", String(active));
          });
        }
        if (target === "wizard") startNewEventWizard();
        else navigateTo(target);
        $("#user-popover").hidden = true;
      });
    });

    $("#btn-toggle-more-content").addEventListener("click", () => {
      const list = $("#more-content-list");
      list.hidden = !list.hidden;
      $("#btn-toggle-more-content").setAttribute("aria-expanded", String(!list.hidden));
    });

    // Theme Switcher (Dark / Light / High Contrast)
    $("#btn-theme-toggle").addEventListener("click", () => {
      state.themeIndex = (state.themeIndex + 1) % state.themes.length;
      const t = state.themes[state.themeIndex];
      document.documentElement.setAttribute("data-theme", t.id);
      $("#theme-label").textContent = t.label;
      showToast(`Tema alterado para: ${t.label}`);
    });

    // Header Popovers
    $("#btn-notifications").addEventListener("click", (e) => {
      e.stopPropagation();
      const pop = $("#notifications-popover");
      pop.hidden = !pop.hidden;
      $("#user-popover").hidden = true;
    });

    $("#btn-user-menu").addEventListener("click", (e) => {
      e.stopPropagation();
      const pop = $("#user-popover");
      pop.hidden = !pop.hidden;
      $("#notifications-popover").hidden = true;
    });

    document.addEventListener("click", () => {
      $("#notifications-popover").hidden = true;
      $("#user-popover").hidden = true;
      $$(".tooltip-wrapper.open").forEach((w) => w.classList.remove("open"));
    });

    window.addEventListener("mouseup", () => {
      isMapDragging = false;
    });

    $("#home-search-input").addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      $$("#home-topic-tbody tr").forEach((row) => {
        row.hidden = q ? !row.textContent.toLowerCase().includes(q) : false;
      });
    });

    $("#btn-header-search").addEventListener("click", () => {
      if (state.currentScreen === "hub") $("#hub-search-input").focus();
      else {
        navigateTo("home");
        $("#home-search-input").focus();
      }
    });

    // Generic Toast Buttons
    $$("[data-toast]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        showToast(el.dataset.toast);
      });
    });

    // Home tabs
    $$("[data-home-tab]").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$("[data-home-tab]").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
      });
    });

    // Hub Search & Filters
    $("#btn-create-event").addEventListener("click", startNewEventWizard);
    $("#hub-search-input").addEventListener("input", (e) => {
      state.hubSearch = e.target.value;
      renderEventsFeed();
    });

    $$("[data-hub-filter]").forEach((tab) => {
      tab.addEventListener("click", () => {
        state.hubFilter = tab.dataset.hubFilter;
        $$("[data-hub-filter]").forEach((t) => {
          const active = t === tab;
          t.classList.toggle("active", active);
          t.setAttribute("aria-selected", String(active));
        });
        renderEventsFeed();
      });
    });

    // Wizard Step Navigation
    $("#input-event-title").addEventListener("input", (e) => {
      $("#title-char-count").textContent = `${e.target.value.length}/120`;
    });

    $("#btn-step1-next").addEventListener("click", () => {
      if (validateStep(1)) {
        state.wizardStep = 2;
        updateWizardUI();
      }
    });

    $("#btn-step2-prev").addEventListener("click", () => {
      state.wizardStep = 1;
      updateWizardUI();
    });

    $("#btn-step2-next").addEventListener("click", () => {
      if (validateStep(2)) {
        state.wizardStep = 3;
        updateWizardUI();
      }
    });

    $("#btn-step3-prev").addEventListener("click", () => {
      state.wizardStep = 2;
      updateWizardUI();
    });

    $$("[data-goto-step]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = Number(btn.dataset.gotoStep);
        if (target < state.wizardStep) {
          state.wizardStep = target;
          updateWizardUI();
        } else if (target === state.wizardStep + 1 && validateStep(state.wizardStep)) {
          state.wizardStep = target;
          updateWizardUI();
        }
      });
    });

    $$(".btn-save-draft").forEach((btn) => {
      btn.addEventListener("click", () => {
        showToast("Rascunho salvo automaticamente", "success");
      });
    });

    // Step 3 Inputs & Tooltip
    ["#input-quorum-min", "#input-max-capacity", "#chk-qrcode", "#chk-reminder"].forEach((sel) => {
      $(sel).addEventListener("input", updateStep3Summary);
      $(sel).addEventListener("change", updateStep3Summary);
    });

    $$("input[name='ticketType']").forEach((radio) => {
      radio.addEventListener("change", () => {
        state.draft.ticketType = radio.value;
        $$("input[name='ticketType']").forEach((r) =>
          r.closest(".radio-card").classList.toggle("active", r.checked)
        );
        $("#pix-extra-field").hidden = !radio.value.includes("PIX");
        updateStep3Summary();
      });
    });

    $("#btn-quorum-help").addEventListener("click", (e) => {
      e.stopPropagation();
      e.target.closest(".tooltip-wrapper").classList.toggle("open");
    });

    $("#event-wizard-form").addEventListener("submit", publishCurrentDraft);

    // Time Modal (PM-01 24h Clock)
    $("#btn-open-time-modal").addEventListener("click", openTimeModal);
    bindClockSegmentInputs();
    setupClockDialInteractions();

    $$("[data-time-preset]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const [start, end] = btn.dataset.timePreset.split("-");
        state.tempTime.start = start;
        state.tempTime.end = end;
        syncTimeModalUI();
      });
    });

    $("#btn-confirm-time").addEventListener("click", () => {
      const start = state.tempTime.start;
      const end = state.tempTime.end;
      const errBox = $("#time-modal-error");

      if (!isValidTime24(start) || !isValidTime24(end)) {
        errBox.textContent = "Informe horários válidos no formato 24h (ex.: 14:00 e 18:00).";
        errBox.hidden = false;
        return;
      }
      if (timeToMinutes(end) <= timeToMinutes(start)) {
        errBox.textContent = "O horário de término deve ser posterior ao horário de início.";
        errBox.hidden = false;
        return;
      }

      state.draft.timeStart = start;
      state.draft.timeEnd = end;
      $("#display-time-summary").textContent = `${start} às ${end}`;
      closeModal("modal-time");
      showToast(`Horário definido: ${start} às ${end}`);
    });

    // Map Modal (PM-03)
    $("#btn-open-map-modal").addEventListener("click", openMapModal);

    $$("[data-landmark]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lm = LANDMARKS[btn.dataset.landmark];
        if (!lm) return;
        state.tempMap.landmarkId = lm.id;
        state.tempMap.pinX = lm.x;
        state.tempMap.pinY = lm.y;
        state.tempMap.address = lm.address;
        state.tempMap.room = lm.defaultRoom;
        $("#input-map-address").value = lm.address;
        $("#input-map-room").value = lm.defaultRoom;
        $("#map-coord-readout").textContent = `Campus UnB Gama (FGA) · ${lm.name}`;
        renderInteractiveModalMap();
      });
    });

    $("#input-map-search").addEventListener("input", (e) => {
      const term = e.target.value.trim().toLowerCase();
      if (!term) return;
      const match = Object.values(LANDMARKS).find(
        (lm) =>
          lm.id.toLowerCase().includes(term) ||
          lm.name.toLowerCase().includes(term) ||
          lm.defaultRoom.toLowerCase().includes(term)
      );
      if (match) {
        state.tempMap.landmarkId = match.id;
        state.tempMap.pinX = match.x;
        state.tempMap.pinY = match.y;
        state.tempMap.address = match.address;
        state.tempMap.room = match.defaultRoom;
        $("#input-map-address").value = match.address;
        $("#input-map-room").value = match.defaultRoom;
        $("#map-coord-readout").textContent = `Campus UnB Gama (FGA) · ${match.name}`;
        renderInteractiveModalMap();
      }
    });

    $("#btn-confirm-location").addEventListener("click", () => {
      const address = $("#input-map-address").value.trim() || LANDMARKS.UAC.address;
      const room = $("#input-map-room").value.trim();
      state.draft.locationSelected = true;
      state.draft.landmarkId = state.tempMap.landmarkId;
      state.draft.pinX = state.tempMap.pinX;
      state.draft.pinY = state.tempMap.pinY;
      state.draft.address = address;
      state.draft.room = room;

      const formatted = room ? `${address} — ${room}` : address;
      $("#display-location-summary").textContent = formatted;
      $("#display-location-sub").textContent = "Local confirmado no mapa do campus";
      closeModal("modal-map");
      showToast("Localização confirmada no mapa!");
    });

    // Published Event Screen Actions
    $("#btn-pub-zoom-in").addEventListener("click", () => {
      state.publishedZoom = Math.min(1.6, +(state.publishedZoom + 0.15).toFixed(2));
      $("#published-map-stage").style.transform = `scale(${state.publishedZoom})`;
      $("#pub-zoom-level").textContent = `${Math.round(state.publishedZoom * 100)}%`;
    });

    $("#btn-pub-zoom-out").addEventListener("click", () => {
      state.publishedZoom = Math.max(1, +(state.publishedZoom - 0.15).toFixed(2));
      $("#published-map-stage").style.transform = `scale(${state.publishedZoom})`;
      $("#pub-zoom-level").textContent = `${Math.round(state.publishedZoom * 100)}%`;
    });

    $("#btn-download-ticket").addEventListener("click", () => {
      const svgContent = $("#qrcode-svg-mount").innerHTML;
      const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ingresso-diolinux-plus.svg";
      a.click();
      URL.revokeObjectURL(url);
      showToast("Ingresso com QR Code baixado!", "success");
    });

    $("#btn-add-calendar").addEventListener("click", () => {
      const ev = state.events.find((e) => e.id === state.activeEventId);
      if (ev) {
        ev.addedCalendar = true;
        $("#btn-add-calendar").textContent = "✓ Adicionado na Agenda";
      }
      showToast("Evento adicionado à sua agenda (.ics)!", "success");
    });

    $("#btn-copy-event-link").addEventListener("click", () => {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      }
      showToast("Link copiado para a área de transferência", "success");
    });

    $("#btn-share-event").addEventListener("click", () => {
      showToast("Opções de compartilhamento abertas para a comunidade");
    });

    // Modal closing (X button, backdrop click, Esc)
    $$("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
    });

    $$(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) backdrop.hidden = true;
      });
    });

    $("#btn-shortcuts").addEventListener("click", () => openModal("modal-shortcuts"));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeAllModals();
        return;
      }

      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "?") {
        e.preventDefault();
        openModal("modal-shortcuts");
      } else if (e.key === "/") {
        e.preventDefault();
        if (state.currentScreen === "hub") $("#hub-search-input").focus();
        else {
          navigateTo("home");
          $("#home-search-input").focus();
        }
      } else if (e.key.toLowerCase() === "e") {
        navigateTo("hub");
      } else if (e.key.toLowerCase() === "n") {
        startNewEventWizard();
      }
    });
  }

  function init() {
    syncTimeModalUI();
    bindEvents();
    renderEventsFeed();

    // Optional direct screen query parameter (?screen=hub | ?screen=wizard)
    const params = new URLSearchParams(window.location.search);
    const screenParam = params.get("screen");
    if (screenParam === "hub") navigateTo("hub");
    else if (screenParam === "wizard") startNewEventWizard();
    else navigateTo("home");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
