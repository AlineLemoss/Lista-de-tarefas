const botaoAdicionar = document.getElementById('adicionar-tarefa');
const campoEntrada = document.getElementById('nova-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

botaoAdicionar.addEventListener('click', function() {
  const novaTarefa = campoEntrada.value;
  if(novaTarefa !== ''){
    
    //CRIANDO UMA NOVA LI
    const itemLista = document.createElement('li');
    
    //CRIANDO LABEL E CHECKBOX NA LISTA
    const tarefaLabel = document.createElement('label');
    tarefaLabel.innerText = novaTarefa;
    const tarefaCheckbox = document.createElement('input');
    tarefaCheckbox.type = 'checkbox';
    tarefaCheckbox.classList.add('checkbox');
    tarefaCheckbox.addEventListener('click', function() {
      if (tarefaCheckbox.checked) {
        tarefaLabel.classList.add('completed');
      } else {
        tarefaLabel.classList.remove('completed');
      }
    });

    //CRIANDO UM BOTÃO DE EXCLUIR
    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('button-lista');
    botaoExcluir.innerText = 'X'; 
    botaoExcluir.addEventListener('click', function() {
      listaTarefas.removeChild(itemLista);
    });

    //itemLista.innerText = novaTarefa;
    itemLista.appendChild(botaoExcluir);
    itemLista.appendChild(tarefaCheckbox);
    itemLista.appendChild(tarefaLabel);
    listaTarefas.appendChild(itemLista);
    campoEntrada.value = '';

    
  }
  
});