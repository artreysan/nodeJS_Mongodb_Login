# nodeJS_Mongodb_Login
Application with Login, Register, CRUD, ES6+, ...


# Init and Installing modules
~~~ 
npm init --yes
npm i express express-handlebars express-session method-override mongoose passport bycryptjs connect-flash
~~~
## Modules info 
- express: Framework of servers

    - handlebars: Integrar un motor de plantillas en express

    - session: Crear sesiones dentro del servidor para no volver a autenticar

- method-override: Extender la funcionalidad de los formularios mas de un POST o PUT

- mongoose: Modulo que nos deja unir a express con la base de datos

- passport: Ambos son para poder autendicar al usurio

- bcrypjs: Modulo que permite aplicar el argoritmo a cualquier texto en un HASH, lo usaremos para la contrasenia

- connect-flash: Para generar mensajes de alerta
