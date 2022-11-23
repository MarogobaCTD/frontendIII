import { useState, useEffect } from "react";

const App2 = () => {

  const [posts, setPosts] = useState([]);

  async function getDataByServer() {

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const responseJSON = await response.json();
      setPosts(responseJSON);
    } catch (error) {
      alert("Houve um erro:" + error.mensage);
    }

  }

  useEffect(()=>{
    getDataByServer();
  }, []);

  return (
    <div>
      { posts.length > 0 ? JSON.stringify(posts) : "Carregando..." }
      <br/>
    </div>
  )
}

export default App2;
