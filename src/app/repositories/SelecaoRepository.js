import conexao from "../database/conexao.js"

class SelecaoRepository {
    //CRUD

    create(selecao){ 
    const sql = 'INSERT INTO selecoes SET ?'
        return new Promise((resolve, reject) =>{
            conexao.query(sql, selecao,  (erro, result) =>{
                if(erro) return reject('Não foi possivel realizar a operação')
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findAll(){ 
    const sql = 'SELECT * FROM selecoes;'
        return new Promise((resolve, reject) =>{
            conexao.query(sql, (erro, result) =>{
                if(erro) return reject('Não foi possivel realizar a operação')
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findById(id){ 
    const sql = "SELECT * FROM selecoes WHERE id=?;"
        return new Promise ((resolve,reject) =>{
            conexao.query(sql, id, (erro, result) => {
                if(erro) return reject('Não foi possivel consultar por ID')
                const row = JSON.parse(JSON.stringify(result))
                 return resolve(row)
            
        })
    })       
}
    update(selecao, id){
    const sql = 'UPDATE selecoes SET ? WHERE id=?'
        return new Promise ((resolve,reject) =>{
            conexao.query(sql, [selecao, id], (erro, result) => {
                if(erro) return reject('Não foi possivel editar')
                const row = JSON.parse(JSON.stringify(result))
                 return resolve(row)
        
        })
    })
}

    delete(id){
    const sql = 'DELETE FROM selecoes WHERE id=?;'
        return new Promise ((resolve,reject) =>{
            conexao.query(sql, id, (erro, result) => {
                if(erro) return reject('Não foi possivel apagar por ID')
                const row = JSON.parse(JSON.stringify(result))
                 return resolve(row)   
        })
    })
}

}


export default new SelecaoRepository