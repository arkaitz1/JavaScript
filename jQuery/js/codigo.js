// JavaScript Document
var d;
var bVerde = false;
d=$(document);         // Copia del objeto document
d.ready(inicializar);  // Cuando el cocumento esté cargado la f. inicializar

function inicializar(){
	var e;
	e=$("#hola");		//Hacemos referencia a los elementos con el id hola
	e.hover(ClickHecho);
}

function ClickHecho(){
	var e=$("#hola");
	e.css("color","green");
	e.css("background-color","yellow");
	e.css("font-size","24px");
	e.css("border","1px solid black");
}


function ClickHecho_viejo(){
	var e;
  e=$("#hola");
  if(bVerde)
    e.css("background-color","white");
  else
    e.css("background-color","green");
bVerde = !bVerde;

}
