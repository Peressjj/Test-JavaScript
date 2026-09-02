// 27.07.26

let notas = [10, 20, 30];
let soma = 0;
let posicao = 1;

for (let n of notas) {
    soma += n;
    console.log(`Nota[${posicao}]: ${n}`);
    posicao++;
}

console.log(`\nSoma: ${soma}`);
console.log(`Média: ${(soma / 3)}`);