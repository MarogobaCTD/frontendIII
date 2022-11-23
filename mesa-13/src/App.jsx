import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [produtos, setProdutos] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setProdutos("Pizzas");
    }, 2000);
  }, []);


  return (
    <div>

      <h1>Seu pedido: {produtos} </h1>
      <ul>

      </ul>
      <button onclick={() => setProdutos("")}>Cancelar Pedido</button> 
      
    </div>
  )
}

export default App
