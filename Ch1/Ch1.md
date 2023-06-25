## MIME types

Para entender el funcionamiento de HTML5 es necesario que revisemos versiones anteriores de este y aspectos técnicos de estas, como los `MIME types`.
Cada vez que un navegador solicita una pagina web, el servidor le envía `headers` antes de mandar el `markup`, normalmente estos no se pueden ver, aunque hay maneras de verlos, estos son importantes, porque le dicen a la pagina como interpretar el `markup`, uno de los más importantes es el `Content-Type` que se ve asi
```
Content-Type: text/html
```
<text/html> es llamado `content type` o `MIME type` de la pagina, esto **solo** determina que tipo de recurso es, y por consiguiente como debería ser `render` cada tipo recurso tiene su `MIME type` desde imágenes hasta archivos JavaScript.
Esto no es tan perfecto en la realidad, en los primeros servidores (1993) no se no se mandaban `Content-type headers` esto porque se inventaron hasta 1994, asi que algunos navegadores basados en esos servidores los ignoran, aunque por regla general eso no sucede.

## Una larga historia de como se hicieron los estándares

El porque existen los `MIME types` que existen, es una pregunta no muy frecuente, la respuesta es que los crearon los usuarios con el paso del tiempo, estos fueron cambiando y evolucionando, por eso se pueden ver versiones mejoradas y también errores en estos, a la vez que cambian en cada version a mejor.

## Una linea sin romper

HTML se formo a partir de la conversación de muchos autores, lo que dio paso al estado actual, considere que:

- HTTP sigue existiendo, paso de 0.9 a 1.0 y finalmente a 1.1, y sigue avanzando.
- HTML sigue existiendo como una forma de datos rudimentaria, paso de 2.0 a 3.2 a 4.0, es una linea continua, una linea torcida, fragmentada y enredada, pero ininterrumpida, hay varias ramas rotas en este camino, pero aun asi siguen funcionando paginas de los 90s.
- HTML siempre a sido una conversación entre los creadores de los navegadores, los autores, los obsesionados con los estándares, y gente a la que le gustan los `angle brackets`, la mayoría de las versiones exitosas de HTML fueron creadas a base de esto, aunque algunas personas alegan de que se debería mantener puro, esto es erróneo, HTML nunca a sido puro, todos los intentos para hacerlo más puro han sido fracasos estrepitosos, solo comparables a los intentos por remplazarlo.
- Ningún navegador de los 90s sigue existiendo, si a caso han sido recreados o remplazados.
- Algunos sistemas operativos de los 90s siguen existiendo, pero ninguno de ellos sigue siendo relevante.
- Algunas de las personas que empezaron esto llamado estándares web siguen en el medio.
- Con la eventual popularidad de HTML, es fácil olvidar sus formatos contemporáneos, y sistemas que informaron su diseño.

## Una linea del tiempo de HTML desde 1997 a 2004

En diciembre de 1997, la `World Wide Web Consortium` W3C para abreviar, publico HTML 4.0 y cerro inmediatamente al grupo de trabajo de HTML, menos de dos meses después, un grupo de trabajo separado del W3C publico XML 1.0, tan solo 3 meses después la gente encargada del W3C, creo una `workshop` llamada `Shaping the future of HTML` para responder a las pregunta de ¿Acaso el W3C se rindió con HTML? a lo que la respuesta fue:

*En las discusiones, se acordó que sería difícil extender aún más HTML 4.0, al igual que convertirlo en una aplicación XML. La forma propuesta de liberarse de estas restricciones es comenzar de nuevo con la próxima generación de HTML basada en un conjunto de etiquetas XML.*

El W3C re-organizo el grupo de trabajo de HTML para crear la `suit of XML tag-sets`, su primer paso fue en diciembre de 1998 fue hacer un `draft` provisional de especificaciones que reformularon HTML a XML son añadir nuevos elementos o atributos, esto paso a llamarse después XHTML 1.0, este tiene su propio `MIME type` el cual es <application/xhtml+xml>, sin embargo para facilitar la migración de paginas HTML 4 existentes, también incluye el Apéndice C, que resume las pautas de diseño para los autores que deseen que sus trabajos en XHTML funcionen en agentes de HTML. El Apéndice C establece que se permite crear páginas denominadas "XHTML", pero aún así se pueden servir utilizando el `MIME type` <text/html>.
Su siguiente objetivo fueron hacer `web forms` en agosto de 1999 el mismo grupo de trabajo publico el primer `draft` de `Extended forms` de XHTML ellos establecieron estas expectativas en su primer párrafo

*Después de una cuidadosa consideración, el grupo de trabajo HTML ha decidido que los objetivos para la próxima generación de formularios son incompatibles con la preservación de la compatibilidad con los navegadores diseñados para versiones anteriores de HTML. Nuestro objetivo es proporcionar un nuevo modelo de formularios limpio ("XHTML Extended Forms") basado en un conjunto de requisitos bien definidos. Los requisitos descritos en este documento se basan en la experiencia con una amplia gama de aplicaciones de formularios.*

Unos meses después `XHTML forms` fue renombrado a XForms y se fue con su propio grupo de trabajo, los cuales terminaron la primera version de XForms en octubre del 2003.
Mientras tanto con la transición a XML completa, el equipo de trabajo de HTML pusieron su vista en crear "la nueva generación de HTML" en mayo del 2001, ellos publicaron la primera edición de XHTML 1.1 que agrego unas pequeñas funciones pero también elimino el apéndice C, haciendo que ahora se tenga que usar el `MIME type` <application/xhtml+xml>.

## Todo lo que sabes de XHTML esta mal

¿Porque los `MIME types` son tan importantes?, simple,`draconian error handling`, los navegadores siempre han sido "blandos" con HTML, si creas una pagina de HTML pero olvidas el </head> `tag`, el navegador va a mostrar la pagina de todas formas. Estas supuesto a hacer `nest` de los `tags` de manera jerárquica, cerrarlos en el orden `last-in-first-out`, pero si escribes algo como <<b><i></b></i>>, el navegador se las arreglara de alguna manera, y lo mostrara sin mostrar un mensaje de error.
Como es esperable, el hecho de que los navegadores puedan mostrar paginas con errores hace que los autores creen paginas con errores, de hecho, un estimado del 99% de las paginas en la web tienen al menos un error, y como no tienen problemas nadie las arregla.
El W3C ve esto como un problema fundamental en la web, y lo buscaron corregir, XML fue publicado en 1997, rompió con la tradición de ser blandos con los errores de los clientes, y exigir a todos los programas que usen XML que traten a los llamados errores `well-formedness` como fatales. Este concepto de fallar en el primer error llego a conocerse como `draconian error handling` esto gracias al líder griego "Draco" quien instituyo la pena de muerte por infracciones pequeñas a la ley. Cuando el W3C reformulo HTML a XML, ellos impusieron que todos los documentos con el nuevo <application/xhtml+xml> va a estar sujeto a `draconian error handling`, lo que significa que si hay cualquier tipo de error en el código, por más pequeño que sea, el navegador no podrá mostrar la pagina.
Esta idea no fue popular universalmente, con un estimado del 99% de paginas con errores, siempre esta la posibilidad de mostrar errores al usuario final, y con la escasez de nuevas funciones en XHTML 1.0 y 1.1, hizo que los autores ignoraran el nuevo <application/xhtml+xml>, pero eso no significa que se ignoro totalmente a XHTML, gracias al apéndice c, se encontró un `loophole`, los usuarios escriban cosas en una sintaxis similar a XHTML pero usando el `MIME type` de <text/html>.
Incluso hoy, millones de paginas expresan ser XHTML. Empiezan con el `doctype` de XHTML en la primera linea, mantiene muchos errores en el código, pero utilizan el <text/html> lo que no detona el `draconian error handling` y solo muy pocas secciones utilizan <application/xhtml+xml>, para mantener el titulo de XHTML.
XHTML 1.0 tenia este `loophole`, pero XHTML 1.1 lo cerro, y el nunca finalizado XHTML 2.0 continuo la tradición de el `Draconian error handling`. Eso es el porque hay billones de paginas que claman ser XHTML 1.0 y muy pocas que digan ser XHTML 1.1, asi que a menos que utilices por completo el `MIME type` <application/xhtml+xml>, no estas usando XHTML.

## Una vision de competencias

En junio del 2004, la W3C organizo la `Workshop on Web and Compound Documents`. En esta estuvieron presentes los representante de los tres vendedores de navegadores, compañías de desarrollo web, y otros miembros de la W3C. Un grupo de individuales interesados, incluyendo `Mozilla Foundation` y `Opera Software`, hicieron una presentación sobre su vision de competencias del futuro de la web en: [an evolution of the existing HTML 4 standard to include new features for modern web application developers.](https://www.w3.org/2004/04/webapps-cdf-ws/papers/opera.html)

Se mencionan los 7 principios que consideran ser los requerimientos más críticos en este trabajo.

- Compatibilidad con versiones anteriores ruta de migración clara
    Las tecnologías de aplicaciones web deben basarse en tecnologías con las que los autores estén familiarizados, incluyendo HTML, CSS, DOM y JavaScript.
    Las características básicas de las aplicaciones web deberían poder implementarse utilizando comportamientos, scripts y hojas de estilo en IE6 hoy en día, para que los autores tengan una ruta de migración clara. Cualquier solución que no pueda utilizarse con el agente de usuario actual de alta cuota de mercado sin necesidad de complementos binarios es muy poco probable que tenga éxito.

- Manejo de errores bien definido
    El manejo de errores en las aplicaciones web debe estar definido a un nivel de detalle tal que los agentes de usuario no tengan que inventar sus propios mecanismos de manejo de errores o realizar ingeniería inversa de otros agentes de usuario.

- Los usuarios no deben verse expuestos a errores de autoría.
    Las especificaciones deben especificar el comportamiento exacto de recuperación de errores para cada posible escenario de error. El manejo de errores debe estar definido en su mayor parte en términos de una recuperación de errores elegante (como en CSS), en lugar de un fallo evidente y catastrófico (como en XML).

- Uso práctico
    Cada característica que se incluya en las especificaciones de Aplicaciones Web debe justificarse mediante un caso de uso práctico. Lo contrario no necesariamente es cierto: no todos los casos de uso necesariamente justifican una nueva característica.
    Los casos de uso deben basarse preferiblemente en sitios reales donde los autores hayan utilizado previamente una solución deficiente para superar la limitación.

- El scripting está aquí para quedarse
    Pero debe evitarse cuando se pueda utilizar un marcado declarativo más conveniente.
    El scripting debe ser neutral en cuanto a dispositivos y presentación, a menos que esté limitado de manera específica para un dispositivo (por ejemplo, a menos que esté incluido en XBL).

- Se debe evitar el perfilado específico del dispositivo.
    Los autores deberían poder confiar en que las mismas características se implementen en las versiones de escritorio y móviles del mismo agente de usuario.

- Proceso abierto
    La Web se ha beneficiado de su desarrollo en un entorno abierto. Las Aplicaciones Web serán fundamentales para la web y su desarrollo también debería tener lugar de manera abierta. Las listas de correo, los archivos y las especificaciones en borrador deberían ser continuamente visibles para el público.

Como conclusion de esta se dijo:
*En la actualidad, el W3C no tiene la intención de destinar recursos al tercer tema de votación: extensiones de HTML y CSS para Aplicaciones Web, aparte de las tecnologías que se están desarrollando bajo el mandato de los grupos de trabajo actuales del W3C.*
Lo que significo que todos aquellos que proponían evolucionar HTML y HTML Forms solo tuvieran dos opciones: rendirse, o continuar su trabajo fuera del W3C, ellos eligieron la segunda y con el domino `whatw.org` en junio de 2004 se formo el `WHAT Working Group`

## ¿El grupo de trabajo WHAT?

¿Que es el grupo de trabajo WHAT?, en sus propias palabras:

*El Grupo de Trabajo de Tecnología de Aplicaciones Hipertexto en la Web (Web Hypertext Applications Technology Working Group, WHATWG) es una colaboración abierta, no oficial y flexible entre fabricantes de navegadores web y otras partes interesadas. El grupo tiene como objetivo desarrollar especificaciones basadas en HTML y tecnologías relacionadas para facilitar la implementación de aplicaciones web interoperables, con la intención de enviar los resultados a una organización de estándares. Esta presentación se convertiría en la base para el trabajo de extensión formal de HTML en el ámbito de los estándares.*
*La creación de este foro surge después de varios meses de trabajo mediante correo electrónico privado en especificaciones para estas tecnologías. El enfoque principal hasta este punto ha sido ampliar los Formularios de HTML4 para incluir características solicitadas por los autores sin romper la compatibilidad con el contenido existente. Este grupo se creó para asegurar que el desarrollo futuro de estas especificaciones sea completamente abierto, a través de una lista de correo pública y archivada abiertamente.*

La frase clave aquí es "sin romper la compatibilidad con el contenido existente", XHTML (sin contar con el apéndice c) no tiene retro-compatibilidad con HTML, requiere un nuevo `MIME type` y manda un `draconian error handling` a cualquier pagina que tenga este, XForms, tampoco tiene retro-compatibilidad con HTML Forms, esto porque solo puede usarse con los archivo que tengan el nuevo `MIME type` esto hace que XForms también manda `draconian error handling`.
En lugar de desechar una década de trabajo de HTML y hacer que el 99% de las paginas existentes se vuelvan inútiles, el grupo de trabajo WHAT decidió tomar otro acercamiento, documentar los algoritmos "blandos" que usan los navegadores para pasar por alto los errores, el problema, `NCSA Mosaic` tiene sus propios algoritmos, `Netscape` los trato de igualar, `Internet Explorer` hizo lo propio con `Netscape`, `FireFox` y `Opera` lo hicieron con `Internet Explorer` y `Safari` con `FireFox`.
Esto suena como muchísimo trabajo, o lo fue, ya que después de 5 años, el grupo de trabajo WHAT logro documentar como arreglar HTML, en una forma que sea totalmente compatible con las paginas actuales. En ningún lugar del algoritmo final hay un paso que diga que los consumidores de HTML deban parar de procesar y mostrar un mensaje de error al usuario final.
Mientras todo este proceso de ingeniería inversa ocurría, el grupo WHAT trabajo de manera silenciosa en otros proyectos, una de ellas fue una especificación, inicialmente llamado `Web Forms 2.0` que agrego nuevos `types` de control a HTML Forms, otra fue un `draft` de especificaciones llamada `Web applications 1.0` que incluyo nuevas características como una manera directa de dibujar en un `canvas` o un soporte nativo para audio y video sin `plugins`

## De regreso a W3C

Por dos años y medio el W3C y el WHAT se ignoraron mutuamente, mientras el grupo WHAT estaba enfocado en `web forms` y nuevas funciones de HTML, el W3C estaba ocupado en la version 2.0 de XHTML, pero para octubre de 2006, estaba claro que el grupo WHAT había obtenido momentum, mientras que XHTML 2.0 estaba estancado en fases tempranas, por eso en estas fechas Tim Berners-Lee (fundador de W3C) anuncio que el W3C iba a trabajar en conjunto con el grupo WHAT para mejorar HTML.

*Algunas cosas son más claras con el paso de varios años. Es necesario evolucionar HTML de manera incremental. El intento de hacer que el mundo cambie a XML, incluyendo comillas alrededor de los valores de los atributos, barras inclinadas en etiquetas vacías y espacios de nombres, todo al mismo tiempo, no funcionó. El público que genera gran cantidad de HTML no se movió, en gran parte porque los navegadores no se quejaron. Algunas comunidades importantes sí hicieron el cambio y están disfrutando de los beneficios de sistemas bien formados, pero no todas. Es importante mantener HTML de forma incremental, al tiempo que se realiza una transición hacia un mundo bien formado y se desarrolla más poder en ese mundo.*

*El plan es crear un nuevo grupo de HTML por completo. A diferencia del anterior, este grupo tendrá el objetivo de realizar mejoras incrementales en HTML, así como en paralelo en XHTML. Tendrá un presidente y un contacto de personal diferentes. Trabajará en HTML y XHTML juntos. Contamos con un fuerte apoyo para este grupo, de muchas personas con las que hemos hablado, incluidos los fabricantes de navegadores.*

*También habrá trabajo en formularios. Esta es un área compleja, ya que los formularios HTML existentes y XForms son ambos lenguajes de formulario. Los formularios HTML están desplegados de manera ubicua, y existen muchas implementaciones y usuarios de XForms. Mientras tanto, la presentación de Webforms ha sugerido extensiones sensatas para los formularios HTML. El plan es, basándonos en Webforms, extender los formularios HTML.*

Una de las primeras cosas que hizo el nuevo grupo de trabajo HTML del W3C fue renombrar `Web applications 1.0` a HTML5.

## Últimos Datos

En octubre de 2009, el W3C cerro el grupo de trabajo de XHTML 2

*Cuando el W3C anunció los Grupos de Trabajo de HTML y XHTML 2 en marzo de 2007, indicamos que continuaríamos monitoreando el mercado para XHTML 2. El W3C reconoce la importancia de enviar una señal clara a la comunidad sobre el futuro de HTML.*

*Si bien reconocemos el valor de las contribuciones del Grupo de Trabajo de XHTML 2 a lo largo de los años, después de discutirlo con los participantes, la dirección del W3C ha decidido permitir que el mandato del Grupo de Trabajo expire a finales de 2009 y no renovarlo.*

[Menú](https://github.com/IIKUYY/HTML5/tree/main/README.md)