import './App.css'
import {useState} from 'react';
function App() {
  let [counter, setCounter] = useState(15);
  const Add = () => {
    if(counter < 20) {
      counter++;
      setCounter(counter);
    }
  }
  const Reduce = () => {
    if(counter >= 1){
      counter--;
      setCounter(counter);  
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={Add}>Increment {counter}</button>
      <br />
      <br />
      <button onClick={Reduce}>Decrement {counter}</button>
      <footer>
        {counter}
      </footer>
    </>
  )
}

export default App
