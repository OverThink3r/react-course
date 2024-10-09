import { useState } from "react";
import { Buttons, Title } from "./components";

function App() {

  const [ contadorValor, funcionActualizaValor ] = useState(5);
  
  const increment = () => funcionActualizaValor(contadorValor + 1);
  const decrement = () => funcionActualizaValor(contadorValor - 1);

  return (
    <div>
      <Title />
      <Buttons />
    </div>
  )
}

export default App
