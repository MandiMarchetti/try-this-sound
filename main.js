function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador]; //const criada para otimizar o acesso em outras chamadas!
  const instrumento = tecla.classList[1]; //o numero  é para chamar a segunda classe do botão (que seria tecla_pom, tecla_clap, etc)

  const idAudio = `#som_${instrumento}`;

  //   console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  contador = contador + 1;
  //   console.log(contador);
}
