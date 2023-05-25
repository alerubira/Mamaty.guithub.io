 //funcion para mostrar y ocultar
 window.onload = function () {
     let $botonLimpiar1 = document.querySelector('#limpiar1');
    let propiedad;

    document.getElementById("botonChia").addEventListener("click",function(){
        propiedad=document.querySelector('#propiedadChia');
        mostrar(propiedad,$botonLimpiar1);
        
    })
    $botonLimpiar1.addEventListener('click',function(){
        propiedad.style.display="none";
        $botonLimpiar1.style.display="none"; 
    })
     
     function mostrar(propiedad,$botonLimpiar1){
        if(propiedad.style.display="none"){
            propiedad.style.display="block";
            $botonLimpiar1.style.display="block";
        }
         
        
     } 
     function ocultar(propiedad){
        if(propiedad.style.display="block"){
            propiedad.style.display="none";
        }
     } 
    }
     