//Fucion para dar la vuelta a las cartas sin array de boleanos
var aCarta1 = [0,0];
var aCarta2 = [0,0];
var bTerminado = false;
var iEmparejadas = 0;
function Voltear (i, j){
  if(bTerminado) return;

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
  }
  if(iEmparejadas >= (N*M)/2){
    document.getElementById('error').innerHTML = "Partida terminada";
    bTerminado = true;
  }
}



//Fucion para voltear las cartas usando un array de boleanos
var aVolteadas = new Array(N);
for(h=0;h<N;h++)
  aVolteadas[h] = new Array(M);
for(v=0;v<N;v++)
  for(z=0;z<M;z++)
    aVolteadas[v][z] = false;
var iCarta1 = "";
var iCarta2 = "";

function Voltear2 (i, j){
  if(bTerminado) return;//Si la partida esta terminada salgo de la funcion
  if(aVolteadas[i][j]) return;//Si hago click sobre una carta ya volteada salgo de la funcion
  if(iCarta2 != ""){//En caso de ya tener dos cartas voletadas limpio las posiciones
    iCarta1 = "";
    iCarta2 = "";
  }
  aVolteadas[i][j] = true;//Cambio el estado de la carta a volteada
  pintar();//Redibujo la tabla con el estado actual de las cartas
  if(iCarta1 == "") iCarta1= i+""+j;//Si es la primera carta guardo su posicion
  else iCarta2= i+""+j;//Si no guardo la de la segunda carta

  if(iCarta2 != ""){//Si la segunda carta tiene una posicion compruebo si las dos cartas son la misma
    if(aTabla[iCarta1.charAt(0)][iCarta1.charAt(1)] != aTabla[iCarta2.charAt(0)][iCarta2.charAt(1)]){//si no son la misma cambio sus estados a no volteadas
      aVolteadas[iCarta1.charAt(0)][iCarta1.charAt(1)] = false;
      aVolteadas[iCarta2.charAt(0)][iCarta2.charAt(1)] = false;
    }else {
      iEmparejadas++;
    }
    if(iEmparejadas >= (N*M)/2){
      document.getElementById('error').innerHTML = "Partida terminada";
      bTerminado = true;
    }
  }
}

function pintar(){
  for (i = 0;i<N;i++)
    for(j=0;j<M;j++)
      if(aVolteadas[i][j]){
        document.getElementById("imCarta"+i+j).src = "img/"+aTabla[i][j]+".png";
      }else{
        document.getElementById("imCarta"+i+j).src = "img/0.png";
      }
}
