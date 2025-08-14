import { useState } from "react"

// function App() {
//   const [counter, setCounter] = useState(1)

//   const handleClick = () => {
//     setCounter(counter + 1)
//     console.log(counter)
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Increase count</button>
//       {counter}
//     </div>
//   )
// }

function App() {

  const [sandwiches, setSandwiches] = useState([
    { name: 'Brown', sauce: 'mayo', ingredient: 'tomato' }
  ])

  const handleCreate = () => {
    // sandwiches.push({ name: 'Brown', sauce: 'mayo', ingredient: 'tomato' })

    // const newSandwiches = sandwiches;
    // newSandwiches.push({ name: 'Brown', sauce: 'mayo', ingredient: 'tomato' })
    // setSandwiches(newSandwiches)

    // setSandwiches(sandwiches.concat({ name: 'Brown', sauce: 'mayo', ingredient: 'tomato' }))
    console.log(sandwiches)

    setSandwiches((prev) => prev.concat({ name: 'Brown', sauce: 'mayo', ingredient: 'tomato' }))
  }

  return (
    <div>
      <button onClick={handleCreate}>Create sandwich</button>

      {sandwiches.map(el => {
        return (
          <div style={{ border: '1px solid black', margin: 10, padding: 10 }}>
            <p>Bread: {el.name}</p>
            <p>Sauce: {el.sauce}</p>
            <p>Ingredient: {el.ingredient}</p>
          </div>
        )
      })}

      {/* <div style={{ border: '1px solid black', margin: 10, padding: 10 }}>
        <p>Bread: {sandwiches[1].name}</p>
        <p>Sauce: {sandwiches[1].sauce}</p>
        <p>Ingredient: {sandwiches[1].ingredient}</p>
      </div> */}
    </div>
  )
}


// function Sandwich() {

//   return (
//     <div style={{ padding: 10 }}>
//       <input type="text" onChange={handleInput} />
//       <p>Your name is: {name}</p>
//     </div>
//   )
// }

// function App() {
//   const [name, setName] = useState('')
//   // var name = ''

//   const handleInput = (el) => {
//     console.log(el.target.value)
//     // name = el.target.value
//     setName(el.target.value)
//   }

//   return (
//     <div style={{ padding: 10 }}>
//       <input type="text" onChange={handleInput} />
//       <p>Your name is: {name}</p>
//     </div>
//   )
// }

export default App
