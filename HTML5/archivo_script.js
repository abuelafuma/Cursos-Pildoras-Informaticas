// JavaScript Document

/* 

querySelector(): 
- Devuelve el primer elemento que corresponde al grupo de selectores indicado entre 	paréntesis.

// querySelectorAll()
-	Retorna todos los elementos que corresponden al grupo de selectores indicado entre
	parentésis. El valor devuelto es un Array que contiene los elementos en el mismo orden en que aparecen en el documento.
*/

function ejecuta() {
	
	//document.querySelector("#principal p:last-child").onclick=saludo;
	// Como devuelve el primer elemento que coincida con el selector. 
	var elementos = document.querySelectorAll("#principal p, span "); // con la coma hacemos un selector de grupo.
	
	for (var i = 0; i < elementos.length; i++) {
		
		elementos[i].onclick=saludo
	}
}

function saludo(){
	alert("Qué hay de nuevo");
}


window.onload = ejecuta; // Cuando cargue la página(window) la función ejecuta




