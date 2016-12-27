function calcular()
{
    var numero= parseInt(document.getElementById("numero").value);
    var respuesta = document.getElementById("respuesta");
    var resultado;
  if (numero<21){//si el número es menor que 21

    resultado= 21-numero; // resto 21 menos el numero ingresado
    // codigo html para mostrar el resultado
    respuesta.innerHTML = '<h4>Es menor que 21, entonces: </h4><br>'+'<h4>21-'+numero+' es igual a:  </h4>'+'<h3 class="animated wobble result">'+resultado+'</h3>';
  }
    
    else{

        resultado= 2*(numero-21); //si no se resta el numero -21 y se le multiplica por dos
        // codigo html para mostrar el resultado
        respuesta.innerHTML = '<h4>Es mayor que 21, entonces: </h4><br>'+'<h4>2*('+numero+'-21) es igual a:  </h4>'+'<h3 class="animated wobble result">'+resultado+'</h3>';
    }
}
function limpiar(){// esta funcion limpia el campo del número
     numero = document.getElementById("numero").value="";
     resultado= 0;
      respuesta.innerHTML = '<br><h4>Prueba otra vez!!</h4><br> <h3 class="animated wobble result">'+resultado+'</h3>';
}

