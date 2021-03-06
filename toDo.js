var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tarefas = JSON.parse(localStorage.getItem('Lista_Tarefas')) || [];



function mostrarTarefas(){
    // definindo como vazio o array de tarefas 
    listElement.innerHTML = '';
    
    for (tarefa of tarefas){
        // criando uma lista 
        var tarefaElement = document.createElement('li');

        // criando um texto com os valores do array
        var tarefaText = document.createTextNode(tarefa);

        // criando um botão para excluir e seu texto
        var buttonExcluirElement = document.createElement('button');
        var textoButtonExcluir = document.createTextNode('Excluir');
 
        // atribuindo a posição do array a variavel 'posicao' e 
        // adicionando o atributo 'onclick' e a função de excluir a ela 
        // utilizando como parametro a variavel 'posicao'
        var posicao = tarefas.indexOf(tarefa);
        buttonExcluirElement.setAttribute('onclick', 'excluirTarefa('+ posicao +')');

        // criando um botão para editar uma tarefa 
        // var buttonEditarElement = document.createElement('button');
        // var textoButtonEditar = document.createTextNode('Editar');
        // buttonEditarElement.setAttribute('onclick', 'editarTarefa(' + posicao +')' );
       
        // 
        tarefaElement.appendChild(tarefaText);
        listElement.appendChild(tarefaElement);
        tarefaElement.appendChild(buttonExcluirElement);
        buttonExcluirElement.appendChild(textoButtonExcluir);
        
        // tarefaElement.appendChild(buttonEditarElement);
        // buttonExcluirElement.appendChild(textoButtonEditar);
        
    }
}

mostrarTarefas();

function adicionarTarefa(){
    //agregando o valor do input a uma variavel
    var tarefaText = inputElement.value;
    
    //inserindo o valor do input no array de tarefas
    tarefas.push(tarefaText);

    //limpando o input 
    inputElement.value = '';
    
    // Renderizando a tabela novamente 
    mostrarTarefas();
    salvarStorage()
}

  // adicionando a função de adicionar tarefas ao botão 
  buttonElement.onclick = adicionarTarefa;
 

function salvarStorage(){
    localStorage.setItem('Lista_Tarefas', JSON.stringify(tarefas));
}

function excluirTarefa(posicao){
   tarefas.splice(posicao, 1);
   mostrarTarefas();
   salvarStorage()
}

function editarTarefa(posicao){
    salvarStorage()
}