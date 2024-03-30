
import './App.css'
import { useState } from 'react';




function App() {


  // let counter=5;//this variable won;t propogate  in UI
  const [state,setState]=useState(15)

 const addValue= ()=>{
  if(state <20) setState(state + 1)
//  counter= state +1
//  console.log('clicked', counter);
//  setState(counter)

 
  }

  const removeValue = ()=>{
if(state > 0) setState(state -1)

    // if(state >0){
//   counter=state-1;
//   setState(counter)
// }
    
  }
  
  return (
    <>
     <h1>chai aur rteact</h1>
     <h2>Counter value is{state}</h2>
     <button onClick={addValue}>Add value {state}</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
