// --- CONFIG ---
const distritos = {
    "DEUSTO": [6, 16, 18, 20, 39, 73, 74, 75, 78, 79, 85, 86, 89, 90, 91, 149, 150, 151, 152, 154],
    "URIBARRI": [15, 17, 29, 50, 51, 53, 57, 80],
    "OTXARKOAGA-TXURDINAGA": [21, 40, 66, 87, 88],
    "BEGOÑA": [22, 23, 24, 43, 45, 46, 47, 58, 70, 71],
    "IBAIONDO": [13, 14, 25, 28, 38, 52, 54, 55, 77, 84],
    "ABANDO": [2, 4, 5, 7, 8, 9, 10, 11, 12, 19, 26, 27, 32, 33, 34, 35, 36, 37, 41, 42, 44, 145, 146, 147, 203],
    "ERREKALDE": [31, 56, 76],
    "BASURTU-ZORROTZA": [3, 30, 48, 49, 59, 60, 61, 62, 63, 65, 67, 68, 69, 81, 82, 83]
};

// Calculate "TODO" (All) list by combining all unique IDs
const allIds = new Set();
Object.values(distritos).forEach(ids => ids.forEach(id => allIds.add(id)));
distritos["TODO"] = Array.from(allIds).sort((a, b) => a - b);

let currentIds = distritos["TODO"]; // Default to ALL

// --- MODAL STATE ---
let currentModalId = null;

// Helper to find district for a camera ID
function getDistritoPorCamara(id) {
    for (const [nombre, ids] of Object.entries(distritos)) {
        if (nombre !== "TODO" && ids.includes(id)) {
            return nombre;
        }
    }
    return "UNKNOWN";
}

function abrirModal(id) {
    sfx.beep();
    currentModalId = id;
    const modal = document.getElementById('camera-modal');
    modal.classList.add('active');

    document.getElementById('modal-cam-name').innerText = `DETALLE CAM_${String(id).padStart(3, '0')}`;
    const img = document.getElementById('modal-img');
    img.src = `https://www.geobilbao.eus/geobilbao/api/cameraImage/GEOBILBAO_CamarasMunicipales/${id}?t=${new Date().getTime()}`;

    const distrito = getDistritoPorCamara(id);
    document.getElementById('modal-cam-data').innerText = `ID: ${id} - DISTRITO: ${distrito}`;
}

function cerrarModal() {
    sfx.beep();
    const modal = document.getElementById('camera-modal');
    modal.classList.remove('active');
    currentModalId = null;
    document.getElementById('modal-img').src = ""; // Clear to stop loading
}

// --- AUDIO SYSTEM ---
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

const sfx = {
    init: () => {
        if (!audioCtx) audioCtx = new AudioCtx();
        if (audioCtx.state === 'suspended') audioCtx.resume();
    },

    // Single extremely high-pitched beep for everything (electronic feel)
    beep: () => {
        if (!audioCtx) return;
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'sine';
        // Extremely high "maximum" pitch: 12000Hz
        oscillator.frequency.setValueAtTime(12000, audioCtx.currentTime);

        // Very short blip
        gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.04);
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
        sfx.beep(); // Unified high pitch sound
        await new Promise(r => setTimeout(r, speed + Math.random() * 30));
    }
    return;
}

async function logMessage(msg, delay = 200) {
    const logBox = document.getElementById('status-log');
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.innerText = `> ${msg}`;
    logBox.appendChild(div);
    logBox.scrollTop = logBox.scrollHeight;
    sfx.beep(); // Unified sound
    await new Promise(r => setTimeout(r, delay));
}

async function iniciarSecuenciaLogin() {
    // START AUDIO CONTEXT ON FIRST INTERACTION
    sfx.init();
    sfx.beep(); // Unified startup sound

    const btn = document.getElementById('btn-login');
    btn.disabled = true;
    btn.innerText = "INICIALIZANDO...";

    document.getElementById('cursor-user').style.display = "inline-block";

    await logMessage("Conectando con servidor seguro...");
    await new Promise(r => setTimeout(r, 600));

    await logMessage("Solicitando credenciales...");
    await typeText('user-input', 'ADMIN_01', 80);
    await logMessage("Usuario identificado.");

    await new Promise(r => setTimeout(r, 400));
    await typeText('pass-input', '873901FG1898231R032', 40, true);
    await logMessage("Verificando hash RSA-4096...");

    await new Promise(r => setTimeout(r, 800));
    await logMessage("AUTORIZACIÓN CORRECTA.", 100);
    await logMessage("Estableciendo enlace de video...", 500);

    btn.innerText = "ACCESO CONCEDIDO";
    btn.style.borderColor = "#fff";
    btn.style.color = "#fff";
    btn.style.background = "var(--term-green)";

    setTimeout(() => {
        document.getElementById('login-screen').style.opacity = '0';
        document.getElementById('login-screen').style.transition = 'opacity 1s';

        setTimeout(() => {
            document.getElementById('login-screen').style.display = 'none';
            const dashboard = document.getElementById('dashboard');
            dashboard.style.display = 'flex';
            window.dispatchEvent(new Event('resize'));

            iniciarSistemaCamaras();
        }, 1000);
    }, 800);
}

// --- DASHBOARD LOGIC ---

function iniciarSistemaCamaras() {
    console.log("Sistema de cámaras iniciado.");
    generarSidebar();
    cargarDistrito("TODO");

    setInterval(actualizarCamaras, 5000);
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
}

function generarSidebar() {
    const lista = document.getElementById('district-list');
    lista.innerHTML = "";

    // Specific order: TODO first, then others
    const keys = ["TODO", ...Object.keys(distritos).filter(k => k !== "TODO")];

    keys.forEach(nombre => {
        const item = document.createElement('div');
        item.className = 'menu-item';
        item.innerText = nombre === "TODO" ? "[ VER TODO ]" : nombre;
        item.onclick = () => {
            sfx.init(); // Ensure awake
            sfx.beep();
            cargarDistrito(nombre);
        };
        item.id = `btn-${nombre.replace(/\s+/g, '-')}`;
        lista.appendChild(item);
    });
}

function cargarDistrito(nombre) {
    currentIds = distritos[nombre];

    const buttons = document.querySelectorAll('.menu-item');
    buttons.forEach(b => b.classList.remove('active'));

    const targetId = `btn-${nombre.replace(/\s+/g, '-')}`;
    const btn = document.getElementById(targetId);
    if (btn) btn.classList.add('active');

    generarGrilla();
}

function generarGrilla() {
    const container = document.getElementById('tablaCamaras');
    container.innerHTML = '';

    currentIds.forEach(id => {
        const distrito = getDistritoPorCamara(id);
        const card = document.createElement('div');
        card.className = 'cam-card';
        card.onclick = () => abrirModal(id); // Click handler for modal
        card.innerHTML = `
            <div class="cam-header">
                <span>CAM_${String(id).padStart(3, '0')}</span>
                <span>SEGURA</span>
            </div>
            <div class="cam-feed">
                <img id="img-cam-${id}" src="https://www.geobilbao.eus/geobilbao/api/cameraImage/GEOBILBAO_CamarasMunicipales/${id}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMwMDAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0lHTkFMIExPU1Q8L3RleHQ+PC9zdmc+'">
                <div class="feed-overlay"><div class="rec-dot"></div> EN VIVO</div>
            </div>
            <div class="cam-footer">
                <span>ID: ${id}</span>
                <span>${distrito}</span>
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById('feed-count').innerText = `${currentIds.length} / 200`;
}

function actualizarCamaras() {
    const timestamp = new Date().getTime();

    // Update dashboard images
    const images = document.querySelectorAll('.cam-feed img');
    images.forEach(img => {
        const id = img.id.replace('img-cam-', '');
        img.src = `https://www.geobilbao.eus/geobilbao/api/cameraImage/GEOBILBAO_CamarasMunicipales/${id}?t=${timestamp}`;
    });

    // Update Modal Image if active
    if (currentModalId !== null) {
        const modalImg = document.getElementById('modal-img');
        if (modalImg) {
            modalImg.src = `https://www.geobilbao.eus/geobilbao/api/cameraImage/GEOBILBAO_CamarasMunicipales/${currentModalId}?t=${timestamp}`;
        }
    }
}

function actualizarReloj() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString('es-ES');
}
