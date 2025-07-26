# Logica-JS


<body>
  <!-- Texto introdutório sobre a importância da lógica de programação -->
  <div style="background-color: #fff; padding: 20px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <h2 style="color: #2c3e50;">Resolução dos desafios do curso de lógica de programação</h2>
    <p>Praticar a lógica de programação, incluindo conceitos como <strong>variáveis</strong>, <strong>condicionais (if-else)</strong>, <strong>loops (while)</strong> e <strong>interações com o usuário (alert, prompt)</strong>, é essencial para sua carreira de desenvolvimento de software.</p>
    <p>Esses fundamentos fornecem a base para <em>resolver problemas de forma estruturada</em>, <em>tomar decisões no código</em>, <em>criar iterações controladas</em> e <em>interagir eficazmente com os usuários</em>.</p>
    <p>Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a <strong>criar soluções inovadoras</strong>, <strong>depurar eficientemente</strong> e <strong>manter a qualidade</strong> ao longo do ciclo de vida do software.</p>
    <p>Portanto, investir tempo nesses princípios desde cedo é fundamental para <strong>construir uma base sólida e bem-sucedida</strong> no campo da programação.</p>
  </div>

  <h1>Curso de Lógica de Programação — Desafios 💡</h1>

  <!-- Desafio 1 -->
  <h2>Desafio 1: Dia da Semana</h2>
  <p>Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".</p>
  <button onclick="desafio1()">Executar Desafio 1</button>

  <!-- Desafio 2 -->
  <h2>Desafio 2: Número Positivo ou Negativo</h2>
  <p>Verifique se um número digitado pelo usuário é positivo ou negativo e mostre um alerta informando.</p>
  <button onclick="desafio2()">Executar Desafio 2</button>

  <!-- Desafio 3 -->
  <h2>Desafio 3: Sistema de Pontuação</h2>
  <p>Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" no console. Caso contrário, mostre "Tente novamente para ganhar."</p>
  <button onclick="desafio3()">Executar Desafio 3</button>

  <!-- Desafio 4 -->
  <h2>Desafio 4: Saldo da Conta</h2>
  <p>Crie uma mensagem que informa o usuário sobre o saldo da conta, usando template string.</p>
  <button onclick="desafio4()">Executar Desafio 4</button>

  <!-- Desafio 5 -->
  <h2>Desafio 5: Nome do Usuário</h2>
  <p>Peça ao usuário para inserir seu nome usando <code>prompt</code> e exiba uma mensagem de boas-vindas.</p>
  <button onclick="desafio5()">Executar Desafio 5</button>

  <script>
    function desafio1() {
      let diaDaSemana = prompt('Qual é o dia da semana?');
      if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo') {
        alert('Bom fim de semana!');
      } else {
        alert('Boa semana!');
      }
    }

    function desafio2() {
      let numero = Number(prompt('Digite um número positivo ou negativo'));
      if (numero > 0) {
        alert('Número positivo!');
      } else if (numero < 0) {
        alert('Número negativo!');
      } else {
        alert('Zero não é positivo nem negativo!');
      }
    }

    function desafio3() {
      let pontuacao = Number(prompt('Digite sua pontuação:'));
      if (pontuacao >= 100) {
        console.log('Parabéns, você venceu!');
      } else {
        console.log('Tente novamente para ganhar.');
      }
    }

    function desafio4() {
      let saldoConta = 500;
      alert(`Seu saldo é de R$${saldoConta}.`);
    }

    function desafio5() {
      let nome = prompt('Qual o seu nome?');
      alert(`Boas-vindas, ${nome}!`);
    }
  </script>
</body>
