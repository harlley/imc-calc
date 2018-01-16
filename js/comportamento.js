function $(elemento) {
  return document.querySelector(elemento);
}

function mostrarResultado() {
  $(".resultado").classList.remove("escondido");
  $(".botaoIMC").classList.add("escondido");  
}

function mostrarBotaoIMC() {
  $(".botaoIMC").classList.remove("escondido");  
  $(".resultado").classList.add("escondido");
}


$(".botaoIMC").addEventListener("click", () => {
  const altura = $("#altura");
  const peso = $("#peso");
  
  if (altura.value == "") {
    altura.focus();
  }
  else if (peso.value == "") {
    peso.focus();
  }
  else {
    calcularResultado(altura, peso);
    mostrarResultado();
  }
  
});

$(".voltar").addEventListener("click", () => {
  mostrarBotaoIMC();
});

function calcularResultado(altura, peso) {
  const imc = calcularIMC( altura.value, peso.value );
  $(".imcValor").innerHTML = imc.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
  $(".imcDesc").innerHTML = descricaoIMC(imc);
}

function calcularIMC(altura, peso) {
  return peso / (altura * altura);
}

function descricaoIMC(imc) {
  if (imc < 16) {
    return "Magreza Grave";
  }
  else if (imc >= 16 && imc < 17 ) {
    return "Magreza Moderada";
  }
  else if (imc >= 17 && imc < 18.5) {
    return 'Magreza Leve';
  }
  else if (imc >= 18.5 && imc < 25) {
    return 'Saudável';
  }
  else if (imc >= 25 && imc < 30) {
    return 'Sobrepeso';
  }
  else if (imc >= 30 && imc < 35) {
    return 'Obesidade';
  }
  else if (imc >= 35 && imc < 40) {
    return 'Obesidade Severa';
  }
  else {
    return 'Obesidade Mórbida';
  }  
   
}
