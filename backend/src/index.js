const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tarefasBD').then((result) => {
    console.log('banco conectado com sucesso! '+ result)
}).catch((err) => {
    console.log('erro, banco não conectado! '+ err)
});

app.use(cors());
app.use(express.json()); //para o express ler codigos json
app.use(routes); //para executar as rotas

app.listen(9999); //servidor