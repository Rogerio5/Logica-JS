# Logica-JS

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Desafios de Lógica</title>
</head>
<body>
  <script>
    // 1️⃣ Dia da semana
    let diaDaSemana = prompt('Qual é o dia da semana?');
    if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo') {
      alert('Bom fim de semana!');
    } else {
      alert('Boa semana!');
    }

    // 2️⃣ Número positivo ou negativo
    let numero = Number(prompt('Digite um número positivo ou negativo:'));
    if (numero > 0) {
      alert('Número positivo!');
    } else if (numero < 0) {
      alert('Número negativo!');
    } else {
      alert('Zero não é positivo nem negativo!');
    }

    // 3️⃣ Sistema de pontuação
    let pontuacao = Number(prompt('Digite sua pontuação no jogo:'));
    if (pontuacao >= 100) {
      console.log('Parabéns, você venceu!');
    } else {
      console.log('Tente novamente para ganhar.');
    }

    // 4️⃣ Mensagem com saldo
    let saldoConta = 500; // valor fixo para teste
    alert(`Seu saldo é de R$${saldoConta}.`);

    // 5️⃣ Nome do usuário
    let nome = prompt('Qual o seu nome?');
    alert(`Boas-vindas, ${nome}!`);
  </script>
</body>
</html>
