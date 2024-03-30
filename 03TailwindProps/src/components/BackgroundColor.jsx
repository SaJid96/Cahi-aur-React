

import  { useState } from 'react'

const BackgroundColor = () => {
    const [background,setBackground]=useState('olive');
    // const changeBackgroundColor=()=>{
        // console.log(e.target.textContent,"Whats therer?");
        // const content=e.target.textContent;
        // content === 'Red' ? setBackground('bg-red-800  w-40') : content === 'Green' ? setBackground('bg-green-700 w-40') : content === 'Yellow' ? setBackground('bg-yellow-400 w-40') : null

        // setBackground()
    // }

    // const labels=['Red','Green','Yellow'];
  return (
    <div className="flex w-full h-screen"
    style={{backgroundColor:background}}
    >
      
       

</div>
  )
}

export default BackgroundColor


// <div className="">
// {labels.map((item,index)=>(
//     <button key={index} className={background} onClick={changeBackgroundColor}>{item}</button>
// ))}
// </div>