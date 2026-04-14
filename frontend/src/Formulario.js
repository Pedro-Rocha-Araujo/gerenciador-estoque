function Formulario() {
  return (
    <div className="container">
      <h2>Formulário</h2>
      <form>
        <div className='campo-input'>
          <input type='text' name='nome' placeholder='Nome' />
        </div>

        <div className='campo-input'>
          <input className='menor' type='text' 
          name='preco' placeholder='Preço' />
        </div>

        <div className='campo-input'>
          <input className='menor' type='text' 
          name='estoque' placeholder='Estoque' />
        </div>

        <div className='campo-input'>
          <input type='text' 
          name='telefone' placeholder='Telefone' />
        </div>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Formulario