import { useRef, useState } from "react";


const App = () => {

  //const inputRef = useRef(null); //Uncontrolled

  const [valueInput, setValueInput] = useState(""); //Controlled

  const [erroInput, setErrorInput] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [nomes, setNomes] = useState([]);

  function handleSubmit(event){
    
    //alert(valueInput);
    //alert("ok"); 

    if (valueInput.trim()){
      setNomes([...nomes, valueInput]);
      setErrorInput("");
      setValueInput("");
    } else {
      setValueInput("Digite o nome no campo!");
    }

    event.preventDefault();
  }

  return (
    <div style={isChecked ? {background:"red"} : {}}>
      {/*<h1>{valueInput}</h1>*/}
      <h1>{isChecked.toString()}</h1>

      <ul>{
        nomes.map((item) => (
          <li>{item}</li>
          ))}
      </ul>

      <form onSubmit={handleSubmit}>
        {/*<input ref={inputRef} />*/}
        
        <input 
           value={valueInput}
           onChange={(event) => setValueInput(event.target.value)} 
        />
        <br/>
        <label>
          pressionado?
          <input 
             value={isChecked} 
             type="checkbox" 
             onChange={(event) => setIsChecked(event.target.checked)} 
          />
        </label>
        
        <p>{erroInput}</p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;
