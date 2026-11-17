# SportZone · Complejo Multideportivo

Aplicación web multipágina para **SportZone**, complejo multideportivo ubicado en Santo Domingo Este. Permite consultar el catálogo de disciplinas deportivas, sus tarifas por hora, las amenidades del complejo y realizar solicitudes de reserva de cancha en línea.

**Demo en vivo (Vercel):** [SportZone · Complejo Multideportivo en Santo Domingo Este](https://sportzones.vercel.app/index.html)

---

## Características principales

- **Página de Inicio (`index.html`)**:
  - **Bloque Hero a ancho completo**: presentación principal con corte diagonal, imagen de las instalaciones iluminadas y llamada a la acción hacia el formulario de reservas.
  - **Catálogo de disciplinas (`.tarjeta-deporte`)**: cuadrícula `2 × 2` con tarjetas horizontales, divisor diagonal en verde esmeralda, fotografías por deporte, tarifas por hora y microinteracciones al pasar el cursor (`:hover`).
  - **Amenidades del complejo**: listado visual con iconografía vectorial (iluminación LED, parqueo vigilado, cafetería e hidratación, vestidores y duchas, préstamo o alquiler de equipos).
- **Página de Reservas (`reserva.html`)**:
  - **Formulario estructurado (`#formulario-reserva`)**: agrupado semánticamente en *Datos de contacto* y *Datos del turno*.
  - **Validación en cliente (`script.js`)**: verificación de campos obligatorios, formato de teléfono, rango horario (`07:00` a `22:00`) y duración permitida (`1` a `4` horas), con mensajes accesibles (`role="alert"`, `aria-live="polite"`) y resumen de confirmación.
- **Diseño adaptable y accesible**:
  - Hoja de estilos única (`styles.css`) con variables CSS y puntos de quiebre para escritorio (`≥ 1024px`), tableta (`768px – 1023px`) y móvil (`< 768px`).
  - Enlace de salto al contenido principal (`.skip-link`), etiquetas visibles asociadas a cada control y foco de teclado claramente definido (`:focus-visible`).

---

## Disciplinas y tarifas

| Disciplina | Modalidad / Cancha | Tarifa por hora |
| :--- | :--- | :--- |
| **Fútbol sintético** | Fútbol 5 | RD$2,000/h |
| **Fútbol sintético** | Fútbol 7 | RD$3,200/h |
| **Baloncesto** | Cancha reglamentaria | RD$1,800/h |
| **Voleibol** | Indoor y arena | RD$1,500/h |
| **Golf** | Driving range y mini-golf | RD$1,200/h |

---

## Sistema visual y paleta de colores

| Token CSS | Color | Valor Hex | Uso principal |
| :--- | :--- | :--- | :--- |
| `--color-primario` | Verde profundo | `#065F46` | Encabezado, pie de página, bordes de títulos y tarjetas |
| `--color-secundario` | Verde esmeralda | `#10B981` | Franjas diagonales, bordes y estados interactivos |
| `--color-acento` | Verde lima | `#84CC16` | Botón principal (`.btn-reserva`) e indicador activo del menú |
| `--color-fondo` | Gris azulado claro | `#F8FAFC` | Fondo general de página y tarjetas |
| `--color-texto` | Azul pizarra oscuro | `#0F172A` | Tipografía principal, títulos y etiquetas |

---

## Estructura del proyecto

```text
sportzone/
├── index.html                        # Página de inicio (Hero, disciplinas y amenidades)
├── reserva.html                      # Página de solicitud de reserva de cancha
├── styles.css                        # Hoja de estilos compartida y diseño responsive
├── script.js                         # Validación del formulario y respaldo de imágenes
├── public/
│   └── assets/
│       ├── sportzone-logo.svg        # Logotipo oficial de SportZone
│       ├── SportZone_Icono.svg       # Isotopo del complejo
│       └── SportZone_diseno_visual.pdf
├── src/
│   └── assets/
│       └── images/                   # Fotografías de instalaciones y disciplinas
│           ├── hero-sportzone.jpg
│           ├── futbol-sintetico.jpg
│           ├── baloncesto.jpg
│           ├── voleibol.jpg
│           └── golf.jpg
├── package.json                      # Scripts y configuración del entorno
└── vite.config.ts                    # Configuración de empaquetado multipágina (Vite)
```

---

## Requisitos e instalación

- **Node.js** `>= 18`
- **npm** o **pnpm**

1. **Instalar dependencias**:
   ```bash
   pnpm install
   # o con npm:
   npm install
   ```

2. **Iniciar el servidor de desarrollo**:
   ```bash
   pnpm dev
   # o con npm:
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

3. **Generar compilación de producción**:
   ```bash
   pnpm build
   # o con npm:
   npm run build
   ```
