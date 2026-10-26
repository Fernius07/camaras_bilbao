// ============================================================
// ESCUDO DE SEGURIDAD TÁCTICO - ANTI-INSPECCIÓN Y ANTI-TAMPER
// CENTRO DE SEGURIDAD DE BILBAO // PROTOCOLO DE DEFENSA ACTIVO
// ============================================================

(function () {
    'use strict';

    // --- REPRODUCTOR DE ALERTA SONORA (SÍNTESIS NATIVA) ---
    function sonarAlertaSeguridad() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(880, now);
            osc.frequency.exponentialRampToValueAtTime(220, now + 0.2);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.2);
        } catch (e) { }
    }

    // --- HUD TOAST NOTIFICATION ---
    let toastTimeout = null;
    function mostrarAlertaSeguridad(mensaje) {
        sonarAlertaSeguridad();
        let toast = document.getElementById('security-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'security-toast';
            toast.className = 'security-hud-toast';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `
            <div class="toast-inner">
                <span class="toast-badge">⚠️ PROTOCOLO DE DEFENSA</span>
                <span class="toast-msg">${mensaje}</span>
            </div>
        `;
        toast.classList.add('visible');

        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            if (toast) toast.classList.remove('visible');
        }, 2400);
    }

    // --- 1. BLOQUEO DE CLIC DERECHO (MENÚ CONTEXTUAL) ---
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        e.stopPropagation();
        mostrarAlertaSeguridad("ACCIÓN DENEGADA // MENÚ CONTEXTUAL BLOQUEADO");
        return false;
    }, true);

    // --- 2. BLOQUEO DE ATAJOS DE TECLADO (F12, CTRL+SHIFT+I, CTRL+U, ETC.) ---
    window.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            mostrarAlertaSeguridad("ACCESO DENEGADO // CONSOLA DEPURACIÓN BLOQUEADA");
            return false;
        }

        // Ctrl + Shift + I (DevTools) / Ctrl + Shift + J (Consola) / Ctrl + Shift + C (Inspeccionar)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (
            e.key === 'I' || e.key === 'i' || e.keyCode === 73 ||
            e.key === 'J' || e.key === 'j' || e.keyCode === 74 ||
            e.key === 'C' || e.key === 'c' || e.keyCode === 67
        )) {
            e.preventDefault();
            e.stopPropagation();
            mostrarAlertaSeguridad("ACCESO DENEGADO // INSPECCIÓN DE CÓDIGO BLOQUEADA");
            return false;
        }

        // Ctrl + U (Ver código fuente)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            e.stopPropagation();
            mostrarAlertaSeguridad("ACCESO DENEGADO // CÓDIGO FUENTE PROTEGIDO");
            return false;
        }

        // Ctrl + S (Guardar página)
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
            e.preventDefault();
            e.stopPropagation();
            mostrarAlertaSeguridad("ACCESO DENEGADO // DESCARGA RESTRINGIDA");
            return false;
        }

        // Ctrl + P (Imprimir / Exportar a PDF)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P' || e.keyCode === 80)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, true);

    // --- 3. BLOQUEO DE SELECCIÓN Y ARRASTRE DE ELEMENTOS ---
    window.addEventListener('selectstart', function (e) {
        if (e.target && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            return false;
        }
    });

    window.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    // --- 4. NEUTRALIZACIÓN DE CONSOLA (MUTE TOTAL) ---
    try {
        const noop = function () { };
        ['log', 'debug', 'info', 'warn', 'error', 'table', 'dir', 'trace'].forEach(function (method) {
            if (window.console && window.console[method]) {
                window.console[method] = noop;
            }
        });
    } catch (e) { }

    // --- 5. TRAMPA DEPURADORA (ANTI-DEBUGGER LOOP) ---
    function ejecutarTrampaDepurador() {
        try {
            (function () {
                return false;
            }
            ['constructor']('debugger')
            ['call']());
        } catch (e) { }
    }
    setInterval(ejecutarTrampaDepurador, 1000);

    // --- 6. DETECCIÓN ACTIVA DE DEVTOOLS ACOPLADO ---
    let devtoolsActivo = false;
    const umbral = 160;

    function comprobarDevTools() {
        const diffAncho = window.outerWidth - window.innerWidth > umbral;
        const diffAlto = window.outerHeight - window.innerHeight > umbral;
        const abierto = diffAncho || diffAlto;

        if (abierto && !devtoolsActivo) {
            devtoolsActivo = true;
            activarEscudoLockdown();
        } else if (!abierto && devtoolsActivo) {
            devtoolsActivo = false;
            desactivarEscudoLockdown();
        }
    }

    function activarEscudoLockdown() {
        let shield = document.getElementById('devtools-lockdown-shield');
        if (!shield) {
            shield = document.createElement('div');
            shield.id = 'devtools-lockdown-shield';
            shield.className = 'devtools-lockdown-overlay';
            shield.innerHTML = `
                <div class="lockdown-box">
                    <div class="lockdown-header">
                        <span class="lockdown-badge">SISTEMA DE SEGURIDAD DE EUSKADI</span>
                        <div class="lockdown-title">⚠️ ACCESO RESTRINGIDO // DEPURADOR DETECTADO ⚠️</div>
                    </div>
                    <div class="lockdown-body">
                        <p class="lockdown-p">Se ha detectado una herramienta de inspección de código o consola de desarrollo activa (F12 / DevTools).</p>
                        <p class="lockdown-p warning-highlight">Por motivos de seguridad y derechos de autor, el código fuente, la telemetría y los flujos de las cámaras de tráfico de Euskadi están protegidos contra extracción y réplica no autorizada.</p>
                        <p class="lockdown-p"><strong>Cierre las herramientas de desarrollo</strong> para reanudar la señal del centro de mando táctico.</p>
                    </div>
                    <div class="lockdown-footer">
                        <span>ESTADO: BLOQUEO DEFENSIVO ACTIVO</span>
                        <span>REF: EUSKADI-CCTV-SEC-99</span>
                    </div>
                </div>
            `;
            document.body.appendChild(shield);
        }
        shield.style.display = 'flex';
        try { if (window.console && window.console.clear) window.console.clear(); } catch (e) { }
    }

    function desactivarEscudoLockdown() {
        const shield = document.getElementById('devtools-lockdown-shield');
        if (shield) {
            shield.style.display = 'none';
        }
    }

    setInterval(comprobarDevTools, 600);
    window.addEventListener('resize', comprobarDevTools);

})();
