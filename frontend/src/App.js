import { useState, useEffect, useRef } from "react"
import axios from "axios"
import './App.css';
import Formulario from "./Formulario";
import Listagem from "./Listagem"
import { toast } from "react-toastify"

function App() {
  const nomeRef = useRef()
  const precoRef = useRef()
  const estoqueRef = useRef()
  const telefoneRef = useRef()

  const [lista, setLista] = useState([])
  const [id, setId] = useState(null)

  useEffect(()=>{
    async function getProdutos() {
      const response = await axios.get("http://localhost:4000/")
      setLista(response.data)
    }
    getProdutos()
  }, [lista])

  async function cadastrarUsuario(e) {
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:4000/", {
        nome: nomeRef.current.value,
        preco: precoRef.current.value,
        estoque: estoqueRef.current.value,
        telefone: telefoneRef.current.value
      })  

    } catch{
      toast.error("Erro ao cadastrar Usuário!")
    }
  }

  async function editarProduto(id){
    setId(id)
    const response = await axios.put("http://localhost:4000/"+id)
    setId(null)
  }

  async function deletarProduto(id){
    try{
      const response = await axios.delete("http://localhost:4000/"+id)
      toast.success("Produto deletado com Sucesso!")
      setLista((prevValue)=>{
        return prevValue.filter((produto)=>{
          return produto.id !== id
        })
      })
    }catch {
      toast.error("Erro ao deletar o protuto!")
    }
  }
  return (
    <div className="app">
      <header>
        <h1>Gerenciador de Estoque</h1>
      </header>
      <main>
        <Formulario 
          id={id} 
          cadastrarUsuario={cadastrarUsuario}
          nomeRef={nomeRef}
          precoRef={precoRef}
          estoqueRef={estoqueRef}
          telefoneRef={telefoneRef}
        />
        <Listagem 
          lista={lista} 
          editarProduto={editarProduto} 
          deletarProduto={deletarProduto}
        />
      </main>
      <footer>
        <p>Copyright 2026 | Pedro Rocha Araujo</p>
      </footer>
    </div>
  );
}

export default App;