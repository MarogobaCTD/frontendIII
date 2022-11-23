import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

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

export default App
