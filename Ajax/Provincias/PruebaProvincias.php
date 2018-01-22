<?php
$servername = "localhost";
$username = "2daw3";
$password = "12345678";
// Conexión a la base de datos:
$link = @new mysqli($servername, "isaac", "Karrika2010", "isaac");
if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}
// Consulta
$sql = "SELECT * from Provincias";
$resultado = $link->query($sql);
$filas=$resultado->num_rows;
for ($i=0;$i<$filas;$i++){
	$fila = mysqli_fetch_array($resultado);
	$miArray[$i]= array("Provincia"=>utf8_encode($fila["Provincia"]),"Extension"=>$fila["Extension"]);
}
echo  json_encode($miArray);
mysqli_close($link);
?>
