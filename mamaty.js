window.onload = function () {
    // Variables
    const IMAGENES = [
        'imagenes_mamaty/celiaco1.jpg',
        'imagenes_mamaty/celiaco2.jpg',
        'imagenes_mamaty/celiaco4.jpg',
        'imagenes_mamaty/celiaco5.jpg',
        'Imagenes_mamaty/celiaco3.jpg',
        'Imagenes_mamaty/celiaco7.jpg',
        'Imagenes_mamaty/celiaco8.jpg',
        'Imagenes_mamaty/celiaco9.jpg'
    ];
    let $imagen = document.querySelector('#imagen');
    let posicionActual = 0;
    let $botonAnterior = document.querySelector('#anterior');
    let $botonSiguiente = document.querySelector('#siguiente');
    
           
           
            /**
             * Funcion que cambia la foto en la siguiente posicion
             */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        colocarImagen();
    }
     /**
             * Funcion que cambia la foto en la anterior posicion
             */
     function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        colocarImagen();
    }
    /**
             * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
             */
    function colocarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    
        //$imagen.innerHTML=IMAGENES[posicionActual];
       //$imagen.src = "Imagenes_mamaty\celiaco4.jpg";
       //$imagen.document.IMAGENES[posicionActual];
    }
    $botonSiguiente.addEventListener('click', pasarFoto);
    $botonAnterior.addEventListener('click', retrocederFoto);
    colocarImagen();      
    /*onsubmit="return validar()"
      
    
    function validar() {
    …..
    return return false;
}*/  
            
     
}