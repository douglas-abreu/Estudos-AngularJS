
let app = angular.module("cadastro", []);

app.controller("formulario", formularioController);

function formularioController($scope) {
    var form = $scope;
    form.nome = "";
    form.sobrenome = "";
    form.email = "";
    
    form.gerarEmail= function() {
        console.log(form.email);
        form.emailPreview = `E-mail ${form.nome.toLowerCase()}.${form.sobrenome.toLowerCase()}@empresa.com gerado com sucesso!`; // template string interpolation
        form.nome = "";
        form.sobrenome = "";
    };
}