<?php
$Elemento=$_REQUEST["elem"];
$Salida="";
if ($Elemento == "none") {echo " , "; return;}
if (file_exists('Quimica.xml')) {
	$contenido = utf8_encode(file_get_contents('Quimica.xml'));
	$xml = simplexml_load_string($contenido) or die("Error: No se pudo crear el objeto");
	for ($i=0;$i<count($xml);$i++) {
		if ($xml->Elemento[$i]->Nombre==$Elemento){
			$Salida= $Salida . $xml->Elemento[$i]->Simbolo;
      $Salida.= "," . $xml->Elemento[$i]->nAtomico;
			break;
		}
	}
	echo $Salida;
//	echo $xml->Elemento->Nombre['Bismuto']->Nombre;
} else {
    exit('Error abriendo archivo.xml.');
}
?>
