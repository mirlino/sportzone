-- SportZone · ISW-306 · Fase 1
-- Base de datos del complejo multideportivo (MariaDB)

CREATE DATABASE IF NOT EXISTS sportzone
  CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE sportzone;

CREATE TABLE clientes (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nombre_responsable VARCHAR(100) NOT NULL,
  telefono VARCHAR(15) NOT NULL
);

CREATE TABLE disciplinas (
  id_disciplina INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE canchas (
  id_cancha INT AUTO_INCREMENT PRIMARY KEY,
  id_disciplina INT NOT NULL,
  nombre VARCHAR(50) NOT NULL UNIQUE,
  tarifa_hora DECIMAL(10,2) NOT NULL,
  CONSTRAINT fk_canchas_disciplina
    FOREIGN KEY (id_disciplina) REFERENCES disciplinas(id_disciplina)
);

CREATE TABLE reservas (
  id_reserva INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente INT NOT NULL,
  id_cancha INT NOT NULL,
  fecha DATE NOT NULL,
  hora_inicio TIME NOT NULL,
  cantidad_horas TINYINT NOT NULL,
  monto_total DECIMAL(10,2) NOT NULL,
  estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente',
  fecha_solicitud DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT chk_horas CHECK (cantidad_horas BETWEEN 1 AND 4),
  CONSTRAINT chk_hora_inicio CHECK (hora_inicio BETWEEN '07:00:00' AND '22:00:00'),
  CONSTRAINT fk_reservas_cliente
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
  CONSTRAINT fk_reservas_cancha
    FOREIGN KEY (id_cancha) REFERENCES canchas(id_cancha)
);

INSERT INTO disciplinas (nombre) VALUES
  ('Fútbol Sintético'), ('Baloncesto'), ('Voleibol'), ('Golf');

INSERT INTO canchas (id_disciplina, nombre, tarifa_hora) VALUES
  (1, 'Fútbol 5', 2000.00),
  (1, 'Fútbol 7', 3200.00),
  (2, 'Baloncesto', 1800.00),
  (3, 'Voleibol', 1500.00),
  (4, 'Golf', 1200.00);

INSERT INTO clientes (nombre_responsable, telefono) VALUES
  ('Luis Ramírez', '809-555-0148');

INSERT INTO reservas (id_cliente, id_cancha, fecha, hora_inicio, cantidad_horas, monto_total) VALUES
  (1, 1, '2026-11-28', '19:00:00', 2, 4000.00);
