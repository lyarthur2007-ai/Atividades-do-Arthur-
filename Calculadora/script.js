let primeiroNumero = null;
let operacao = null;

const display = document.getElementById("display");
const botoes = document.querySelectorAll(".btn[data-value]");

// Botões numéricos
botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        // Evita mais de um ponto decimal
        if (
            botao.dataset.value === "." &&
            display.value.includes(".")
        ) {
            return;
        }

        if (display.value === "0") {
            display.value = botao.dataset.value;
        } else {
            display.value += botao.dataset.value;
        }
    });
});

// Soma
document.getElementById("add").addEventListener("click", () => {
    primeiroNumero = Number(display.value);
    operacao = "+";
    display.value = "0";
});

// Subtração
document.getElementById("sub").addEventListener("click", () => {
    primeiroNumero = Number(display.value);
    operacao = "-";
    display.value = "0";
});

// Multiplicação
document.getElementById("mult").addEventListener("click", () => {
    primeiroNumero = Number(display.value);
    operacao = "*";
    display.value = "0";
});

// Divisão
document.getElementById("div").addEventListener("click", () => {
    primeiroNumero = Number(display.value);
    operacao = "/";
    display.value = "0";
});

// Limpar
document.getElementById("limpar").addEventListener("click", () => {
    primeiroNumero = null;
    operacao = null;
    display.value = "0";
});

// Calcular resultado
document.getElementById("calcular").addEventListener("click", () => {

    let segundoNumero = Number(display.value);
    let resultado;

    if (operacao === "+") {
        resultado = primeiroNumero + segundoNumero;
    }
    else if (operacao === "-") {
        resultado = primeiroNumero - segundoNumero;
    }
    else if (operacao === "*") {
        resultado = primeiroNumero * segundoNumero;
    }
    else if (operacao === "/") {

        if (segundoNumero === 0) {
            display.value = "Erro";
            return;
        }

        resultado = primeiroNumero / segundoNumero;
    }

    display.value = resultado;

    // Permite continuar calculando
    primeiroNumero = resultado;
});