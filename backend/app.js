const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const alumnosRoutes = require('./routes/alumnosRoutes');
const cursosRoutes = require('./routes/cursosRoutes'); // ✅ solo una vez

app.use('/api/alumnos', alumnosRoutes);
app.use('/api/cursos', cursosRoutes); // ✅ esta línea es la única necesaria

module.exports = app;
