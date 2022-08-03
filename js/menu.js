let btn = document.querySelector("#btn"); 
let menu = document.querySelector(".menu");


btn.onclick = function() {
	menu.classList.toggle("active");
}