<?php
$estado=$_REQUEST["estado"];
$Salida="";
if ($estado == "none") {echo " "; return;}
if (file_exists('Quimica.xml')) {
	$contenido = file_get_contents('Quimica.xml');
	$xml = simplexml_load_string($contenido) or die("Error: No se pudo crear el objeto");
	for ($i=0;$i<count($xml);$i++) {
		if ($xml->Elemento[$i]->Estado==$estado){
			$Salida .= $xml->Elemento[$i]->Nombre." ";
		}
	}
	echo $Salida;
//	echo $xml->Elemento->Nombre['Bismuto']->Nombre;
} else {
    exit('Error abriendo archivo.xml.');
}

?>
