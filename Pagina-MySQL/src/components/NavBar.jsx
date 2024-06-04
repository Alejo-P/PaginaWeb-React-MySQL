import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navBar">
        <Link to="/">Inicio</Link>
        <Link to="/users">Usuarios</Link>
        <Link to="/newUser">Nuevo Usuario</Link>
    </nav>
  )
}

export default NavBar