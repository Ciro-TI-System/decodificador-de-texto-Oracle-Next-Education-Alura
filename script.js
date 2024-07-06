let criptografadoTexto = "";

function validarEntrada() {
  const input = document.getElementById("text-input").value.trim();
  const criptografarBtn = document.getElementById("criptografar-btn");

  if (input === "") {
    document.getElementById("validation-message").textContent =
      "Por favor, digite algum texto.";
    criptografarBtn.disabled = true;
  } else if (/[A-Z!@#$%^&*(),.?":{}|<>]/.test(input)) {
    document.getElementById("validation-message").textContent =
      "Apenas letras minúsculas e números são aceitos.";
    criptografarBtn.disabled = true;
  } else {
    document.getElementById("validation-message").textContent = "";
    criptografarBtn.disabled = false;
  }
}

function criptografar() {
  const input = document.getElementById("text-input").value.trim();
  if (input === "") {
    document.getElementById("validation-message").textContent =
      "Por favor, digite algum texto.";
    return;
  }
  if (/[A-Z!@#$%^&*(),.?":{}|<>]/.test(input)) {
    document.getElementById("validation-message").textContent =
      "Apenas letras minúsculas e números são aceitos.";
    return;
  }

  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += transformar(input[i]);
  }

  criptografadoTexto = output;
  document.getElementById("text-output").value = output;
  document.querySelector(".output-section").style.display = "block"; // Mostra a seção de saída
  document.getElementById("validation-message").textContent = ""; // Limpa a mensagem de validação
}

function descriptografar() {
  const input = document.getElementById("text-input").value.trim();
  if (input === "") {
    alert("Por favor, digite o texto criptografado para descriptografar.");
    return;
  }

  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += reverter(input[i]);
  }

  document.getElementById("text-output").value = output;
}

function transformar(char) {
  const map = {
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
    0: "5",
    1: "6",
    2: "7",
    3: "8",
    4: "9",
    5: "0",
    6: "1",
    7: "2",
    8: "3",
    9: "4",
  };

  return map[char] || char;
}

function reverter(char) {
  const map = {
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    5: "0",
    6: "1",
    7: "2",
    8: "3",
    9: "4",
    0: "5",
    1: "6",
    2: "7",
    3: "8",
    4: "9",
  };

  return map[char] || char;
}

function copiar() {
  const output = document.getElementById("text-output");
  output.select();
  output.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand("copy");
  alert("Texto copiado!");
}

function limpar() {
  document.getElementById("text-input").value = "";
  document.getElementById("text-output").value = "";
  document.querySelector(".input-section").style.display = "block"; // Mostra a seção de entrada
  document.getElementById("validation-message").textContent = ""; // Limpa a mensagem de validação
  document.getElementById("criptografar-btn").disabled = true; // Desabilita o botão de criptografar ao limpar
}
