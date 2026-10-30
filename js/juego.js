
function piedraPapelTijera(jugador, maquina) {
if (jugador === computadora) {
    console.log("Empate");
} let jugador = "tijera";
let computadora = "piedra";
piedraPapelTijera(jugador, computadora);
else if ((jugador === "piedra" && computadora === "tijera") ||
(jugador === "papel" && computadora === "piedra") ||
(jugador === "tijera" && computadora === "papel")
) {
    console.log("Gana jugador");
} else {
    console.log("Gana la maquina");
}      
}