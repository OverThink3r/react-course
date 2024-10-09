import { useState } from "react";
import { Buttons, Title } from "./components";

function App() {

  const [ contadorValor, funcionActualizaValor ] = useState(5);
  
  const increment = () => {
    console.log('Incrementamos');
    funcionActualizaValor(contadorValor + 1);

  }  
  const decrement = () => {
    console.log('Decrementamos');
    funcionActualizaValor(contadorValor - 1);
  }

  return (
    <div >
      <Title name="Esmeralda" count={contadorValor}/>
      <Buttons incrementar={increment} decrementar={decrement} />
    </div>
  )
}

export default App
