## Introducción

HTML5 define el canvas como "un `bitmap` de resolución dependiente, que puede usarse para hacer `render` a gráficos u otros elementos visuales", este es un rectángulo en tu pagina donde puedes usar JavaScript para dibujar lo que quieras.
Los navegadores que tienen soporte son:

| IE   | Firefox | Safari | Chrome | Opera  | Iphone | Android |
| ---- | ------- | ------ | ------ | ------ | ------ | ------- |
| 7.0+ | 3.0 +   | 3.0 +  | 3.0 +  | 10.0 + | 1.0 +  | 1.0 +   |

El markup ser ve asi

```
<canvas id="a" width="300" height="225"></canvas>
```

Esto crea un elemento en el DOM que se ve asi

```
var a_canvas = document.getElementById("a");
```


## Formas simples

Todos los canvas inician en blanco, para dibujar algo se usa
```
function draw_b() {
  var bCanvas = document.getElementById("b");
  var bContext = bCanvas.getContext("2d");
  bContext.fillRect(50, 25, 150, 100);
}
```

Lo que hacer por linea es lo siguiente

1. Definir la función
2. Encontrar el canvas por su id
3. Se asegura que el canvas este en 2 dimensiones (Por ahora no hay canvas de 3 dimensiones)
4. Dibuja un rectángulo bajo las condiciones

Se pueden usar varios métodos para dibujar entre ellos

- fillStyle: Lo rellena con un patron dado en CSS
- fillReact(x, y, width, height): Rellena con un rectángulo dado
- strokeStyle: Similar a fillStyle
- strokeReact(x, y, width, height): Como el fillReact, pero en los bordes
- clearReact(x, y, width, height): limpia los pixeles en le canvas

## Coordenadas de Canvas

Para visualizar como funcionan los valores "x" y "y" de las funciones anteriores debemos ver un ejemplo de un sistema coordenado de un canvas.
Ver ejemplo en [Coordenadas](https://github.com/IIKUYY/HTML5/tree/main/Ch4/Coordenadas), 

### Paths

| IE   | Firefox | Safari | Chrome | Opera  | Iphone | Android |
| ---- | ------- | ------ | ------ | ------ | ------ | ------- |
| 7.0+ | 3.0 +   | 3.0 +  | 3.0 +  | 10.0 + | 1.0 +  | 1.0 +   |

Para empezar a dibujar en un canvas, primero tienes que usar `paths`, estos son como hacer un trazo a lápiz, es decir, marca el dibujo, pero no se dibuja en el canvas hasta que se realize un `stroke`.

### Texto

| IE   | Firefox | Safari | Chrome | Opera  | Iphone | Android |
| ---- | ------- | ------ | ------ | ------ | ------ | ------- |
| 7.0+ | 3.0 +   | 3.0 +  | 3.0 +  | 10.0 + | 1.0 +  | 1.0 +   |

Ademas de dibujar también puedes usar texto dentro de un canvas, el problema es que no se puede usar CSS con estos textos, en cambio, puedes usar 3 atributos

- font: Incluye font style, font variant, font weight, font size, line height y font family.

- textAlign: controla el `alignment` del texto, valores posibles son: start, end, left, right, y center.

- textBaseline: controla donde se dibuja el texto a partir de un punto relativo.

textBaseline es algo engañoso, esto porque hay una gran variedad de caracteres en `Unicode` como se puede ver en la [imagen](http://diveintohtml5.info/i/baselines.png).
Para idiomas con el alfabeto romano, puedes usar estas funciones sin miedo.

## Gradients

| IE   | Firefox | Safari | Chrome | Opera  | Iphone | Android |
| ---- | ------- | ------ | ------ | ------ | ------ | ------- |
| 7.0+ | 3.0 +   | 3.0 +  | 3.0 +  | 10.0 + | 1.0 +  | 1.0 +   |
| 9.0+ | 3.0 +   | 3.0 +  | 3.0 +  | 10.0 + | 1.0 +  | 1.0 +   |

Ya se vio como pintar de un color solido un canvas, pero también se puede pintar de un gradiente, es decir un color que pasa a ser otro de manera gradual, se puede hacer de manera vertical, horizontal o diagonal.

## Images

| IE   | Firefox | Safari | Chrome | Opera  | Iphone | Android |
| ---- | ------- | ------ | ------ | ------ | ------ | ------- |
| 7.0+ | 3.0 +   | 3.0 +  | 3.0 +  | 10.0 + | 1.0 +  | 1.0 +   |
| 9.0+ | 3.0 +   | 3.0 +  | 3.0 +  | 10.0 + | 1.0 +  | 1.0 +   |

Para dibujar una imagen en un canvas puedes usar desde tres hasta nueve argumentos

```
drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh,)
```

el argumento `image` se refiere a la imagen a usar, los argumentos `sx`, `sy`, `sw` y `sh` se refieren a la escala de la imagen y la posición de esta en relación a la original, `dw`, `dh`, `dx` y `dy` son el tamaño de la imagen y su posición en el canvas.

## Que pasa con IE

Versiones de Internet Explorer previas a la 9.0 no tienen soporte para el API de canvas, pero, si tiene soporte para una tecnología llamada VML o `Microsoft-proprietary technology`, la cual puede hacer muchas cosas que hace canvas, y asi, excanvas.js nació
Explorercanvas (excanvas.js) es un librería de código libre, licenciada en apache para JavaScript que implementa el API de canvas a Internet Explorer, para usarlo solo tienes que incluir este código en la  parte superior de la pagina

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Dive Into HTML5</title>
  <!--[if lt IE 9]>
    <script src="excanvas.js"></script>
<![endif]-->
</head>
<body>
  ...
</body>
</html>
```

Aunque es mejor que no tener un canvas, esta tienes sus limitaciones

1. Los gradientes tienen que ser lineales, los radiales no tienen soporte
2. Los patrones se tienen que repetir en ambas direcciones
3. `Clipping regions` no tienen soporte
4. Las escalas no uniformes no escalan correctamente los `strokes`
5. Es mucho más lento que el API de canvas tradicional

[Un ejemplo completo de un canvas con un juego]((https://github.com/IIKUYY/HTML5/tree/main/Ch4/Juego/Juego.html))

[Menú](https://github.com/IIKUYY/HTML5/tree/main/README.md)