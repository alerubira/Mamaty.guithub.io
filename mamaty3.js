window.onload = function () {
    let retorno=true;
    let telefono=document.forms["formulario"]["telefono"];
    let mail=document.forms["formulario"]["mail"];
    let nombre=document.forms["formulario"]["nombre"];
    let apellido=document.forms["formulario"]["apellido"];
    let cartelMal=document.querySelector('#malEscrito');
    let cartelEnvio=document.querySelector('#cartelDeEnvio');
    let botonEnviar=document.querySelector("#botonEnviarFormulario");
    botonEnviar.addEventListener('click',validarNombre);
    function validarNombre(){
        if(nombre.value==""){
            cartelMal.style.display="block";
            nombre.style.border="3px solid red";
            retorno= false;
            return retorno;
        }else{
            nombre.style.border="";
            cartelMal.style.display="none";
            return validarApellido();
            
        }
        console.log(retorno);
     }
     function validarApellido(){
        if(apellido.value==""){
            cartelMal.style.display="block";
            apellido.style.border="3px solid red";
            retorno= false;
            return retorno;
         }else{
            apellido.style.border="";
            cartelMal.style.display="none";
            return validarMail();
            
         }
     }
     function validarMail(){
          if(mail.value==""){
            cartelMal.style.display="block";
            mail.style.border="3px solid red";
            retorno= false;
            return retorno;
          }else{
            mail.style.border="";
            cartelMal.style.display="none";
            return validarTelefono();
            
          }
     }
     function validarTelefono(){
        if(telefono.value==""){
            cartelMal.style.display="block";
            telefono.style.border="3px solid red";
            retorno= false;
            return retorno;
          }else{
            telefono.style.border="";
            cartelEnvio.style.display="block";
            cartelMal.style.display="none";
            retorno= false;
            return retorno;
          }
     }
     console.log(retorno);
}
