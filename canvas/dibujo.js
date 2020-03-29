var texto=document.getElementById('texto_lineas');
var boton=document.getElementById('boton_tl');
boton.addEventListener("click",dibujoPorClick);
//cuando se manda a llamar una función utilizando al final parentesis (dibujoPorClick() ) se llama a la funcion y se
//ejecuta en ese momento. Y cuando se llama a la función sin esos parentesis, solo se referencía a dicha función



var d=document.getElementById('dibujito');
var lienzo = d.getContext("2d");
//console.log(lienzo);
function dibujar_linea(color,xi,yi,xf,yf)
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
// dibujar_linea("black",1,1,1,299);
// dibujar_linea("black",1,299,299,299);
// dibujar_linea("black",150,0,150,300);
// dibujar_linea("black",0,150,300,150);
function dibujoPorClick()
{
  //alert("ancho del canvas: "+d.width);
  // console.log(texto.value);
  //texto.value;
  //alert("No me toques ese vals "+texto.value+" veces")
  var lineas=parseInt(texto.value);
  var i=0;
  var ancho=d.width;
  var espacio=ancho / lineas;
  var col = "green"
  while (i<lineas)
  {
    if(i <= parseInt(lineas/2))
    {
      dibujar_linea(col,parseInt(ancho/2),espacio*i,parseInt(ancho/2)+espacio*i,parseInt(ancho/2));
    }
    else
    {
      dibujar_linea(col,parseInt(ancho/2),espacio*i,ancho+parseInt(ancho/2)-espacio*i,parseInt(ancho/2));
    }
    // console.log("linea"+i)
    i++;
  }

  var i=0;
  while (i <= lineas)
  {
    if(i<= parseInt(lineas/2))
    {
      dibujar_linea(col,parseInt(ancho/2),espacio*i,parseInt(ancho/2)-espacio*i,parseInt(ancho/2));
    }
    else
    {
      dibujar_linea(col,parseInt(ancho/2),espacio*i,espacio*i-parseInt(ancho/2),parseInt(ancho/2));
    }
    i++;
  }
  col = "blue";
  // ciclo for:
  for(i=0;i<lineas;i++)
  {
    if(i<=parseInt(lineas/2))
    {
      dibujar_linea(col,espacio*i,0,0,parseInt(ancho/2)-espacio*i);
    }
    else
    {
      dibujar_linea(col,espacio*i,0,ancho,espacio*i-parseInt(ancho/2));
    }
  }

  for(i=0;i<lineas;i++)
  {
    if(i<=parseInt(lineas/2))
    {
      dibujar_linea(col,0,parseInt(ancho/2)+espacio*i,espacio*i,ancho);
    }
    else
    {
      dibujar_linea(col,ancho,ancho+parseInt(ancho/2)-espacio*i,espacio*i,ancho);
    }
  }
}
