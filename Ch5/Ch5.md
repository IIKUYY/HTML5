## Introducción

| IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ---- | ------- | ------ | ------ | ----- | ------ | ------- |
| 9.0+ | 3.5+    | 3.0+   | 3.0+   | 10.5+ | 1.0+   | 2.0+    |

HTML5 define una forma estándar de incrustar vídeos en una página web, utilizando el elemento `<video>`. El soporte para el elemento `<video>` sigue evolucionando, lo cual es una forma educada de decir que aún no funciona. Al menos, no funciona en todas partes.

## Video Containers

Puedes llegar a pensar que los archivos `MP4` o los archivos `AVI` son formatos de video, en realidad son formatos de los contenedores, como los archivos `ZIP`, estos definen como guardar los archivos, no que son.
Los archivos de video contienen varios `tracks`, uno de video, uno de audio, uno de video, etc. estas generalmente no están relacionadas, a la vez cada una tiene metadata, como la portada o el idioma etc.

Hay bastantes formatos, pero los más usados son

- MPEG 4: Antes conocido como el contenedor .mov, usado por Apple para películas en iTunes, su extension es .mp4 o .m4v
- Ogg: Este contenedor esta caracterizado por ser de código libre, por lo que es compatible con Linux con la extension .ogv
- Flash Video: Usado por Adobe Flash, utilizando .flv
- WebM: Un formato de código libre, `royalty-free` diseñado para HTML5 con la extension .webm
- ASF: Creado por Microsoft, para `streaming` de video, con la extension .afv
- Audio Video Interleave: Un contenedor más tradicional, creado por Microsoft con pocas opciones y con extension .avi

## Video Codecs

Como se menciono anteriormente, los formatos contienen varios `tracks`, como un `ZIP` asi que para poder ver un video se tienen que hacer varias cosas, como

1. Interpretar el formato del contenedor, que tracks están disponibles, y en como están guardados
2. Decodificar las imágenes del video y reproducirlas en la pantalla
3. Decodificar el audio y reproducirlo en las bocinas

El `Codec` es un algoritmo que codifica y decodifica el archivo, veremos los tres más relevantes para el desarrollo web

### H.264

También conocido como `MPEG-4 part 10` o `MPEG-AVC` creado para dispositivos con baja capacidad de memoria, los dispositivos de Apple, AdobeFlash, youtube, todas ocupan este sistema de codificación, la mayoría de dispositivos que no sean un CPU, utilizan un chip dedicado, incluso tarjetas gráficas de gamas bajas lo tienen, esto para reducir la carga del procesador

### Theora

Evoluciono de VP3, libre de patentes y `royalty-free`, pero los estándares han sido "congelados" desde 2004, y es de código libre, Este puede incluirse en casi cualquier contenedor, pero generalmente se utiliza Ogg, y todos los sistemas que tienen soporte para este, lo tienen para Theora.

### VP8

Un codificador de baja complexidad parecido a H.264, fue desarrollado por la misma empresa que que VP3, es de código libre, y todas sus patentes son `royalty free` asi que a pesar de tener patentes es bastante amigable con el publico general

## Audio Codecs

Como los codecs de video, estos funcionan con algoritmos, pero estos están hechos para el audio.
cuando estos funcionan, se deben realizar al menos tres tareas en la computadora.

1. Interpretar el formato del contenedor.
2. Decodificar el hilo del video.
3. Decodificar el hilo del audio y mandarlo a los altavoces.

El codec de audio es el que se encarga del tercer paso, y tiene que hacer un paso adicional, dividir el audio en "canales", esto es porque el audio se puede divir entre distintos altavoces, puedes tener 1, 2 o 6, esto se determina por la cantidad de canales con las que se grabo el audio.

### MPEG-1

coloquialmente llamado Mp3, puede manejar hasta dos canales de audio, los puede codificar en diferentes `bitrates`, 64 kbps, 128 kbps, 192 kbps, una gran variedad, desde 32 hasta 320, esto sirve, porque diferentes partes del audio se pueden codificar con diferentes `bitrates`, silencios y partes más complejas se codifican diferente, generalmente se encuentran con contenedores MP4, y al no tener unos estándares tan específicos, muchos sistemas son capaces d+ reproducirlos.

### Advanced Audio Coding

Conocido como AAC, es el formato usado para la iTunes, fue diseñado para poder codificar con los mismo `bitrates` que MP3, pero con mayor calidad y para todo tipo de archivos de audio, puede usar hasta 48 canales, se basa en el uso de perfiles, esto para poder dividir su uso en dispositivos desde baja complejidad hasta algunos de muy alta calidad.

### Vorbis

El muchas veces llamado Ogg Vorbis, aunque esto es incorrecto, es un codificador libre de patentes, por lo que puede ser usado en la mayoría de sistemas.

## Que funciona en la Web

| CODEC/CONTAINER   | IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ----------------- | ---- | ------- | ------ | ------ | ----- | ------ | ------- |
| THEORA+VORBIS+OGG | -    | 3.5+    | \*     | 5.0+   | 10.5+ | -      | -       |
| H.264+ACC+MP4     | 9.0+ | -       | 3.0+   | -      | -     | 3.0+   | 2.0+    |
| WEBM              | 9.0+ | 4.0+    | \*     | 6.0+   | 10.6+ | -      | 2.3+    |

"\*" Para que funcione debes tener instalado el codec VP8

Para asegurar la maxima compatibilidad tu linea de trabajo debe verse similar a esto

1. Haz una versión que utilize WebM (VP8 + Vorbis).
2. Haz otra versión que utilize H.264 para el video, ACC para el audio y este en un contenedor MP4.
3. Haz otra versión que utilice Theora y Vorbis en un contenedor Ogg.
4. Enlaza los tres archivos de video al mismo elemento `<video>` y regresa a un reproductor basado en Flash

## Problemas de licencia en H.264

Hay costos al momento de codificar tus videos dos veces, ademas de los recursos usados, están los costos de licencias de H.264.
Las licencias de H.264 están divididas en 2, la primera es para elaboradores, y la segunda es para distribuidores.
La sub-licencia para la distribución se divide en cuatro categorías, que se pueden distribuir en dos grupos, el primero son (la suscripción o pago por uso), que estás relacionados al precio al usuario final, y la otra es (Televisión o Internet) estas opciones, se centran en las ganancias generadas.
La licencia por television tiene dos opciones, pago único por decodificador del usuario final, el cual es doble pago, o pago por año por cantidad de clientes, en cambio el uso en internet es gratuito y no hay costos para estos.

## Codificadores

Hay varias opciones con las cuales puedes codificar en los distintos tipos de archivos.

### Miro Video Converter

Esta opción es una todo propósito, sirve desde cualquier formato para cualquier formato, no tiene la mejor calidad pero es bastante versátil.

### FireFogg

Este programa sirve para Ogg (Video en Theora, audio en Vorbis), para usarlo debes instalar Firefox 3.5 o más y buscar e n el navegador el programa.

### FFMPEG2THEORA

Sirve para automatizar una serie de archivos de formato Ogg (Video en Theora, audio en Vorbis), en sucesión y de manera automática.

### Handbrake

Para codificar en H.264 (H.264 para video y ACC para audio) puedes usar este programa, ya sea solo para un archivo o para hacer varios en sucesión, solo tienes que instalar el programa que esta disponible para MAC, Windows y Linux.

## El Markup

HTML5 tiene dos formas de incluir video en la pagina, ambas utiliza el elemento `<video>` si solo tiene un archivo, puedes simplemente usar el tag src, técnicamente solo ocupas eso, pero es mejor incluir los datos de altura y grosor, por defecto el video no tendrá un control, puedes crear el tuyo propio con HTML, CSS y JavaScript, si no, puedes usar `control` para usar el predeterminado del navegador, hay una opción que hace que se vaya pre-cargando el video cuando se abra la pagina, esta es `preload`, se puede poner o colocar en none para no hacerlo, ademas puedes colocar autoplay para que se reproduzca desde que se abra.

```
<video src="pr6.webm" width="320" height="240" controls autoplay></video>
```

Este es un script que puedes instalar en tu copia local de FireFox que se puede utilizar para evitar el autoplay

```
// ==UserScript==
// @name           Disable video autoplay
// @namespace      http://diveintomark.org/projects/greasemonkey/
// @description    Ensures that HTML5 video elements do not autoplay
// @include        *
// ==/UserScript==

var arVideos = document.getElementsByTagName('video');
for (var i = arVideos.length - 1; i >= 0; i--) {
    var elmVideo = arVideos[i];
    elmVideo.autoplay = false;
}
```

Como hemos visto anteriormente, no solo hay un tipo de video, asi que lo mejor es conectar los tres tipos de contenedores, lo mejor es colocar los tres para estar seguros, se puede hacer así.

```
<video width="320" height="240" controls>
  <source src="pr6.mp4"  type="video/mp4; codecs=avc1.42E01E,mp4a.40.2">
  <source src="pr6.webm" type="video/webm; codecs=vp8,vorbis">
  <source src="pr6.ogv"  type="video/ogg; codecs=theora,vorbis">
</video>

```

cada uno de estos, tiene tres partes, el archivo de video, el tipo del contenedor, y los codecs que se usan.

### MIME Types

Es importante el uso correcto de los MIME Types de los videos para evitar errores y tener un buen sistema, si usas un server de Apache, puedes usar AddType en un directorio, ya sea en un archivo `httpd.conf` o en uno `.htaccess`.

```
AddType video/ogg .ogv
AddType video/mp4 .mp4
AddType video/webm .webm
```

## IE, iPhone, iPad y Android

IE 9 tiene soporte para elementos `<video>` con video en H.264, audio en ACC y contenedor MPEG-4, para versiones anteriores de la 8.0 puedes incluirlo Adobe Flash, el cual tiene soporte para los mismos archivos.
FlowPlayer es un reproductor de video basado en Flash licenciado con GPL, para poder usarlo, debes incluir un elemento `<object>` dentro de `<video>` lo cual hace que los navegadores que no tienen soporte para video, lean el object, y lo reproduzca como un elemento Flash, el problema de esto es que se elimina la información del elemento `<video>`, para solucionar esto, se tiene que usar JavaScript para el Flash.

iOS 3.2 tienen 2 problemas principales

1. iOS no reconoce el elemento `<video>` a menos que tengo un poster, esta es una imagen que se muestra antes de presionar "reproducir", esto se arreglo en la 4.0
2. Si tienes varios elementos en `<source>` solo reconocerá el primero, pero como solo tiene soporte para H.264+ACC+MP4, pon ese al principio.

Android 2.3 tiene 2 problemas principales

1. El atributo `<source>` confunde a android, asi que la forma más simple, es evitar el uso de este, asegurándose de que tengo la extensión correcta.
2. El atributo control no tiene soporte, por lo que no creara ningún sistema de control para el usuario, por lo que al menos deberías crear uno que haga lo mínimo necesario para estar seguro.

[Ejemplo](https://github.com/IIKUYY/HTML5/blob/main/Ch5/Ejemplo/index.html)
[Menú](https://github.com/IIKUYY/HTML5/tree/main/README.md)