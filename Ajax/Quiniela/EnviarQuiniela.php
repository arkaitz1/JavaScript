<?php
  $strUpdate = $_GET["str"];

  $link = @new mysqli("88.2.227.247", "isaac", "Karrika2010", "isaac");
  if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
  }
  $sql = "INSERT INTO Apuestas (Comprador, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14) VALUES $strUpdate";
  $link->query($sql);
  echo $link->query($sql);
 ?>
