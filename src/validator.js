function isValid(creditCardNumber) {
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

const validator = {
  isValid: isValid
};

export default validator;