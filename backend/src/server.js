const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
app.use(routes); //chamando as rotas

app.listen(9999, () => {
    console.log('servidor funcionando')
}); //servidor

