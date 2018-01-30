<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Quiniela</title>
    <script type="text/javascript">
    function enviarDatos(num){
      var strUpdate = generarString(num);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function(){
          if (xmlhttp.readyState==4 && xmlhttp.status==200){
             var res = xmlhttp.responseText;
             if(res == 1)
              document.getElementById('resultado').innerHTML = "Registro insertado correctamente"
            else
              document.getElementById('resultado').innerHTML = "Se ha producido algun error al introducir el registro";
          }
      }
      xmlhttp.open("GET","EnviarQuiniela.php?str="+strUpdate);
      xmlhttp.send();
    }

    function generarString(num){
      var strApuesta = "('"+document.getElementById('nombre').value+"'";
      for(i=1;i<num;i=i+2)
        strApuesta += ",'"+document.getElementById('apuesta'+i).value+"'";
      return strApuesta+")";
    }
    </script>
  </head>
  <body>
    <?php
      $link = @new mysqli("88.2.227.247", "isaac", "Karrika2010", "isaac");

      if ($link->connect_errno) {
        die('Connect Error: ' . $link->connect_error);
      }
        $sql = "SELECT * from Quiniela";
        $resultado = $link->query($sql);
        while($fila = mysqli_fetch_array($resultado)){
     ?>
      <h1>La Quiniela</h1>

        <p><input type="text" name="nombre" id="nombre" value=""></p>
        <p><button name="" onclick="enviarDatos(<?php echo (count($fila)-1)/2 ?>)">Enviar</button></p>
        <div style="color:red;" id="resultado"></div>
      <p><h3>Jornada: <?php echo $fila[0] ?></h3></p>
     <table border="1">
      <?php
       for($i=1;$i<(count($fila)-1)/2;$i=$i+2){
      ?>
        <tr>
          <td><?php echo $fila[$i] ?></td><td><?php echo $fila[$i+1] ?></td>
          <td>
            <select class="" name="apuesta<?php echo $i ?>" id="apuesta<?php echo $i ?>">
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

  </body>
</html>
