var dificultad = (sessionStorage.Dificultad == undefined) ? 1 : sessionStorage.Dificultad;
switch (dificultad) {
	case "1":N = 2;M = 4;
		break;
	case "2":N = 3;M = 6;
		break;
	case "3":N = 4;M = 8;
		break;
	case "4":N = 5;M = 12;
		break;
	default:N = 2;M = 4;
}
var nClicks = N*M*3;
var nTiempo = N*M*15;
var aTabla = tablaCartas(N,M);
var idInterval = setInterval(cuentaAtras, 1000);



var aCarta1 = [0,0];
var aCarta2 = [0,0];
var bTerminado = false;
var iEmparejadas = 0;
var iPuntos = 0;
var nClicksJugada = 0;
var tJugada = 0;

//Cartas Isaac Ver 1.0
function tablaCartas(N,M, desordenar = true){
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


function tablaCartas2 (n,m){
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

function Voltear (i, j){
	if(bTerminado) return;

	finClicks();
	nClicksJugada++;
	if(!aCarta1[0]) aCarta1 = [aTabla[i][j],i+""+j];
	else if(!aCarta2[0]) aCarta2 = [aTabla[i][j],i+""+j];
	else{
		//caso en el q las dos estan volteadas
		document.getElementById("imCarta"+aCarta1[1]).src = "img/0.png";
		document.getElementById("imCarta"+aCarta2[1]).src = "img/0.png";
		aCarta1[0] = 0;
		aCarta2[0] = 0;
		Voltear(i,j);
	}
	document.getElementById("imCarta"+i+j).src = "img/"+aTabla[i][j]+".png";
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

function partidaTerminada(){
	document.getElementById('error').innerHTML = "Partida terminada";
	bTerminado = true;
	clearTimeout(idInterval);
	iPuntos += (nTiempo*15)+(nClicks*25);
	document.getElementById("bonoTiempo").innerHTML = nTiempo*15;
	document.getElementById("bonoClicks").innerHTML = nClicks*25;
	document.getElementById("puntuacion").innerHTML = iPuntos;
}

function cuentaAtras(){
	tJugada++;
	nTiempo--;
	if (nTiempo <= 0){
		clearTimeout (idInterval);
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

}
function finClicks(){
	nClicks--;
	if (nClicks <= 0){
			document.getElementById('error').innerHTML = "Has superado el maximo de clicks";
			document.getElementById('vClicks').style.color = "red";
			bTerminado = true;
			clearTimeout (idInterval);
		}
	document.getElementById('vClicks').innerHTML = nClicks;
}
function cmDificultad(){
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
