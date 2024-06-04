import { useState, useEffect } from 'react'
import UserCard from '../components/UserCard';

function UserLists() {
  const [Datos, setDatos] = useState([]);
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users/')
      .then(response => response.json())
      .then(data => {
        setDatos(data);
        setCarga(false);
      })
      .catch(error => {console.log(error);
        setCarga(false);
      })
  }, []);

  return (
    <>
        <div className='ventanaUsuarios'>
            <div className='vuser-titulo'>
                <h2>Lista de Usuarios</h2>
                <p>Datos importados de una base de datos del servidor</p>
            </div>
            <div className='vuser-lista'>
                {carga ? <p>Cargando...</p> : Datos.map((user, index) => {
                    return (
                        <UserCard 
                            key={index} 
                            userName={user.name}
                            userEmail={user.email}
                            userPasswd={user.passwd} 
                        />
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default UserLists