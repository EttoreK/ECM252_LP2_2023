// para executar: node + arquivo

//const, let, var
//REPL, Read, Evaluate, Print, Loop

// ===================================

/* 
const nome1 = "Ana"
const nome2 = 'Pedro'
const nome3 = `jose`

console.log(typeof(nome1))
console.log(typeof(nome2))
console.log(typeof(nome3))

nome1 = "joao"
 */

// ===================================

/* 
let a = 2
let b = "abc"

console.log(typeof(b))

b = 12
console.log(typeof(b))

b = true
console.log(typeof(b)) 
*/

// ===================================

/* 
var endereco = "Rua C"
console.log(endereco)
endereco = "Rua B"
console.log(endereco)
console.log(typeof(endereco)) 
*/

// ===================================

/*
var linguagem = "JavaScript"
console.log("Aprendendo " + linguagem)
var linguagem = "Java"
console.log("Aprendendo " + linguagem)
*/

// ===================================

/*
var idade = 18
console.log("Oi, " + nome)
if(idade >= 18){
    var nome = "João"
    console.log(nome + ", você pode dirigir")
}
console.log("Até mais, " + nome)
*/

// ===================================

/*
const n1 = 2
const n2 = '3'
const n3 = n1 + n2 //Coersão implicita
console.log(n3)
const n4 = n1 + Number(n2) //Coersão explicita
*/

// ===================================

/*
console.log(1 == 1)
console.log(1 == '1')

console.log(1 === 1)
console.log(1 === "1")
*/

// ===================================

/*
console.log(true == 1)
console.log([1] == 1)
console.log(null == null)
console.log(null == undefined)
console.log([] == false)
console.log([] == [])
*/

// ===================================

/*
v1 = []
v1[0] = 3.4
v1[10] = 2
console.log(v1)
for(let i = 0; 1 < v1.length; i++)
    console.log(v1[i])
*/

// ===================================

/* 
function soma(a, b){
    return(
        a + b
    );
}

console.log(2, 3)
*/

// ===================================

/*
const nomes = ['Namaria', "Tonho", "Drigo", "Alex", "Crista"];
const resultado = nomes.filter((nome) => {return nome.startsWith('A')})

console.log(resultado)

const letrasIniciais = nomes.map((nome) => {return nome.charAt(0)})
console.log(letrasIniciais)

const numeros = [1, 2, 3, 4, 5]
const qua = numeros.map((num) => {return num**2})
console.log(qua)

const soma = valores.reduce((ac, v) => {return ac + v})
console.log(soma)
*/

// ===================================

/*
function hello(){
    console.log("Olá meu Chapa")
}
hello()

function hello(nome){
    console.log("Olá meu Chapa" + nome)
}
hello("Nat")

function dobro(num){ 
    return num * 2;
}

function triplo(num){ 
    return num * 3;
}

console.log(triplo(4))
console.log(dobro(5))

const teste1 = (a, b) => (a + b)
const teste2 = (a, b, c) => (a * b * c)

console.log(teste1("a", "b"))
console.log(teste2(1, 5, 6))

const hello2 = () => console.log("Hello")
console.log(hello2())

const epar = (n) => 
    n%2 === 0;
console.log(epar(3))
*/

// ===================================

/*
let umaFuncao = function () {
    console.log ("Fui armazenada em uma variável");
}
umaFuncao()
function f (funcao) {
    funcao()
}
function g () {
    function outraFuncao(){
        console.log("Fui criada por g");
    }
    return outraFuncao;
}
f (function (){
    console.log ('Estou sendo passada para f')
})
const gResult = g()
gResult()
g()()
f(g)
f(g())
f(g()())
f(1)
*/

// ===================================

/*
function f () {
    let nome = 'João';
    function g () {
        console.log (nome);
    }
    g()
}
f()
*/

// ===================================

/*
function ola(){
    let nome = 'João';
    return function (){
        console.log ('Olá, João');
    }
}
let olaResult = ola();
olaResult();
function saudacoesFactory(saudacao, nome){
    return function (){
        console.log (saudacao + ', ' + nome);
    }
}
let olaJoao = saudacoesFactory ('Olá', 'João');
let tchauJoao = saudacoesFactory('Tchau', 'João');
olaJoao();
tchauJoao();
*/

// ===================================

/*
function eAgora(){
    let cont = 1;
    function f1 (){
        console.log (cont);
    }
    cont++;
    function f2 (){
        console.log (cont);
    }
    return {f1, f2}
}
let eAgoraResult = eAgora();
eAgoraResult.f1();
eAgoraResult.f2();
*/

// ===================================

/*
let pessoa = {
    nome: "João",
    idade: 17,
}
console.log("Me chamo " + pessoa.nome);
console.log("Tenho " + pessoa["idade"] + " anos");
*/

// ===================================

/*
let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "Rua B",
        numero: 121,
    },
};
console.log(
    `Sou ${pessoaComEndereco.nome},
    tenho ${pessoaComEndereco.idade} anos
    e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
    número ${pessoaComEndereco["endereco"]["numero"]}`
);
*/

// ===================================

/*
let concessionaria = {
    cnpj: "00011122210001-45",
    endereco: {
        logradouro: "Rua A",
        numero: 10,
        bairro: "Vila J",
    },
    veiculos: [{
            marca: "Ford",
            modelo: "Ecosport",
            anoDeFabricacao: 2018,
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            anoDeFabricacao: 2020,
        },
        {
            marca: "Volkswagen",
            modelo: "Nivus",
            anoDeFabricacao: 2020,
        },
    ],
};
for (let veiculo of concessionaria.veiculos) {
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano de Fabricação:
    ${veiculo.anoDeFabricacao}`);
}
*/

// ===================================

let calc = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b
}

console.log(calc.somar(2,6))
console.log(calc.subtrair(2,6))