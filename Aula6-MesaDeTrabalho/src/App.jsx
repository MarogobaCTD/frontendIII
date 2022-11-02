import { cities } from './mock/cities.js';


function App() {

  return (
    <div className="App">
        {<ul>
         {cities.map((content)=>(
          <li key={`list-citie-${content.id}`}>{content.country}</li>
          ))}
          </ul>}
    </div>
  )
}

export default App