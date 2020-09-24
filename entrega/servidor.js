const express = require('express');
const app = express();
const porta = 3000;
const mulheres = require('./mulheres.json')

//const id = mulheres.length - 1;

app.use(express.json());

//READ ALL (mostra todos os dados encontrados no array)
//retorna todas as mulheres
app.get('/mulheres', function(req, res){
  //retornando a lista com as mulheres  
  res.json(mulheres);
});

//READ SINGLE (vai retornar somente as informações do id solicitado)
//retornar de acordo com o id 
app.get('/mulheres/:id', function(req, res){
    //criação da constante id para fazer a requisição do id
    const id = req.params.id;
    //vai pegar as informações da mulher de acordo com o id digitado
    const mulher = mulheres[id];   
    //retornando as informações 
    res.json(mulher);
})

app.listen(porta, function(){
  console.log(`Servidor rodando na porta ${porta}`);
});