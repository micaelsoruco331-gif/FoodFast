// Usuarios de prueba (mock). Se leen desde una variable de entorno (.env)
// en vez de estar hardcodeados en el código fuente, para no exponer
// credenciales en el repositorio ni en el historial de Git.
const usuarios = JSON.parse(import.meta.env.VITE_MOCK_USERS || '[]')

if (usuarios.length === 0) {
  console.warn(
    'No se encontraron usuarios mock. Verifique que exista un archivo .env ' +
    'con la variable VITE_MOCK_USERS (ver .env.example).'
  )
}

const login = (email, password, sector) => {
  return usuarios.find(
    usuario =>
      usuario.email === email &&
      usuario.password === password &&
      usuario.sector === sector
  )
}
const obtenerUsuarios = () => usuarios

export default {
  login,
  obtenerUsuarios
}