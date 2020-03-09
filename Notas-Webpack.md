Estas son las notas respectivas para lo que es el uso de Webpack ... que se utilizara en 
 cualquier proyecto que se haga funcionar 

 Se debe abrir la pagina del WebPAck y se le buscan los primeros pasos 
 se le da una carpata con el npm init para que se pueda instalar el webpack
 Posterior se da este  comando para instalar por default el Webpack 
 npm install webpack webpack-cli --save-dev  //    con este se instala 

Una vez instalado se debe agregar en SCRIPTS de el package lo siguiente:
"build": "webpack"  // En consola se pone npm run build

 Como nota ::: 
 Se debe de agregar como importacion al html lo que se genera en la carpeta ( dist )
que es el archivo minificado justo para subir al servidor  

PAra configurar el ( " webpack.config.js " ) => Que es la extencion de donde vienen todas las configuraciones .... se debe de agregar ese archivo 
//! LA configuracion debe ir como el archivo de aqui 

Checar apuntes que hay dentro de la configuracion de el Webpack


# Instalar el Servidor de desarrollo de Webpack
npm i -D webpack-dev-server 
La configuracion es la siguiente agregada al package.json:
* "start": "webpack-dev-server --open --port=8081"
Donde  se especifica el nombre del comando (npm start ) y tambien el puerto donde correra


# instalar la extencion que permite importar lo que acomoda o importa los css a cada lugar respectivp
* npm i -D css-loader style-loader

# Se debe colocar esta extencion para poder minificar el css global y se instala con 
* npm i -D optimize-css-assets-webpack-plugin

# Cuando quiera instar o colocar imagenes debo especificar que es lo qe se debe hacer con esas imagenes
  => Se debe intalar : npm i -D file-loader

  # Compatibilidad con otros navegadores, debemos instalar [ Babel ]
  =>  npm install --save-dev babel-loader @babel/core
  * Esta instalacion solo se hace en el webpack.prod.js por que en este es el que se subira en el servidor y el responsable 
  con hacer que funcione la compatibilidad, por lo tanto se agrega una regla al webpack y se agrega 
  el archivo de configuracion de [.babelrc]
  => Se instala babel : npm install babel-preset-minify --save-dev
    => Tambien se instala esto: npm install babel-minify-webpack-plugin --save-dev
    => Importante checar que hay varias dependencias para que minifique y transpile babel correctamente
