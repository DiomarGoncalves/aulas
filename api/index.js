const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();

// Configuração do banco de dados PostgreSQL (Neon)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Variável de ambiente configurada na Vercel
  ssl: { rejectUnauthorized: false },
});

// Middlewares
app.use(cors());
app.use(express.json());

// Rota para listar todos os cursos
app.get('/cursos', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM cursos');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
});

// Rota para listar aulas de um curso
app.get('/cursos/:id/aulas', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM aulas WHERE curso_id = $1', [id]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aulas' });
  }
});

// Rota para criar um novo curso
app.post('/cursos', async (req, res) => {
  const { titulo, descricao, thumb } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO cursos (titulo, descricao, thumb) VALUES ($1, $2, $3) RETURNING *',
      [titulo, descricao, thumb]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar curso' });
  }
});

// Rota para adicionar uma aula a um curso
app.post('/cursos/:id/aulas', async (req, res) => {
  const { id } = req.params;
  const { titulo, video_id } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO aulas (curso_id, titulo, video_id) VALUES ($1, $2, $3) RETURNING *',
      [id, titulo, video_id]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar aula' });
  }
});

// Exporta o app para a Vercel
module.exports = app;
