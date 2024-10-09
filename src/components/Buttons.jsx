
export const Buttons = ({ incrementar, decrementar}) => {
  return (
    <div>
      <button onClick={incrementar}>Increment</button>
      <button onClick={decrementar}>Decrementar</button> 
    </div>
  )
}