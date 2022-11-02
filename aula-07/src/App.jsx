import { useState } from "react";

const App = () => {

  const [numero, setNumero] = useState(0);

  //const [valores, setValores] = useState([10, 20, 30, 40]);
  const [valores, setValores] = useState([]);

  const [nomes, setNomes] = useState(["Maria", "Ana"]);

  const handleButton = () => {
    setNumero(numero + 1);
    setValores([...valores, numero]);
 }

 const addPessoa = () =>{
   setNomes([...nomes, "Carla"]);
 }

  return (
      <div>
        <h1>{numero}</h1>
        {valores.map((val) => (
          <h2>{val}</h2>
        ))}
        <ul>{
          nomes.map((nome) => (
          <li>{nome}</li>
          ))}
        </ul>
        <button onClick={handleButton}>Aperte</button>
        <button onClick={addPessoa}>Pessoa</button>
      </div>
      );
};

export default App;



//const handleButton = () =>{
//  alert("OK");
//}

// const [nome, setNome] = useState("Marcelo");

//return (
//  <div>
 //   <h1>{nome}</h1>
//    <button onClick={() => setNome("Bruno")}>Aperte</button>
//  </div>
//  );
//}
