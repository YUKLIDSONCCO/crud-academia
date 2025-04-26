const express = require("express");
const router = express.Router();
const {
  getAlumnos,
  createAlumno,
  editarAlumno,
  eliminarAlumno
} = require("../controllers/alumnosController");

router.get("/", getAlumnos);
router.post("/", createAlumno);
router.put("/:id", editarAlumno);
router.delete("/:id", eliminarAlumno);

module.exports = router;
