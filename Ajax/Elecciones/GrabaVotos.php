<?php
  $idPartido = $_REQUEST["slPartido"];
  $nVotos = $_REQUEST["nVotos"];


  $link = @new mysqli("localhost", "isaac", "Zakarias", "isaac");
  if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
  }      // Consulta
    $sql = "UPDATE elecciones SET Votos=$nVotos WHERE Id=$idPartido";
    if($link->query($sql)){
      echo $sql;
      ?>
      <br>
      <a href="Votacion.php"><button type="button" name="button">Volver</button></a>
      <?php
    }else {
      echo "error";
    }

 ?>
