import "./styles.css";

function NomeFuncao() {
  const nome = "Marcelo";

  return (
    
    <div>
      <h1>Hello World</h1>
      <h2 class="titulo2">{nome}</h2>
      <img alt="imagem do logo" src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" width="100"/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis incidunt neque? Odio consequatur sapiente magni rem. Deserunt laboriosam perspiciatis saepe sequi quibusdam dignissimos impedit sapiente. Sequi officiis alias commodi?
      </p>
    </div>
  );
}

function NomeFuncao2() {
  const nome = "Patrícia";

  return (
    
    <div>
      <h1>Hello World</h1>
      <h2 class="titulo2">{nome}</h2>
      <p>
        Duas Funções
      </p>
    </div>
  );
}

//export default App;
export {NomeFuncao, NomeFuncao2};
