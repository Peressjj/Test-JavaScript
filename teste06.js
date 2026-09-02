// 28.07.26

// 1 - BOLETIN DO ALUNO

// excelente = 10;
// aprovado = 7;
// recuperacao = 5;
// reprovado = 2;

let nota = 100;

console.log(`NOTA: ${nota}\n`);

if (nota === 100) {
    console.log(`Nota: ${nota} - EXCELENTE`);
} else if (nota <= 99 && nota >= 70) {
    console.log(`Nota: ${nota} - APROVADO`);
} else if (nota <= 69 && nota >= 20) {
    console.log(`Nota: ${nota} - RECUPERAÇÃO`);
} else if (nota < 19) {
    console.log(`Nota: ${nota} - REPROVADO`);
} else {
    console.log(`ERRO!!!`);
}

// 2 - ENTRADA NO EVENTO

// 19 -> ACESSO NEGADO
// 20 -> ACESSO PERMITIDO

let idade = 30;

let liberacao;

idade >= 20 ? liberacao = true : liberacao = false;

console.log(`\nLiberacao: ${liberacao}`);

// 3 - CANTINA DA FACULDADE

let opcao = 9;

console.log(`1 - Café`);
console.log(`2 - Pao de queijo`);
console.log(`3 - Suco`);
console.log(`0 - Sair.`);

console.log(`Opcao: ${opcao}\n`);

switch (opcao) {
    case 0:
        console.log(`Saindo!`);
    break;

    case 1:
        console.log(`Café selecionado.`);
    break;

    case 2:
        console.log(`Pao de queijo selecionado.`);
    break;

    case 3:
        console.log(`Suco.`);
    break;

    default:
        if (opcao != 0) {
            console.log(`Opcao inválida!`);
        }
    break;
}

// 4 - TABUADA E CONTAGEM

// Tabudada:

let num = 7;
let n = 0;

// tabudada com while
console.log(`TABUDADA DO ${num} WHILE:`);
while (n != 11) {
    console.log(`${num} x ${n} = ` + (num * n));
    n++;
}

// tabudada com for 

console.log(`TABUDA DE ${num} FOR:`);
for (let n2 = 0; n2 < 10; n2++) {
    console.log(`${num} x ${n2} =  ${(num * n2)}`);
}

// Contagem

let numcont = 5;

while (numcont != 0) {
    console.log(`Numero: ${numcont}`);
    numcont--;
}

// DESAFIO EXTRA

console.log(`TABUADA 1 AO 10:`);
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 11; j++) {
        console.log(`${i} x ${j} = ${(i * j)}`);
    }
    console.log(`\n`);
}