import { useState, useEffect } from "react";
import axios from "axios";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    course: Model,
  },
  seeds(server) {
    server.create("course", {
      name: "Desenvolvimento Frontend",
      duration: 80,
      teacher: "Wesley"
    });
    server.create("course", {
      name: "Desenvolvimento Mobile",
      duration: 100,
      teacher: "Bruno"
    });
    server.create("course", {
      name: "Desenvolvimento FullStack",
      duration: 80,
      teacher: "Ana"
    });
  },
  routes() {
    this.namespace = "api/courses";

    this.get("/", (schema, request) => {
      return schema.courses.all();
    });

    this.get("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.courses.find(id);
    });


    this.post("/", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.courses.create(attrs);
    });

    this.put("/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let course = schema.courses.find(id);
      return course.update(newAttrs);
    });

    this.post("/", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.courses.create(attrs);
    });

    this.delete("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.courses.find(id).destroy();
    });

  }
});

const App5 = () => {

  const [courses, setCourses] = useState([]);

  async function getCourses(){
    const response = await axios.get("http://127.0.0.1:5174/api/courses");
    console.log(response.data);
    setCourses(response.data.courses)
  }

  useEffect(()=>{
    getCourses();
  }, []);

  return (
    <div>
      { courses.length > 0 ? JSON.stringify(courses) : "Carregando..." }
    </div>
  )
}

export default App5;
