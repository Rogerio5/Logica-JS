alert('Boas Vindas ao jogo do numero secreto');
let numeroSecreto = 4; //let = Valor fica armazenado 
console.log(numeroSecreto)
let chute = prompt('Esolha um número entre 1 e 10');

// se chute for igual ao numero secreto

    if (chute == numeroSecreto){
        alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto}`);
    }else {
        alert('Voce errou :(')
    }
    
/* EXEMPLO 1

Você é uma pessoa recém-chegada à equipe de desenvolvimento do Jornada Milhas, um site de compra de pacotes de viagens para os principais destinos do mundo.

Como primeira tarefa, sua liderança pediu para que você corrigisse um bug que tem acontecido quando uma pessoa cliente do site tenta utilizar suas milhas do cartão de crédito para obter desconto nos pacotes de viagem. Para isso, foi apresentado o seguinte código:


let porcentagemDesconto = 0;

if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
}

if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    porcentagemDesconto = 0;
}
Copiar código
Para te ajudar a compreender a origem do bug, sua liderança explicou a regra de negócio utilizada para compras de pacotes de viagens com milhas:

Pessoas com uma quantidade de milhas inferior a 5.000 não recebem desconto.
Pessoas com uma quantidade de milhas igual ou superior a 30.000 recebem 20% de desconto.
Pessoas com uma quantidade de milhas superior a 5.000, mas inferior a 30.000, recebem 10% de desconto.
Mas, segundo relatos de clientes, ao tentar utilizar o desconto referente a 5.000 milhas, não ocorre nenhum desconto. Já clientes com mais de 30.000 milhas estão recebendo desconto excedente ao que deveriam receber.

Como você poderia modificar o código para que ele funcione corretamente? 

Fazendo a utilização de um bloco if dentro do bloco else, como:


let porcentagemDesconto = 0;

if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
}

}

A utilização do bloco if dentro do bloco else garante que, caso a quantidade de milhas for superior a 30000, o desconto será de 20%, e caso não for superior a este valor, mas for superior a 5000, o desconto será de 10%. Para o caso da quantidade de milhas ser inferior a 5000, o desconto permanecerá zerado, pois não existe a quantidade mínima para ganhar desconto.



/* EXEMPLO 2
alert("Estou aprendendo JavaScript");*/

/*// 1. Mostra um alerta de boas-vindas
alert("Boas vindas ao nosso site!");

// 2. Declara a variável nome
let nome = "Lua";

// 3. Declara a variável idade
let idade = 25;

// 4. Declara a variável numeroDeVendas
let numeroDeVendas = 50;

// 5. Declara a variável saldoDisponivel
let saldoDisponivel = 1000;

// 6. Exibe alerta com mensagem de erro
alert("Erro! Preencha todos os campos");

// 7. Declara variável mensagemDeErro e mostra seu valor no alerta
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// 8. Usa prompt para capturar nome do usuário
let nomeUsuario = prompt("Digite seu nome:");

// 9. Usa prompt para capturar idade do usuário
let idadeUsuario = prompt("Digite sua idade:");
idadeUsuario = Number(idadeUsuario); // converte para número

// 10. Valida idade
if (idadeUsuario >= 18) {
  alert("Pode tirar a habilitação!");
}
*/