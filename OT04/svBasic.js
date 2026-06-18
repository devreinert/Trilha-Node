const express = require('express');
require('dotenv').config();

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor!');
});

app.get('/status', (req, res) => {
    res.json({ok: true, timestamp: new Date().toISOString()});
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});