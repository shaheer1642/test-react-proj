import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(1)
  const [counter2, setCounter2] = useState(1)
  const [counter3, setCounter3] = useState(1)
  const [counter4, setCounter4] = useState(1)
  const [counter5, setCounter5] = useState(1)
  const [counter6, setCounter6] = useState(1)

  return (
    <div style={{ padding: 10 }}>
      <button onClick={() => setCounter(v => v + 1)}>Increase count</button>
      <button onClick={() => setCounter2(v => v + 1)}>Increase count</button>
      <button onClick={() => setCounter3(v => v + 1)}>Increase count</button>
      <button onClick={() => setCounter4(v => v + 1)}>Increase count</button>
      <button onClick={() => setCounter5(v => v + 1)}>Increase count</button>
      <button onClick={() => setCounter6(v => v + 1)}>Increase count</button>
      <p>{counter}</p>
      <p>{counter2}</p>
      <p>{counter3}</p>
      <p>{counter4}</p>
      <p>{counter5}</p>
      <p>{counter6}</p>
    </div>
  )
}

export default App
