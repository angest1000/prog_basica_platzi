

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
// console.log(teclas);
document.addEventListener("keydown",dibujarConTeclado);
document.addEventListener("mousedown",dibujarConClick);
document.addEventListener("mouseup",dibujarConClick);


function dibujarLinea(color,xi,yi,xf,yf,lienzo)
{
  //beginPath es una función que indica que se iniciará un trazo
  lienzo.beginPath();
  //strokeStyle nos permite elegir el color y estilo del trazo
  lienzo.strokeStyle = color;
  // lineWidth indica el número de pixeles de ancho que utilizará nuestro dibujo
  lienzo.lineWidth = 3;
  //moveTo nos indica donde iniciará el trazo
  lienzo.moveTo(xi,yi);
  //lineTo es una función que nos permite dibujar lineas
  lienzo.lineTo(xf,yf);
  // con stroke indicamos que se realice el trazo, utilizando el estilo definido anteriormente
  lienzo.stroke();
  //dejamos de dibujar
  lienzo.closePath();
}

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var x = 150;
var y = 150;

// Punto inicial para comenzar a dibujar
  dibujarLinea("red",x-1,y-1,x+1,y+1,papel);


function dibujarConTeclado(evento)
{
  var colorcito="red";
  var movimiento=10;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
      y=y-movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
      y=y+movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito,x-movimiento,y,x,y,papel);
      x=x-movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito,x+movimiento,y,x,y,papel);
      x=x+movimiento;
    break;
    default:
      console.log("Vamoacalmarno! xD");
    break;
  }
}

function dibujarConClick (evento)
{
  console.log(evento)
  console.log(evento.screenX)
  console.log(evento.screenY)

  var colorcito="red";
  var movimiento=1;
  var x=evento.screenX-72;
  var y=evento.screenY-136;

  dibujarLinea(colorcito,x-1,y-1,x+1,y+1,papel)
}
// left = evento.key=37
// up = evento.key=38
// right = evento.key=39
// down =  evento.key=40
