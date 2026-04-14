function Formulario({ id, nomeRef, precoRef, estoqueRef, telefoneRef, cadastrarUsuario }) {
  return (
    <div className="container">
      <h2>Formulário</h2>
      <form onSubmit={cadastrarUsuario}>
        <div className='campo-input'>
          <input ref={nomeRef} type='text' name='nome' placeholder='Nome' />
        </div>

        <div className='campo-input'>
          <input ref={precoRef} className='menor' type='text' 
          name='preco' placeholder='Preço' />
        </div>

        <div className='campo-input'>
          <input ref={estoqueRef} className='menor' type='text' 
          name='estoque' placeholder='Estoque' />
        </div>

        <div className='campo-input'>
          <input ref={telefoneRef} type='text' 
          name='telefone' placeholder='Telefone' />
        </div>

        <button type='submit'>{id ? "Editar" : "Cadastrar"}</button>
      </form>
    </div>
  )
}

export default Formulario