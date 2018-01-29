<?php

$link = @new mysqli("localhost", "isaac", "Zakarias", "isaac");
if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}

$sql = "SELECT * from elecciones ORDER BY Votos DESC";
$resultado = $link->query($sql);
$filas=$resultado->num_rows;
for ($i=0;$i<$filas;$i++){
	$fila = mysqli_fetch_array($resultado);
	$miArray[$i] = array(utf8_encode($fila["Partido"]), $fila["Votos"]);
}
echo  json_encode($miArray);
mysqli_close($link);
?>
