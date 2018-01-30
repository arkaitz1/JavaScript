<?php
  $nombre = $_REQUEST["nombre"];
  $apuesta = $_REQUEST["apuesta"];
  $link = @new mysqli("localhost", "isaac", "Zakarias", "isaac");
  if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
  }
  $sql = "";
  return $link->query($sql);
 ?>
