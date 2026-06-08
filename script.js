function adicionarIdeia() {
    // Captura o input e o valor digitado
    const input = document.getElementById('ideiaInput');
    const textoIdeia = input.value.trim();

    // Validação básica para não enviar texto vazio
    if (textoIdeia === "") {
        alert("Por favor, digite uma ideia antes de enviar!");
        return;
    }

    // Seleciona a lista onde a ideia vai entrar
    const lista = document.getElementById('listaIdeias');

    // Cria um novo elemento de lista (li)
    const novoItem = document.createElement('li');
    novoItem.textContent = `💡 ${textoIdeia}`;

    // Adiciona o novo item à lista
    lista.appendChild(novoItem);

    // Limpa o campo de texto para a próxima ideia
    input.value = "";
}