var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
// console.log(teclas);
document.addEventListener("keyup",dibujarConTeclado);
function dibujar_linea(color,xi,yi,xf,yf,lienzo)
{
  //beginPath es una función que indica que se iniciará un trazo
  lienzo.beginPath();
  //strokeStyle nos permite elegir el color y estilo del trazo
  lienzo.strokeStyle = color;
  //moveTo nos indica donde iniciará el trazo
  lienzo.moveTo(xi,yi);
  //lineTo es una función que nos permite dibujar lineas
  lienzo.lineTo(xf,yf);
  // con stroke indicamos que se realice el trazo, utilizando el estilo definido anteriormente
  lienzo.stroke();
  //dejamos de dibujar
  lienzo.closePath();
}

function dibujarConTeclado(evento)
{
  // console.log("Tecla presionada: [key: "+evento.key+", keyCode: "+evento.keyCode+"]");
  // console.log("Tecla presionada (key): "+evento.key);
  // console.log(evento);
  // if(evento.keyCode == teclas.UP)
  // {
  //     console.log("Vamoparriba");
  // }
  // if(evento.keyCode == teclas.LEFT)
  // {
  //   console.log("Vamopalaizquierda");
  // }
  // if(evento.keyCode == teclas.RIGHT)
  // {
  //   console.log("Vamopalaerecha");
  // }
  // if(evento.keyCode == teclas.DOWN)
  // {
  //   console.log("Vamopabajo");
  // }
  switch (evento.keyCode)
  {
    case teclas.DOWN:
      console.log("Vamopabajo");
    break;
    case teclas.UP:
      console.log("Vamoparriba");
    break;
    case teclas.LEFT:
      console.log("Vamopalaizquierda");
    break;
    case teclas.RIGHT:
      console.log("Vamopalaerecha");
    break;

    default:
      console.log("Vamoacalmarno! xD");
    break;
  }
}

// left = evento.key=37
// up = evento.key=38
// right = evento.key=39
// down =  evento.key=40
