function Formulario({ id, nomeRef, precoRef, estoqueRef, telefoneRef, cadastrarProduto, salvarEdicao, cancelarEdicao }) {
  return (
    <div className="container">
      <h2>Formulário</h2>
      <form onSubmit={id ? salvarEdicao : cadastrarProduto}>
        <div className='campo-input'>
          <input ref={nomeRef} type='text' required name='nome' placeholder='Nome' />
        </div>

        <div className='campo-input'>
          <input ref={precoRef} className='menor' type='number' required
          name='preco' placeholder='Preço' />
        </div>

        <div className='campo-input'>
          <input ref={estoqueRef} className='menor' type='number' required 
          name='estoque' placeholder='Estoque' />
        </div>

        <div className='campo-input'>
          <input ref={telefoneRef} type='number' required 
          name='telefone' placeholder='Telefone' />
        </div>

        <button type='submit'>{id ? "Editar" : "Cadastrar"}</button>
        {id && (
          <button onClick={cancelarEdicao} className="red" type="button">Cancelar</button>
        )}
      </form>
    </div>
  )
}

export default Formulario