export const md = `# DESARROLLO DEL PROYECTO

## MICROPROCESADOR ( .ino )

Se utiliza el Microprocesador ESP32

Para enviar los datos a traves de la peticion, la informacion es codificado en un String( ) de la siguiente manera

    Aqui el String JSON

Esto se realiza con el fin de simplificar el codigo ya que en .ino no es tan trivial generar un objeto JSON y serializarlo y es mas facil crear su representacion en String directamente.

## PAGINA WEB ( Framework [NEXT.JS](https://nextjs.org/) )

Para la pagina web se crea un proyecto Next.js, Next es una plataforma que esta basada en React, que es un lenguaje desarrollado por Facebook

Para generar el proyecto se instalo un asistente de creación de proyecto que pidió unos datos como carpeta y nombre.

    npm install create-next-app
    npm init next-app

Una vez creado el proyecto creamos un archivo \_app.js en la carpeta /pages este va a ser el archivo principal de la app, esta gestiona imports de estilos, esta no es indispensable pero la incluimos para poder hacer ciertos "imports", como los "estilos"

Para el login se utilizaron campos Input y el Boton se utiliza la libreria 'reactstrap', esto no es necesario pero permite utilizar unos componentes mas bonitos

    <Input onChange={(e)=>this.username = e.target.value }/> 

Asi se guarda la información tecleada en una variable.

De esta manera capturamos la informacion a medida que el usuario ingresa información, la variable queda guardada.

El Botón de lógin tiene una propiedad onClick, ahi está el método que valida el usuario y la contraseña, si son validos, se "setea" un estado.

Segun el estado, se elige si mostrar el formulario de Login o la lista de datos.

FrontEnd y BackEnd en este caso estan en un mismo proyecto y no separados como en algunas soluciones. nextJS permite esto. Al permitir definir un api, por eso hay una carpeta que se llama "api" este es el servidor que gestiona la comunicación de datos.

Los datos persisten en el servidor y estan guardados en una variable que se llama var data, inicialmente esta vacio 
    
    var data = []

El procesador realiza una peticion "POST" a la direción
https://estacion.herokuapp.com/api/data
como pueden ver esta coincide con las carpeta "api" y el archivo "data.js" que basicamente es todo lo referente al servidor central

    /api/data

A esta direccion pueden llegar 2 peticiones, la del microprocesador y la de los clientes(cliente es cada una de las ventanas del navegador).

Hay un "if" una condición que evalua si la petición llego de un "cliente" ya que en los datos enviados hay un dato que se llama "cliente" y que contiene la info de cuantos elementos tiene el cliente en su lista.

La información que envia el cliente tiene la siguiente estructura:

{
    "cliente":15 //Este 15 puede ser otro valor y lo que representa es la cantidad actual de datos que tiene el cliente actualmente, inicialmente siempre será 0.
}

* Si este dato "cliente" no existe, se asume que es el procesador que esta enviando datos nuevos. Siendo este el caso, los datos se agregan a la variable data con un 

    data.push("aqui los datos recibidos")

La estructura de los datos recibidos por el microprocesador es recibe de esta manera:

{
    ["S1: 2.58V (valor mayor a 2.5V) ☀️","S2: 3.30V (valor mayor a 3V) ☀️"]

}

* En el caso de ser un cliente ("ventana") haciendo una peticion, el servidor esperará a una condición, esta condicion es que la lista de datos que tiene el servidor sea mayor al tamaño de la lista que envia el cliente. La espera se hace con un metodo llamado waitUntil que significa esperar hasta. Este esperara hasta que hayan mas datos en el servidor que los que tiene el cliente, y cuando esto suceda, se libera la espera y se le responde la peticion que hizo el cliente. Una vez el cliente recibe la respuesta, actualiza el "estado" de la aplicacion, lo cual provoca que se muestren los nuevos datos. Además, una vez el cliente recibe la respuesta, vuelve y le solicita los datos al servidor, se queda esperando de nuevo a que llegue mas información.

* Las peticiones se realizan con un metodo que se llama fetch( ) el fetch sirve para enviar peticiones a una direccion y enviarles datos. Para que un fetch espere y detenga ejecucion del codigo hasta que llegue una respuesta se utiliza "async" "await" alternativamente se puede utilizar la sintaxis .then() que ejecutara el codigo una vez la peticion sea resuelta.


* Para mostrar los datos en la lista se utiliza la funcion .map( ) esta función itera un arreglo y realiza funciones para cada uno de los elementos.`
