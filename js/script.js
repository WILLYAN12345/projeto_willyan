var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função divisao
  divisao();

});


//Função divisao
function divisao() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeira_nota = Number(document.getElementById("primeira_nota").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let segunda_nota = Number(document.getElementById("segunda_nota").value);

   //Captura o que está dentro do terceiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let terceira_nota = Number(document.getElementById("terceira_nota").value);

   //Captura o que está dentro do quarto input no formulário
  //Number - Transforma o texto capturado em Numero
  let quarta_nota = Number(document.getElementById("quarta_nota").value);

  //Realiza a divisao do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_divisao" recebe o valor da divisao
  let resultado_divisao = ( primeira_nota + segunda_nota + terceira_nota + quarta_nota ) / 4;

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_divisao"
  document.getElementById("resultado_divisao").value = resultado_divisao;


}
