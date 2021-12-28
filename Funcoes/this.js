function calculaIdade(anos){
	return 'Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos}
	anos de idade.';
}

const pessoa1 = {
	nome: 'Maria',
	idae: 30
}
const pessoa2 = {
	noem: 'Carla',
	idade: 26
}
const animal = {
	nome: 'Fiona',
	idade: 5,
	raca: 'Pug',
}

console.log (calculaIdade.call(pessoa2,30));
console.log (calculaIdade.apply(pessoa2,[30]));