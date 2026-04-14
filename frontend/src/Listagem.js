import { useState, useEffect } from "react"
import axios from "axios"

function Listagem() {
  const [lista, setLista] = useState([])
  useEffect(()=>{
    async function getProdutos() {
      const response = await axios.get("http://localhost:4000/")
      setLista(response.data)
    }
    getProdutos()
  }, [])
  return (
    <div className="container">
      <h2>Tabela</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Telefone</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((produto, index)=>{
              return (
                <tr key={index}>
                  <td data-label="Nome:">{produto.nome}</td>
                  <td data-label="Preço:">{produto.preco}</td>
                  <td data-label="Estoque:">{produto.estoque}</td>
                  <td data-label="Telefone:">{produto.telefone}</td>
                  <td data-label="Opções:">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Listagem