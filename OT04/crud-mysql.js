const express = require('express');
require('dotenv').config();
const pool = require('./db');

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());

app.post('/usuarios', async (req, res) => {
    const {nome, email} = req.body || {};
    if(!nome || !email) return res.status(400).json({error: 'nome e email são obrigatorios'});

    try {
        const [result] = await pool.execute('INSERT INTO usuarios (nome, email) VALUES(?, ?)', [nome, email]);
        return res.status(201).json({id: result.insertId, nome, email});
   } catch(err) {
        return res.status(500).json({error: err.message});
   }
});

app.get('/usuarios', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios ORDER BY id DESC');
        return res.json(rows);
    } catch (err) {
        return res.status(500).json({error: err.message });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    const {id} = req.params;
    const {nome, email} = req.body || {};
    if(!nome || !email) return res.status(400).json({error: 'nome e email são obrigatorios'});

    try{
        const [result] = await pool.execute(
            'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id])
    
    
            if(result.affectedRows === 0) return res.status(404).json({ error: 'Usuario não encontrado'});
            return res.json({message: 'Usuario atualizado com sucesso'});

    } catch (err) {
        return res.status(500).json({ error: err.message});
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const [result] = await pool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
        if(result.affectedRows === 0) return res.status(404).json({ error: 'Usuario não encontrado'});
        return res.json({message: 'Usuario excluido com sucesso'});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
});

app.listen(PORT, () => console.log(`CRUD RODANDO EM ${PORT}`));

