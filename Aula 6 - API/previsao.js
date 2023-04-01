// require('dotenv').config()
// const { default: axios } = require("axios")

// const appid = process.env.APPID

// const q = "Itu"
// const cnt = 5
// const units = "metric"
// const lang = "pt_br"

// const urlBase = "https://api.openweathermap.org/data/2.5/forecast"
// const url = `${urlBase}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)

// axios.get(url).then(response => {
// 	// console.log(response.data)
// 	return response.data
// }).then(res => {
// 	// console.log(res)
// 	return res
// }).then(resultado => {
// 	console.log(resultado.cnt)
// 	return resultado
// }).then(resultado => {
// 	return resultado['list']
// }).then(resultado => {
// 	for(let previsao of resultado){
// 		console.log("temp min: " + previsao.main.temp_min)
// 		console.log("Descrição: " + previsao.weather[0].description)
// 	}
// })

// ========================================================================================================

// function hello(nome){
// 	return `Olá, ${nome}`
// }
// console.log(hello('João'))
// hello("João").then(res => console.log(res))

// ========================================================================================================

function fatorial(n){
	if(n<0) return Promise.reject("n não pode ser negativo")
	let res = 1
	for(let i=2; i<=n; i++) res *= i;
	return Promise.resolve(res)
}

function chamadaComThenCatch(){
	fatorial(5)
	.then(res => console.log("Ok: " + res))
	.catch(erro => console.log("NOK: " + erro))

	fatorial(-1)
	.then(res => console.log("Ok: " + res))
	.catch(erro => console.log("NOK: " + erro))
}
chamadaComThenCatch()

async function chamadaComAsyncAwait(){
	try{
	const f1 = await fatorial(5)
	console.log(f1)
	const f2 = await fatorial(-1)
	} catch(e){
		console.log("No catch: " + e)
	}
}
chamadaComAsyncAwait()