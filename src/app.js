import express from "express";
// uma constante receberá uma instância do Express
const app = express();
// array de eletrônicos
const notebooks = [
{"id":1, "marca":"Asus"},
{"id":2, "marca":"HP"}
]
// criando rotas
// rota vazia. 200 status ok
app.get('/', (req, res) => {
res.status(200).send('API Loja');
})
app.get('/note', (req, res) => { res.status(200).json(notebooks)
})
export default app;