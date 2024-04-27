import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
      <h1>Custom App!</h1>
    </>
  )
}

const customElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  Children: 'Click on me to Visit google'
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'> Visit google</a>
)

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'click me to go to goole.com'
)


/*
ReactDOM.createRoot(document.getElementById('root')).render(
  MyApp()
)
*/


ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
  // AnotherElement
)

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyApp />
  </React.StrictMode>,
)
*/