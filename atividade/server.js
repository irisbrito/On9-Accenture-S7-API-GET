const express = require('express');
const app = express();
const porta = 3000;
const tarefas = require('./tarefas.json')

app.get('/tarefas',(requisao,resposta) =>{
    resposta.json(tarefas);
})

app.use(express.json());

app.listen(porta, function(){
    console.log("Servidor rodando")
})