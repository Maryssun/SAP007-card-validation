function ehValido(creditCardNumber) {
  let numeroCartao = creditCardNumber.split('').reverse();  // split = tranforma string em array 

  let soma = 0; 
  for (let i = 0; i < numeroCartao.length; i++) {
    if (i % 2 === 1) {
      const dobro = numeroCartao[i] * 2;
      if (dobro > 9) {
        soma = soma + (dobro - 9);
      }
      else {
        soma = soma + dobro;
      }
    }
    else {
      soma = soma + parseInt(numeroCartao[i]); // transforma em numero porque é soma 
    }
  }
  
  if (soma % 10 === 0) {
    return true;
  }
  else {
    return false;
  }

}

function mascarar(creditCardNumber) {
  if(creditCardNumber.length <= 4) {
      return creditCardNumber;
  }

  var arr = Array(creditCardNumber.length - 4).fill('#'); // fill preenche o array com algo ()
  var mascara = arr.join('') + creditCardNumber.slice(-4);
  return mascara;
}

const validator = {
  isValid: ehValido,
  maskify: mascarar
};

export default validator;