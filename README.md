<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Desafios de Lógica de Programação</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f7fa;
      padding: 30px;
    }
    h1, h2 {
      color: #2c3e50;
    }
    p {
      font-size: 16px;
    }
    .desafio {
      margin-bottom: 40px;
    }
    .enunciado {
      background-color: #f0f8ff;
      border-left: 4px solid #2980b9;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 5px;
    }
    pre {
      background-color: #ffffff;
      border-left: 4px solid #3498db;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      white-space: pre-wrap;
    }
    .resposta {
      background-color: #e9fbee;
      border-left: 4px solid #27ae60;
      padding: 10px;
      margin-top: 10px;
      border-radius: 5px;
    }
  </style>
</head>
# <body>
  <h1>Resolução dos Desafios do Curso de Lógica de Programação 💡</h1>

  <p>Praticar a lógica de programação, incluindo conceitos como <strong>variáveis</strong>, <strong>condicionais (if-else)</strong>, <strong>loops (while)</strong> e <strong>interações com o usuário (alert, prompt)</strong>, é essencial para sua carreira de desenvolvimento de software.</p>
  <p>Esses fundamentos fornecem a base para <em>resolver problemas de forma estruturada</em>, <em>tomar decisões no código</em>, <em>criar iterações controladas</em> e <em>interagir eficazmente com os usuários</em>.</p>
  <p>Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a <strong>criar soluções inovadoras</strong>, <strong>depurar eficientemente</strong> e <strong>manter a qualidade</strong> ao longo do ciclo de vida do software.</p>
  <p>Portanto, investir tempo nesses princípios desde cedo é fundamental para <strong>construir uma base sólida e bem-sucedida</strong> no campo da programação.</p>

  <div class="desafio">
    <h2>Desafio 1 — Dia da Semana</h2>
    <div class="enunciado">
      Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
    </div>
    <pre>
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
    </pre>
    <div class="resposta">🟢 Exemplo de resposta: Se o usuário digitar <strong>"Domingo"</strong>, verá o alerta <strong>"Bom fim de semana!"</strong></div>
  </div>

  <div class="desafio">
    <h2>Desafio 2 — Número Positivo ou Negativo</h2>
    <div class="enunciado">
      Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
    </div>
    <pre>
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}
    </pre>
    <div class="resposta">🟢 Exemplo de resposta: Se o usuário digitar <strong>"-5"</strong>, verá o alerta <strong>"Número negativo!"</strong></div>
  </div>

  <div class="desafio">
    <h2>Desafio 3 — Sistema de Pontuação</h2>
    <div class="enunciado">
      Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
    </div>
    <pre>
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}
    </pre>
    <div class="resposta">🟢 Exemplo de resposta: No console será exibido <strong>"Parabéns, você venceu!"</strong></div>
  </div>

  <div class="desafio">
    <h2>Desafio 4 — Saldo da Conta</h2>
    <div class="enunciado">
      Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
    </div>
    <pre>
let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);
    </pre>
    <div class="resposta">🟢 Exemplo de resposta: O alerta exibirá <strong>"Seu saldo é de R$500."</strong></div>
  </div>

  <div class="desafio">
    <h2>Desafio 5 — Nome do Usuário</h2>
    <div class="enunciado">
      Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
    </div>
    <pre>
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);
    </pre>
    <div class="resposta">🟢 Exemplo de resposta: Se o usuário digitar <strong>"Lucas"</strong>, verá <strong>"Boas vindas Lucas"</strong></div>
  </div>
</body>
</html>
