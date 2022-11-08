import { useState } from "react";
import "./styles.css";

function App() {
  const [formData, setFormData] = useState({conteudo: "", nota: 0, database: {valor: 0, qtd: 0}, backend: {valor: 0, qtd:0}, frontend:{valor:0, qtd:0}});
  const [errorFormData, setErrorFormData] = useState({
    errorNome: "",
    errorConteudo: "",
  }); 

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData.nota);
    console.log(formData.conteudo);

    if (!formData.nota.trim()){
      setErrorFormData({...errorFormData, errorConteudo: "Campo nota não pode ficar vazio!"});
    } else if (!formData.conteudo.trim()){
      setErrorFormData({...errorFormData, errorConteudo: "Campo disciplina não pode ficar vazio!"});
    } else if (Number(formData.nota <= 0) || Number(formData.nota > 10)){
        setErrorFormData({...errorFormData, errorConteudo: "Nota não pode ser menor que 0 ou maior que 10!"});
      } else {
        setErrorFormData({...errorFormData, errorConteudo: ""});
        if(formData.conteudo == "database"){
          setFormData({...formData, database: {valor: Number(formData.database.valor + Number(formData.nota)), qtd: Number(formData.database.qtd + 1)}});
        } else if(formData.conteudo == "backend"){
          setFormData({...formData, backend: {valor: Number(formData.backend.valor + Number(formData.nota)), qtd: Number(formData.backend.qtd + 1)}});
        } else if(formData.conteudo == "frontend"){
          setFormData({...formData, frontend: {valor: Number(formData.frontend.valor + Number(formData.nota)), qtd: Number(formData.frontend.qtd + 1)}});
        } else if (formData.conteudo == "devops"){
          setErrorFormData({...errorFormData, errorConteudo: "Devops não está cadastrado para notas"});
        }
    };

  }

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select value={formData.conteudo}
                  onChange={(event) =>
                  setFormData({...formData, conteudo: event.target.value})
            }>
            <option value="" selected disabled>
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input value={formData.nota} 
                 onChange={(event) => setFormData({...formData, nota: event.target.value})}
          />
        </div>

        <input type="submit" value="Salvar" />
        <h5 className="error">{errorFormData.errorConteudo}</h5>
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Dados</td>
              <td>{formData.database.qtd}</td>
              <td>{formData.database.qtd > 0 ? formData.database.valor/formData.database.qtd : 0}</td>
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>{formData.frontend.qtd}</td>
              <td>{formData.frontend.qtd > 0 ? formData.frontend.valor/formData.frontend.qtd : 0}</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>{formData.backend.qtd}</td>
              <td>{formData.backend.qtd > 0 ? formData.backend.valor/formData.backend.qtd : 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
