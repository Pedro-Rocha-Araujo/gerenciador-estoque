function Listagem() {
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
            <tr>
              <td data-label="Nome:"></td>
              <td data-label="Preço:"></td>
              <td data-label="Estoque:"></td>
              <td data-label="Telefone:"></td>
              <td data-label="Opções:">
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Listagem