<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script type="text/javascript">
      function cargaTabla(){
        var xmlhttp;
        xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange =
          function()
          {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
              var jResp = JSON.parse(xmlhttp.responseText);
              generarTabla(jResp);
            }
          }
        xmlhttp.open("GET","MiraVotos.php");
        xmlhttp.send();
      }

      function generarTabla(jResp){
        sTabla = "";
        sTabla += "<table border='1'>";
        for(i=0;i<jResp.length;i++){
          sTabla += "<tr>";
            sTabla += "<td>"+jResp[i][0]+"</td><td>"+jResp[i][1]+"</td><td>"+jResp[i][2]+"</td>";
          sTabla+= "</tr>";
        }
          sTabla+="</table>"
          sTabla+="<img src='img/"+jResp[0][0]+".jpg' />"
        document.getElementById("resultado").innerHTML = sTabla;
      }
    </script>
  </head>
  <body>

  <div class="" id="resultado">

  </div>

<script type="text/javascript">
  cargaTabla();
  setInterval(cargaTabla, 5000);
</script>
  </body>
</html>
