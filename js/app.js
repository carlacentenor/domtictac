var arrayGame = [];
var board = document.querySelector(".board-js");
var arrayCell = document.querySelectorAll(".cell");
var centinela = true; /* variable para turno inicializada*/
var textWinner = document.querySelector(".text-winner");

board.addEventListener("click", loadGame); /*Evento que llama a funcion*/

function loadGame(event) {
	var positionCell = event.target.id[1] - 1; /*obtenemos la posicion de cada celda*/
	if (centinela) {
		event.target.style.backgroundColor = "#00d6f4";
		event.target.textContent = "X";
		centinela = false;
		arrayGame[positionCell] = "X"; /*agregamos segun la posicion seleccionada el valo "X"*/
		winner("X");
	} else {
		event.target.style.backgroundColor = "#ff0183";
		event.target.textContent = "O";

		centinela = true;
		arrayGame[positionCell] = "O"; /*agregamos segun la posicion seleccionada el valo "O"*/
		winner("O");
	}
};

function winner(value) { /*Funcion que evalua todas las posibles combinaciones ganadoras*/
	if ((arrayGame[0] == value && arrayGame[1] == value && arrayGame[2] == value) ||
		(arrayGame[0] == value && arrayGame[3] == value && arrayGame[6] == value) ||
		(arrayGame[0] == value && arrayGame[4] == value && arrayGame[8] == value) ||
		(arrayGame[3] == value && arrayGame[4] == value && arrayGame[5] == value) ||
		(arrayGame[1] == value && arrayGame[4] == value && arrayGame[7] == value) ||
		(arrayGame[2] == value && arrayGame[4] == value && arrayGame[6] == value) ||
		(arrayGame[6] == value && arrayGame[7] == value && arrayGame[8] == value) ||
		(arrayGame[2] == value && arrayGame[5] == value && arrayGame[8] == value)) {


		textWinner.textContent = "Jugador " + value + " gana"




	} else if (arrayGame[0] != null && arrayGame[1] != null && arrayGame[2] != null &&
		arrayGame[3] != null && arrayGame[4] != null && arrayGame[5] != null &&
		arrayGame[6] != null && arrayGame[7] != null && arrayGame[8] != null) {
		textWinner.textContent = "Empate , juega otra vez"


	}

}


function reload() { /*Funcion para reiniciar el juego*/
	window.location.reload();
}
