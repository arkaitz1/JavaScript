// JavaScript Document
// Funciones de JavasCript para el curso 2DAW3

//Comprobaci�n Juego Resuelto
//Ver 1.0
function JuegoResuelto(aTabla){
	N=aTabla.length;
	iContador=1;
	bResuelto=true;
	for (f=0;f<N;f++){
		for (c=0;c<N;c++){
			if ((aTabla[f][c]!=iContador) && (iContador!=N*N)){
				bResuelto=false;
			}
			iContador++;
		}
	}
	return bResuelto
}

// Creaci�n de un Array de 6 elementos sin repetici�n con valores aleatorios sin repetici�n de 1 a 49
//Ver 2.0
 function LoteriaPrimitiva(){
	 aTabla=[];
	 for (i=0;i<6;i++){

		do {
			iAzar=Math.floor(Math.random()*49)+1;
		}
		while(aTabla.indexOf(iAzar)!=-1);

		aTabla[i]=iAzar;

	 }
	 return aTabla
 }

//Creaci�n de un array de 2 dimensiones de NxN
//Ver 2.0
 function CrearTabla(N){
	//Creamos la tabla de 2 dimensiones de N*N
	var aTabla=new Array(N);
	for (f=0;f<N;f++){
		aTabla[f]= new Array(N);
	}
	for (f=0;f<N;f++){
		for (c=0;c<N;c++){
			bRepe=true;
			while (bRepe){
				bRepe=false;
				iAzar=Math.floor(Math.random()*N*N);
				for (iFila=0;iFila<=f;iFila++){

					for (iCol=0;iCol<N;iCol++){
						if(aTabla[iFila][iCol]==iAzar){
							bRepe=true;
						}
					}
				}

			}
			aTabla[f][c]=iAzar;
			if (iAzar==0){
				f0=f;
				c0=c;
			}
		}
	}
	//Colocamos el cero en la ultima fila, ultima columna.

	Intercambiar(aTabla,f0,c0,N-1,N-1);

	//Ahora hay que ver si tiene soluci�n.

	iSuma=0;

	for (f=0;f<N;f++){
		for (c=0;c<N;c++){
			//Primero miramos en el resto de la fila
			for (iCol=c+1;iCol<N;iCol++){
				iSuma+= ((aTabla[f][c]>aTabla[f][iCol]) && (aTabla[f][iCol]!=0)) ? 1 : 0;
			}
			//Y ahora el resto de la tabla

			for (iFila=f+1;iFila<N;iFila++){
				for (iCol=0;iCol<N;iCol++){

					iSuma+=  ((aTabla[f][c] > aTabla[iFila][iCol]) && (aTabla[iFila][iCol]!=0) ) ? 1 : 0 ;

				}
			}

		}

	}

	if (iSuma % 2 != 0){
		Intercambiar(aTabla,0,0,0,1);
	}


	return aTabla;
}

function Intercambiar(aMiTabla,i,j,k,m){
	iAux=aMiTabla[i][j];
	aMiTabla[i][j]=aMiTabla[k][m];
	aMiTabla[k][m]=iAux;
}
/* Unai Ver 2.0
function CrearTablaCartas(n, m){
		//comentario
		var aArray = new Array(n);

		for(iFila = 0; iFila < n; iFila++){
				aArray[iFila] = new Array(m);
		}

		for(iFila = 0; iFila < n; iFila++){
				for(iCol = 0; iCol < m; iCol++){
						bRepe = true;
						while (bRepe){
								bRepe = false;
								iAleatorio = Math.floor(Math.random()*n*m+1);
								for(f = 0; f < n; f++){
										for(c = 0; c < m; c++){
												if(aArray[f][c] == iAleatorio){
														bRepe = true;
												}
										}
								}
						}
						aArray[iFila][iCol] = iAleatorio;
				}
		}
		for(iFila = 0; iFila < n; iFila++){
				for(iCol = 0; iCol < m; iCol++){
						aArray[iFila][iCol] = (aArray[iFila][iCol] > ((n*m)/2) )) ? aArray[iFila][iCol] -  ((n*m)/2) ) : aArray[iFila][iCol];
				}
		}

		return aArray;
}*/


//Cartas Isaac Ver 1.0
function tablaCartas(N,M, desordenar = true){
	var aTemp = [];
	var aTabla = [];
	var cont = 1;
	for(i=0;i<N*M;i++){
		aTemp[i] = cont;
		cont++;
		if (cont>(N*M)/2) cont = 1;
	}
	if(desordenar)
		aTemp = aTemp.sort(function() {return Math.random() - 0.5});
	for(i=0;i<N;i++)
		aTabla[i] = aTemp.slice(i*M,(i*M)+M);
	return aTabla;
}
