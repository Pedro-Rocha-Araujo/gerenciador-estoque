import axios from "axios"
import Formulario from "./Formulario";
import Listagem from "./Listagem"
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>App Loja</h1>
      </header>
      <main>
        <Formulario />
        <Listagem />
      </main>
      <footer>
        <p>Copyright 2026 | Pedro Rocha Araujo</p>
      </footer>
    </div>
  );
}

export default App;