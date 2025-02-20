let inputNome = document.querySelector(".nome");
let inputIdade = document.querySelector(".idade");
let botaoSalvar = document.querySelector(".botaoSalvar");

botaoSalvar.addEventListener("mouseup", () => {
  // Atualiza o inputRadio sempre que o botão for clicado
  inputRadio = document.querySelector(".inputRadio:checked");
  if (inputRadio) {
    let obj = {
      inputNome: inputNome.value,
      inputIdade: inputIdade.value,
      inputRadio: inputRadio.value,
    };

    alert(JSON.stringify(obj, null, 2)); // O `null, 2` deixa o JSON formatado para melhor visualização
  } else {
    console.log("Nenhum rádio selecionado.");
  }
});
