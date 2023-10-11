// IDENTIFICAR LOS ELEMENTOS DE LA PAGINA WEB

var miAudio, reproducir, progreso, maximo;
maximo = 600; // width de la barra de progreso 600px = duracion del video en segundos. En que pixel se encuentra cuando han pasado 2seg ?

function comenzar() {

    miAudio = document.getElementById("miAudio");
    reproducir = document.getElementById("play");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", clicando, false);
    // progreso
    barra.addEventListener("click", adelantando, false);

}

function clicando() {

    if(miAudio.paused == false && miAudio.ended == false) {

        miAudio.pause();
        reproducir.innerHTML="Play";
        
    } 
    else {

        miAudio.play();
        reproducir.innerHTML="Pause";
        bucle = setInterval(estado, 30); //mseg (1000 mseg - 30 mseg) Funcion que la llamamos 1 vez cada segundo
    }
}

function estado() {

    if (miAudio.ended == false) { // Si el video NO ha finalizado
        
        var total = parseInt((miAudio.currentTime) * maximo / miAudio.duration); // EL width en el CSS  de la barra de progreso 600px = duracion del video en segundos. En que pixel se encuentra cuando han pasado 2seg ?
        progreso.style.width = total + "px"; // modificar el estilo de la barra de progreso
    }
}


function adelantando(posicion) {
    // Que el video vuelva a la posicion donde este el puntero del raton
    // Que la barra de progreso también vuelva a la posición del puntero del raton
    if (miAudio.paused == false && miAudio.ended == false){
        // Captura de la posicion X del puntero del ratón donde pinchamos,
        // Debemos averiguar el punto que corresponde 
        var ratonX = posicion.pageX - barra.offsetLeft;
        // Averiguamos a que punto concreto corresponde en ese punto
        var nuevoTiempo = ratonX * miAudio.duration/maximo;
        // Averiguamos a que segundo del video corresponde
        miAudio.currentTime = nuevoTiempo;

        progreso.style.width = ratonX + "px";

    }
}

window.addEventListener("load", comenzar, false);

