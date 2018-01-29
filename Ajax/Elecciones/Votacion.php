<p>Simulacion de votos</p>
<form class="" action="GrabaVotos.php" method="post">
  Elige Partido
  <select class="" name="slPartido">
    <?php
      $link = @new mysqli("localhost", "isaac", "Zakarias", "isaac");
      if ($link->connect_errno) {
        die('Connect Error: ' . $link->connect_error);
      }      // Consulta
        $sql = "SELECT * from elecciones";
        $resultado = $link->query($sql);
        while($fila = mysqli_fetch_array($resultado)){
      ?>
        <option value="<?php echo $fila['Id']?>"><?php echo $fila['Partido']?></option>
      <?php
        }
      ?>
    </select>
    <p>
      Votos: <input type="text" name="nVotos" value="">
    </p>
      <input type="submit" name="" value="Actualizar">
</form>
