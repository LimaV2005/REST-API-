import app from "./src/app.js"
import conexao from "./src/app/database/conexao.js"

const PORT = 3010

// fazer a conexao

        app.listen(PORT, ()=> {
        console.log(`Servidor rodando no ${PORT}`)
        console.table(        {
        'port':PORT,
        'host':`http://localhost:${PORT}`})
})




