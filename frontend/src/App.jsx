// src/App.jsx
import { useState } from 'react';
import AlumnoForm from './components/AlumnoForm';
import AlumnosList from './components/AlumnosList';

function App() {
  const [actualizar, setActualizar] = useState(false);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const manejarActualizacion = () => setActualizar(!actualizar);
  const limpiarSeleccion = () => setAlumnoSeleccionado(null);

  return (
    <div className="container py-4">
  <h1 className="fw-bold display-5">🎓 Gestión de Alumnos</h1>
    <p className="text-muted">Administra fácilmente los registros de alumnos y sus cursos</p>

  <div className="card mb-4 shadow-sm">
    <div className="card-body">
      <AlumnoForm
        onAlumnoGuardado={manejarActualizacion}
        alumnoSeleccionado={alumnoSeleccionado}
        limpiarSeleccion={limpiarSeleccion}
      />
    </div>
  </div>

  <AlumnosList actualizar={actualizar} onEditar={setAlumnoSeleccionado} />
</div>
  );
}

export default App;