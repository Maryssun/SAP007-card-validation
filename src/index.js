function validar() {
  var inputNumeroCartao = document.getElementById("numero-cartao"); // Pega o elemento input pelo id numero-cartao
  var numeroCartao = inputNumeroCartao.value; // A variável número cartão é igual a propriedade value do input recuperado na linha de cima

  inputNumeroCartao.value = numeroCartao.slice(0, 16); // Pega o valor do meu input e corta no 16, quando tiver 17 ou mais, corta. (Para no 16)
  if (numeroCartao.length === 16) {
    // Quando o valor tiver tamanho 16 (quantidade de caracteres) ele entra no bloco do if
    console.log("validar cartao", numeroCartao);

    var array = numeroCartao.split(""); //Converte o numero do cartão "string" em array [1, 2, 3, 4,...]
    console.log( array );
  }
}
