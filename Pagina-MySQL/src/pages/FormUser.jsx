import {useEffect, useState} from 'react'

const FormUser = () => {
  return (
    <div className='ventanaFormulario'>
        <div className="vform-titulo">
            <h2>Registro de Usuarios</h2>
        </div>
        <div>
            <form className='vform-formulario' method='post'>
                <label htmlFor='name'>Nombre:</label><br></br>
                <input type='text' id='name' name='name' required/><br></br>
                <label htmlFor='email'>Correo:</label><br></br>
                <input type='email' id='email' name='email' required/><br></br>
                <label htmlFor='passwd'>Contraseña:</label><br></br>
                <input type='password' id='passwd' name='passwd' required/><br></br>
                <button type='submit'>Enviar</button><br></br>
            </form>
        </div>
    </div>
  )
}

export default FormUser