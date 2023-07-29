## Introducción

Históricamente a sido un problema la cuestión del almacenamiento en aplicaciones web, al contrario de las aplicaciones nativas, no hay una forma directa de almacenar datos en la web, para eso se crearon las `Cookies`, pero estas tienen unos problemas

- Las Cookies están incluidas en cada HTTP request, esto es malo para la optimización porque se transmite la información una  y otra vez
- Las Cookies están incluidas en cada HTTP request, haciendo que se mande información sin encriptar a la web (a menos que toda la aplicación este en un servidor SSL)
- Las Cookies están limitadas a 4 KB, lo suficiente para alentar pero no tanto para ser util

Lo que ocupamos es mucho espacio que este en el cliente que se guarde al refrescar y no se mande al servidor.

## Historia antes de HTML5

Cuando se creo Internet Explorer, se crearon los `DHTML Behaviors` y uno de estos se llamo `userData`, este permitía que las paginas almacenaran hasta 64 KB por dominio, en estructuras basadas en XML, esto era hasta 10 veces más, en 2002, Adobe introdujo Flash 6, este obtuvo el sobrenombre de `Flash Cookies`, con una propiedad llamada, `Local Shared Object` esto permitía que los objetos de Flash almacenaran hasta 100 KB por dominio, Brad Neuberg desarrollo un prototipo de un puente entre Flash y JavaScript llamado AMASS, (AJAX Massive Storage System) pero estaba limitado por particularidades de diseño de Flash, en 2006 con la llegada de Flash 8 y con este la llegada de `ExternalInterface` acceder a `LSO` de JavaScript se hizo más fácil, con esto Brad reescribió AMASS y lo integro a Dojo Toolkit bajo el nombre de dojox.storage, este daba a los usuarios 100 KB de forma gratuita con la posibilidad de aumentarla con pagos, en 2007 Google lanzo `Gears`, un plugin de código abierto que apuntaba a darles más capacidades a los navegadores, este proveía una API a una base de datos SQL basada en SQLite. en 2010, Google movió toda su fuerza a crear estándares como `HTML5` esto causo que Gears fuera descontinuado, mientras eso pasaba, Brad y otros continuaron con dojox.storage para proveer una interfaz unificada para todas las API y plugins, para 2009 esta podia detectar Adobe, Flash, Gears, Adobe AIR, y versiones antiguas de HTML5

## HTML5 Storage

Hay una especificación llamada `Web Storage` este es una especificación que tiene sus propias especificaciones, algunos vendedores de navegadores lo llaman `Local Storage` o `DOM Storage`, asi que, ¿Qué es HTML5 Storage?, de manera simple son pares guardados de valores y llaves que se guardan localmente, como las Cookies, estas se guardan aun cuando se refresca la pagina, se cierra el navegador o apagas la computadora, al contrario de las cookies no manda esta información servidor, a menos que tu mandes la información manualmente, y al contrario de versiones anteriores esta se implementa de manera nativa con las paginas.

| IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ---- | ------- | ------ | ------ | ----- | ------ | ------- |
| 8.0+ | 3.5+    | 4.0+   | 4.0+   | 10.5+ | 2.0+   | 2.0+    |

Con JavaScript puedes acceder al HTML5 Storage atravéz del objeto local Storage en la pestaña de items globales, y para detectar que navegadores tienen soporte puedes usar

```
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
```

O si prefieres usar Modernizr

```
if (Modernizr.localstorage) {
  // window.localStorage is available!
} else {
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
}

```

## Usando HTML5 Storage

Como funciona en pares de llaves y valores, tu guardas un valor y le asignas una llave, y cuando quieras acceder a el, usas esa llave, la data puede ser cualquiera que soporte JavaScript, pero esta se guarda como un string, para poder recibir la información en otro tipo de datos debes usar funciones en como parseInt() o parseFloat(), para asegurarte de que la información esta guardada como el tipo correcto puedes usar

```
interface Storage {
  getter any getItem(in DOMString key);
  setter creator void setItem(in DOMString key, in any data);
};
```

Llamando setItem() con una llave nombrada que existe sobrescribirá el valor previo, si usas getItem() con un valor nulo o que no exista.

Como cualquier objeto de JavaScript puedes tratar localStorage como un `associative array` y en lugar de usar getItem() o setItem(), puedes usar `square brackets` por ejemplo, en lugar de usar

```
var foo = localStorage.getItem("bar");
// ...
localStorage.setItem("bar", foo);
```

puedes usar

```
var foo = localStorage["bar"];
// ...
localStorage["bar"] = foo;
```

Puedes eliminar los elementos guardados en una llave con el comando removeItem() como en el ejemplo

```
interface Storage {
  deleter void removeItem(in DOMString key);
  void clear();
};
```

Finalmente hay una función para obtener todos los valores almacenados e iterar en las llaves por index para obtener el nombre de todas las llaves

```
interface Storage {
  readonly attribute unsigned long length;
  getter DOMString key(in unsigned long index);
};
```

### Rastrear cambios en el HTML5 Storage

Si quieres mantener el rastro de los cambios de manera regular puedes usar el `storage event`, este se activa en el objeto window, siempre que una función relacionada a este se activa y cambia algo
Esta función tiene soporte donde sea que Storage lo tenga, pero para poder usarlo tienes que revisar que mecanismo de `event listener` puede soportar el navegador a usar, usando JavaScript, la función a usar seria

```
if (window.addEventListener) {
  window.addEventListener("storage", handle_storage, false);
} else {
  window.attachEvent("onstorage", handle_storage);
};
```

La función `<handle_storage>` sera llamada con un objeto StorageEvent Excepto por Internet Explorer donde el evento objeto es guardado en window.event

```
function handle_storage(e) {
  if (!e) { e = window.event; }
}
```

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| key | string | El nombre de la llave que fue añadida removida o modificada|
| oldValue | any | el valor previo a ser cambiado, el cual es null si es nuevo |
| newValue | any | El nuevo valor o null si fue removido |
| url | string | la pagina que hizo la función que realizo el cambio |

No hay manera de detener la función del cambio, solo te avisa que este sucede

### Limitaciones en los navegadores actuales

Hay tres limitaciones principales de este método

- 5 megabytes: es la cantidad de espacio que cada origin tiene por defecto, una cosa para mantener en mente es que la información se almacena en `strings`, por lo que si almacenas otro tipo de variables tienes que tener cuidado de la cantidad de cifras o de información que guardas para no sobrepasar esta cantidad
- QUOTA_EXCEEDED_ERR: este es el error que salta si sobrepasas esa cantidad
- No es cambiable: no puedes pedirle más almacenamiento al usuario, algunos navegadores permiten que el usuario cambie esta cantidad, pero no es algo que puedas pedirle en el momento

[Ejemplo de HTML5 Storage en uso](https://github.com/IIKUYY/HTML5/blob/main/Ch7/Ejemplo/index.html)

## Más allá de los pares de llave-valor

Aunque HTML5 Storage tiene un futuro prometedor hay más opciones ademas de esta que están surgiendo y tienen sus ventajas y desventajas
Una opción es SQL, basándose en Gears de Google, se lanzo Web SQL Database, o WebDB, esta especificación actúa como un servidor de backend pero en JavaScript

| IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ---- | ------- | ------ | ------ | ----- | ------ | ------- |
|      |         | 4.0+   | 4.0+   | 10.5+ | 3.0+   | 2.0+    |

Como sabras, SQL no es un estándar fijo, asi que para esta implementación usaremos SQLite.
Otra opción es usar Indexed Database API o comúnmente llamado `WebSimpleDB` o `IndexedDB`, esta comparte conceptos con las Database de SQL, pero esta solo a sido implementada en FireFox 4 y próximamente en Chromium y Google Chrome.

[Menú](https://github.com/IIKUYY/HTML5/tree/main/README.md)