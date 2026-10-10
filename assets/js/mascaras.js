/* Mascaras de entrada para o formulario de cadastro.
   JavaScript puro, sem dependencias. As validacoes de formato continuam
   garantidas pelos atributos "pattern" do HTML mesmo se este arquivo nao
   for carregado. */

(function () {
  "use strict";

  function somenteDigitos(valor) {
    return valor.replace(/\D/g, "");
  }

  function aplicarMascaraCPF(valor) {
    var digitos = somenteDigitos(valor).slice(0, 11);
    digitos = digitos.replace(/(\d{3})(\d)/, "$1.$2");
    digitos = digitos.replace(/(\d{3})(\d)/, "$1.$2");
    digitos = digitos.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return digitos;
  }

  function aplicarMascaraTelefone(valor) {
    var digitos = somenteDigitos(valor).slice(0, 11);
    if (digitos.length <= 10) {
      digitos = digitos.replace(/(\d{2})(\d)/, "($1) $2");
      digitos = digitos.replace(/(\d{4})(\d{1,4})$/, "$1-$2");
    } else {
      digitos = digitos.replace(/(\d{2})(\d)/, "($1) $2");
      digitos = digitos.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
    }
    return digitos;
  }

  function aplicarMascaraCEP(valor) {
    var digitos = somenteDigitos(valor).slice(0, 8);
    digitos = digitos.replace(/(\d{5})(\d{1,3})$/, "$1-$2");
    return digitos;
  }

  function vincularMascara(seletor, funcaoMascara) {
    var campo = document.querySelector(seletor);
    if (!campo) {
      return;
    }
    campo.addEventListener("input", function (evento) {
      var posicaoCursor = evento.target.selectionStart;
      var tamanhoAntes = evento.target.value.length;
      evento.target.value = funcaoMascara(evento.target.value);
      var tamanhoDepois = evento.target.value.length;
      var diferenca = tamanhoDepois - tamanhoAntes;
      evento.target.setSelectionRange(posicaoCursor + diferenca, posicaoCursor + diferenca);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    vincularMascara("#cpf", aplicarMascaraCPF);
    vincularMascara("#telefone", aplicarMascaraTelefone);
    vincularMascara("#cep", aplicarMascaraCEP);

    var mensagem = document.querySelector("#mensagem");
    var contador = document.querySelector("#contador-mensagem");
    if (mensagem && contador) {
      var limite = parseInt(mensagem.getAttribute("maxlength"), 10) || 0;
      var atualizarContador = function () {
        var restante = limite - mensagem.value.length;
        contador.textContent = restante + " caracteres restantes";
      };
      mensagem.addEventListener("input", atualizarContador);
      atualizarContador();
    }
  });
})();
