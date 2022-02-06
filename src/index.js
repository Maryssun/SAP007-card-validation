import validator from './validator.js';

function pagar() {
    const inputNumero = document.getElementById('numero-cartao'); //Aqui recuperei o input
    const spanErroNumeroCartao = document.getElementById('msg-erro-num-cartao');

    if (inputNumero.value.length < 13 || inputNumero.value.length > 19) {
        inputNumero.style.borderColor = "#ff0000";
        spanErroNumeroCartao.innerHTML = "Quantidade de dígitos inválida";
    }
    else {
        let ehValido = validator.isValid(inputNumero.value);
        if (ehValido === true) {
            inputNumero.style.borderColor = "#56e827"; //Pega meu input numero, acessa a propriedade style e muda a cor da minha borda
            spanErroNumeroCartao.innerHTML = "";
        }
        else {
            inputNumero.style.borderColor = "#ff0000";
            spanErroNumeroCartao.innerHTML = "Número de cartão inválido";
        }
    }

}

var inputPagar = document.getElementById("pagar");
inputPagar.addEventListener("click", pagar); 