const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Servidor online!');
});

app.get('/usuarios', (req, res) => {
    res.json({message: 'Listando usuarios'});
});

app.post('/usuarios', (req, res) => {
    res.status(201).json({message: 'Usuario criado ', payload: req.body});
});

app.put('/usuarios/:id', (req, res) => {
    res.json({message: `Usuario ${req.params.id} atualizado `, payload: req.body});
});

app.delete('/usuarios/:id', (req, res) => {
    res.json({message: `Usuario ${req.params.id} deletado`});
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



