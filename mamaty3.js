
    
    let telefono=document.forms["formulario"]["telefono"];
    let mail=document.forms["formulario"]["mail"];
    let nombre=document.forms["formulario"]["nombre"];
    let apellido=document.forms["formulario"]["apellido"];
    let cartelMal=document.querySelector('#malEscrito');
    let cartelEnvio=document.querySelector('#cartelDeEnvio');
    
    let datos=document.querySelector("#datosEnviados");
      let emailCodigo= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    function validarNombre(){
        if(nombre.value==""||!isNaN(nombre.value)){
          cartelEnvio.style.display="none";
            cartelMal.style.display="block";
            nombre.style.border="3px solid red";
            return false;
        }else{
            nombre.style.border="";
            cartelMal.style.display="none";
           return validarApellido();
            
        }
        
     }
     function validarApellido(){
        if(apellido.value==""||!isNaN(nombre.value)){
          cartelEnvio.style.display="none";
            cartelMal.style.display="block";
            apellido.style.border="3px solid red";
            return false;
         }else{
            apellido.style.border="";
            cartelMal.style.display="none";
             return validarMail();
            
         }
     }
     function validarMail(){
          if(mail.value==""|| !(emailCodigo.test(mail.value)) ){
            cartelEnvio.style.display="none";
            cartelMal.style.display="block";
            mail.style.border="3px solid red";
            return false;
          }else{
            mail.style.border="";
            cartelMal.style.display="none";
           return validarTelefono();
            
          }
     }
     function validarTelefono(){
      
        if(isNaN(telefono.value)||telefono.value.length<5){
          cartelEnvio.style.display="none";
            cartelMal.style.display="block";
            telefono.style.border="3px solid red";
            return false;
          }else{
            telefono.style.border="";
            cartelEnvio.style.display="block";
            cartelMal.style.display="none";
            
            let n=document.createElement("p");
            n.innerText=nombre.value;
            datos.appendChild(n);
            telefono.value="";
            mail.value="";
            nombre.value="";
            apellido.value="";
            return false;
          }
     }
      
