const carros = [
{id: 1,
  modelo: "Astra",
},
{id: 2,
  modelo: "Fucion",
},
{id: 3,
  modelo: "Sonata",
},
{id: 4,
  modelo: "Pulse",
},
{id: 5,
  modelo: "Golf",
},
]

const App = () => {
  return (
    <ul>
      {carros.map((carro)=>(
        <li key={`list-car-${carro.id}`}>{carro.modelo}</li>
      ))}
    </ul>
  )
}

export default App;
