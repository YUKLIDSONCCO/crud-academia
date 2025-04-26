

const express = require("express");
const router = express.Router();
const { getCursos } = require("../controllers/cursosController");

router.get("/", getCursos);

module.exports = router;
