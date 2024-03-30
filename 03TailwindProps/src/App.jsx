
import { useState,useEffect } from 'react'
import './App.css'
import BackgroundColor from './components/BackgroundColor'
import Card from './components/card'

function App() {

// const changeBackgroundColor =(e)=>{
//   console.log(e);
//         const content=e.target.textContent;
//         content === 'Red' ? setColor('red') : content === 'Green' ? setColor('green') : content === 'Yellow' ? setColor('yellow') : null



// }
  const [color,setColor]=useState('olive')

  const labels=[{label:'Red',value:'red'},{label:'Green',value:'green'},{label:'Yellow',value:'yellow'}];

  return (
    <div className="w-full h-screen "
    style={{backgroundColor: color}}
    >

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl">
  {labels.map((item,index)=>(
     <button key={index}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor(item.value)}>{item.label}</button>
 ))}
  </div>

</div>





{/*       
 <div className="flex">
 {labels.map((item,index)=>(
     <button key={index}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={changeBackgroundColor}>{item}</button>
 ))}
 </div> */}
    </div>
  )
}

export default App



{/* <> */}





    
{/* <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4' >Tailwind</h1>
<Card  username='Neha' btnText="click Me"/>
<Card  username='Riya' /> */}



{/* <BackgroundColor/> */}

  // </>