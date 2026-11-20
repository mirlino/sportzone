[README.md](https://github.com/user-attachments/files/35004756/README.md)
# Base de datos de SportZone

Aporte de **Ramón Yoel Rojas de Jesús** y **José Aníbal Rodríguez Liriano** a la Fase 1 (ISW-306).

## Contenido

| Archivo | Descripción |
| :--- | :--- |
| `sportzone.sql` | Script para crear la base de datos `sportzone`, sus 4 tablas y datos de ejemplo (MariaDB). |
| `sportzone_bd.drawio` | Diagrama entidad-relación editable (diagrams.net). |
| `sportzone_bd.png` | Imagen del diagrama. |

## Modelo

- **disciplinas**: Fútbol Sintético, Baloncesto, Voleibol y Golf.
- **canchas**: Fútbol 5, Fútbol 7, Baloncesto, Voleibol y Golf, con su tarifa por hora. Cada cancha pertenece a una disciplina.
- **clientes**: nombre del responsable y teléfono de contacto.
- **reservas**: fecha, hora de inicio (07:00 a 22:00), cantidad de horas (1 a 4), monto total y estado. Cada reserva une a un cliente con una cancha.

## Cómo ejecutarlo

```bash
sudo mariadb < sportzone.sql
```
