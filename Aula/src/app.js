import express from "express";
// uma constante receberá uma instância do Express
const app = express();
app.use(express.json());

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
  app.get('/note', (req, res) => {
    res.status(200).json(notebooks)
  })

  app.get('/note/:id', (req, res) => {
    let index = busca(req.params.id);
    res.json(notebooks[index]);
  })

  app.post('/note', (req, res) => {
    notebooks.push(req.body);
    res.status(201).send('Produto foi cadastrado com sucesso')
  })
  // atualização por parametro e localizá-lo com função
  app.put('/note/:id', (req, res) => {
    let index = busca(req.params.id);
    notebooks[index].marca = req.body.marca;
    res.json(notebooks)
  })
function busca(id){
    return notebooks.findIndex(notebook => notebook.id==id)
    }

    app.delete('/note/:id', (req, res) => {
        let{id} = req.params;
        let index = busca(id);
        // indice e quantos vou excluir
        notebooks.splice(index,1);
        res.send('Removido com sucesso')
      })

  
  export default app;
