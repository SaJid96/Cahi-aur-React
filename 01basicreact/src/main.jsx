import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//const test=() - here parathnses means return something , no need to write explicitly


const testElemnent = React.createElement('a',{
  href:'https://google.com',
  target:'_blank'
},
'Click to see magic'
)

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
<App/>

  )
