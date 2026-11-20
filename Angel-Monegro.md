### Informe de Fase 1: Maquetación Web – Proyecto SportZone

#### 1. Sobre el proyecto
SportZone es una plataforma web integral enfocada en el mundo del deporte. En esta primera etapa de desarrollo, nos centramos en construir la arquitectura visual, el esqueleto estructural y la interfaz de usuario de la aplicación (maquetación estática). Esto deja establecida una base sólida, navegable y estructurada para que los usuarios puedan explorar los servicios deportivos, comprender la propuesta de valor y interactuar con el sistema inicial de reservas mediante un flujo de formularios optimizado.
---

#### 2. Estructura y páginas del sitio (Desglose de funcionalidades y flujo)
Para organizar de manera limpia la navegación y la experiencia de usuario, el sitio se divide en dos páginas principales interconectadas que responden a una lógica de interacción específica:

* **Página de Inicio (`index.html`) — Portada y Acceso Principal:**
  * **Propósito:** Funciona como el punto de bienvenida y presentación de la propuesta de valor de SportZone.
  * **Estructura Semántica:** Implementa etiquetas estandarizadas de HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`) para garantizar una correcta accesibilidad y jerarquía visual.
  * **Componentes funcionales:** Contiene una sección de presentación con una imagen representativa del servicio deportivo, una lista informativa detallando las ventajas de la plataforma, y un botón/enlace de llamada a la acción (*Call to Action*) que redirige al usuario hacia el módulo de registro y reservas.

* **Página de Formulario y Reservas (`formulario.html`) — Desglose del Proceso de Reserva:**
  * **Propósito:** Diseñada exclusivamente para la recolección de datos del usuario y la gestión lógica del proceso de reservas deportivas.
  * **Flujo de Interacción y Funcionalidad de la Reserva:**
    1. **Identificación del Usuario:** El formulario solicita datos personales esenciales (nombre completo y correo electrónico) mediante campos de entrada estructurados (`<input type="text">`, `<input type="email">`) para asegurar la validez de los datos recolectados.
    2. **Selección del Servicio o Actividad:** Incluye selectores desplegables (`<select>`) lógicamente organizados para que el usuario pueda elegir el tipo de disciplina deportiva, horario o recurso que desea apartar.
    3. **Confirmación y Envío:** Cuenta con un botón de envío (`<button type="submit">`) que simula la culminación del proceso de apartado de la instalación o servicio.
    4. **Navegación Fluida:** Integra un menú de navegación interno que permite al usuario regresar de forma inmediata a la página de inicio sin perder el hilo de navegación.

---

#### 3. Tecnologías y estándares aplicados
Para cumplir rigurosamente con los requerimientos técnicos de la fase, se implementaron las siguientes herramientas y normativas:

* **HTML5 Semántico:** Uso riguroso de contenedores informativos y semánticos para optimizar el SEO, la accesibilidad web y la legibilidad del código fuente (`<header>`, `<nav>`, `<main>`, `<footer>`, listas, enlaces e imágenes).
* **Hoja de Estilos Externa (`styles.css`):** Un archivo CSS centralizado que enlaza ambas páginas. Está estructurado mediante selectores de etiqueta, de clase y de ID, asegurando una paleta de colores coherente, diseño adaptativo y una identidad visual uniforme en todo el sitio.
* **Control de Versiones (Git y GitHub):** La gestión y el versionado del código fuente se ejecutaron de manera colaborativa dentro del equipo, trabajando de forma ordenada sobre la rama asignada `fase-1-maquetacion`.
