// src/components/AlumnosList.jsx
import { useEffect, useState } from 'react';
import { obtenerAlumnos, eliminarAlumno } from '../services/alumnoService';

function AlumnosList({ actualizar, onEditar }) {
  const [alumnos, setAlumnos] = useState([]);

  const fetchData = async () => {
    const res = await obtenerAlumnos();
    setAlumnos(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [actualizar]);

  return (
    <div className="table-responsive rounded shadow-sm border">
  <table className="table table-striped table-hover align-middle mb-0">
    <thead className="table-dark text-center">
      <tr>
        <th scope="col">👤 Nombre</th>
        <th scope="col">📧 Correo</th>
        <th scope="col">📚 Curso</th>
        <th scope="col">⚙️ Acciones</th>
      </tr>
    </thead>
    <tbody>
      {alumnos.map(alumno => (
        <tr key={alumno.id}>
          <td>{alumno.nombre}</td>
          <td>{alumno.correo}</td>
          <td>{alumno.curso}</td>
          <td className="text-center">
            <button
              onClick={() => onEditar(alumno)}
              className="btn btn-warning btn-sm me-2"
              title="Editar"
            >
              ✏️ Editar
            </button>
            <button
              onClick={() => handleEliminar(alumno.id)}
              className="btn btn-danger btn-sm"
              title="Eliminar"
            >
              🗑️ Eliminar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  );
}

export default AlumnosList;