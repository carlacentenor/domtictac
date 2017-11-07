window.onload = function(){ /*hasta que se cargue totalmente recien ejecutar la funcion*/

var board = document.querySelector(".board-js"); /*seleccionando la primera clase .board-js*/

board.addEventListener("click",addX);
/*
board.addEventListener("click",function(event){ Hacer un cambio cuando hace doble click--event es un parametro creado
  event.target.style.backgroundColor ="#da91ec"; cambia el color cuando seleccione
target seleccionando solo esa etiqueta
event.target.style.border ="2px solid #6214ba";
event.target.textContent = ":)"; *solo agregas texto*

})
board.addEventListener("dblclick",function(event){
    event.target.style.backgroundColor ="#09c953";
    event.target.textContent = "O";
}); ---- evento de cambiar color al pasar el mouse


board.addEventListener("dblclick",function(event){
  event.target.style.backgroundColor ="#09c953";

event.target.style.border ="2px solid #093915";
})*/

};

var centinela = false ;

function addX(event){  /**LLAMAR A LA FUNCION DESDE FUERA**/


if(centinela){
event.target.textContent = "X";
centinela=false;
}
else {
  event.target.textContent="O";
  centinela=true;
}
};
