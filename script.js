const textoInput = document.getElementById("texto");
const btCriptografar = document.getElementById("bt-criptografar");
const btDescriptografar = document.getElementById("bt-descriptografar");
const btCopiar = document.getElementById("bt-copiar");
const resultadoContainer = document.getElementById("resultado-container");
const textoResultadoContainer = document.getElementById(
  "texto-resultado-container"
);
const imagemIlustrativa = document.getElementById("imagem-ilustrativa");
const resultadoTitulo = document.getElementById("resultado-titulo");
const resultadoTexto = document.getElementById("resultado-texto");

// Evento para monitorar mudanças de entrada no textoInput
textoInput.addEventListener("input", function () {
  const texto = textoInput.value;
  const hasText = texto.length > 0;

  // Habilita ou desabilita os botões de criptografar e descriptografar
  btCriptografar.disabled = !hasText;
  btDescriptografar.disabled = !hasText;
});

// Evento para o botão de criptografar
btCriptografar.addEventListener("click", function () {
  let texto = textoInput.value;
  // Verifica se o texto é válido antes de criptografar
  if (validarTexto(texto)) {
    let textoCriptografado = criptografar(texto);
    exibirResultado(textoCriptografado);
  } else {
    alert("Erro: O texto deve conter apenas letras minúsculas e sem acento.");
  }
});

// Evento para o botão de descriptografar
btDescriptografar.addEventListener("click", function () {
  let texto = textoInput.value;
  // Verifica se o texto é válido antes de descriptografar
  if (validarTexto(texto)) {
    let textoDescriptografado = descriptografar(texto);
    exibirResultado(textoDescriptografado);
  } else {
    alert("Erro: O texto deve conter apenas letras minúsculas e sem acento.");
  }
});

// Evento para o botão de copiar
btCopiar.addEventListener("click", function () {
  let resultadoTextoContent = resultadoTexto.textContent;

  // Copia o texto resultante para a área de transferência
  copiarParaAreaDeTransferencia(resultadoTextoContent);
});

// Função para validar se o texto contém apenas letras minúsculas e sem acento
function validarTexto(texto) {
  const regex = /^[a-z ]+$/;
  return regex.test(texto);
}

// Função para criptografar o texto conforme regras específicas
function criptografar(texto) {
  let criptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return criptografado;
}

// Função para descriptografar o texto criptografado
function descriptografar(texto) {
  let descriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return descriptografado;
}

// Função para exibir o resultado na interface
function exibirResultado(texto) {
  // Oculta a imagem ilustrativa e o título do resultado
  imagemIlustrativa.style.display = "none";
  resultadoTitulo.style.display = "none";

  // Exibe o texto resultante no elemento resultadoTexto
  resultadoTexto.textContent = texto;

  // Exibe o botão de copiar
  btCopiar.style.display = "block";
}

// Função para copiar o texto para a área de transferência
function copiarParaAreaDeTransferencia(texto) {
  navigator.clipboard.writeText(texto).then(
    function () {
      alert("Texto copiado para a área de transferência");
    },
    function (err) {
      console.error("Erro ao copiar texto: ", err);
    }
  );
}
