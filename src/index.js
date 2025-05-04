// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');
let valorComDesconto = valorTotal;

if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
  valorComDesconto = valorTotal * 0.9;
}
// Calculando o valor por pessoa e exibindo os resultados
const valorPorPessoa = valorComDesconto / numeroPessoas;

console.log('\nResumo da conta:');
console.log('Número de pessoas na mesa:', numeroPessoas);
console.log('Método de pagamento:', metodoPagamento);
console.log('Valor total com desconto: R$', valorComDesconto.toFixed(2));
console.log('Cada pessoa deve pagar: R$', valorPorPessoa.toFixed(2));



// Exibindo os resultados