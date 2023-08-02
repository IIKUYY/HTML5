## Introducción

En lo más básico, una pagina web es una colección de URLs de archivos y otro tipo de fuentes, asi que funciona descargando estos recursos y los `render`, asi que normalmente solo carga estos archivos desde el servidor, pero si pagina tiene la aplicación offline, descarga estos archivos en tu cache y los mantiene listos, implementar esta función esta completamente en las manos del desarrollador

| IE   | FIREFOX | SAFARI | CHROME | OPERA | IPHONE | ANDROID |
| ---- | ------- | ------ | ------ | ----- | ------ | ------- |
|      |   3.5+  | 4.0+   | 5.0+   | 10.6+ | 2.1+   | 2.0+    |

## Cache Manifest

Una aplicación web offline gira entorno a un `cache manifest`, pero,    que es un archivo `manifest`, este es una lista de los recursos que la aplicación web necesita para su funcionamiento mientras esta desconectada, para usar este archivo debes incluirlo como atributo manifest en el elemento `<html>`

```
<!DOCTYPE html>
<html manifest="/cache.manifest">
<body>
...
</body>
</html>
```

Tu `cache manifest` puede estar ubicado en cualquier parte del servidor web, pero debe tener el `content type` `text/cache-manifest`, si estas usando un servidor basado en Apache, puedes solo poner un `AddType directive` en el `.htaccess file`

```
AddType text/cache-manifest .manifest
```

En el cache manifest la primera linea debe ser `CACHE MANIFEST`, este esta dividido en tres partes, la `explicit`, el `fallback` y el `online whitelist`

### Explicit

Si el archivo no tiene `headers` todos los archivos listados serán parte de Explicit, si no, se usa el `header` `CACHE`, los archivos de esta sección serán descargados en tu local y se usaran en lugar de sus contrapartes en linea en caso de des-conexión

### Online Whitelist

Empieza con el `header` `NETWORK` los archivos en esta sección no se descargan porque al tratar de llegar a ellos offline se crearía un error, por lo que no se usan

### Fallback

Empieza con el `header` `FALLBACK` y para saber como funciona tenemos que ver un ejemplo

```
CACHE MANIFEST
FALLBACK:
/ /offline.html
NETWORK:
*
```

¿Como funciona?, simple, imagina que tienes una pagina que tiene varias paginas dentro de ella y seria demasiado descargar todas las paginas a las que apunta, por lo que usando esta sección solo se descargan las paginas que has visitado, por eso la linea de fallback no es un URL completo, es más bien un patron, donde la parte marcada con las // es la parte cambiante y el final es lo que identifica las URL, para terminar, vemos el ejemplo de `NETWORK` vemos que solo tiene una linea, la cual es `*` esto se denomina `online whitelist wildcard flag` esta significa que todos los archivos que no sean appcache no se van a descargar, como imágenes de otros sitios o videos

## La linea de eventos

Hablemos primero del flujo de eventos de los eventos DOM, cuando tu navegador entra a una pagina con un cache manifest, varios eventos pasan en `window.applicationCache`

1. Tan pronto como note que hay un manifest en el atributo `<html>` el navegador empezara un un evento `checking`, este evento empezara hayas visitado o no esta pagina antes
2. Si tu navegador no ha visto este cache manifest antes ...
    - Empezara un evento `downloading` y descargara todos los archivos listados
    - Periódicamente empezara eventos `progress` que revisaran el progreso de las descargas y que porcentaje lleva
    - Cuando todos los archivos ya están descargados empezara un evento cached lo que significa que ya estas listo
3. En cambio si ya has visitado esta pagina antes o alguna otra que apunte al mismo manifiesto posiblemente ya tenga todo un flujo de trabajo en appcache, asi que la pregunte es si el manifest a cambiado desde la ultima vez
    - Si no lo ha hecho entonces el navegador usa empieza el evento `noupdate`
    - Si si lo ha hecho entonces realizara los eventos `downloading` y `progress` como si no la hubiera visitado antes
    - Al final se empieza el evento `updateready` para avisar que la nueva version ya esta lista, esta version no estará en uso automáticamente, para hacerlo tienes que llamar la función `window.applicationCache.swapCache()`

Si alguna vez sucede algo malo esta es una lista de lo que podría pasar

- El cache manifest regresa un HTTP error 404 (Page Not Found) o 410 (Permanently Gone).
- El cache manifest fue encontrado y no a cambiado pero fallo en descargar
- El cache manifest cambio mientras la descargaba se llevaba acabo
- El cache manifest cambio y fue encontrado, pero tu navegador fallo en descargar uno o más archivos

## Debugging

Aunque solo un archivo no se pueda descargar marcara error en general y no te dirá cual es el del problema, lo que hace frustrante el `debugging`
La segunda cosa a notar no es técnicamente un error, pero parecerá un bug del navegador si no sabes que es, esto tiene que ver en como el navegador revisa si el cache manifest a cambiado

1. Con semántica HTTP, tu navegador revisara si el cache manifest ha expirado, como con otros archivo HTTP este contiene información meta sobre los headers, algunos de estos headers (Expires y Cache-Control) que le dicen a tu navegador como hacer el cache sin preguntarle al servidor, esto no tiene nada que ver con aplicaciones offline, esto pasa con los demás tipos de archivos

2. Si el cache manifest ha expirado (de acuerdo a los headers de HTTP), entonces el navegador revisara el servidor en búsqueda de la nueva version, hará una solicitud en HTTP donde se incluye la fecha de la ultima actualización y en caso de que no la encuentre no descargara nada y manda un mensaje.

3. Si encuentra una nueva versión descargara los archivos necesarios para estar al día con la versión actualizada y volverá a revisar en caso de que no se haya descargado de manera correcta

Por como funciona HTTP si actualizas el cache manifest no se mostrara el cambio hasta dentro de unas horas después y no pasara del paso uno, asi que como poder arreglar esto, si estas usando un servidor en base Apache puedes re-configurar el servidor con dos lineas de código

```
ExpiresActive On
ExpiresDefault "access"
```

Esto afectara a todos los archivos, lo que probablemente no quieras, asi que deberías calificar estos archivos como `directive` para que solo afecte al cache manifest, o crear un sub-directorio con solo este .htaccess y tu cache manifest, esto cambia dependiendo del servidor, en cambio si no cambias el archivo cache manifest, pero si un archivo dentro de este deberías incluir una linea de comentario que cambies dependiendo de la versión para que note el cambio

[Ejemplo](https://github.com/IIKUYY/HTML5/tree/main/Ch8/Ejemplo)

[Menú](https://github.com/IIKUYY/HTML5/tree/main)