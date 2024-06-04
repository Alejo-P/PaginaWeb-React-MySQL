const UserCard = ({ userName, userPasswd, userEmail }) => {
  return (
    <div className="userCardInfo">
        <h3>{userName}</h3>
        <p>Correo: {userEmail}</p>
        <p>Contraseña: {userPasswd}</p>
    </div>
  )
}

export default UserCard