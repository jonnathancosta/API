import app from "./src/app.js";

const port = process.env.PORT || 3000; //buscará uma porta aleatoria en encontrando ira para a porta recomendada.

//app devido ao import
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`) //utiulizase crase para passar o texto. $port puxa a func port.
})