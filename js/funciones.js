function queSignoEres(event) {
	event.preventDefault();
	let principal = document.getElementsByClassName("queSignoEres")[0];
	principal.style.display = "flex"
	let segundo = document.getElementsByClassName("comoEsMiSigno")[0];
	segundo.style.display = "none" 
	let tercero = document.getElementsByClassName("estaremosJuntos")[0];
	tercero.style.display = "none"
	let cuarto=document.getElementsByClassName("titulo")[0];
	cuarto.style.display="none"
}

function comoEsMiSigno(event) {
	event.preventDefault();
	let principal = document.getElementsByClassName("comoEsMiSigno")[0];
	principal.style.display = "flex"
	let segundo = document.getElementsByClassName("queSignoEres")[0];
	segundo.style.display = "none" 
	let tercero = document.getElementsByClassName("estaremosJuntos")[0];
	tercero.style.display = "none"
	let cuarto=document.getElementsByClassName("titulo")[0];
	cuarto.style.display="none"
}

function estaremosJuntos(event) {
	event.preventDefault();
	let principal = document.getElementsByClassName("estaremosJuntos")[0];
	principal.style.display = "flex"
	let segundo = document.getElementsByClassName("queSignoEres")[0];
	segundo.style.display = "none" 
	let tercero = document.getElementsByClassName("comoEsMiSigno")[0];
	tercero.style.display = "none"
	let cuarto=document.getElementsByClassName("titulo")[0];
	cuarto.style.display="none"
}
function titulo(event){
	event.preventDefault();
	let cuarto=document.getElementsByClassName("titulo")[0];
	cuarto.style.display="flex"
	let principal = document.getElementsByClassName("estaremosJuntos")[0];
	principal.style.display = "none"
	let segundo = document.getElementsByClassName("queSignoEres")[0];
	segundo.style.display = "none" 
	let tercero = document.getElementsByClassName("comoEsMiSigno")[0];
	tercero.style.display = "none"
}