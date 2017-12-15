const JUEGO_NORMAL = "0";
const JUEGO_CONTRARELOJ = "1";
const DIFICULTAD_FACIL = "1";
const DIFICULTAD_MEDIO = "2"
const DIFICULTAD_DIFICIL = "3";

//Establezo el modo de juego y la dificultad
var sDificultad = (sessionStorage.Dificultad == undefined) ? DIFICULTAD_FACIL : sessionStorage.Dificultad;
var modoJuego = (sessionStorage.ModoJuego != undefined) ? sessionStorage.ModoJuego : JUEGO_NORMAL;

if(modoJuego == JUEGO_NORMAL){//Calculo el tamaño, tiempo y clicks dependiendo de la dificultad o el modo de juego
	switch (sDificultad) {
		case DIFICULTAD_FACIL:N = 2;M = 4;
			break;
		case DIFICULTAD_MEDIO:N = 3;M = 6;
			break;
		case DIFICULTAD_DIFICIL:N = 4;M = 8;
			break;
		default:N = 2;M = 4;
	}
	var nClicks = N*M*4;
	var nTiempo = N*M*10;
}else{
	var nTiempo = 100;
	var nClicks = 0;
	var N = 2;
	var M = 4;

}
//Genero las tabla y declaro las variables que se van a usar.
var aTabla = CrearTablaCartas(N,M);
arrayBoleanos();
var aVolteadas;
var icarta1;
var icarta2;
var itTiempo = setInterval(cuentaAtras, 1000);
var oPuntos = (localStorage.Puntos != undefined) ? JSON.parse(localStorage.Puntos) : JSON.parse(tablaPuntos());
var puntos = JSON.parse(tablaPuntos());
var nJugada = 0;
var aCarta1 = [0,0];
var aCarta2 = [0,0];
var bTerminado = false;
var iEmparejadas = 0;
var iPuntos = 0;
var nClicksJugada = 0;
var tJugada = 0;
var bClickear = true;


function cambiarModoJuego(sModo){
	sModo = sModo.toString();
	if(sModo == sessionStorage.ModoJuego) return;
	sessionStorage.setItem("ModoJuego", sModo);
	location.reload(true);
}

function arrayBoleanos(){
	aVolteadas = new Array(N);
	for(h=0;h<N;h++)
		aVolteadas[h] = new Array(M);
	for(v=0;v<N;v++)
		for(z=0;z<M;z++)
			aVolteadas[v][z] = false;
	iCarta1 = "";
	iCarta2 = "";
}

function Voltear (i, j){
	if(!bClickear || bTerminado || aVolteadas[i][j]) return //Si no es posible hacer click, si la partida esta terminada o la carta ya esta girada salgo de la funcion
	if(modoJuego == JUEGO_NORMAL)	finClicks();
	nClicksJugada++;
	if(iCarta2 != ""){//En caso de ya tener dos cartas voletadas limpio las posiciones
		iCarta1 = "";
		iCarta2 = "";
	}
	aVolteadas[i][j] = true;//Cambio el estado de la carta a volteada
	redibujarCartas();//Redibujo la tabla con el estado actual de las cartas
	if(iCarta1 == "") iCarta1= i+""+j;//Si es la primera carta guardo su posicion
	else iCarta2= i+""+j;//Si no guardo la de la segunda carta

	if(iCarta2 != ""){//Si la segunda carta tiene una posicion compruebo si las dos cartas son la misma
		if(aTabla[iCarta1.charAt(0)][iCarta1.charAt(1)] != aTabla[iCarta2.charAt(0)][iCarta2.charAt(1)]){//si no son la misma cambio sus estados a no volteadas
			aVolteadas[iCarta1.charAt(0)][iCarta1.charAt(1)] = false;
			aVolteadas[iCarta2.charAt(0)][iCarta2.charAt(1)] = false;
			bClickear = false;//Quito la opcion de poder clickear hasta que se redibujen las cartas
			setTimeout("redibujarCartas()",1000);
		}else {//Si la pareja coincide cuento una pareja mas y calculo las puntuaciones de la jugada
			iEmparejadas++;
			puntuar(nClicksJugada, tJugada);
			tJugada = 0;
			nClicksJugada = 0;
		}

		if(iEmparejadas >= (N*M)/2) partidaTerminada();

	}
}

function redibujarCartas(){
	for (i = 0;i<N;i++)
		for(j=0;j<M;j++)
			if(aVolteadas[i][j]){
				document.getElementById("imCarta"+i+j).src = "img/"+aTabla[i][j]+".jpg";
			}else{
				document.getElementById("imCarta"+i+j).src = "img/0.jpg";
			}
		bClickear = true;
}




function pintarTabla(){
		var sTabla = "";
		sTabla += "<table class='fieltro centrar-obj borde-tabla'>";
		for(i=0;i<aTabla.length;i++){
			sTabla += "<tr>";
			for(f=0;f<aTabla[i].length;f++)
			 sTabla += "<td><img id='imCarta"+i+f+"'src='img/0.jpg' onclick='Voltear("+i+","+f+")' /></td>";
			sTabla += "</tr>";
		}
		sTabla += "</table>";
		document.getElementById('tablaCartas').innerHTML = sTabla;
		select = document.getElementById("sDificultad");
		for (i=0;i<select.length;i++)
			if (select[i].value == sDificultad)
				select[i].selected = true;

}

function resetParametros(bTotal = false){//funcion para resetear las variables cuando hacemos un nuevo juego o cambiamos la dificultada/modo de juego
	if(bTotal)nJugada = 0;
	if(modoJuego == JUEGO_CONTRARELOJ){
		N=2;M=4;
		if(nJugada == 1){N=3;M=6}
		else if(nJugada > 1){N=4;M=8}
	}
	aCarta1 = [0,0];
	aCarta2 = [0,0];
	bTerminado = false;
	iEmparejadas = 0;
	nClicksJugada = 0;
	aTabla = CrearTablaCartas(N,M);
	arrayBoleanos();
	pintarTabla();
	bClickear = true;
	if(bTotal){
		iPuntos = 0;
		nClicks = N*M*4;
		nTiempo = N*M*10;
		clearTimeout(itTiempo);
		itTiempo = setInterval(cuentaAtras, 1000);
		if(modoJuego == JUEGO_NORMAL){
			document.getElementById('vClicks').innerHTML = nClicks;
			document.getElementById('vClicks').style.color = "white";
		}
		if(modoJuego == JUEGO_CONTRARELOJ)document.getElementById('dClicks').innerHTML = "Jugada Nº"+nJugada;
		document.getElementById('sumaPuntos').innerHTML = 0;
		document.getElementById('bonoTiempo').innerHTML = 0;
		document.getElementById('bonoClicks').innerHTML = 0;
		document.getElementById('puntuacion').innerHTML = 0;
		document.getElementById('error').innerHTML = "";
		document.getElementById('vContador').style.color = "white";

	}
}
function partidaTerminada(){//Funcion para cuando se termina la partida (calcular puntos, detener reloj etc..)
	if(modoJuego == JUEGO_CONTRARELOJ){//Si el modo de juego es contra reloj al temrminar una tabla creo otra hasta que se agote el tiempo
		nJugada++;
		resetParametros();
		document.getElementById('dClicks').innerHTML = "Jugada Nº"+nJugada;
	}else{
		document.getElementById('error').innerHTML = "Partida terminada";
		bTerminado = true;
		clearTimeout(itTiempo);
		iPuntos += (nTiempo*15)+(nClicks*25);
		document.getElementById("bonoTiempo").innerHTML = nTiempo*15;
		document.getElementById("bonoClicks").innerHTML = nClicks*25;
		document.getElementById("puntuacion").innerHTML = iPuntos;
		setTimeout("escribirPuntos()",100);//Este pequeño timeout lo hago para q el prompt que pide el nombre no salga antes de tiempo (no se veia la ultima carta girada)

}
}

function escribirPuntos(){//Compruebo si la puntuacion esta entre los 5 mejores de su categoria y de ser asi guardo
		if(modoJuego == JUEGO_CONTRARELOJ)
			var aPuntos = oPuntos.Reloj;
		else{
			if(sDificultad == DIFICULTAD_FACIL)
				var aPuntos = oPuntos.Facil;
			else if(sDificultad == DIFICULTAD_MEDIO)
				var aPuntos = oPuntos.Media;
			else if(sDificultad == DIFICULTAD_DIFICIL)
				var aPuntos = oPuntos.Dificil;
		}

	for(i=0;i<aPuntos.length;i++){
				if(aPuntos[i].Puntos<=iPuntos){
					var sJugador = prompt('Ingrese su nombre:','Nombre');

					for(j=aPuntos.length-2;j>=i;j--){
						aPuntos[j+1].Nombre = aPuntos[j].Nombre;
						aPuntos[j+1].Puntos = aPuntos[j].Puntos;
					}
					aPuntos[i].Puntos = iPuntos;
					aPuntos[i].Nombre = sJugador;
					break;
				}
	}
	localStorage.Puntos = JSON.stringify(oPuntos);
	pintarPuntos();

}

function pintarPuntos(){//Funcion para rescribir la tabla de puntuaciones
	if(modoJuego == JUEGO_CONTRARELOJ)
		var aPuntos = oPuntos.Reloj;
	else{
		if(sDificultad == DIFICULTAD_FACIL)
			var aPuntos = oPuntos.Facil;
		else if(sDificultad == DIFICULTAD_MEDIO)
			var aPuntos = oPuntos.Media;
		else if(sDificultad == DIFICULTAD_DIFICIL)
			var aPuntos = oPuntos.Dificil;
	}

	var sPintarPuntos = "";
	sPintarPuntos += "<table>";
		sPintarPuntos += "<tr><td>Pos</td><td>Nombre</td><td>Puntos</td></tr>";
				for (i=0;i<aPuntos.length;i++)
				sPintarPuntos += "<tr><td>"+(i+1)+"</td><td>"+aPuntos[i].Nombre+"</td><td>"+aPuntos[i].Puntos+"</td></tr>";
	sPintarPuntos += "</table>";
	document.getElementById('ranking').innerHTML = sPintarPuntos;
}
function tablaPuntos(){//Genero un string con formato de JSON para las puntuaciones (esto solo se hace si en no hay puntuaciones en localStorage)

	var sPuntos = '{'+
	'"Facil":['+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"}'+
	'],'+
	'"Media":['+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"}'+
	'],'+
	'"Dificil":['+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"}'+
	'],'+
	'"Reloj":['+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"},'+
	  '{"Nombre":"Unnamed", "Puntos":"0"}'+
	']'+
	'}';

	sessionStorage.setItem("Puntos", sPuntos);
	return sPuntos;
}

function cuentaAtras(){
	tJugada++;
	nTiempo--;
	if (nTiempo <= 0){
		clearTimeout (itTiempo);
		finTiempo();
	}
	seg = Math.floor(nTiempo%60);
	min = Math.floor(nTiempo/60);
	if (seg < 10) seg = "0"+seg;
	sTiempo = min+":"+seg;

	document.getElementById('vContador').innerHTML = sTiempo;
}

function finTiempo(){
	bTerminado = true;
	bFallo = true;
	document.getElementById('vContador').style.color = "red";
	document.getElementById('error').innerHTML = "Tiempo terminado";
	if (modoJuego == JUEGO_CONTRARELOJ) escribirPuntos();

}

function finClicks(){
	nClicks--;
	if (nClicks <= 0){
			document.getElementById('error').innerHTML = "Has superado el maximo de clicks";
			document.getElementById('vClicks').style.color = "red";
			bTerminado = true;
			clearTimeout (itTiempo);
		}
	document.getElementById('vClicks').innerHTML = nClicks;
}

function cambiarDificultad(){//Funcion q recarga la pagina al cambiar la dificultad
	if(modoJuego == JUEGO_CONTRARELOJ) return;
	iDificultad = document.getElementById('sDificultad').value;
	sessionStorage.setItem("Dificultad", iDificultad);
	location.reload(true);
}


function puntuar(jClicks, jTiempo){
	var pJugada = 1000 - ((jClicks * 28)+(jTiempo*10));
	iPuntos += pJugada;
	document.getElementById("sumaPuntos").innerHTML = pJugada;
	document.getElementById("puntuacion").innerHTML = iPuntos;
}




/******************************************
 * FUNCIONES USADAS DURANTE EL DESARROLLO *
 ******************************************/

 function Voltear_desarrolo (i, j){//funcion para girar las cartas sin array de boleanos
 	if(bTerminado) return;

 	if(modoJuego == JUEGO_NORMAL)	finClicks();
 	nClicksJugada++;
 	if(!aCarta1[0]) aCarta1 = [aTabla[i][j],i+""+j];
 	else if(!aCarta2[0]) aCarta2 = [aTabla[i][j],i+""+j];
 	else{
 		document.getElementById("imCarta"+aCarta1[1]).src = "img/0.jpg";
 		document.getElementById("imCarta"+aCarta2[1]).src = "img/0.jpg";
 		aCarta1[0] = 0;
 		aCarta2[0] = 0;
 		Voltear(i,j);
 	}
 	document.getElementById("imCarta"+i+j).src = "img/"+aTabla[i][j]+".jpg";
 	if(aCarta1[0] == aCarta2[0]){
 		aCarta1[0] = 0;
 		aCarta2[0] = 0;
 		iEmparejadas++;
 		puntuar(nClicksJugada, tJugada);
 		tJugada = 0;
 		nClicksJugada = 0;
 	}
 	if(iEmparejadas >= (N*M)/2) partidaTerminada();
 }

 function tablaCartas_desarrollo(N,M, desordenar = true){//funcion para generar la tabla de cartas con la posibilidad de que las cartas este ordenadas para las pruebas
 	var aTemp = [];
 	var aTabla = [];
 	var cont = 1;
 	for(i=0;i<N*M;i++){
 		aTemp[i] = ++cont;
 		if (cont>(N*M)/2) cont = 1;
 	}
 	if(desordenar)
 		aTemp = aTemp.sort(function() {return Math.random() - 0.5});
 	for(i=0;i<N;i++)
 		aTabla[i] = aTemp.slice(i*M,(i*M)+M);
 	return aTabla;
 }


 function tablaCartas2_desarrollo (n,m){
 	var aArray = new Array(n);
 	for(i = 0; i < n; i++) aArray[i] = new Array(m);

 	for (i=0;i<n;i++)
 		for(j=0;j<m;j++){
 			do{
 				cont = 0;
 				num = Math.ceil(Math.random()*((n*m)/2));
 				for(f=0;f<n;f++)
 					for(g=0;g<m;g++)
 						if(aArray[f][g] == num) cont++;
 			}while (!(cont < 2))
 			aArray[i][j] = num;
 		}

 	return aArray;
 }
