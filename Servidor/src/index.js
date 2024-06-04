import app from "./server.js";

app.listen(app.get('port'),()=>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});