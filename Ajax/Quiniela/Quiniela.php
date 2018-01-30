<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Quiniela</title>
    <script type="text/javascript">
    function enviarDatos(){
      var xmlhttp;
      xmlhttp=new XMLHttpRequest();
      xmlhttp.onreadystatechange =
        function()
        {
          if (xmlhttp.readyState==4 && xmlhttp.status==200) {
             var res = xmlhttp.responseText;
          }
        }
      xmlhttp.open("GET","EnviarQuiniela.php");
      xmlhttp.send();
    }
    </script>
  </head>
  <body>
    <?php
      $link = @new mysqli("localhost", "isaac", "Zakarias", "isaac");
      if ($link->connect_errno) {
        die('Connect Error: ' . $link->connect_error);
      }
        $sql = "SELECT * from Quiniela";
        $resultado = $link->query($sql);
        while($fila = mysqli_fetch_array($resultado)){
     ?>
      <h1>La Quiniela</h1>
      <form class="" action="index.html" method="post">
        <p><input type="text" name="nombre" value=""></p>
        <p><input type="submit" name="" value="Enviar"></p>
        <div style="color:red;" id="resultado"></div>
      <p><h3>Jornada: <?php echo $fila[0] ?></h3></p>
     <table border="1">
      <?php
       for($i=1;$i<(count($fila)-1)/2;$i=$i+2){
      ?>
        <tr>
          <td><?php echo $fila[$i] ?></td><td><?php echo $fila[$i+1] ?></td>
          <td>
            <select class="" name="apuesta">
              <option value="1">1</option>
              <option value="x">x</option>
              <option value="2">2</option>
            </select>
          </td>
        </tr>
      <?php
       }
        ?>
     </table>
<?php } ?>
  </form>
  </body>
</html>
