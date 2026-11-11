
var puntosUsuario = 0;
var puntosMaquina = 0;

function jugar(eleccionUsuario) {

    var opciones = ["piedra", "papel", "tijera"];

    var eleccionMaquina = opciones[Math.floor(Math.random() * 3)];

    document.getElementById("usuario").innerHTML =
        "Tu elección: " + eleccionUsuario;

    document.getElementById("maquina").innerHTML =
        "Máquina: " + eleccionMaquina;

    if (eleccionUsuario == eleccionMaquina) {

        document.getElementById("mensaje").innerHTML = "¡Empate!";

    } else if (
        (eleccionUsuario == "piedra" && eleccionMaquina == "tijera") ||
        (eleccionUsuario == "papel" && eleccionMaquina == "piedra") ||
        (eleccionUsuario == "tijera" && eleccionMaquina == "papel")
    ) {

        document.getElementById("mensaje").innerHTML = "¡Has ganado!";
        puntosUsuario++;

    } else {

        document.getElementById("mensaje").innerHTML = "¡Has perdido!";
        puntosMaquina++;

    }

    document.getElementById("puntosUsuario").innerHTML = puntosUsuario;

    document.getElementById("puntosMaquina").innerHTML = puntosMaquina;

}
