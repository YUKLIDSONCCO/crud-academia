const db = require('../models/db');

const getCursos = (req, res) => {
  db.query("SELECT * FROM cursos", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

module.exports = { getCursos };
