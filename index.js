import validator from './validator.js';

function pagar() {
    const inputNumero = document.getElementById('numero-cartao'); //Aqui recuperei o input
    const spanMsgNumeroCartao = document.getElementById('msg-erro-num-cartao');

    if (inputNumero.value.length < 13 || inputNumero.value.length > 19) {
        inputNumero.style.borderColor = "#ff0000";
        spanMsgNumeroCartao.style.color = "#ff0000";
        spanMsgNumeroCartao.innerHTML = "Quantidade de dígitos inválida " + validator.maskify(inputNumero.value);
    }
    else {
        const ehValido = validator.isValid(inputNumero.value);
        if (ehValido === true) {
            inputNumero.style.borderColor = "#0e8916";
            spanMsgNumeroCartao.style.color = "#0e8916";
            spanMsgNumeroCartao.innerHTML = "Cartão " + validator.maskify(inputNumero.value) + " é válido";
        }
        else {
            inputNumero.style.borderColor = "#ff0000";
            spanMsgNumeroCartao.style.color = "#ff0000";
            spanMsgNumeroCartao.innerHTML = "Número de cartão inválido " + validator.maskify(inputNumero.value);
        }
    }

}

const inputPagar = document.getElementById("pagar");
inputPagar.addEventListener("click", pagar);

// function mascarar() {
//     const inputNumero = document.getElementById('numero-cartao');
//     if (numeroDoCartao.length <= 5) {
//         numeroDoCartao = inputNumero.value;
//     }
//     else {
//         numeroDoCartao = numeroDoCartao.slice(0, numeroDoCartao.length - 4) + inputNumero.value.slice(-5);
//     }
//     console.log(numeroDoCartao);
//     inputNumero.value = validator.maskify(inputNumero.value);
// }


// const inputNumero = document.getElementById('numero-cartao');
// inputNumero.addEventListener('input', mascarar);