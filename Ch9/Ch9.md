## Introducción

Los formularios son más que un espacio para escribir y un botón para hacer `submit`, veremos todas las opciones que se dan para tener más control y funciones

## Placeholder Text

|  IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ----- | ------- | ------ | ------ | ----- | ------ | ------- |
| 10.0+ |  4.0+   | 4.0+   | 4.0+   | 11.0+ | 4.0+   | 2.1+    |

La primer gran mejora que trajo HTML5 fue el `Placeholder Text` para los `input fields`, este es mostrado dentro siempre y cuando el `input field` este vació, cuando hagas click en este, el texto desaparecerá
Para incluirlo debes usar el código

```
<form>
  <input name="q" placeholder="Go to a Website">
  <input type="submit" value="Search">
</form>
```

Si el navegador no tiene soporte para esta función, simplemente la ignorara

## Autofocus Fields

|  IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ----- | ------- | ------ | ------ | ----- | ------ | ------- |
| 10.0+ |  4.0+   | 4.0+   | 3.0+   | 10.0+ |        |  3.0+   |

Los sitios web pueden usar JavaScript para que se seleccione automáticamente un `input field` al cargar la pagina, esto puede ser un problema para personas con necesidades especiales por el uso de la barra espaciador en la navegación, asi como en el uso de varias pestañas al mismo tiempo, solucionar estos problemas con JavaScript puede ser complicado, asi que para solucionar este problema HTML5 incluyo el atributo `autofocus`, este funciona de la misma manera que hacerlo con JavaScript, pero por ser un atributo este funciona de manera consistente en varios navegadores, a la vez que hay opciones para desactivarlo
Para incluirlo usar el código

```
<form>
  <input name="q" autofocus>
  <input type="submit" value="Search">
</form>
```

Si el navegador no tiene soporte para esta función, simplemente la ignorara
que pasa si quieres que esta función este disponible incluso en los navegadores que no tengan soporte, usamos JavaScript con una condicional que detecte si tiene el soporte o no, como ser en el código

```
<form name="f">
  <input id="q" autofocus>
  <script>
    if (!("autofocus" in document.createElement("input"))) {
      document.getElementById("q").focus();
    }
  </script>
  <input type="submit" value="Go">
</form>
…
```

### Autofocus lo antes posible

Esta función empieza cuando el evento `window.onload` se dispara, pero esto no pasa hasta que todos tus recursos se hayan cargado, esto puede crear situaciones donde el focus se cambie cuando el usuario ya este interactuando con la pagina, una solución es colocar el `<script>` inmediatamente después del form, otra solución es colocar el focus en un evento personalizable como `$(document).ready()` que puedes usar con jQuery en lugar de `window.onload`
como en el código

```
<head>
<script src="jquery.min.js"></script>
<script>
  $(document).ready(function() {
    if (!("autofocus" in document.createElement("input"))) {
      $("#q").focus();
    }
  });
</script>
</head>
<body>
<form name="f">
  <input id="q" autofocus>
  <input type="submit" value="Go">
</form>
```

Los eventos personalizables de jQuery se disparan cuando el DOM este disponible, esto significa es espera a que todo el texto de la pagina haya cargado, pero no espera a las imágenes, esto no es lo más optimo aunque es mucho mejor que usar `window.onload`
Hay una técnica que utiliza las dos anteriores para crear un mejor resultado, usando jQuery creas tu propio evento, digamos, autofocusReady, y utilizando los `<scripts>` puedes dispararlo cuando tu quieras, como en el código

```
<head>
<script src="jquery.min.js"></script>
<script>
  $(document).bind('autofocusReady', function() {
    if (!("autofocus" in document.createElement("input"))) {
      $("#q").focus();
    }
  });
</script>
</head>
<body>
<form name="f">
  <input id="q" autofocus>
  <script>$(document).trigger('autofocusReady');</script>
  <input type="submit" value="Go">
</form>
```

## Email Addresses

Los tipos de fields más comunes en las ultima década son

| Tipo de Field | Código HTML | Notas | Ejemplo |
|---------------|-------------|-------|---------|
| checkbox | `<input type="checkbox">` | puede activarse o desactivarse | <input type="checkbox">` |
| radio button | `<input type="radio">` | puede agruparse con otros inputs | <input type="radio"> |
| password field | `<input type="password">` | Echos dots en lugar de los caracteres que escribes | <input type="password"> |
| drop-down list | `<select><option>...` | ---- | <select><option>a<option>b |
| file picker | `<input type="file">` | Crea un ventana emergente con el dialogo "open file" | <input type="file"> |
| submit button | `<input type="submit">` | ----- | <input type="submit"> |
| plain text | `<input type="text">` | El atributo puede ser omitido | <input type="text"> |

Estos atributos siguen funcionando en HTML5 tienen retro-compatibilidad y no se tienen que cambiar
pero HTML5 incluyo 13 tipos nuevos y el primero es el email addresses, se ve algo asi

```
<form>
  <input type="email">
  <input type="submit" value="Go">
</form>
```

Si el navegador no tiene soporte lo reconocerá como un plain text, esto lo hará con cualquier atributo que no reconozca, es una muy buena razón para actualizar tus formularios con este atributo
Así que como saber que si tiene soporte para el atributo email, en navegadores de pc como safari y chrome para el usuario se vera como otro plain text hasta el momento de hacer el submit, pero en iPhone no pasa lo mismo, como este dispositivo no tiene un teclado fisco, aprovecha el teclado virtual para optimizar este mismo para distintos tipos de inputs, como poner a la mano el @

## Web Addresses

Llamadas comúnmente URLs, son otro tipo de texto especificado, como en el email, al usar este atributo no se nota una diferencia a excepción de los teclados virtuales, donde se agregan los caracteres ".", "/" y ".com" y se elimina la barra espaciadora, se agrega con el atributo url `<input type="url">`

## Números como Spinboxes

Pedir un numero suele ser más complicado debido a que se suele hacer dentro de un rango más que una opción general, por eso podemos usar una spinbox un ejemplo de código es

```
<input type="number"
       min="0"
       max="10"
       step="2"
       value="6">
```

Los atributos explicado son

- type="number": significa que el campo es un numero
- min="0": Indica el numero más bajo disponible
- max="10": Indica el numero más alto aceptado
- step="2": Indica el intervalo con el que cambian los números
- value="6": Es el valor inicial del campo

Ejemplo en vivo
<input type="number"
       min="0"
       max="10"
       step="2"
       value="6">

Estos atributos no son obligatorios, son opcionales, ademas de que con JavaScript podemos usar otras tres opciones

- input.stepUp(n): Indica la cantidad en la que se incrementa el valor
- input.stepDown(n): Indica la cantidad en la que se disminuye el valor
- input.valueAsNumber: regresa el valor seleccionado como un `floating point number` (input.value siempre es un `string`)

Como otros atributos, si no lo reconoces lo tomara como plaint text e ignorara los atributos restantes, puesde hacer una solucion en JavaScript como en atributos anteriores

```
if (!Modernizr.inputtypes.number) {
  // no native support for type=number fields
  // maybe try Dojo or some other JavaScript framework
}
```

## Números como Sliders

Es como las spinboxes pero representa la escala como un `slider`, es decir una barra que desplazas para alcanzar el numero, utiliza atributos similares a las spinboxes con diferencias que el type es range

```
<input type="range"
       min="0"
       max="10"
       step="2"
       value="6">
```

Ejemplo

<input type="range"
       min="0"
       max="10"
       step="2"
       value="6">

En caso de que el navegador no tenga soporte simplemente mostrara un text plain

## Date Pickers

Esta opción no existía en HTML4 asi que se utilizaba JavaScript para manejarse por estas opciones, ahora se puede usar nativamente, y de hecho hay seis versiones de esta función

|       TYPE      |  IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE |  OTHER  |
| --------------- | ----- | ------- | ------ | ------ | ----- | ------ | ------- |
|      date       |   -   |    -    | 5.0+   | 20.0+  |  9.0+ |   5.0+ |    -    |
|     datetime    |   -   |    -    | 5.0+   |   -    |  9.0+ |   5.0+ |    -    |
| datetime-local  |   -   |    -    | 5.0+   |   -    |  9.0+ |   5.0+ |    -    |
|      month      |   -   |    -    | 5.0+   |   -    |  9.0+ |   5.0+ |    -    |
|       week      |   -   |    -    | 5.0+   |   -    |  9.0+ |   5.0+ |    -    |
|       time      |   -   |    -    | 5.0+   | 20.0+  |  9.0+ |   5.0+ |    -    |

Cada uno mostrara un selector diferente donde se muestren las características que pidas, ya sean días semanas meses o años, y en caso de que no tenga soporte hará lo mismo que con otros atributos desconocidos y los creara como plain text, pero también puedes usar scripts para solucionarlo

```
<form>
  <input type="date">
</form>
...
<script>
  var i = document.createElement("input");
  i.setAttribute("type", "date");
  if (i.type == "text") {
    // No native date picker support :(
    // Use Dojo/jQueryUI/YUI/Closure to create one,
    // then dynamically replace that <input> element.
  }
</script>
```

## Cajas de Búsqueda

No solo los navegadores tienen barras de búsqueda, también paginas con grandes catálogos de contenido como amazon o Reddit, y en HTML5 se agrego una función nativa para estas situaciones

```
<form>
  <input name="q" type="search">
  <input type="submit" value="Find">
</form>
```

En algunos navegadores no tendrá diferencias, pero en otros mostrara los bordes redondeados y un botón adentro del field donde se puede eliminar todo el contenido

## Color Pickers

HTML5 creo el `<input type="color">`, este funciona en base a los códigos hexadecimales, con CSS puedes personalizar este menu de manera que sea más cómoda para el usuario

## Validación

|  IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ----- | ------- | ------ | ------ | ----- | ------ | ------- |
| 10.0+ |  4.0+   | 5.0+   | 10.0+  |  9.0+ |   -    |    -    |

En versiones anteriores de HTML4 para poder usar validación debes usar algún tipo de implementación externa usando una validación `client-side` usando JavaScript y una `server-side` usando PHP o Python, y hay dos problemas principales al usar JavaScript

1. Muchos de los usuarios no tendrán JavaScript activado
2. No funcionara

Es bastante complicado comprobar que un `string` tiene una forma de correo valida, pero gracias a esta nueva función sin código extra solo usando el atributo type="email" validara si es un correo electrónico, lo mismo pasa con las URLs, los números (agregando que también detecta si esta dentro del rango que diste con los atributos)
Si quieres desactivar esta función usa el código

```
<form novalidate>
  <input type="email" id="addr">
  <input type="submit" value="Subscribe">
</form>
```

## Campos requeridos

|  IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ----- | ------- | ------ | ------ | ----- | ------ | ------- |
| 10.0+ |  4.0+   |   -    | 10.0+  |  9.0+ |   -    |    -    |

Utilizando la función de validación también podemos hacer que algunos campos sean obligatorios de llenar antes de poder `submit` el formulario, para activar esta función solo debes usar el código

```
<form>
  <input id="q" required>
  <input type="submit" value="Search">
</form>
```

[Ejemplo](https://github.com/IIKUYY/HTML5/tree/main/Ch9/Ejemplo)

[Menú](https://github.com/IIKUYY/HTML5/tree/main)