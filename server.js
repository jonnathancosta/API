import app from "./src/app.js";
const port = process.env.PORT || 3000;
//app devido ao import
app.listen(port, () => {
console.log('Servidor escutando em http:localhost:${port}')
});