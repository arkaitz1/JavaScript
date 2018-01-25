<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script type="text/javascript">
      function cargaMunicipio(valor){
        var xmlhttp;
        xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange =
          function()
          {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
              var jResp = JSON.parse(xmlhttp.responseText);
             cargarSelect(jResp);
            }
          }
        xmlhttp.open("GET","caragaMunip.php?prov="+valor);
        xmlhttp.send();
      }
      function cargarSelect(aValores){
        var sMunip = document.getElementById("munip");
        sMunip.disabled = false;
      }
    </script>
  </head>
  <body>
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
    $sql = "SELECT DISTINCT prov FROM prov_munip";
    $resultado = $link->query($sql);
    $filas=$resultado->num_rows;
    ?>
    <select class="" name="" onchange="cargaMunicipio(this.value)">
      <?php
      for ($i=0;$i<$filas;$i++){
        $fila = mysqli_fetch_array($resultado);
        ?>
        <option value="<?php echo utf8_encode($fila["prov"]) ?>"><?php echo utf8_encode($fila["prov"]) ?></option>
        <?php
      }
       ?>
     </select>
       <select class="" id="munip" name="" disabled>
        <option value="">Selecciona Municipio</option>
       </select>
    </select>

  </body>
</html>
