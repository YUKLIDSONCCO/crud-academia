const db = require('../models/db');

const getAlumnos = (req, res) => {
  const query = `
    SELECT alumnos.id, alumnos.nombre, alumnos.correo, cursos.nombre AS curso, alumnos.curso_id
    FROM alumnos
    JOIN cursos ON alumnos.curso_id = cursos.id
  `;
  db.query(query, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

const createAlumno = (req, res) => {
  const { nombre, correo, curso_id } = req.body;
  db.query(
    "INSERT INTO alumnos (nombre, correo, curso_id) VALUES (?, ?, ?)",
    [nombre, correo, curso_id],
    (err) => {
      if (err) {
        console.error('Error al agregar alumno:', err);
        return res.status(500).send(err);
      }
      res.send("Alumno agregado");
    }
  );
};

const editarAlumno = (req, res) => {
  const { id } = req.params;
  const { nombre, correo, curso_id } = req.body;
  db.query(
    "UPDATE alumnos SET nombre = ?, correo = ?, curso_id = ? WHERE id = ?",
    [nombre, correo, curso_id, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ mensaje: 'Alumno actualizado correctamente' });
    }
  );
};

const eliminarAlumno = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM alumnos WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Alumno eliminado correctamente' });
  });
};

module.exports = {
  getAlumnos,
  createAlumno,
  editarAlumno,
  eliminarAlumno
};
