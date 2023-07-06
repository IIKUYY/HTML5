## El Doctype

```
<!DOCTYPE html>
```

Esto es un `Doctype`, hay mucha historia detrás de esto, mientras se trabajaba en Internet Explorer 5 para Mac, los desarrolladores de Microsoft se toparon con un problema, sus estándares mejoraron tanto, que las paginas más viejas no se cargaban correctamente, o en cambio, si lo hacían pero las personas esperaban que no lo hicieran. Las paginas mismas están creadas en base a las peculiaridades de los navegadores más importantes del momento, IE5 fue tan avanzado que rompió el internet.
Microsoft salio con una opción novedosa, antes de cargar la pagina IE5, lee el `Doctype` que es típicamente la primera linea de código, generalmente no lo tenían, IE5 cargaba estas paginas como lo harían los navegadores antiguos, para activar el suporte a los nuevos estándares, tiene que existir este `Doctype` antes del elemento <html>.
Esta idea se hizo popular en seguida, y la mayoría de los navegadores tuvieron dos modos, `Quirk mode` y `Standars mode`, esto ayudo mucho, pero varios navegadores se dieron cuenta de que había paginas que estaban corriéndose con el `standars mode` que solo dependían de un quirk, esto hizo que se crearan los modos `almost standars mode`, que acepta algunos de los quirks pero manteniendo los nuevos estándares.

## EL elemento Root

Una pagina de HTML es una serie de elementos `nested`, la estructura completa de la pagina es como un árbol, alguno elementos son "hermanos", como dos rama que surgen de un tronco, a la vez que unos pueden ser hijos de otros, como ramas naciendo de otras, de esta manera hay padres, abuelos, y ancestros. Los elementos sin hijos se llaman `leafs` u hojas, el elemento más viejo, o del que salen todos se llama `root` o raíz, este en las paginas html es siempre `html`.
Un ejemplo puede ser

```
In this example page, the root element looks like this:

<html xmlns="http://www.w3.org/1999/xhtml"
      lang="en"
      xml:lang="en">
```

No hay nada de malo con este código, pero hay maneras más eficientes.
lo primero seria quitar el elemento xmlns, que es un vestigio de XHTML, ya no necesario en HTML5, lo que dejaría:

```
<html lang="en" xml:lang="en">
```

Lo mismo aplica para xml:lang, que es lo mismo que lang, por lo que quedaría:

```
<html lang="en">
```

## El elemento Head

El primer hijo del elemento raíz es el elemento `head`, este contiene toda la `metadata`, esta es la información que describe a la información de la pagina, este no a cambiado mucho en HTML5, un ejemplo seria:

```
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>My Weblog</title>
  <link rel="stylesheet" type="text/css" href="style-original.css" />
  <link rel="alternate" type="application/atom+xml"
                        title="My Weblog feed"
                        href="/feed/" />
  <link rel="search" type="application/opensearchdescription+xml"
                        title="My Weblog search"
                        href="opensearch.xml"  />
  <link rel="shortcut icon" href="/favicon.ico" />
</head>
```

## Encoding de los caracteres

Las computadoras no pueden interpretar los símbolos como nosotros, estas lidian con una serie de bits y bytes, cada texto que lees en la pantalla de tu computadora esta guardada en `encoding` de caracteres, hay cientos de diferentes `encoding` de caracteres, cada una optimizada para cada lenguaje, especialmente para los que tienen diferentes simbología, básicamente, el `encoding` de caracteres es un intermediario de lo que tu vez en la pantalla y lo que esta almacenado en tu computadora.
La realidad es un poco más complicada, el mismo carácter puede aparecer en más de un `encoding`, pero puede que cada `encoding` utilice un secuencia de bytes diferente para este. Puedes pensar en el `encoding` como una llave para "des-encriptar" el texto, cada vez que alguien te de una secuencia de bytes y te diga que es un "texto" debes de saber la manera en la que se hizo el `encoding` para que lo puedas `decode` a caracteres legibles y mostrarlos en pantalla.
Como el servidor determina que `encoding` usar, si estas familiarizado con HTTP puede que reconozcas este "header"

```
Content-Type: text/html; charset="utf-8"
```

Esto es l oque usa el servidor, básicamente diciendo que usa UTF-8, afortunadamente, muy pocos autores tienen acceso a los servidores asi que esto es un estándar, ahora en HTML4 se ve algo asi:

```
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```

Y en HTML5 se ve algo asi:

```
<meta charset="utf-8" />
```

Esto funciona en casi todos los navegadores.

## Amigos y relaciones (Links)

Los links regulares `href`, solo apuntan a otra pagina, los `Links relations`, es la explicación de porque estas apuntando a esa otra pagina, por ejemplo:

- es una hoja de estilo que contiene reglas CSS que su navegador debe aplicar a este documento.
- es un suministro de contenido que contiene el mismo contenido que esta página, pero en un formato estándar y suscribible.
- es una traducción de esta página a otro idioma.
- es el mismo contenido que esta página, pero en formato PDF.
- es el siguiente capítulo de un libro en línea del cual esta página también forma parte.

También HTML5 separa sus `Links relations` en dos categorías.

1. Links a recursos externos, que son los que te llevan a recursos usados para mejorar la pagina.
2. Hyperlinks, que son lo que te llevan a otros documentos.

En el ejemplo

```
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>My Weblog</title>
  <link rel="stylesheet" type="text/css" href="style-original.css" />
  <link rel="alternate" type="application/atom+xml"
                        title="My Weblog feed"
                        href="/feed/" />
  <link rel="search" type="application/opensearchdescription+xml"
                        title="My Weblog search"
                        href="opensearch.xml"  />
  <link rel="shortcut icon" href="/favicon.ico" />
</head>
```

`link rel="stylesheet" type="text/css" href="style-original.css" /` Es un recurso externo, mientras que los otras links son hyperlinks.

### Rel=stylesheet

Es un link a un recurso externo que apunto a un archivo CSS, solo hay una manera de apuntar a un archivo CSS, funciona en casi todos los navegadores y es

```
<link rel="stylesheet" href="style-original.css" />
```

### Rel=Alternate

Es un link combinado ya sea con un archivo RSS o Atom, activa algo llamado `feed autodiscovery` lo que permite que lectores `syndicated feed` como Google Reader descubran si una pagina tiene noticias en los nuevos artículos, alguno navegadores tienen soporte al `feed autodiscovery` mostrando un icono especial al lado del URL.
El `link relation` <rel=alternate> siempre a sido un extraño caso de híbrido en sus usos, incluso en HTML4, pero en HTML5 su definición se extendido y aclarado un poco describiendo el contenido web existente.
HTML5 también acabo con la confusión acerca de como hacer el link de una traslación de documentos, en HTML4 usabas un lang con <rel=alternate>, pero en la errata de HTML4 y en HTML5 se menciona que lo correcto es usar hreflang.

### Otras Link relations

<rel=autor>, es usado para para incluir un link con la información del autor.
<rel="start">, <rel="prev">, <rel="next">, <rel="last"> definen las relaciones que hay entre paginas de una serie, como un libro o un blog.
<rel="up">, es para apuntar a una pagina madre, es decir una de la que salgan varias.
<rel="icon">, Es para modificar el icono que se muestra al lado del nombre de la pagina en la pestaña del navegador.
<rel="license">, Indica que el documento provee la licencia de copyright.
<rel="nofollow">, indica que el link no a sido aprobado por el autor de la pagina, o porque el link fue incluido por una relación comercial entre dos personas.
<rel="noreferrer">, indica que no se debe filtrar información de referencia cuando se sigue el link.
<rel="prefetch">, indica que recuperar y almacenar en caché de forma anticipada el recurso especificado probablemente será beneficioso, ya que es muy probable que el usuario necesite este recurso.
<rel="search">, indica que la etiqueta que representa el documento referenciado se aplica al documento actual.
<rel="tag">, indica que la etiqueta que representa el documento referenciado se aplica al documento actual.

## Nuevos elementos semánticos de HTML5

- section: representa un documento genérico o un sección de aplicación.

- nav: representa una sección de la pagina que conecte a otra, o a otras partes de la pagina.

- article: representa un componente de una pagina que consiste en una composición auto-contenida en un documento, aplicación o sitio que su intención es ser independiente o reusable.

- aside: representa una sección de una pagina que consiste en contenido que es tangencialmente relacionada con el contenido de al rededor.

- hgroup: representa el encabezado de una sección.

- header: representa un grupo de introducción o de ayuda a la navegación.

- footer: representa un `footer` al ancestro más cercano o seccionado al elemento `root`.

- time: representa ya sea un reloj a 24 horas, o una fecha precisa en calendario gregoriano proléptico.

- mark: representa un pedazo de texto en un documento en marcado o resaltado con propósito de referencias.

## Como los navegadores manejan los elementos desconocidos

Todos los navegadores tienen una lista de elementos HTML a los que les tiene soporte, y los que no se encuentran en esta lista se les conoce como `unknown elements`, el problema es lo que pasa cuando un navegador se encuentra con uno de estos, hay dos problemas fundamentales.

1. Como debería ser estilizado.
2. Como debería verse el DOM del elemento.

Cada navegador lidia con estos problemas de diferentes maneras, de los más grandes, Internet Explorer lo hace de la manera más problemática.
La respuesta más obvia para el primer problema seria no darle ningún formato de estilo, solo dejar que se hereden las propiedades de CSS de la pagina en la que esta, o dejar que el autor especifique el estilo con CSS, la mayor parte de las veces esto funciona, pero hay un pequeño problema.
Hay bastantes elementos nuevos definidos en HTML5, que son `block-level`, esto significa que pueden contener otros elementos `block-level`, en navegadores que trabajan con HTML5 se estilizan de la manera `display:block` esto pór defecto, en navegadores antiguos lo tienes que hacer manual.

```
article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}
```

Internet Explorer ignoraba a los `unknown- elements` antes de la versión 9, lo que era un problema, el cual ya esta resulto.
El segundo problema también tiene problemas en versiones anteriores a la 9 de Internet Explorer, en estas se mostraba el elemento como un nodo vació y sin hijo, al contrario de como debería verse en HTML5.
Hay una salida fácil de esto, si haces un `dummy` con JavaScript, mágicamente, el navegador lo reconocerá, ademas de que te dejara estilizaran con CSS.
Remy Sharp hizo un `aptly` el cual se llama `HTML5 enabling script`, esta es la versión básica.

```
<!--[if lt IE 9]>
<script>
  var e = ("abbr,article,aside,audio,canvas,datalist,details," +
    "figure,footer,header,hgroup,mark,menu,meter,nav,output," +
    "progress,section,time,video").split(',');
  for (var i = 0; i < e.length; i++) {
    document.createElement(e[i]);
  }
</script>
<![endif]-->
```

la primera linea es un condicional, este dice que si se encuentra en una versión anterior a IE9 se ejecute ese pedazo de código.
La parte de JavaScript es bastante simple, las variables, sirven para crear los elementos de HTML5 que no están en IE8 o anteriores, y luego hace un `loop` con document.createElement(e[i]), lo mejor es usar este pedazo de código lo más pronto posible, si es posible en `Head`, Remy a mejorado el código en una pagina, para que solo tengas que usar

```
<head>
  <meta charset="utf-8" />
  <title>My Weblog</title>
  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>
```

Esto es muy util

## Headers

Un ejemplo de header seria

```
<div id="header">
  <h1>My Weblog</h1>
  <p class="tagline">A lot of effort went into making this effortless.</p>
</div>
```

Esto no esta mal, pero se podría mejorar, para empezar, se puede eliminar el `<div id="header">`, esto no tiene ningún valor semántico ni de estilo, por lo que quedaría algo asi

```
<header>
  <h1>My Weblog</h1>
  <p class="tagline">A lot of effort went into making this effortless.</p>
  …
</header>
```

Ahora, que son los `taglines`, básicamente son subtítulos, estos están están relacionados con el `header` principal, pero no crea su propia sección.
Los elementos `Headers` sirven para dar estructura, en HTML4 solo servían para hacer una guía visual para el lector, pero en HTML5 también sirven de `taglines`, por ejemplo:

HTML4
My Weblog (h1)
|
+--A lot of effort went into making this effortless. (h2)
|
+--Travel day (h2)
|
+--I'm going to Prague! (h3)

HTML5
My Weblog (h1)
|
+--A lot of effort went into making this effortless. (h2)
|
+--Travel day (h3)
|
+--I'm going to Prague! (h3)

Ahora el problema es que el h2 se roba al hijo del nodo `root`, para solucionar esto se utiliza `<hgroup>`, este lo que hace es "envolver" a uno o más elementos para que solo formen un nodo, lo que se vería asi

```
<header>
  <hgroup>
    <h1>My Weblog</h1>
    <h2>A lot of effort went into making this effortless.</h2>
  </hgroup>
  …
</header>
```

Que en el outline se vería:

My Weblog (h1 of its hgroup)
|
+--Travel day (h2)
|
+--I'm going to Prague! (h2)

## Articles

En HTML5 para marcar a un `article` se hace de la siguiente manera

```
<article>
  <header>
    <p class="post-date">October 22, 2009</p>
    <h1>
      <a href="#"
         rel="bookmark"
         title="link to this post">
         Travel day
      </a>
    </h1>
  </header>
  …
</article>
```

Esto puede ser confuso, usas el elemento `header` para envolver el articulo y que afecte a los demás, y a pesar de tener h1 no afecta el `outline`, esto es porque contrario a HTML4, el `outline` de HTML5 no solo se maneja por `<h1>-<h6>` si no también por secciones, una de las cuales se crea con `article`, estas secciones son nodos aislados, por lo que puedes usar h1 sin mover el `outline` general.
Esto ayuda a la creación de código, porque puedes crear secciones con sus propios encabezados, sin tener que estar atento al markup general, esto ayuda al copiar código entre archivos y al momento de aprender.

## Fechas y Horas

Para marcar la fecha de publicación en HTML4 se usaba

```
<div class="entry">
  <p class="post-date">October 22, 2009</p>
  <h2>Travel day</h2>
</div>
```

En cambio sabemos que en HTML5 las cosas se simplificaron, por lo que en lugar de usar todo ese código, se puede usar

```
<time datetime="2009-10-22" pubdate>October 22, 2009</time>
```

Hay tres elementos que conforman un elemento `<time>`

1. Un timestamp que pueda leer una computadora
2. Un timestamp que pueda leer una un humano
3. Un pubdate opcional

en este ejemplo, el formato es año a 4 dígitos, 2 dígitos de mes y dos dígitos de día.
Si quisieras añadir hora tendrías que añadir la letra t, por ejemplo

```
<time datetime="2009-10-22T13:59:47-04:00" pubdate>
  October 22, 2009 1:59pm EDT
</time>
```

Se cambio el texto para que coincida con el timestamp que lee la computadora, pero se puede colocar el texto que se quiera y si se quiere no se pone un texto.
Ahora, el atributo `pubdate`, este es un atributo `boolean` que solo se agrega si es necesario, si no lo es lo puedes dejar vació o usarlo asi `<pubdate="pubdate">`.
Lo que significa este pedazo de código es simple, si esta dentro de un articulo este es la fecha y hora de publicación de este articulo, en contrario si encuentra solo, es la fecha de publicación de todo el documento, un ejemplo de un articulo con timestamp sería

```
<article>
  <header>
    <time datetime="2009-10-22" pubdate>
      October 22, 2009
    </time>
    <h1>
      <a href="#"
         rel="bookmark"
         title="link to this post">
         Travel day
      </a>
    </h1>
  </header>
  <p>Lorem ipsum dolor sit amet…</p>
</article>
```

## Navegación

Las barras de navegación son una parte muy importante de las paginas, estas son las barras que te llevan a las secciones de las paginas, en un ejemplo, supongamos las secciones `home`, `blog`, `gallery` y `about`, en HTML4 seria

```
<div id="nav">
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">blog</a></li>
    <li><a href="#">gallery</a></li>
    <li><a href="#">about</a></li>
  </ul>
</div>
```

Esta sección no tiene una buena semántica en particular, pero esto es importante, porque la pagina si lo puede distinguir, esto es util para las funciones para las personas con discapacidades, ya que generalmente, estas funciones utilizan la estructura de las paginas para saber que información es util para el usuario y poderla usar, asi que es importante.
Igual que en las otras secciones, tiene elementos de más, asi que de forma optima podría ser asi

```
<nav>
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">blog</a></li>
    <li><a href="#">gallery</a></li>
    <li><a href="#">about</a></li>
  </ul>
</nav>
```

## Footers

Lo ultimo que se ve en una pagina es el pie de pagina o `footer`, originalmente la forma de hacer el markup es la siguiente

```
<div id="footer">
  <p>&#167;</p>
  <p>&#169; 2001&#8211;9 <a href="#">Mark Pilgrim</a></p>
</div>
```

HTML5 tiene una forma más especifica sobre como hacer el markup

```
<footer>
  <p>&#167;</p>
  <p>&#169; 2001&#8211;9 <a href="#">Mark Pilgrim</a></p>
</footer>
```

Pero, ¿Qué es apropiado de poner en el footer?, realmente no hay una lista especifica, pero las especificaciones de HTML5 dicen "Un pie de página generalmente contiene información sobre su sección, como quién lo escribió, enlaces a documentos relacionados, datos de derechos de autor y similares." por ejemplo, veremos el ejemplo del W3C.

```
<div id="w3c_footer">
  <div class="w3c_footer-nav">
    <h3>Navigation</h3>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/standards/">Standards</a></li>
      <li><a href="/participate/">Participate</a></li>
      <li><a href="/Consortium/membership">Membership</a></li>
      <li><a href="/Consortium/">About W3C</a></li>
    </ul>
  </div>
  <div class="w3c_footer-nav">
    <h3>Contact W3C</h3>
    <ul>
      <li><a href="/Consortium/contact">Contact</a></li>
      <li><a href="/Help/">Help and FAQ</a></li>
      <li><a href="/Consortium/sup">Donate</a></li>
      <li><a href="/Consortium/siteindex">Site Map</a></li>
    </ul>
  </div>
  <div class="w3c_footer-nav">
    <h3>W3C Updates</h3>
    <ul>
      <li><a href="http://twitter.com/W3C">Twitter</a></li>
      <li><a href="http://identi.ca/w3c">Identi.ca</a></li>
    </ul>
  </div>
  <p class="copyright">Copyright © 2009 W3C</p>
</div>
```

Para volver este código a estándares de HTML5 tendríamos que hacer unos cambios.

- Cambiar el elemento `<div id="w3c_footer">` a `<footer>`
- Cambiar las primeras dos instancias de `<div class="w3c_footer-nav">` por `<nav>`, y la tercera por `<section>`
- Convertir el header h3 por h1,

Por lo que se podría ver de esta manera

```
<footer>
  <nav>
    <h1>Navigation</h1>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/standards/">Standards</a></li>
      <li><a href="/participate/">Participate</a></li>
      <li><a href="/Consortium/membership">Membership</a></li>
      <li><a href="/Consortium/">About W3C</a></li>
    </ul>
  </nav>
  <nav>
    <h1>Contact W3C</h1>
    <ul>
      <li><a href="/Consortium/contact">Contact</a></li>
      <li><a href="/Help/">Help and FAQ</a></li>
      <li><a href="/Consortium/sup">Donate</a></li>
      <li><a href="/Consortium/siteindex">Site Map</a></li>
    </ul>
  </nav>
  <section>
    <h1>W3C Updates</h1>
    <ul>
      <li><a href="http://twitter.com/W3C">Twitter</a></li>
      <li><a href="http://identi.ca/w3c">Identi.ca</a></li>
    </ul>
  </section>
  <p class="copyright">Copyright © 2009 W3C</p>
</footer>
```

[Menú](https://github.com/IIKUYY/HTML5/tree/main/README.md)