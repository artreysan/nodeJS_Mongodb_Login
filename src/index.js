const express = require('express');

//Initiliazation
const app = express();

//Settings
app.set('port',process.env.PORT ||3000); //Establecemos el numero del puerot global
                                            //Si el servicio donde subamos nuestro poyecto tiene un puerto 
                                            // predeterminado usaremos ese con process.env.PORT de lo contrario
                                            // usaremos el 3000

//Middlewares

//Global Variables

//Routes


//Static Files

//Server is lisent
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});
