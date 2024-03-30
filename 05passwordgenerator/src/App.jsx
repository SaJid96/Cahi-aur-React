import { useCallback, useEffect, useRef, useState } from 'react'


function App() {

  const [length, setLength]=useState(8);
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [charAllowed, setcharAllowed]=useState(false);
  const [password, setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{

    let pass='';
    let str= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "`!@#$%^&*()_+=-[]{}?"

    for(let i=1; i<=length ; i++){
      let char=Math.floor(Math.random() * str.length +1);
      pass +=str.charAt(char);
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword]) //setPassword is for optimization

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])


const passwordRef=useRef(null)
const copyPasswordToCliBoard =useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,99)


  window.navigator.clipboard.writeText(password)

},[password])

  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-800 bg-gray-800">
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input 
    type="text"
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='Password'
    readOnly
    ref={passwordRef}
     />
     <button 
     onClick={copyPasswordToCliBoard}
     className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
    </div>

    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        id='range' 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
         />
         <label htmlFor="range">Length :{length} </label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        id='numberInput' 
       defaultChecked={numberAllowed}
        className='cursor-pointer'
        onChange={()=>{setNumberAllowed((prev)=> !prev)}}
         />
         <label htmlFor="numberInput">Number </label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        id='cahr' 
        defaultChecked={charAllowed}
        className='cursor-pointer'
        onChange={()=>{setcharAllowed((prev)=> !prev)}}
         />
         <label htmlFor="char">Charecter </label>
      </div>
    </div>

  </div>

    </>
  )
}

export default App
