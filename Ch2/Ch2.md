## Técnicas de detección

Cuando tu navegador carga una pagina web, construye un `Document Object Model` o DOM, una colección de objetos que representan los elementos de HTML.
Todos lo DOM comparten propiedades similares, pero algunos objetos tienen más que otros, en navegadores que tengan soporte de HTML 5, ciertos objetos tendrán propiedades únicas, un vistazo rápido al DOM mostrara que funciones tienen soporte.
Hay cuatro maneras de saber si el navegador tiene soporte para alguna característica.

[1. Revisar si cierta propiedad existe en un objeto global](https://github.com/IIKUYY/HTML5/tree/main/Ch2/Metodos/Metodo1)
[2. Crear un elemento y revisar si cierta propiedad existe en el elemento](https://github.com/IIKUYY/HTML5/tree/main/Ch2/Metodos/Metodo2)
[3. Crear un elemento, revisar si cierto método existe en ese elemento, luego regresar el método y revisar el valor que regresa.](https://github.com/IIKUYY/HTML5/tree/main/Ch2/Metodos/Metodo3)
[4. Crear un elemento, establecer una propiedad a cierto valor, luego revisar si la propiedad retenida es el valor.](https://github.com/IIKUYY/HTML5/tree/main/Ch2/Metodos/Metodo4)

## Modernizr, un librería de detección ed HTML5

Modernizr es una librería `open-source` de JavaScript, licenciada MIT que detecta si los navegadores tienen soporte para muchas funciones de HTML5 y de CSS3, Siempre deberías usar la ultima version, para hacerlo solo tienes que correr el siguiente <script>

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Dive Into HTML5</title>
  <script src="modernizr.min.js"></script>
</head>
<body>
  ...
</body>
</html>
```

Con esto Modernizr corre automáticamente, no tienes que usar una función, y cuando lo hace crea un objeto global llamado Modernizr, este contiene un set de propiedades `Boolean` por cada característica que puede detectar.

## Canvas

HTML5 define el elemento <canvas> como un lienzo de mapa de bits dependiente de la resolución que se puede utilizar para `render` gráficos, gráficos de juegos u otras imágenes visuales sobre la marcha.
Este es un rectángulo en tu pagina, en donde puedes usar JavaScript para dibujar lo que quieras, HTML5 define una serie de funciones (`Canvas API`) para dibujar formas, definer caminos, crear gradientes y aplicar transformaciones.
Para usar Modernizr con canvas, debes usar <Modernizr.canvas>.

## Canvas de texto

Incluso si el navegador tiene soporte para el API de canvas, no es seguro que lo tenga para el API de canvas de texto, esto es porque esta función se creo después, por lo que muchos navegadores no la han incluido.
Para usar Modernizr con canvas text, debes usar <Modernizr.canvastext>.

## Video

HTML5 definió un nuevo elemento llamado <video>, este sirve para colocar videos en tu pagina web, esto solía ser imposible sin `plugins` de terceros.
El elemento <video> esta diseñado para ser usable sin `scripts` de detección, puedes especificar varios archivos de video, y los navegadores que tengan soporte de HTML5 va a escoger uno basado en que formatos puede usar.
Los navegadores que no tengan soporte para HTML5 simplemente ignoraran el elemento <video>, puedes usar esto a tu favor para poder hacer que un `plugin` de un tercero los reproduzca, Kroc Carmen, diseño una solución llamada [Video for Everybody!](https://camendesign.com/code/video_for_everybody), en donde usa HTML5 donde sea posible, pero donde no, utiliza `QuickTime` o `Flash`, esta solución no utiliza JavaScript y funciona prácticamente en cualquier navegador.
Para usar Modernizr con video, debes usar <Modernizr.video>.

## Formatos de Video

Los textos están escritos en algo llamado `codec` este es por decir un "lenguaje" que utiliza el navegador para entender el texto, este es un algoritmo que encripta el mensaje, hay docenas de codecs, ¿Como saber cual usar?, por desgracia, no hay un formato que sea compatible con todos los navegadores, pero se reducen a dos opciones, la primera es de paga, pero sirve en `Safari`, este es h264, y uno gratuito, que se llama ogg.
Para usar Modernizr con formatos de video, debes usar <Modernizr.video.webm>.

## Almacenamiento Local

`HTML5 Storage` provee una forma para que los sitios web guarden información en tu computadora, y la usa después, el concepto es similar a las `Cookies`, pero esta diseñado para cantidades más grandes de información, las `Cookies` están limitadas en tamaño y tu navegador las manda de regreso al servidor cada vez que pide la pagina, lo que hace que se pierda tiempo, mientras tanto `HTML5 Storage` guarda la información en tu computadora lo que hace que sea más eficiente.
Para usar Modernizr con almacenamiento local, debes usar <Modernizr.localstorage>.

## Trabajadores web

Los trabajadores web proveen un estándar de la forma en la que las paginas corren JavaScript en el fondo, con los trabajadores web puedes crear varios "hilos", que trabajen al mismo tiempo (dependiendo de la capacidad de tu computadora), estos pueden usar desde cálculos complejos hasta acceder al almacenamiento local.
Para usar Modernizr con trabajadores web, debes usar <Modernizr.webworkers>.

## Aplicaciones web Offline

Leyendo las paginas web estáticas `offline` es fácil: te conectas a internet, cargas la pagina, te desconectas de internet, y ya puedes leer la pagina a tu ritmo, pero, ¿Qué pasa con las aplicaciones web?.
Las aplicaciones web inician como aplicaciones web `online`, la primera vez que visites una aplicación web `offline`, la pagina le dice al navegador cuales son los archivos que necesita descargar, una vez que los descargue, puedes volver a visitar esa pagina incluso si no tienes acceso a internet, una vez regrese el internet, puedes subir los cambios al servidor remoto.
Para usar Modernizr con aplicaciones offline, debes usar <Modernizr.applicationcache>.

## Geo-localización

La geo-localización es saber en que parte del mundo te encuentras, hay varias formas de saberlo, la dirección IP, tu `wireless network connection` o un GPS dedicado basado en satélites.
Para usar Modernizr con geo-localización, debes usar <Modernizr.geolocation>.

## Tipos de inputs

Al crear formularios, tienes que usar <input>, hay bastantes, unos ejemplos son:

1. <input type="search"> Para buscadores
2. <input type="number"> Para lista desplegables
3. <input type="range"> Para barras deslizantes
4. <input type="color"> Para seleccionadores de color
5. <input type="tel"> Para números telefónicos
6. <input type="url"> Para direcciones web
7. <input type="email"> Para direcciones de correos
8. <input type="date"> Para seleccionadores de calendario
9. <input type="month"> Para meses
10. <input type="week"> Para semanas
11. <input type="time"> Para marcas de tiempo
12. <input type="datetime"> Para marcas especificas de tiempo (Fecha+hora)
13. <input type="datetime-local"> Para fecha y hora local

Para usar Modernizr con tipos de inputs, debes usar <Modernizr.inputtypes.date>.

## Texto Placeholder

Aparte de los nuevos `inputs` en HTML5, este incluyo varios pequeños cambios formatos existentes, una de estas mejoras fue capacidad de colocar un texto `placeholder`, este se muestra dentro del campo a llenar, siempre y cuando este vació y no este resaltado, en el momento en el que des click en la casilla, este texto desaparee.
Para usar Modernizr con placeholders, debes usar <Modernizr.input.placeholder>.

## Form Autofocus

Los sitios web pueden usar JavaScript para enfocar automáticamente el primer campo de entrada de un formulario web, Si bien esto es conveniente para la mayoría de las personas, puede resultar molesto para los usuarios avanzados o personas con necesidades especiales. Si presionas la barra espaciadora esperando desplazar la página, esta no se desplazará porque el enfoque ya está en un campo de entrada de formulario.
Para resolver este problema, HTML5 introduce un atributo autofocus en todos los controles de formulario web. El atributo autofocus hace exactamente lo que dice: mueve el enfoque a un campo de entrada específico. Pero como es solo un marcado en lugar de un script, el comportamiento será consistente en todos los sitios web. Además, los fabricantes de navegadores (o los autores de extensiones) pueden ofrecer a los usuarios una forma de desactivar el comportamiento de enfoque automático. 
Para usar Modernizr con autofocus, debes usar <Modernizr.input.autofocus>.

## MicroData

Es una forma estandarizada de proporcionar semántica adicional en tus páginas web, Los navegadores, extensiones de navegador y motores de búsqueda pueden convertir tu marcado de `Microdata` HTML5 en una vCard, un formato estándar para compartir información de contacto. También puedes definir tus propias vocabularios de `Microdata`.
No hay ningún problema en incluir marcado de `Microdata` en tus páginas web. No es más que unos pocos atributos bien ubicados, y los motores de búsqueda que no entienden los atributos de `Microdata` simplemente los ignorarán. Sin embargo, si necesitas acceder o manipular `Microdata` a través del DOM, deberás verificar si el navegador admite la API de DOM de `Microdata`.
Modernizr aun no tiene soporte para esta API

## Historial de API

Esta es una forma estandarizada de manipular el navegador a través de <script></script> una parte de esta API estaba disponible desde versiones anteriores de HTML, lo que agrego HTML5 es la forma de añadir entradas al historial, y responder cuando estas sean eliminadas cuando el usuario presione el botón de volver en el navegador, esto significa que la URL puede seguir haciendo su trabajo para el recurso actual, incluso en aplicaciones pesadas que no siempre funcionan bien cuando son refrescadas.
Para usar Modernizr con Historial de API, debes usar <Modernizr.history>.

[Menú](https://github.com/IIKUYY/HTML5/tree/main/README.md)