function Listagem({ lista, editarProduto, deletarProduto }) {
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
                    <i onClick={()=>editarProduto(produto.id)} className="fa-solid fa-pen-to-square"></i>
                    <i onClick={()=>deletarProduto(produto.id)} className="fa-solid fa-trash"></i>
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