let contador = 0;

function adiconarTarefa() {

    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById("mensagem");
    const listaTarefas = document.getElementById("Lista_tarefas");

    let tarefa = inputElement.value;
    let mensagem, cor;

    if (tarefaValida(tarefa)) {

        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;

        // Adiciona somente a tarefa
        listaTarefas.appendChild(novaTarefa);

        contador++;
        mensagem = "Adicionado com sucesso (" + contador + ")";
        cor = "green";
    }

    else {
        mensagem = "Tarefa inválida, redigite.";
        cor = "red";
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;

    inputElement.value = "";
    inputElement.focus();
}

function tarefaValida(tarefa) {
    return tarefa.trim().length >= 5;
}

function limparLista() {

    const listaTarefas = document.getElementById("Lista_tarefas");
    const mensagemElement = document.getElementById("mensagem");

    listaTarefas.innerHTML = "";

    contador = 0;

    mensagemElement.textContent = "Lista limpa com sucesso!";
    mensagemElement.style.color = "blue";
}