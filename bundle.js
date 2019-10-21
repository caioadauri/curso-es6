"use strict";

var usuario = {
  nome: 'Caio',
  idade: 28,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);
