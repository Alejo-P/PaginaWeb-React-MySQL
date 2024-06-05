import app from "./server.js";

// Inicializamos el servidor
app.listen(app.get('port'),()=>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});