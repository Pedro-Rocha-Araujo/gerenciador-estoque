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