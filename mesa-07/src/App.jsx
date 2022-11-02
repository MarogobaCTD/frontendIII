import {useState} from "react";

const App = () => {
  const [itens, setItens] = useState([1]);

  const addItem = () => {
    setItens([...itens, itens.length + 1]);
 }

  return (
    <div>
      <ul>
        {itens.map((item) => (<li>{`O item ${item} foi adicionado à lista!`}</li>))}
      </ul>
      <button onClick={addItem}>Adicionar</button>
    </div>
  )
}

export default App
