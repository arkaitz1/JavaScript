// JavaScript Document
// Funciones de JavasCript para el curso 2DAW3

function esAcabado(aTabla){
  N = aTabla.length;
  for (i=0;i<(N*N)-2;i++)
    if(aTabla[N-1][N-1] != 0 || aTabla.join().split(",")[i]>aTabla.join().split(",")[i+1])
      return false;
  return true;
}


// Creaci�n de un Array de 6 elementos sin repetici�n con valores aleatorios sin repetici�n de 1 a 49
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
 function CrearTabla(N){
	//Creamos la tabla de 2 dimensiones de N*N
	var iAzar;
	var aTabla=[];
	var f,c;
	for (f=0;f<N;f++){
		aTabla[f]= [];
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
		}
	}
    return aTabla
}
