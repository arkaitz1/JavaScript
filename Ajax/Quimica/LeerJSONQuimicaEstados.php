<?php
$estado=$_REQUEST["estado"];
$Salida="";
if (file_exists('Quimica.json')) {
	$contenido =file_get_contents('Quimica.json');
    $json = json_decode($contenido,true)  or die("Error: No se pudo crear el objeto");
	$myObj=array();
	$j = 0;
	$iEstados=0;
	for ($i=0;$i<count($json);$i++) {
		if ($json[$i]["Estado"]==$estado){
				$myObj[$j]["Nombre"]=$json[$i]["Nombre"];
				$myObj[$j]["Simbolo"]=$json[$i]["Simbolo"];
				$myObj[$j]["Estado"]=$json[$i]["Estado"];
				$j++;
		}
	}
	$myJSON = json_encode($myObj);
	echo $myJSON;
} else {
    exit('Error abriendo archivo.JSON');
}
?>
