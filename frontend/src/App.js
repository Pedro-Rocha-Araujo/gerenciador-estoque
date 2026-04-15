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

  async function cadastrarProduto(e) {
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:4000/", {
        nome: nomeRef.current.value,
        preco: precoRef.current.value,
        estoque: estoqueRef.current.value,
        telefone: telefoneRef.current.value
      })  
      nomeRef.current.value = ""
      precoRef.current.value = ""
      estoqueRef.current.value = ""
      telefoneRef.current.value = ""
      toast.success("Produto cadastrado com sucesso!")
    } catch{
      toast.error("Erro ao cadastrar produto!")
    }
  }

  async function editarProduto(id){
    setId(id)
    const response = await axios.get("http://localhost:4000/"+id)
    nomeRef.current.value = response.data[0].nome
    precoRef.current.value = response.data[0].preco
    estoqueRef.current.value = response.data[0].estoque
    telefoneRef.current.value = response.data[0].telefone
  }

  async function salvarEdicao() {
    try {
      const response = await axios.put("http://localhost:4000/"+id, {
        nome: nomeRef.current.value,
        preco: precoRef.current.value,
        estoque: estoqueRef.current.value,
        telefone: telefoneRef.current.value
      })
      setId(null)
      toast.success("Produto editado com sucesso!")
    } catch {
      setId(null)
      toast.error("Erro ao editar o produto")
    }
  }

  function cancelarEdicao() {
    setId(null)
    nomeRef.current.value = ""
    precoRef.current.value = ""
    estoqueRef.current.value = ""
    telefoneRef.current.value = ""
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
        <h1><span>Gerenciador de</span> Estoque</h1>
      </header>
      <main>
        <Formulario 
          id={id} 
          cadastrarProduto={cadastrarProduto}
          salvarEdicao={salvarEdicao}
          cancelarEdicao={cancelarEdicao}
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