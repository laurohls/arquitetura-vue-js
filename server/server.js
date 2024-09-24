const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');  // Importa o middleware CORS

const app = express();
const port = 3000;

// Middleware para permitir CORS em todas as rotas
app.use(cors());

app.use(express.json());

// Abre uma conexão com o banco de dados SQLite
const db = new sqlite3.Database('./banco.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Cria a tabela se ela não existir (executa ao iniciar o servidor)
db.run(`CREATE TABLE IF NOT EXISTS pessoas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    estado TEXT,
    cidade TEXT,
    dataNascimento TEXT
)`);

// Rota para listar todas as pessoas
app.get('/pessoas', (req, res) => {
    const sql = 'SELECT * FROM pessoas';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Rota para buscar uma pessoa por ID
app.get('/pessoas/:id', (req, res) => {
    const sql = 'SELECT * FROM pessoas WHERE id = ?';
    const params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// Rota para adicionar uma nova pessoa
app.post('/pessoas', (req, res) => {
    const { nome, estado, cidade, dataNascimento } = req.body;
    const sql = 'INSERT INTO pessoas (nome, estado, cidade, dataNascimento) VALUES (?, ?, ?, ?)';
    const params = [nome, estado, cidade, dataNascimento];
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: { id: this.lastID },
            id: this.lastID
        });
    });
});

// Rota para atualizar uma pessoa por ID
app.put('/pessoas/:id', (req, res) => {
    const { nome, estado, cidade, dataNascimento } = req.body;
    const sql = 'UPDATE pessoas SET nome = ?, estado = ?, cidade = ?, dataNascimento = ? WHERE id = ?';
    const params = [nome, estado, cidade, dataNascimento, req.params.id];
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            changes: this.changes
        });
    });
});

// Rota para deletar uma pessoa por ID
app.delete('/pessoas/:id', (req, res) => {
    const sql = 'DELETE FROM pessoas WHERE id = ?';
    const params = [req.params.id];
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'deleted',
            changes: this.changes
        });
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});