/*"tarefas": [
    {
      "nome": "estudar cálculo",
      "dia": "13/12",
      "prazo": "14/12/2022",
      "faltam": "",
      "descricao": "estudar para a prova de cálculo",
      "color": "azul"
    }
  ]*/
//script - leticia

// teste 
let listaTarefas = JSON.parse(localStorage.getItem("dbTasks"));
for (let i = 0; i < listaTarefas.tarefas.length; i++) {

console.log(JSON.parse(localStorage.getItem("dbTasks")).tarefas[i].dia);
}

// Define o título da parte de tarefas de acordo com o dia atual

var dia = new Date().getDate();
var mes = new Date().getMonth() + 1;

const listaTarefasMock = {
    "tarefas": [
      {
        "nome": "",
        "dia": "",
        "prazo": "",
        "faltam": "",
        "descricao": "",
        "color": ""
      }
    ]
  }

function imprimeTarefas(){
    let strHtml = '';
    let listaTarefas = JSON.parse(localStorage.getItem("dbTasks"));
    // alterar - listaTarefas.tarefas.length
    for (let i = 0; i < listaTarefas.tarefas.length; i++) {
        if((JSON.parse(localStorage.getItem("dbTasks")).tarefas[i].dia) == (dia + "/" + mes)){
        strHtml += ` <dd>
                    <span>&#128151;</span>
                    <ul>
                        <li>Nome da tarefa: ${listaTarefas.tarefas[i].nome}</li>
                        <li>Dia: ${listaTarefas.tarefas[i].dia}</li> 
                        <li>Prazo: ${listaTarefas.tarefas[i].prazo.split('-').reverse().join('/') }</li> 
                        <li>Objetivo: ${listaTarefas.tarefas[i].descricao}</li>
                        </ul> 
                </dd>`//atualizar prazo
} 
    }
    document.getElementById('tela').innerHTML = strHtml;
}

window.onload = function (){
    imprimeTarefas();
}