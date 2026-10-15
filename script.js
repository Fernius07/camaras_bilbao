// ============================================================
// SISTEMA DE SEGURIDAD MUNICIPAL - BILBAO CCTV COMMAND CENTER
// ============================================================

// --- GLOBAL STATE ---
let map = null;
let markersMap = new Map();
let currentView = 'map'; // Default to TACTICAL MAP on load!
let activeDistrict = 'TODO';
let currentModalId = null;
let modalRefreshInterval = null;
let modalProgressInterval = null;
let modalClockInterval = null;
let currentZoomLevel = 1;
let radarSweepActive = true;
let currentTileLayer = 'osm-dark';
const tileLayers = {};

// Ensure database availability
const CAMERAS = (typeof BILBAO_CAMERAS !== 'undefined' && Array.isArray(BILBAO_CAMERAS)) ? BILBAO_CAMERAS : [];
const DISTRITOS = (typeof BILBAO_DISTRITOS !== 'undefined') ? BILBAO_DISTRITOS : {
    "TODO": CAMERAS.map(c => c.id)
};

// Helper: Get district by camera ID
function getDistritoPorCamara(id) {
    const cam = CAMERAS.find(c => c.id === id);
    if (cam && cam.district) return cam.district;
    for (const [distrito, ids] of Object.entries(DISTRITOS)) {
        if (distrito !== 'TODO' && ids.includes(id)) return distrito;
    }
    return 'SECTOR BILBAO';
}

// Helper: Get camera name by ID
function getNombreCamara(id) {
    const cam = CAMERAS.find(c => c.id === id);
    return cam ? cam.name : `Cámara ${id}`;
}

// Helper: Get camera coordinates by ID
function getCoordenadasCamara(id) {
    const cam = CAMERAS.find(c => c.id === id);
    if (cam) return { lat: cam.lat, lng: cam.lng };
    return { lat: 43.2630, lng: -2.9350 };
}

// --- AUDIO SYSTEM (WEB AUDIO API SYNTHESIS) ---
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

const sfx = {
    init: () => {
        if (!audioCtx) audioCtx = new AudioCtx();
        if (audioCtx.state === 'suspended') audioCtx.resume();
    },

    // Standard high-pitch UI blip
    beep: (freq = 12000, duration = 0.04, vol = 0.04) => {
        if (!audioCtx) return;
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {}
    },

    // Soft acoustic chirp on hovering markers
    hover: () => {
        sfx.beep(3600, 0.02, 0.015);
    },

    // Camera Opening: Mechanical lens motor servo whine + dual aperture shutter clicks
    cameraOpen: () => {
        if (!audioCtx) return;
        try {
            const now = audioCtx.currentTime;
            
            // 1. Lens servo motor whine
            const motor = audioCtx.createOscillator();
            const motorGain = audioCtx.createGain();
            motor.type = 'triangle';
            motor.frequency.setValueAtTime(260, now);
            motor.frequency.exponentialRampToValueAtTime(1350, now + 0.22);
            motorGain.gain.setValueAtTime(0.06, now);
            motorGain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
            motor.connect(motorGain);
            motorGain.connect(audioCtx.destination);
            motor.start(now);
            motor.stop(now + 0.24);

            // 2. Optical shutter iris clicks
            setTimeout(() => sfx.beep(4800, 0.03, 0.06), 60);
            setTimeout(() => sfx.beep(2400, 0.04, 0.07), 150);
            setTimeout(() => sfx.beep(9200, 0.05, 0.04), 220);
        } catch (e) {}
    },

    // Camera Closing: Quick mechanical shutter snap + power-down tone
    cameraClose: () => {
        if (!audioCtx) return;
        try {
            const now = audioCtx.currentTime;
            
            // 1. Sharp mechanical shutter latch snap
            const snap = audioCtx.createOscillator();
            const snapGain = audioCtx.createGain();
            snap.type = 'sawtooth';
            snap.frequency.setValueAtTime(850, now);
            snap.frequency.exponentialRampToValueAtTime(110, now + 0.12);
            snapGain.gain.setValueAtTime(0.08, now);
            snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
            snap.connect(snapGain);
            snapGain.connect(audioCtx.destination);
            snap.start(now);
            snap.stop(now + 0.14);

            // 2. Electronic disconnect tone
            setTimeout(() => sfx.beep(1100, 0.05, 0.04), 70);
            setTimeout(() => sfx.beep(440, 0.07, 0.03), 130);
        } catch (e) {}
    },

    // Frame update snapshot sound
    shutter: () => {
        sfx.beep(4600, 0.02, 0.03);
        setTimeout(() => sfx.beep(2800, 0.03, 0.02), 35);
    }
};

// --- LOGIN SEQUENCE LOGIC ---

async function typeText(elementId, text, speed = 50, isPassword = false) {
    const el = document.getElementById(elementId);
    el.innerHTML = '';
    const textNode = document.createTextNode('');
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'cursor';
    el.appendChild(textNode);
    el.appendChild(cursorSpan);

    for (let i = 0; i < text.length; i++) {
        textNode.textContent += isPassword ? '*' : text[i];
        sfx.beep();
        await new Promise(r => setTimeout(r, speed + Math.random() * 25));
    }
}

async function logMessage(msg, delay = 200) {
    const logBox = document.getElementById('status-log');
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.innerText = `> ${msg}`;
    logBox.appendChild(div);
    logBox.scrollTop = logBox.scrollHeight;
    sfx.beep();
    await new Promise(r => setTimeout(r, delay));
}

async function iniciarSecuenciaLogin() {
    sfx.init();
    sfx.beep();

    const btn = document.getElementById('btn-login');
    btn.disabled = true;
    btn.innerText = "INICIALIZANDO...";

    document.getElementById('cursor-user').style.display = "inline-block";

    await logMessage("Conectando con servidor seguro...");
    await new Promise(r => setTimeout(r, 500));

    await logMessage("Solicitando credenciales...");
    await typeText('user-input', 'ADMIN_01', 70);
    await logMessage("Usuario identificado.");

    await new Promise(r => setTimeout(r, 350));
    await typeText('pass-input', '873901FG1898231R032', 35, true);
    await logMessage("Verificando hash RSA-4096...");

    await new Promise(r => setTimeout(r, 650));
    await logMessage("AUTORIZACIÓN CORRECTA.", 100);
    await logMessage("Cargando mapa táctico y telemetría...", 400);

    btn.innerText = "ACCESO CONCEDIDO";
    btn.style.borderColor = "#fff";
    btn.style.color = "#fff";
    btn.style.background = "var(--term-green)";

    setTimeout(() => {
        const loginScreen = document.getElementById('login-screen');
        loginScreen.style.opacity = '0';
        loginScreen.style.transition = 'opacity 0.8s';

        setTimeout(() => {
            loginScreen.style.display = 'none';
            const dashboard = document.getElementById('dashboard');
            dashboard.style.display = 'flex';

            // Start system directly on tactical map!
            iniciarSistemaCamaras();
        }, 800);
    }, 600);
}

// --- DASHBOARD & SYSTEM INITIALIZATION ---

function iniciarSistemaCamaras() {
    console.log("Sistema de cámaras y radar iniciado.");
    generarSidebar();
    
    // Initialize Tactical Map as default view
    initTacticalMap();

    // Start Realtime System Clock
    actualizarReloj();
    setInterval(actualizarReloj, 1000);

    // Initial district set to TODO
    cargarDistrito("TODO");

    // Default view is Map
    cambiarModoVista('map');
}

// --- TACTICAL MAP INITIALIZATION ---

function initTacticalMap() {
    if (map) return;

    // Center on Bilbao coordinates
    const bilbaoCenter = [43.2630, -2.9350];
    const initialZoom = 13.5;

    map = L.map('tactical-map', {
        center: bilbaoCenter,
        zoom: initialZoom,
        minZoom: 11,
        maxZoom: 18,
        zoomControl: true,
        attributionControl: true
    });

    // 100% Free OpenStreetMap Dark Tactical Tile Layer (NO API KEY REQUIRED)
    tileLayers['osm-dark'] = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors | GeoBilbao',
        maxZoom: 19,
        className: 'tactical-tiles'
    });

    // 100% Free Esri Satellite Tactical Layer (NO API KEY REQUIRED)
    tileLayers['satellite'] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri, Maxar | GeoBilbao',
        maxZoom: 19,
        className: 'satellite-tiles'
    });

    // Default to OpenStreetMap Dark Tactical
    tileLayers['osm-dark'].addTo(map);

    // Track mouse coordinates on map for HUD readout
    map.on('mousemove', (e) => {
        const coordsEl = document.getElementById('hud-coordinates');
        if (coordsEl) {
            coordsEl.innerText = `COORD: ${e.latlng.lat.toFixed(5)}° N, ${e.latlng.lng.toFixed(5)}° W`;
        }
    });

    // Reset coordinates on mouseout
    map.on('mouseout', () => {
        const coordsEl = document.getElementById('hud-coordinates');
        if (coordsEl) {
            coordsEl.innerText = `COORD: 43.26300° N, -2.93500° W`;
        }
    });

    // Populate camera markers
    renderizarMarcadoresMapa();

    // Invalidate size once DOM stabilizes
    setTimeout(() => {
        if (map) map.invalidateSize();
    }, 300);
}

// Render tactical camera icons on the map
function renderizarMarcadoresMapa() {
    markersMap.clear();

    CAMERAS.forEach(cam => {
        // Create custom tactical CCTV reticle HTML icon
        const customIcon = L.divIcon({
            className: 'custom-tactical-div-icon',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -18],
            html: `
                <div class="tactical-cam-marker" id="marker-${cam.id}" data-id="${cam.id}">
                    <div class="marker-ping"></div>
                    <div class="marker-reticle">
                        <svg viewBox="0 0 24 24">
                            <path d="M15 8v2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2l4 3V7l-4 3V8a2 2 0 0 0-2-2H9v2h6z"/>
                            <circle cx="9" cy="14" r="2"/>
                        </svg>
                    </div>
                    <div class="marker-badge">CAM_${String(cam.id).padStart(3, '0')}</div>
                </div>
            `
        });

        const marker = L.marker([cam.lat, cam.lng], { icon: customIcon });

        // Tactical HUD Tooltip
        const tooltipContent = `
            <div class="tactical-tooltip">
                <div class="tooltip-cam-id">
                    <span>CAM_${String(cam.id).padStart(3, '0')}</span>
                    <span style="color:var(--term-green); font-size:10px;">● ENLACE ACTIVO</span>
                </div>
                <div class="tooltip-cam-name">${cam.name}</div>
                <div class="tooltip-cam-district">DISTRITO: ${cam.district} // ${cam.lat.toFixed(4)}N, ${cam.lng.toFixed(4)}W</div>
                <div class="tooltip-cam-prompt">[ CLICK: ABRIR CÁMARA ]</div>
            </div>
        `;

        marker.bindTooltip(tooltipContent, {
            direction: 'top',
            offset: [0, -14],
            opacity: 1,
            className: 'tactical-leaflet-tooltip'
        });

        // Hover audio feedback
        marker.on('mouseover', () => {
            sfx.hover();
        });

        // Click: opens camera with opening animation!
        marker.on('click', () => {
            abrirModal(cam.id);
        });

        marker.addTo(map);
        markersMap.set(cam.id, { marker, camera: cam });
    });

    actualizarContadorCamarasVisibles();
}

// --- CAMERA DETAIL MODAL (APERTURE SHUTTER ANIMATION) ---

function abrirModal(id) {
    sfx.init();
    sfx.cameraOpen(); // Mechanical aperture open audio!
    currentModalId = id;

    const modal = document.getElementById('camera-modal');
    const cam = CAMERAS.find(c => c.id === id) || {
        id,
        name: getNombreCamara(id),
        district: getDistritoPorCamara(id),
        lat: 43.2630,
        lng: -2.9350
    };

    // Update modal labels
    document.getElementById('modal-cam-name').innerText = `CAM_${String(id).padStart(3, '0')} // ${cam.name.toUpperCase()}`;
    document.getElementById('modal-district-badge').innerText = cam.district;
    document.getElementById('modal-cam-data').innerText = `ID: ${id} | COORDENADAS: ${cam.lat.toFixed(5)}° N, ${cam.lng.toFixed(5)}° W | ${cam.name}`;

    // Reset zoom
    currentZoomLevel = 1;
    actualizarZoomModal();

    // Trigger opening animation sequence
    modal.classList.remove('closing');
    modal.classList.add('active', 'opening');

    // Remove opening class after animation completes (280ms)
    setTimeout(() => {
        modal.classList.remove('opening');
    }, 280);

    // Initial image load
    cargarImagenModal(id);

    // Start live timecode clock in modal
    iniciarRelojModal();

    // Start automatic live refresh (every 3.5s)
    iniciarAutoRefrescoModal(id);
}

function cerrarModal() {
    if (!currentModalId) return;

    sfx.cameraClose(); // Mechanical shutter snap audio!

    // Clear auto-refresh intervals
    limpiarIntervalosModal();

    const modal = document.getElementById('camera-modal');
    modal.classList.remove('opening');
    modal.classList.add('closing');

    // After closing animation completes (200ms), hide modal completely
    setTimeout(() => {
        modal.classList.remove('active', 'closing');
        const img = document.getElementById('modal-img');
        if (img) img.src = ""; // Clear image to free resources
        currentModalId = null;
        currentZoomLevel = 1;
        actualizarZoomModal();
    }, 200);
}

// Close when clicking outside content (backdrop)
function handleBackdropClick(e) {
    if (e.target.id === 'camera-modal') {
        cerrarModal();
    }
}

// Keyboard shortcut: Escape to close modal
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentModalId !== null) {
        cerrarModal();
    }
});

// Load modal image with preloading to prevent flickering
function cargarImagenModal(id) {
    const imgEl = document.getElementById('modal-img');
    const timestamp = new Date().getTime();
    const targetUrl = `https://www.geobilbao.eus/geobilbao/api/cameraImage/GEOBILBAO_CamarasMunicipales/${id}?t=${timestamp}`;

    // Preload image
    const preloader = new Image();
    preloader.onload = () => {
        if (currentModalId === id) {
            imgEl.src = targetUrl;
            dispararEfectoDestelloCuadro();
        }
    };
    preloader.onerror = () => {
        if (currentModalId === id) {
            // Signal lost fallback SVG
            imgEl.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iMzM3IiB2aWV3Qm94PSIwIDAgNjAwIDMzNyI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMzciIGZpbGw9IiMwMzA1MDMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzAwZmYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W1NFw0FMIE5PIERJU1BPTklCTEVdPC90ZXh0Pjwvc3ZnPg==';
        }
    };
    preloader.src = targetUrl;
}

// Subtle phosphor frame flash when new frame updates
function dispararEfectoDestelloCuadro() {
    const flashEl = document.getElementById('frame-refresh-flash');
    if (!flashEl) return;
    flashEl.classList.remove('flash-active');
    void flashEl.offsetWidth; // Trigger reflow
    flashEl.classList.add('flash-active');
}

// Automatic image refresh with countdown bar
function iniciarAutoRefrescoModal(id) {
    limpiarIntervalosModal();

    const REFRESH_INTERVAL_MS = 3500;
    let elapsedMs = 0;
    const stepMs = 50;

    const progressBar = document.getElementById('refresh-progress-bar');
    const countdownText = document.getElementById('refresh-countdown-text');

    modalProgressInterval = setInterval(() => {
        elapsedMs += stepMs;
        const progressPercent = Math.min(100, (elapsedMs / REFRESH_INTERVAL_MS) * 100);
        if (progressBar) progressBar.style.width = `${progressPercent}%`;

        const remainingSec = Math.max(0, ((REFRESH_INTERVAL_MS - elapsedMs) / 1000)).toFixed(1);
        if (countdownText) countdownText.innerText = `${remainingSec}s`;

        if (elapsedMs >= REFRESH_INTERVAL_MS) {
            elapsedMs = 0;
            if (currentModalId === id) {
                cargarImagenModal(id);
                sfx.shutter(); // Soft shutter snapshot audio
            }
        }
    }, stepMs);
}

function forzarRefrescoCamara() {
    if (!currentModalId) return;
    sfx.shutter();
    cargarImagenModal(currentModalId);
    // Restart cycle
    iniciarAutoRefrescoModal(currentModalId);
}

function limpiarIntervalosModal() {
    if (modalRefreshInterval) clearInterval(modalRefreshInterval);
    if (modalProgressInterval) clearInterval(modalProgressInterval);
    if (modalClockInterval) clearInterval(modalClockInterval);
    modalRefreshInterval = null;
    modalProgressInterval = null;
    modalClockInterval = null;
}

// Live Timecode clock in modal OSD
function iniciarRelojModal() {
    const clockEl = document.getElementById('modal-live-clock');
    if (modalClockInterval) clearInterval(modalClockInterval);

    modalClockInterval = setInterval(() => {
        if (!clockEl || currentModalId === null) return;
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];
        const msStr = String(now.getMilliseconds()).padStart(3, '0');
        clockEl.innerText = `${timeStr}.${msStr}`;
    }, 45);
}

// Optical Zoom Toggle in Modal (1X -> 1.5X -> 2X -> 1X)
function toggleZoomModal() {
    sfx.beep(5500, 0.03, 0.04);
    if (currentZoomLevel === 1) currentZoomLevel = 1.5;
    else if (currentZoomLevel === 1.5) currentZoomLevel = 2;
    else currentZoomLevel = 1;

    actualizarZoomModal();
}

function actualizarZoomModal() {
    const img = document.getElementById('modal-img');
    const zoomText = document.getElementById('zoom-level-text');
    if (img) img.style.transform = `scale(${currentZoomLevel})`;
    if (zoomText) zoomText.innerText = `${currentZoomLevel}X`;
}

// --- VIEW MODE SWITCHER (MAP VS GRID) ---

function cambiarModoVista(modo) {
    sfx.beep();
    currentView = modo;

    const btnMap = document.getElementById('btn-mode-map');
    const btnGrid = document.getElementById('btn-mode-grid');
    const viewMap = document.getElementById('view-map');
    const viewGrid = document.getElementById('view-grid');
    const viewNameLabel = document.getElementById('current-view-name');

    if (modo === 'map') {
        btnMap.classList.add('active');
        btnGrid.classList.remove('active');
        viewMap.classList.add('active');
        viewGrid.classList.remove('active');
        if (viewNameLabel) viewNameLabel.innerText = "MAPA TÁCTICO";

        // Invalidate Leaflet size
        setTimeout(() => {
            if (map) map.invalidateSize();
        }, 150);
    } else {
        btnGrid.classList.add('active');
        btnMap.classList.remove('active');
        viewGrid.classList.add('active');
        viewMap.classList.remove('active');
        if (viewNameLabel) viewNameLabel.innerText = "MODO MATRIZ";

        generarGrilla();
    }
}

// --- SIDEBAR & DISTRICT FILTERING ---

function generarSidebar() {
    const lista = document.getElementById('district-list');
    lista.innerHTML = "";

    const keys = ["TODO", ...Object.keys(DISTRITOS).filter(k => k !== "TODO")];

    keys.forEach(nombre => {
        const item = document.createElement('div');
        item.className = 'menu-item';
        item.innerText = nombre === "TODO" ? "[ VER TODO ]" : nombre;
        item.onclick = () => {
            sfx.init();
            sfx.beep();
            cargarDistrito(nombre);
        };
        item.id = `btn-${nombre.replace(/\s+/g, '-')}`;
        lista.appendChild(item);
    });
}

function cargarDistrito(nombre) {
    activeDistrict = nombre;

    // Highlight button in sidebar
    const buttons = document.querySelectorAll('.menu-item');
    buttons.forEach(b => b.classList.remove('active'));

    const targetId = `btn-${nombre.replace(/\s+/g, '-')}`;
    const btn = document.getElementById(targetId);
    if (btn) btn.classList.add('active');

    const allowedIds = new Set(DISTRITOS[nombre] || []);

    // Filter map markers
    const bounds = [];
    markersMap.forEach(({ marker, camera }, id) => {
        const markerEl = document.getElementById(`marker-${id}`);
        const isMatch = (nombre === 'TODO' || allowedIds.has(id));

        if (isMatch) {
            if (markerEl) {
                markerEl.classList.remove('dimmed');
                markerEl.classList.add('highlighted');
            }
            bounds.push([camera.lat, camera.lng]);
        } else {
            if (markerEl) {
                markerEl.classList.add('dimmed');
                markerEl.classList.remove('highlighted');
            }
        }
    });

    // Fly to bounds if district selected
    if (map && bounds.length > 0) {
        if (nombre === 'TODO') {
            map.flyTo([43.2630, -2.9350], 13.5, { duration: 1 });
        } else {
            const latLngBounds = L.latLngBounds(bounds);
            map.flyToBounds(latLngBounds, {
                padding: [60, 60],
                maxZoom: 16,
                duration: 1.2
            });
        }
    }

    actualizarContadorCamarasVisibles();

    // If currently in grid view, refresh cards
    if (currentView === 'grid') {
        generarGrilla();
    }
}

// Text Search Filter
function filtrarPorTexto(query) {
    const q = query.trim().toLowerCase();
    const bounds = [];

    markersMap.forEach(({ marker, camera }, id) => {
        const markerEl = document.getElementById(`marker-${id}`);
        const matchDistrict = (activeDistrict === 'TODO' || (DISTRITOS[activeDistrict] && DISTRITOS[activeDistrict].includes(id)));
        const matchQuery = !q || camera.name.toLowerCase().includes(q) || String(id).includes(q) || camera.district.toLowerCase().includes(q);

        if (matchDistrict && matchQuery) {
            if (markerEl) {
                markerEl.classList.remove('dimmed');
                markerEl.classList.add('highlighted');
            }
            bounds.push([camera.lat, camera.lng]);
        } else {
            if (markerEl) {
                markerEl.classList.add('dimmed');
                markerEl.classList.remove('highlighted');
            }
        }
    });

    if (map && bounds.length > 0 && q.length >= 2) {
        map.flyToBounds(L.latLngBounds(bounds), { padding: [50, 50], maxZoom: 16, duration: 0.8 });
    }

    actualizarContadorCamarasVisibles();

    if (currentView === 'grid') {
        generarGrilla(q);
    }
}

function limpiarBusqueda() {
    const input = document.getElementById('camera-search');
    if (input) input.value = '';
    filtrarPorTexto('');
}

function actualizarContadorCamarasVisibles() {
    const activeIds = DISTRITOS[activeDistrict] || CAMERAS.map(c => c.id);
    const count = activeIds.length;
    const total = CAMERAS.length;

    const feedCountEl = document.getElementById('feed-count');
    if (feedCountEl) feedCountEl.innerText = `${count} / ${total}`;

    const pillEl = document.getElementById('hud-cam-pill');
    if (pillEl) pillEl.innerText = `${count} CÁMARAS MONITORIZADAS`;
}

// --- TACTICAL LAYER SELECTOR (NO API KEY REQUIRED) ---

function cambiarCapaMapa(tipo) {
    sfx.beep();
    if (!map || !tileLayers[tipo]) return;

    Object.values(tileLayers).forEach(layer => {
        if (map.hasLayer(layer)) map.removeLayer(layer);
    });

    tileLayers[tipo].addTo(map);
    currentTileLayer = tipo;

    const btnOsm = document.getElementById('btn-layer-osm');
    const btnSat = document.getElementById('btn-layer-sat');
    if (btnOsm && btnSat) {
        if (tipo === 'osm-dark') {
            btnOsm.classList.add('active');
            btnSat.classList.remove('active');
        } else {
            btnSat.classList.add('active');
            btnOsm.classList.remove('active');
        }
    }
}

// --- RADAR CONTROLS ---

function centrarBilbao() {
    sfx.beep();
    if (map) {
        map.flyTo([43.2630, -2.9350], 13.5, { duration: 1.2 });
    }
}

function toggleRadarSweep() {
    sfx.beep();
    radarSweepActive = !radarSweepActive;
    const overlay = document.getElementById('radar-sweep-container');
    const btn = document.getElementById('btn-radar-toggle');

    if (radarSweepActive) {
        if (overlay) overlay.classList.remove('hidden');
        if (btn) btn.innerText = "◉ RADAR: ACTIVO";
    } else {
        if (overlay) overlay.classList.add('hidden');
        if (btn) btn.innerText = "○ RADAR: INACTIVO";
    }
}

// --- GRID VIEW GENERATION (MODO MATRIZ) ---

function generarGrilla(searchQuery = '') {
    const container = document.getElementById('tablaCamaras');
    if (!container) return;
    container.innerHTML = '';

    const allowedIds = new Set(DISTRITOS[activeDistrict] || CAMERAS.map(c => c.id));
    const q = searchQuery.toLowerCase().trim();

    const filteredCameras = CAMERAS.filter(c => {
        const matchesDistrict = allowedIds.has(c.id);
        const matchesQuery = !q || c.name.toLowerCase().includes(q) || String(c.id).includes(q) || c.district.toLowerCase().includes(q);
        return matchesDistrict && matchesQuery;
    });

    filteredCameras.forEach(cam => {
        const card = document.createElement('div');
        card.className = 'cam-card';
        card.onclick = () => abrirModal(cam.id);
        card.innerHTML = `
            <div class="cam-header">
                <span>CAM_${String(cam.id).padStart(3, '0')}</span>
                <span>${cam.district}</span>
            </div>
            <div class="cam-feed">
                <img id="img-cam-${cam.id}" src="https://www.geobilbao.eus/geobilbao/api/cameraImage/GEOBILBAO_CamarasMunicipales/${cam.id}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMwMDAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0lHTkFMIExPU1Q8L3RleHQ+PC9zdmc+'" alt="Cámara ${cam.id}">
                <div class="feed-overlay"><div class="rec-dot"></div> EN VIVO</div>
            </div>
            <div class="cam-footer">
                <span>${cam.name}</span>
                <span>${cam.lat.toFixed(4)}N, ${cam.lng.toFixed(4)}W</span>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- CLOCK ---

function actualizarReloj() {
    const now = new Date();
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.innerText = now.toLocaleTimeString('es-ES');
    }
}
