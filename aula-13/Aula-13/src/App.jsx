import { useEffect, useLayoutEffect, useState } from 'react';
import Box from "./Box";

function App() {
  const [count, setCount] = useState(0);

  const [visibleBox, setVisibleBox] = useState(true);

  //setCount(count + 1);
 // useLayoutEffect(() => {
 //   console.log("Executei a inicialização!");
 // })

  useEffect(() => {
    setCount(count + 1);
    console.log("Executei a inicialização após a montagem do componente!");
  }, []);
  
  return (
    <div>
      {console.log("Executei a inicialização dentro do componente!")}
      {visibleBox ? <Box /> : null}
      <button onClick={() => setVisibleBox(!visibleBox)}>Hanble Box</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App;
