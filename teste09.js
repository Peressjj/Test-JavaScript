// 26.08.26

const fs = require('fs');

const conteudo = fs.readFileSync("../Testes C/teste221.json", "utf-8");
const pessoas = JSON.parse(conteudo);

console.log('Lista de pessoas:');
pessoas.forEach((pessoa) => {
   console.log(`Nome: ${pessoa.nome} | Idade: ${pessoa.idade}`);
})