// src/services/alumnoService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/alumnos';
const CURSOS_API = 'http://localhost:3001/api/cursos';

export const obtenerAlumnos = () => axios.get(API_URL);
export const agregarAlumno = (alumno) => axios.post(API_URL, alumno);
export const editarAlumno = (id, alumno) => axios.put(`${API_URL}/${id}`, alumno);
export const eliminarAlumno = (id) => axios.delete(`${API_URL}/${id}`);
export const obtenerCursos = () => axios.get(CURSOS_API);
