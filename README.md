# SISTEMA DE CÁMARAS Y RADAR TÁCTICO - BILBAO

Sistema interactivo de visualización y monitorización de las cámaras de tráfico del Ayuntamiento de Bilbao (GeoBilbao / Open Data Euskadi), ambientado con una interfaz táctica/ciberpunk tipo centro de mando de seguridad municipal.

![Licencia](https://img.shields.io/badge/licencia-MIT-green.svg)
![Estado](https://img.shields.io/badge/estado-activo-brightgreen.svg)
![Cámaras](https://img.shields.io/badge/cámaras%20monitorizadas-125-00ff00.svg)

---

## 🚀 Mejoras y Nuevas Características

1. **Mapa Táctico Principal por Defecto**:
   - Al iniciar sesión, la vista principal ya no es una lista de tarjetas en cuadrícula, sino un **mapa táctico interactivo** centrado en Bilbao.
   - Capa cartográfica oscura con procesado visual verde fósforo CRT / radar táctico.
   - Marcadores de cámaras personalizados con retícula luminosa, ondas de pulso de radar (`ping wave`) e identificador de cámara.
   - Seguimiento de coordenadas GPS en tiempo real en la barra HUD superior con el movimiento del cursor.
   - Modo de barrido radar continuo que simula un escáner de vigilancia perimetral.

2. **Animación Mecánica de Apertura de Cámara ("Obturador de Iris")**:
   - Al pulsar sobre cualquier icono de cámara en el mapa, se activa una animación que simula la **apertura física del objetivo de una cámara**:
     - Cuchillas de obturador de iris girando y abriéndose radialmente.
     - Destello de lente óptico (*lens flare*).
     - Expansión de escala elástica tipo ventana táctil de monitorización militar.
     - Enclavamiento de corchetes de enfoque (*focus brackets*) sobre la señal de vídeo.
     - Efectos de sonido sintetizados en tiempo real mediante la **Web Audio API** (zumbido de servomotor de enfoque y chasquidos de obturador).

3. **Monitorización en Tiempo Real y Actualización Automática de Imágenes**:
   - La imagen de la cámara se actualiza automáticamente cada **3.5 segundos** con bypass de caché (`?t=timestamp`).
   - Precarga en memoria (*preloading*) para evitar parpadeos negros al cambiar de fotograma.
   - Barra de progreso inferior y cuenta regresiva de actualización en vivo.
   - Destello sutil de captura en cada refresco de fotograma y sonido de obturador.
   - Botón de refresco manual instantáneo (`⟳ REFRESCAR`).
   - Zoom óptico digital conmutador (`1X`, `1.5X`, `2X`).
   - Telemetría OSD (código de tiempo con milisegundos, indicador REC parpadeante, distrito, coordenadas exactas y resolución).

4. **Animación Mecánica de Cierre**:
   - Al pulsar `[ CERRAR ]`, el botón `[ DESCONECTAR ✕ ]`, la tecla `Escape` o hacer clic fuera del visor:
     - Las cuchillas del obturador de diafragma se contraen hacia el punto focal.
     - Efecto de colapso CRT hacia el centro con desenfoque progresivo.
     - Sonido de cierre de obturador mecánico y desconexión electrónica sintetizada.
     - Limpieza automática de intervalos para liberar memoria y tráfico de red.

5. **Filtrado por Distritos y Buscador en Tiempo Real**:
   - Filtrado rápido por distritos de Bilbao: *Deusto, Uribarri, Otxarkoaga-Txurdinaga, Begoña, Ibaiondo, Abando, Errekalde, Basurtu-Zorrotza*.
   - Al seleccionar un distrito, el mapa realiza un vuelo suave (*smooth flyToBounds*) hacia las cámaras del sector seleccionado.
   - Buscador por texto para encontrar cámaras por calle o número de ID al instante.
   - Selector en la barra superior para alternar entre **MAPA TÁCTICO** y **MODO MATRIZ** (cuadrícula clásica).

---

## 🛠️ Tecnologías Empleadas

- **HTML5 & CSS3 Avanzado**: Animaciones `clip-path`, transformaciones 3D, filtros SVG/CRT, maquetación Flexbox y Grid.
- **JavaScript Moderno (ES6+)**: Lógica asíncrona, control de intervalos, precarga de imágenes.
- **Leaflet.js**: Motor cartográfico ligero integrado localmente en `vendor/leaflet/`.
- **OpenStreetMap & Esri World Imagery (100% Libres, Sin API Key)**: Callejero táctico oscuro y satélite militar de alta resolución sin marcas de agua ni límites de clave.
- **Web Audio API**: Síntesis nativa de audio en el navegador (no requiere archivos externos de audio .mp3/.wav).
- **Bilbao Open Data & GeoBilbao API**: Datos geográficos y transmisiones oficiales del Ayuntamiento de Bilbao.

---

## 💻 Cómo Ejecutar el Proyecto

Puedes abrir directamente el archivo `index.html` en cualquier navegador moderno o servirlo con cualquier servidor HTTP local:

```bash
# Con Node.js (npx)
npx serve .

# O con Python
python -m http.server 8000
```

1. Pulsa en **"INICIAR SESIÓN"** para ver la secuencia de acceso táctica.
2. Explora el mapa de Bilbao y haz clic en cualquiera de las 125 cámaras para abrir su señal con la animación de obturador.
