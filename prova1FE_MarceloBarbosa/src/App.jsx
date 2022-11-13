import { useState } from 'react'
import Card from "./component/Card";
import "./styles/App.css";

function App() {
  const[formData, setFormData] = useState({musica: "", album:"", tempo: 0, video:""});
  const[formCard, setFormCard] = useState([]);
  const[formError, setFormError] = useState({visivel: false, conteudo: "Por favor, verifique os dados inseridos no formulário!"});

  function addCards(event){
    event.preventDefault();

    console.log(formData);
    console.log(formData.musica.indexOf(" "));
    if (formData.musica.length < 3 || !formData.album.trim()){
      setFormError({...formError, visivel: true});
      alert("Insira ao menos 4 caracteres e sem espaço no início!");
    } else if ( formData.musica.indexOf(" ") == 0){
      setFormError({...formError, visivel: true});
      alert("Não pode haver espaço(s) em branco no início do campo Música!");
    } else if (formData.album.length < 6 || !formData.album.trim()) {
      setFormError({...formError, visivel: true});
      alert("O album deve ter pelo menos seis caracteres!");
    } else {
      setFormCard([...formCard, formData]);
      setFormError({...formError, visivel: false});
    }
    console.log(formCard);

  }

  return (
    <div>
      <div className="conteudo">
        <h1>Coletânia de músicas</h1>
        <form onSubmit={addCards}>
          <div>
            <label>Música:</label>
            <input
                className="Musica"
                type="text"
                placeholder="Insira o nome da Música com pelo menos 4 caracteres e sem espaços no início!"
                value={formData.musica}
                onChange={(eventMusica) => 
                setFormData({...formData, musica: eventMusica.target.value})}/>

            <label>Tempo:</label>
            <input
                  className="Tempo"
                  type="text" 
                  placeholder="Tempo Música" 
                  value={formData.tempo}
                  onChange={(eventTempo) => 
                  setFormData({...formData, tempo: eventTempo.target.value})}/>
          </div>
          <div>
            <label>Artista:</label>
            <input
                className="Album"
                type="text"
                placeholder="Insira o nome do Álbum com pelo menos 7 caracteres!"
                value={formData.album}
                onChange={(eventAlbum) => 
                setFormData({...formData, album: eventAlbum.target.value})}/>
            <label> Vídeo: </label>
            <input
                  className="Video"
                  type="text" 
                  placeholder="Link vídeo" 
                  value={formData.video}
                  onChange={(eventVideo) => 
                  setFormData({...formData, video: eventVideo.target.value})}/>
          </div>
          <div className='cbutton'>
              <input type="submit" />
          </div>
          <h5 className="error">{formError.visivel ? formError.conteudo : ""}</h5>
        </form>
      <br/>
      </div>
      <div>
        <section class="videos">
          {
            formCard.map((cardMusica) => {
                return(
                  
                    <Card card={cardMusica}/>
                  
                )
              }
            )
          }
        </section>
      </div>
    </div>
  )
}

export default App;
