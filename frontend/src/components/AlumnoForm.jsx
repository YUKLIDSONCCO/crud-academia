// src/components/AlumnoForm.jsx
import { useEffect, useState } from 'react';
import { agregarAlumno, editarAlumno, obtenerCursos } from '../services/alumnoService';

function AlumnoForm({ onAlumnoGuardado, alumnoSeleccionado, limpiarSeleccion }) {
  const [alumno, setAlumno] = useState({ nombre: '', correo: '', curso_id: '' });
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const cargarCursos = async () => {
      const res = await obtenerCursos();
      setCursos(res.data);
    };
    cargarCursos();
  }, []);

  useEffect(() => {
    if (alumnoSeleccionado) setAlumno(alumnoSeleccionado);
  }, [alumnoSeleccionado]);

  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (alumno.id) {
      await editarAlumno(alumno.id, alumno);
    } else {
      await agregarAlumno(alumno);
    }
    onAlumnoGuardado();
    limpiarSeleccion();
    setAlumno({ nombre: '', correo: '', curso_id: '' });
  };

  return (
    <div className="card shadow-sm rounded-4 border-0 mb-4">
  <div className="card-body p-4">
    <h5 className="card-title mb-4">{alumno.id ? 'Editar Alumno' : 'Agregar Alumno'}</h5>
    <form onSubmit={handleSubmit}>
      <div className="row g-3 align-items-end">
        <div className="col-md-4">
          <label className="form-label">Nombre</label>
          <div className="input-group">
            <span className="input-group-text">👤</span>
            <input
              name="nombre"
              value={alumno.nombre}
              onChange={handleChange}
              className="form-control"
              placeholder="Nombre del alumno"
              required
            />
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Correo</label>
          <div className="input-group">
            <span className="input-group-text">📧</span>
            <input
              name="correo"
              type="email"
              value={alumno.correo}
              onChange={handleChange}
              className="form-control"
              placeholder="Correo electrónico"
              required
            />
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Curso</label>
          <div className="input-group">
            <span className="input-group-text">📚</span>
            <select
              name="curso_id"
              value={alumno.curso_id}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Seleccionar curso</option>
              {cursos.map(curso => (
                <option key={curso.id} value={curso.id}>{curso.nombre}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-end mt-4">
          <button type="submit" className="btn btn-success me-2 px-4">
            {alumno.id ? 'Actualizar' : 'Agregar'}
          </button>
          {alumno.id && (
            <button type="button" className="btn btn-outline-secondary px-4" onClick={limpiarSeleccion}>
              Cancelar
            </button>
          )}
        </div>
      </div>
    </form>
  </div>
</div>


  );
}

export default AlumnoForm;