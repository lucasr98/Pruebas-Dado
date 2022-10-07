const resultado = document.querySelector(".resultado");
const dado = document.getElementById("dado");
const boton = document.querySelector(".boton");

let claseOriginal = "fa-dice-one";

class Dado {
	constructor(valor, clase){
		this.valor = valor;
		this.clase = clase;
	}
	generarDado(){
		resultado.innerHTML = this.valor;
		dado.classList.replace(claseOriginal, this.clase);
		claseOriginal = this.clase;
	}
}

const numeros = [
	[1, "fa-dice-one"],
	[2, "fa-dice-two"],
	[3, "fa-dice-three"],
	[4, "fa-dice-four"],
	[5, "fa-dice-five"],
	[6, "fa-dice-six"]
]

const numerosNuevo = [];

for (let i in numeros){
	numerosNuevo[i] = new Dado(numeros[i][0], numeros[i][1]);
}

boton.addEventListener("click", ()=>{
	let valorAleatorio = 0 + Math.floor(Math.random() * 6);
	numerosNuevo[valorAleatorio].generarDado();
})