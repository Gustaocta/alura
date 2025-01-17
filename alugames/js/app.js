function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");
  let nomeJogo = gameClicado.querySelector(".dashboard__item__name");
  let jogosAlugados = 0;

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    if (
      confirm(`Você deseja realmente devolver o jogo ${nomeJogo.textContent}?`)
    ) {
      imagem.classList.remove("dashboard__item__img--rented");
      botao.classList.remove("dashboard__item__button--return");
      botao.textContent = "Alugar";
      jogosAlugados--;
    }
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
    jogosAlugados++;
  }

  quantidadeDeJogos();
}

function quantidadeDeJogos() {
  console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

document.addEventListener("DOMContentLoaded", function () {
  jogosAlugados = document.querySelectorAll(
    ".dashboard__item__img--rented"
  ).length;
  quantidadeDeJogos();
});
