# Logica-JS


<body>
  <h1>Desafios de Lógica — Interativos 💡</h1>

  <div class="desafio">
    <p><strong>Desafio 1:</strong> Qual é o dia da semana?</p>
    <button onclick="verificarDiaDaSemana()">Responder</button>
  </div>

  <div class="desafio">
    <p><strong>Desafio 2:</strong> Digite um número positivo ou negativo.</p>
    <button onclick="verificarNumero()">Responder</button>
  </div>

  <div class="desafio">
    <p><strong>Desafio 3:</strong> Digite sua pontuação no jogo.</p>
    <button onclick="verificarPontuacao()">Responder</button>
  </div>

  <div class="desafio">
    <p><strong>Desafio 4:</strong> Seu saldo será mostrado com valor fixo.</p>
    <button onclick="mostrarSaldo()">Mostrar saldo</button>
  </div>

  <div class="desafio">
    <p><strong>Desafio 5:</strong> Qual é o seu nome?</p>
    <button onclick="boasVindas()">Responder</button>
  </div>

  <script>
    function verificarDiaDaSemana() {
      let dia = prompt('Qual é o dia da semana?');
      if (dia === 'Sábado' || dia === 'Domingo') {
        alert('Bom fim de semana!');
      } else {
        alert('Boa semana!');
      }
    }

    function verificarNumero() {
      let numero = Number(prompt('Digite um número positivo ou negativo:'));
      if (numero > 0) {
        alert('Número positivo!');
      } else if (numero < 0) {
        alert('Número negativo!');
      } else {
        alert('Zero não é positivo nem negativo!');
      }
    }

    function verificarPontuacao() {
      let pontuacao = Number(prompt('Digite sua pontuação no jogo:'));
      if (pontuacao >= 100) {
        alert('Parabéns, você venceu!');
      } else {
        alert('Tente novamente para ganhar.');
      }
    }

    function mostrarSaldo() {
      let saldo = 500; // Valor fixo
      alert(`Seu saldo é de R$${saldo}.`);
    }

    function boasVindas() {
      let nome = prompt('Qual é o seu nome?');
      alert(`Boas-vindas, ${nome}!`);
    }
  </script>
</body>
</html>

