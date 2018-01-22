<?php
  $servername = "88.2.227.247";
  $username = "isaac";
  $password = "Karrika2010";
  $database = "isaac";

  $conn = @new mysqli($servername, $username, $password, $database);
  if ($conn->connect_errno) die('Connect Error: ' . $conn->connect_error);

  $sql = "SELECT * from medallero";
  $res = $conn->query($sql);
  for ($i=0;$i<$res->num_rows;$i++){
  	$fila = mysqli_fetch_array($res);
  	$miArray[$i]= array("Pais"=>utf8_encode($fila["Pais"]),"Oro"=>$fila["Oro"],"Plata"=>$fila["Plata"],"Bronce"=>$fila["Bronce"]);
  }
  echo  json_encode($miArray);
  mysqli_close($conn);
?>
