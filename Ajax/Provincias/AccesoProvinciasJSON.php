<?php
$comunidad = $_REQUEST["comuniad"];
$servername = "localhost";
$username = "isaac";
$password = "Karrika2010";
// Conexión a la base de datos:
$link = @new mysqli($servername, $username, $password , "isaac");
if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}
// Consulta
$sql = "SELECT * from Provincias WHERE Comunidad='$comunidad'";
$resultado = $link->query($sql);
$filas=$resultado->num_rows;
for ($i=0;$i<$filas;$i++){
	$fila = mysqli_fetch_array($resultado);
	$miArray[$i]= array("Provincia"=>utf8_encode($fila["Provincia"]),"Extension"=>$fila["Extension"]);
}
mysqli_close($link);

echo json_encode($miArray);

?>
