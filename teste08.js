// 05.08.26

// EXERCÍCIO 1
console.log(`\nExercicio 1:`);

function saudacao(nomes) {
    return nomes;
}

let nomeex1 = "Joao Peres";

console.log(`- Olá`, saudacao(nomeex1));


// EXERCÍCIO 2
console.log(`\nExercicio 2:`);

function calcularAreaRetangulo(base, altura, area) {
    area = (base * altura) / 2;
    return area;
}

let areax2 = 0;
let baseex2 = 10;
let alturaex2 = 5;

console.log(`Area:`, calcularAreaRetangulo(baseex2, alturaex2, areax2));
console.log(`Altura: ${alturaex2}\nBase: ${baseex2}`);


// EXERCÍCIO 3
console.log(`\nExercicio 3`);

function parOuImpar(num, par) {
    num % 2 === 0 ? par = true : par = false;
    return par;
}

let numero = 11;
let par;

console.log(`Numero: ${numero}\nResultado: par (` + parOuImpar(numero, par) + `)`);


// EXERCÍCIO 4
console.log(`\nExercicio 4:`);

function calcularMedia(result, num1, num2, num3) {
    result = (num1 + num2 + num3) / 3;
    return result;
}

let notas = [90, 60, 85]; 
let Resultado;

console.log(`Nota 1: ${notas[0]}`);
console.log(`Nota 2: ${notas[1]}`);
console.log(`Nota 3: ${notas[2]}`);

console.log(`Média: ` + calcularMedia(Resultado, notas[0], notas[1], notas[2]));


// EXERCÍCIO 5
console.log(`\nExercicio 5:`);

function maiorNumero(maior, num1, num2) {
    num1 > num2 ? maior = num1 : maior = num2;
    return maior;
}

let maior;
let num1ex5 = 99;
let num2ex5 = 100;

console.log(`Numero 1: ${num1ex5}`);
console.log(`Numero 2: ${num2ex5}`);
console.log(`Maior: ` + maiorNumero(maior, num1ex5, num2ex5));


// EXERCICIO 6
console.log(`\nExercicio 6:`);

let numex6 = 10;

const dobro = () => numex6 * 2;

console.log(`Numero: ${numex6}\nDobro: ` + dobro(numex6));


// EXERCICIO 7
console.log('\nExercicio 7:');

let numex7 = 91;

const quadrado = () => numex7 * numex7;

console.log(`Numero: ${numex7}\nQuadrado: ` + quadrado(numex7));


// EXERCICIO 8
console.log(`\nExercicio 8:`);

let celsius = 0;
let fahrenheit;

const celsiusParaFahrenheit = (celsius) => (celsius * 9/5) + 32;

console.log(`Ceusios: ${celsius}\nFarenheit: ` + celsiusParaFahrenheit(30));


// EXERCICIO 9
console.log(`Exercicio 9\n`);

let palavraex9 = "Joao_vitor_Peres";

const contarCaracteres = () => palavraex9.length;

console.log(`Palavra: ${palavraex9}\nCaracteres: ` + contarCaracteres(palavraex9));


// EXERCICIO 10
console.log(`Exercicio 10\n`);

let idadeex10 = 18;

const verificarIdade = () => idadeex10 >= 18 ? "Maior de idade" : "Menor de idade";

console.log(`Idade: ${idadeex10}\n` + verificarIdade(idadeex10));