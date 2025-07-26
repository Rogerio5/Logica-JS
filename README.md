# <body>
  <h1>Resolução dos Desafios do Curso de Lógica de Programação 💡</h1>

  <p>Praticar a lógica de programação, incluindo conceitos como <strong>variáveis</strong>, <strong>condicionais (if-else)</strong>, <strong>loops (while)</strong> e <strong>interações com o usuário (alert, prompt)</strong>, é essencial para sua carreira de desenvolvimento de software.</p>
  <p>Esses fundamentos fornecem a base para <em>resolver problemas de forma estruturada</em>, <em>tomar decisões no código</em>, <em>criar iterações controladas</em> e <em>interagir eficazmente com os usuários</em>.</p>
  <p>Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a <strong>criar soluções inovadoras</strong>, <strong>depurar eficientemente</strong> e <strong>manter a qualidade</strong> ao longo do ciclo de vida do software.</p>
  <p>Portanto, investir tempo nesses princípios desde cedo é fundamental para <strong>construir uma base sólida e bem-sucedida</strong> no campo da programação.</p>

  <div class="desafio">
    <h2>Desafio 1 — Dia da Semana</h2>
    <div class="enunciado">
      1) Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
    </div>
    <pre><code class="language-javascript">
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
    </code></pre>
    <div class="resposta">🟢 Exemplo: Se o usuário digitar <strong>"Domingo"</strong>, verá o alerta <strong>"Bom fim de semana!"</strong></div>
  </div>

  <div class="desafio">
    <h2>Desafio 2 — Número Positivo ou Negativo</h2>
    <div class="enunciado">
      2) Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
    </div>
    <pre><code class="language-javascript">
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}
    </code></pre>
    <div class="resposta">🟢 Exemplo: Se o usuário digitar <strong>"-5"</strong>, verá o alerta <strong>"Número negativo!"</strong></div>
  </div>

  <div class="desafio">
    <h2>Desafio 3 — Sistema de Pontuação</h2>
    <div class="enunciado">
      3) Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
    </div>
    <pre><code class="language-javascript">
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}
    </code></pre>
    <div class="resposta">🟢 Exemplo: No console será exibido <strong>"Parabéns, você venceu!"</strong></div>
  </div>

  <div class="desafio">
    <h2>Desafio 4 — Saldo da Conta</h2>
    <div class="enunciado">
      4) Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
    </div>
    <pre><code class="language-javascript">
let saldoConta = 500;
alert(`Seu saldo é de R$${saldoConta}.`);
    </code></pre>
    <div class="resposta">🟢 Exemplo: O alerta exibirá <strong>"Seu saldo é de R$500."</strong></div>
  </div>

  <div class="desafio">
    <h2>Desafio 5 — Nome do Usuário</h2>
    <div class="enunciado">
      5) Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
    </div>
    <pre><code class="language-javascript">
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);
    </code></pre>
    <div class="resposta">🟢 Exemplo: Se o usuário digitar <strong>"Lucas"</strong>, verá <strong>"Boas vindas Lucas"</strong></div>
  </div>
</body>
</html>
