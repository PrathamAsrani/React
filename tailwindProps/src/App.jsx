import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const data = {
    name: "Pratham Asrani",
    Age: 21,
  };
  const details = {
    name: "I am a User",
    Age: 20,
  };
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card props_object_attr_1 = "one" props_object_attr_2 = "two" props_object_attr_3 = {data || {name: "User", Age: 20}} props_object_attr_4 = {arr} btnTxt = "Click Me"/>
      <Card props_object_attr_1 = "one" props_object_attr_2 = "two" props_object_attr_3 = {details} props_object_attr_4 = {arr} btnTxt = "Press Me"/>
    </>
  )
}

export default App
