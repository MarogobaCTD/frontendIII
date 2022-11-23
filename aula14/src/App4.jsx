import { useState, useEffect } from "react";
import axios from "axios";

import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/users", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" },
    ])
  },
})

const App4 = () => {

  const [users, setUsers] = useState([])


  async function getUsers(){
    const response = await axios.get("http://127.0.0.1:5174/api/users");
    setUsers(response.data);
  }

  useEffect(()=>{
    getUsers();
  }, []);

  return (
    <div>
      { users.length > 0 ? JSON.stringify(users) : "Carregando..." }
    </div>
  )
}

export default App4;
