window.onload = function () {
    // Variables
    const IMAGENES = [
        'Imagenes_mamaty\celiaco7.jpg',
        'Imagenes_mamaty\celiaco8.jpg',
        'Imagenes_mamaty\celiaco9.jpg'
    ];
    /**
             * Funcion que cambia la foto en la siguiente posicion
             */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
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
        renderizarImagen();
    }
    /**
             * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
             */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }
            $botonSiguiente.addEventListener('click', pasarFoto);
            $botonAnterior.addEventListener('click', retrocederFoto);
            
            
            // Iniciar
     renderizarImagen();
}