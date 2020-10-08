let app = angular.module("tarefas", []);
    app.controller("tarefasController", tarefasController);

function tarefasController($scope) {
    var minhasTarefas = $scope;
    minhasTarefas.lista = [{texto:"Primeiro item", feito: false},
                           {texto:"Segundo item", feito: false}];

    minhasTarefas.restantes = function() {
        var contador = 0;
        angular.forEach(minhasTarefas.lista, function(tarefa){
            contador += tarefa.feito ? 0 : 1
        });
        return contador;
    };

    minhasTarefas.adicionar = function() {
        minhasTarefas.lista.push({texto: minhasTarefas.novaTarefa, feito: false});
        minhasTarefas.novaTarefa = "";
    }

    minhasTarefas.arquivar = function() {
        var oldLista = minhasTarefas.lista;
        minhasTarefas.lista = [];
        angular.forEach(oldLista, function(tarefa) {
            if(!tarefa.feito) minhasTarefas.lista.push(tarefa);
        });
    }
    
};




