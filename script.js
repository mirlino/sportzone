/**
 * SportZone · Interacciones ligeras para maqueta inicial
 * Sin almacenamiento persistente, cálculo de importes ni filtros dinámicos.
 */

(function () {
  'use strict';

  // Respaldo para imágenes si algún recurso no carga
  const imagenes = document.querySelectorAll('img');
  imagenes.forEach((img) => {
    img.addEventListener('error', () => {
      const contenedor = img.closest('.hero-media, .tarjeta-media');
      if (contenedor) {
        contenedor.classList.add('media-con-error');
      }
    });
  });

  // Manejo del formulario de solicitud de reserva (reserva.html)
  const formulario = document.getElementById('formulario-reserva');
  if (!formulario) {
    return;
  }

  const campoNombre = document.getElementById('nombre');
  const campoTelefono = document.getElementById('telefono');
  const campoDisciplina = document.getElementById('disciplina');
  const campoCancha = document.getElementById('cancha');
  const campoFecha = document.getElementById('fecha');
  const campoHora = document.getElementById('hora');
  const campoHoras = document.getElementById('horas');
  const estadoReserva = document.getElementById('estado-reserva');

  // Establecer fecha mínima de referencia (hoy) sin bloquear entradas válidas futuras
  if (campoFecha) {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    campoFecha.min = `${anio}-${mes}-${dia}`;
  }

  const limpiarErrorCampo = (campo) => {
    if (!campo) return;
    campo.removeAttribute('aria-invalid');
    const errorEl = document.getElementById(`error-${campo.id}`);
    if (errorEl) {
      errorEl.textContent = '';
    }
  };

  const marcarErrorCampo = (campo, mensaje) => {
    if (!campo) return;
    campo.setAttribute('aria-invalid', 'true');
    const errorEl = document.getElementById(`error-${campo.id}`);
    if (errorEl) {
      errorEl.textContent = mensaje;
    }
  };

  const campos = [
    campoNombre,
    campoTelefono,
    campoDisciplina,
    campoCancha,
    campoFecha,
    campoHora,
    campoHoras,
  ];

  campos.forEach((campo) => {
    if (!campo) return;
    const evento = campo.tagName === 'SELECT' ? 'change' : 'input';
    campo.addEventListener(evento, () => {
      limpiarErrorCampo(campo);
    });
  });

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    campos.forEach(limpiarErrorCampo);
    let primerInvalido = null;

    const registrarInvalido = (campo, mensaje) => {
      marcarErrorCampo(campo, mensaje);
      if (!primerInvalido) {
        primerInvalido = campo;
      }
    };

    const nombre = campoNombre.value.trim();
    if (nombre.length < 2) {
      registrarInvalido(campoNombre, 'Ingresa el nombre del responsable.');
    }

    const telefono = campoTelefono.value.trim();
    const digitosTelefono = telefono.replace(/\D/g, '');
    if (digitosTelefono.length < 7) {
      registrarInvalido(campoTelefono, 'Ingresa un teléfono de contacto válido.');
    }

    if (!campoDisciplina.value) {
      registrarInvalido(campoDisciplina, 'Selecciona una disciplina deportiva.');
    }

    if (!campoCancha.value) {
      registrarInvalido(campoCancha, 'Selecciona una cancha o área.');
    }

    if (!campoFecha.value) {
      registrarInvalido(campoFecha, 'Selecciona la fecha de la reserva.');
    }

    const horaValor = campoHora.value;
    if (!horaValor) {
      registrarInvalido(campoHora, 'Selecciona la hora de inicio.');
    } else if (horaValor < '07:00' || horaValor > '22:00') {
      registrarInvalido(campoHora, 'El horario de inicio es de 7:00 a. m. a 10:00 p. m.');
    }

    const cantidadHoras = Number(campoHoras.value);
    if (!Number.isInteger(cantidadHoras) || cantidadHoras < 1 || cantidadHoras > 4) {
      registrarInvalido(campoHoras, 'Elige entre 1 y 4 horas.');
    }

    if (primerInvalido) {
      estadoReserva.className = 'estado-reserva estado-error';
      estadoReserva.hidden = false;
      estadoReserva.innerHTML =
        '<h3>Revisa los campos obligatorios</h3><p>Completa la información resaltada para enviar tu solicitud de turno.</p>';
      primerInvalido.focus();
      return;
    }

    const canchaTexto = campoCancha.options[campoCancha.selectedIndex].text;
    const disciplinaTexto = campoDisciplina.options[campoDisciplina.selectedIndex].text;

    estadoReserva.className = 'estado-reserva';
    estadoReserva.hidden = false;
    estadoReserva.replaceChildren();

    const titulo = document.createElement('h3');
    titulo.textContent = 'Solicitud de turno recibida';

    const mensaje = document.createElement('p');
    mensaje.textContent =
      'Hemos registrado los datos de tu solicitud en esta maqueta inicial. Nuestro equipo confirmará tu turno en horario del complejo.';

    const listaResumen = document.createElement('ul');
    listaResumen.className = 'estado-resumen';

    const items = [
      `Responsable: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Disciplina: ${disciplinaTexto}`,
      `Cancha o área: ${canchaTexto}`,
      `Fecha y hora de inicio: ${campoFecha.value} · ${horaValor}`,
      `Duración solicitada: ${cantidadHoras} ${cantidadHoras === 1 ? 'hora' : 'horas'}`,
    ];

    items.forEach((texto) => {
      const li = document.createElement('li');
      li.textContent = texto;
      listaResumen.appendChild(li);
    });

    estadoReserva.appendChild(titulo);
    estadoReserva.appendChild(mensaje);
    estadoReserva.appendChild(listaResumen);
    estadoReserva.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
})();
