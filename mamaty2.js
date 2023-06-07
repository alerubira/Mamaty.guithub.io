 //funcion para mostrar y ocultar
 window.onload = function () {
     let $botonLimpiar1 = document.querySelector('#limpiar1');
    let propiedad=document.querySelector('#propiedadChia');

    document.getElementById("botonChia").addEventListener("click",function(){
        limpiar();
        propiedad=document.querySelector('#propiedadChia');
        mostrar(propiedad,$botonLimpiar1);
        })
     document.getElementById("botonSesamo").addEventListener("click",function(){
            limpiar();
            propiedad=document.querySelector('#propiedadSesamo');
            mostrar(propiedad,$botonLimpiar1);
         })
    document.getElementById("botonAmapola").addEventListener("click",function(){
           limpiar();
            propiedad=document.querySelector('#propiedadAmapola');
            mostrar(propiedad,$botonLimpiar1);
        })
   document.getElementById("botonLino").addEventListener("click",function(){
            limpiar();
            propiedad=document.querySelector('#propiedadLino');
            mostrar(propiedad,$botonLimpiar1);
        })
  document.getElementById("botonSen").addEventListener("click",function(){
            limpiar();
            propiedad=document.querySelector('#propiedadSen');
            mostrar(propiedad,$botonLimpiar1);
            })
    document.getElementById("botonMelisa").addEventListener("click",function(){
                limpiar();
                propiedad=document.querySelector('#propiedadMelisa');
                mostrar(propiedad,$botonLimpiar1);
                })
    document.getElementById("botonAjenjo").addEventListener("click",function(){
                    limpiar();
                    propiedad=document.querySelector('#propiedadAjenjo');
                    mostrar(propiedad,$botonLimpiar1);
                    })
    document.getElementById("botonBardana").addEventListener("click",function(){
                        limpiar();
                        propiedad=document.querySelector('#propiedadBardana');
                        mostrar(propiedad,$botonLimpiar1);
                        })   
    $botonLimpiar1.addEventListener('click',limpiar);

    
     function mostrar(propiedad,$botonLimpiar1){
                
                propiedad.style.display="block";
                $botonLimpiar1.style.display="block";
            }
         
        function limpiar(){
            propiedad.style.display="none";
            $botonLimpiar1.style.display="none"; 
        }
    
    }
     