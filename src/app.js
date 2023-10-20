import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'
const app = express()

//indicar pro express ler body com JSON
app.use(express.json())


app.get('/', (req, res)=>{
    res.send('Para ver a lista de seleções, adicione "/selecoes" ao final da URL')
})
// ROTA DE CRIAÇÃO
app.post('/selecoes', SelecaoController.store)
//ROTA LISTA SELEÇOES
app.get('/selecoes', SelecaoController.index)
//ROTA BUSCA POR ID
app.get('/selecoes/:id', SelecaoController.show)
// rota delete
app.delete('/selecoes/:id', SelecaoController.delete)
// ROTA ATUALIZAÇÃO
app.put('/selecoes/:id', SelecaoController.update)
    

export default app