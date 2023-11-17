var participantes = [
  "Arthur",
  "James",
  "Murilo",
  "Andre",
  "Hiro",
  "Luiz",
  "Robert",
  "Marcelo",
  "Igor",
  "Fred",
  "Vitor",
  "Joaquim",
  "João",
  "Lucas"
];

var jogadores = participantes.map(function (nome) {
  return {
    nome: nome,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
});

var elementoTabela = document.getElementById("tabelaJogadores");
var elementoTabelaEm = document.getElementById("tabelaTorneio");
var combateList = {};

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  jogadores.forEach(function (jogador) {
    elementoTabela.innerHTML += `
      <tr>
        <td>${jogador.nome}</td>
        <td>${jogador.vitoria}</td>
        <td>${jogador.empate}</td>
        <td>${jogador.derrota}</td>
        <td>${jogador.pontos}</td>
      </tr>
    `;
  });
}

function criarBatalha() {
  let indice1 = Math.floor(Math.random() * participantes.length);
  let indice2 = indiceAleatorioExclusivo(participantes.length, indice1);

  let nome1 = participantes[indice1];
  let nome2 = participantes[indice2];

  let indice3;
  if (Math.random() < 0.5) {
    indice3 = indice1;
  } else {
    indice3 = indice2;
  }

  let nome3 = participantes[indice3];

  combateList = {
    nome1: nome1,
    nome2: nome2,
    nome3: nome3
  };

  exibirNaTelaEmbate();
}

function exibirNaTelaEmbate() {
  elementoTabelaEm.innerHTML = `      
    <tr>
      <td>${combateList.nome1}</td>
      <td><img src="https://www.pngall.com/wp-content/uploads/5/Combat-Versus-PNG-Image-File.png" width="50" height="50"></td>
      <td>${combateList.nome2}</td>
      <td>${combateList.nome3}</td>
      <td><button onClick="proximaLuta()">Próxima Luta</button></td>
    </tr>`;
}

function adicionarVitoria(nome) {
  var jogador = jogadores.find(function (j) {
    return j.nome === nome;
  });
  jogador.vitoria++;
  jogador.pontos += 3;
  exibirNaTela();
}

function adicionarEmpate(nome) {
  var jogador = jogadores.find(function (j) {
    return j.nome === nome;
  });
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela();
}

function adicionarDerrota(nome) {
  var jogador = jogadores.find(function (j) {
    return j.nome === nome;
  });
  jogador.derrota++;
  exibirNaTela();
}

function proximaLuta() {
  var vencedor = combateList.nome3;

  adicionarVitoria(vencedor);
  adicionarDerrota(
    vencedor === combateList.nome1 ? combateList.nome2 : combateList.nome1
  );

  criarBatalha();
}

function indiceAleatorioExclusivo(max, indiceExcluido) {
  let indice = Math.floor(Math.random() * max);
  while (indice === indiceExcluido) {
    indice = Math.floor(Math.random() * max);
  }
  return indice;
}

// Criar a batalha inicial
criarBatalha();
