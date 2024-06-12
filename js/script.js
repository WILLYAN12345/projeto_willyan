var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
event.preventDefault();

  //Chama a function
  multiplicar();

});


//Função somar
  function multiplicar (num1, num2) {
      let produto = num1 * num2;
      if (produto % 2 === 0) {
        return true;
      } else {
        return false;
      }


  // Exemplo de uso
  let numero1 = Number(document.getElementById("primeiro_numero_par"));

  let numero2 = Number(document.getElementById("segundo_numero_par"));

  if (multiplicar(numero1, numero2)) {
      console.log("O produto é par.");
  } else {
      console.log("O produto não é par.");
  }
}
/*
  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let verificar se o primeiro numero é par = Number(document.getElementById("primeiro numero par").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let verificar se o segundo numero é par = Number(document.getElementById("segundo numero par").value);

  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_soma" recebe o valor da soma
  let resultado_soma = primeiro_numero_inteiro + segundo_numero_inteiro;

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("resultado_soma").value = resultado_soma;


}
*/
