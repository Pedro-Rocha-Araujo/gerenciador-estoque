import db from "../db.js"

export function checarCampos(request, response, next) {
  let { nome, preco, estoque, telefone } = request.body
  if(!nome || !preco || !estoque || !telefone) {
    return response.json({Erro: "Todos os campos são obrigatórios!"})
  }
  next()
}

export function checarId(request, response, next) {
  let { id } = request.params
  const q = "SELECT * FROM produtos WHERE id = ?"
  db.query(q, [id], (erro, data)=>{
    if(erro || data.length === 0){
      return response.json({Erro: "Erro ao encontrar o ID"})
    }
    next()
  })
}