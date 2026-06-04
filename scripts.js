const btnMostrar = document.getElementById("botaoM");
    



function validaSenha () {
    let senha = document.getElementById("senha").value;
    let mensagemElement = document.getElementById("mensagem");
   
    
    if (senha.length < 8) {
        mensagemElement.textContent = "A senha deve ter pelo menos 8 caracteres";
        mensagemElement.style.color = "red";
    } else {
        mensagemElement.textContent = "A senha válida";
        mensagemElement.style.color = "green";
    }
}

btnMostrar.addEventListener("click", function () {
    const campoSenha = document.getElementById("senha");

    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        btnMostrar.textContent = "Ocultar";
    } else {
        campoSenha.type = "password";
        btnMostrar.textContent = "Mostrar";
    }
});

function souestudante() {
    const checkbox = document.getElementById("souestudante");
    const formulario = document.getElementById("formulario");

    if (checkbox.checked) {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
}


      
