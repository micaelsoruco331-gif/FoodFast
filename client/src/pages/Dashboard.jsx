import '../css/dashboard.css'
import useAutorizaciones from '../hooks/useAutorizaciones'
import autorizacionesServices from '../services/autorizacionesServices'

const Dashboard = () => {
  const { admin } = useAutorizaciones()
  const usuarios = autorizacionesServices.obtenerUsuarios()

  const cantidadGerencia = usuarios.filter(usuario => usuario.sector === 'Gerencia').length

  const cantidadSoporte = usuarios.filter(usuario => usuario.sector === 'Soporte').length

  return (
    <div className="dashboard">

      <h1>Panel de Control de Clientes</h1>

      
        <>
          <div className="user-card">
            <h3>Usuario conectado</h3>

            <p><strong>Administrador:</strong> {admin.nombre}</p>
            <p><strong>Email:</strong> {admin.email}</p>
            <p><strong>Sector:</strong> {admin.sector}</p>
          </div>
          <div className="dashboard-cards">

            <div className="dashboard-card">
              <h3>Clientes</h3>
              <p>{usuarios.length}</p>
            </div>

            <div className="dashboard-card">
              <h3>Gerencia</h3>
              <p>{cantidadGerencia}</p>
            </div>

            <div className="dashboard-card">
              <h3>Soporte</h3>
              <p>{cantidadSoporte}</p>
            </div>
          </div>

        </>
      

    </div>
  )
}

export default Dashboard