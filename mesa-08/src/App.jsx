import { useState } from 'react'

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [valueNome, setValueNome] = useState("");
  const [valueIdade, setValueIdade] = useState(0);
  const [valueDesenho, setValueDesenho] = useState("");
  
  function addPessoa(event){

      event.preventDefault();
      console.log(valueNome);
      if (valueNome.trim()){
        setPessoas([...pessoas, [valueNome, valueIdade, valueDesenho]]);
      } else {
        alert("Informe ao menos o nome!");
      }
      //console.log(pessoas);
      setValueNome("");
      setValueIdade(0);
      setValueDesenho("");
      //console.log(pessoas);
  }

  return (
    <div>
      <form onSubmit={addPessoa}>
      <input 
           placeholder="Nome"
           value={valueNome}
           onChange={(eventNome) => setValueNome(eventNome.target.value)} 
        />
        <br/>
        <input 
           placeholder="Idade"
           value={valueIdade}
           onChange={(eventIdade) => setValueIdade(eventIdade.target.value)} 
        />
        <br/>
        <input 
           placeholder="Desenho"
           value={valueDesenho}
           onChange={(eventDes) => setValueDesenho(eventDes.target.value)} 
        />
        <br/>
        <input type="submit" />
      </form>
      {pessoas.map((val) => (
          <h2>{val}</h2>
        ))}
    </div>
  )
}

export default App;