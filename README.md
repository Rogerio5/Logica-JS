<body>
  <h1>Resolução dos Desafios do Curso de Lógica de Programação 💡</h1>

  <p>Praticar a lógica de programação, incluindo conceitos como <strong>variáveis</strong>, <strong>condicionais (if-else)</strong>, <strong>loops (while)</strong> e <strong>interações com o usuário (alert, prompt)</strong>, é essencial para sua carreira de desenvolvimento de software.</p>
  <p>Esses fundamentos fornecem a base para <em>resolver problemas de forma estruturada</em>, <em>tomar decisões no código</em>, <em>criar iterações controladas</em> e <em>interagir eficazmente com os usuários</em>.</p>
  <p>Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a <strong>criar soluções inovadoras</strong>, <strong>depurar eficientemente</strong> e <strong>manter a qualidade</strong> ao longo do ciclo de vida do software.</p>
  <p>Portanto, investir tempo nesses princípios desde cedo é fundamental para <strong>construir uma base sólida e bem-sucedida</strong> no campo da programação.</p>

  <!-- Desafio 1 -->
  <h2>Desafio 1 — Dia da Semana</h2>
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

  <!-- Desafio 2 -->
  <h2>Desafio 2 — Número Positivo ou Negativo</h2>
  <pre>
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}
  </pre>
  <div class="resposta">🟢 Exemplo de resposta: Se o usuário digitar <strong>"-5"</strong>, verá o alerta <strong>"Número negativo!"</strong></div>

  <!-- Desafio 3 -->
  <h2>Desafio 3 — Sistema de Pontuação</h2>
  <pre>
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}
  </pre>
  <div class="resposta">🟢 Exemplo de resposta: No console será exibido <strong>"Parabéns, você venceu!"</strong></div>

  <!-- Desafio 4 -->
  <h2>Desafio 4 — Saldo da Conta</h2>
  <pre>
let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);
  </pre>
  <div class="resposta">🟢 Exemplo de resposta: O alerta exibirá <strong>"Seu saldo é de R$500."</strong></div>

  <!-- Desafio 5 -->
  <h2>Desafio 5 — Nome do Usuário</h2>
  <pre>
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);
  </pre>
  <div class="resposta">🟢 Exemplo de resposta: Se o usuário digitar <strong>"Lucas"</strong>, verá <strong>"Boas vindas Lucas"</strong></div>
</body>
</html>
