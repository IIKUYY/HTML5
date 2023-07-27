## Introducción

La geo-localización es saber donde estas en el mundo y si quieres compartirlo, tu ubicación puede estar dada en como IP, WNC, o GPS.

| IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ---- | ------- | ------ | ------ | ----- | ------ | ------- |
| 9.0+ | 3.5+    | 5.0+   | 5.0+   | 10.6+ | 3.0+   | 2.0+    |

## API de Geo-localización

El API de geo-localización sirve para compartir tu ubicación con los sitios web confiables, la longitud y latitud están disponibles en la pagina de JavScript.

## El Código

La API se centra en la nueva propiedad global, el objeto: `<navigator.geolocation>`, la forma más básica de usarla es

```
function get_location() {
  navigator.geolocation.getCurrentPosition(show_map);
}
```

El problema con este API, es que no tiene manejo de errores, por lo que puedes usar `Modernizr` para tener un plan por si falla

```
function get_location() {
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(show_map);
  } else {
    // no native support; maybe try a fallback?
  }
}
```

Cuando sucede el `getCurrentPosition` el usuario ve una [barra de información](https://github.com/IIKUYY/HTML5/blob/main/Ch6/Assets/), esto porque por cuestiones de privacidad, en esta barra se puede ver bastante información

- Avisa al usuario que el sitio quiere obtener su ubicación
- Avisa al usuario cual sitio quiere obtener su ubicación
- Da un enlacé para obtener más información sobre compartir tu ubicación
- Te da las opciones de compartir o no tu información
- Te da la opción de guardar tu elección para futuras visitas

Ademas esta barra es

- No-modal, por lo que no te evita cambiar de pestañas o de ventanas
- Incondicional, por lo que no hay manera de evitarla
- Bloquea, para que la pagina no pueda acceder a tu ubicación mientras se decide

El código que acabamos de usar es solo para causar la barra de información, pero para poder acceder a la ubicación tienes que usar más código, el cual es

```
function show_map(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  // let's show a map or do something interesting!
}
```

La función `callback` solo llama a un parámetro, un objeto con dos propiedades, una es la coordenada y la otra es el `timestamp`, estas son la localización calculada y la segunda es la fecha en la que se solicito el dato, esto sirve para el calculo preciso del GPS

| Propiedades | Tipo | Notas |
|-------------|------|-------|
| coords.latitude | Doble | Decimales |
| coords.longitud | Doble | Decimales |
| coords.altitud | Doble o nulo | Metro sobre la referencia elipsoide |
| coords.accuracy | Doble | Metros |
| coords.altitudeAccuracy | Doble o nulo | metros |
| coords.heading | Doble o nulo | Grados en sentido contra reloj desde el norte |
| coords.speed | Doble o nulo | Metros/Segundos |
| timestamp | DOMTimeStamp | Un Objeto estilo Date() |

Solo hay tres garantizadas, las demás dependen de las capacidades de tu dispositivo y del servidor.

## Manejo de Errores

Pueden suceder varios errores, un error de servidor, código o un usuario puede denegar el permiso, si esto sucede debes tener un plan de respaldo en JavaScript, se puede ver algo asi

```
navigator.geolocation.getCurrentPosition(
  show_map, handle_error)
```

asi, si ocurre algún error, se llamara a tu función como un objeto `PositionError`

| Propiedad | Tipo | Notas |
|-----------|------|-------|
| Código | Corto | Un valor numerado |
| Mensaje | DOMString | No es para los usuarios |

La propiedad código puede ser una de estas 3

- PERMISSION_DENIED: Si el usuario, o alguna otra razón impide el acceso a la localización
- POSITION_UNAVAILABLE: Si la red esta caída o si no se pueden contactar a los satélites
- TIMEOUT: Si se toma demasiado tiempo en obtener la información

## Opciones

Para los fabricantes de celulares más grandes, suele haber dos opciones, la primera es utilizar las torres de telefonía para calcular un aproximado de tu posición, un aproximado muy malo, la segunda es usar hardware dedicado al GPS, la ventaja de este es que es mucho más preciso, la desventaja es que consume mucha energía, esto hace que se use una mezcla entre ambas
No siempre vas a querer usar la de mayor precisión, por lo que hay tres propiedades que nos pueden ayudar

| Propiedad | Tipo | Default | Notas |
|-----------|------|---------|-------|
| enableHighAccuracy | Boolean | False | Más lento |
| timeout | Largo | No tiene | Mili segundos |
| maximumAge | Largo | 0 | Mili segundos |

La primera activa el GPS de alta precisión, solo debes estar seguro que la llamas aunque sea false para asegurarse de no crear fallos, La segunda es la cantidad de tiempo que espera tu pagina para mostrar el fallo `POSITION_UNAVAILABLE`, la tercera determina el tiempo máximo para guardar un valor de posición
Como vimos antes, getCurrentPosition() muestra la ubicación actual, pero también existe la función watchPosition(), la cual sigue la ubicación del usuario, puedes personalizarla con setInterval() y clearInterval()

## Qué pasa con IE

Versiones anteriores a la 9 no tiene esta API, pero si configuras bien tu `fallback`, este debería cubrir estas situaciones, ademas de marcas de celulares más pequeñas cuentan con sus API´s únicas diferentes a la de la W3C.

## Geoposition.js

geoPosition.js es una librería de JavaScript de código abierto que aligera la diferencia entra las API´s de los móviles y de la W3C, para usarla solo debes colocar el `<Script>` de esta en el head

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Dive Into HTML5</title>
</head>
<body>
  ...
  <script src="geoPosition.js"></script>
</body>
</html>
```

Ahora puedes usar la API que este disponible

```
if (geoPosition.init()) {
  geoPosition.getCurrentPosition(geoSuccess, geoError);
}
```
`if (geoPosition.init())` esta parte del código revisa si esta disponible una API, si es asi continua
` geoPosition.getCurrentPosition` esta parte obtiene la localización del usuario
`geoSuccess` Esta sección muestra los resultados de la manera

```
function geoSuccess(p) {
  alert("Found you at latitude " + p.coords.latitude +
        ", longitude " + p.coords.longitude);
}
```

`geoError` Esta sección muestra un mensaje si no se encuentra

```
function geoError() {
  alert("Could not find you!");
}
```

Este no tiene soporte para watchPosition()

[Ejemplo](https://github.com/IIKUYY/HTML5/blob/main/Ch6/Ejemplo)
[Menú](https://github.com/IIKUYY/HTML5/tree/main/README.md)