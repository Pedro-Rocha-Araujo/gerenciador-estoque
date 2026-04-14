import db from "../db.js"

export function getProdutos(request, response) {
  const q = "SELECT * FROM produtos"     
  db.query(q, (erro, data)=>{
    if(erro){
      return response.json({Erro: "Erro ao pegar os produtos!"})
    }
    return response.status(200).json(data)
  })                                       
}

export function getProduto(request, response) {
  const q = `SELECT * FROM produtos WHERE id = ${request.params.id}`
  db.query(q, (erro, data)=>{
    if(erro) {
      return response.json({Erro: "Erro ao pegar usuário!"})
    }
    return response.json(data)
  })
}

export function addProduto(request, response) {
  let {nome, preco, estoque, telefone} = request.body
  const q = `INSERT INTO produtos (nome, preco, estoque, telefone) VALUES (?, ?, ?, ?) `
  db.query(q, [nome, preco, estoque, telefone], (erro, data)=>{
    if(erro) {
      return response.json({Erro: "Erro ao inserir produto!"})
    }
    return response.json(data)
  })
}

export function editarProduto(request, response) {
  let { nome, preco, estoque, telefone } = request.body
  const q = `UPDATE produtos SET nome = ?, preco = ?, estoque = ?, telefone = ? WHERE id = ?`
  db.query(q, [nome, preco, estoque, telefone, request.params.id], (erro, data)=>{
    if(erro){
      return response.json({Erro: "Erro ao editar o produto!"})
    }
    return response.json(data)
  })
}

export function deletarProduto(request, response) {
  const q = `DELETE FROM produtos WHERE id = ${request.params.id}`
  db.query(q, (erro, data)=>{
    if(erro){
      return response.json({Erro: "Erro ao deletar o usuário!"})
    }
    return response.json(data)
  })
}