import { useState } from 'react';
import AlumnoForm from './components/AlumnoForm';
import AlumnosList from './components/AlumnosList';

function App() {
  const [actualizar, setActualizar] = useState(false);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const manejarActualizacion = () => setActualizar(!actualizar);
  const limpiarSeleccion = () => setAlumnoSeleccionado(null);

  // 👈 NUEVO: Función para eliminar alumno
  const eliminarAlumno = async (id) => {
    try {
      const respuesta = await fetch(`http://localhost:3001/alumnos/${id}`, {
        method: 'DELETE',
      });
      if (respuesta.ok) {
        manejarActualizacion(); // Actualiza la lista después de eliminar
      } else {
        console.error('Error al eliminar alumno');
      }
    } catch (error) {
      console.error('Error de conexión', error);
    }
  };

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

      {/* 👈 AQUÍ le pasas también la función eliminar */}
      <AlumnosList
        actualizar={actualizar}
        onEditar={setAlumnoSeleccionado}
        onEliminar={eliminarAlumno} // 👈 NUEVO
      />
    </div>
  );
}

export default App;
