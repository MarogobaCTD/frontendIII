import { useState, useEffect } from "react";
import axios from "axios";

const App3 = () => {

  const [posts, setPosts] = useState([]);

  async function getDataByServer() {

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      alert("Houve um erro:" + error.mensage);
    }

  }

  async function newPost() {

    const post = {
      title: "Novo post",
      body: "Conteudo do novo post",
      userId: ','
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
      alert("Salvo o post");
    } catch (error) {
      alert("Erro: " + error.mensage);
    }

  }

  useEffect(()=>{
    getDataByServer();
  }, []);

  return (
    <div>
      { posts.length > 0 ? JSON.stringify(posts) : "Carregando..." }
      <button onClick={newPost}>Salvar post</button>
    </div>
  )
}

export default App3;
