import { useState } from "react"
import './Counter.css';



const Counter = () => {
    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        setCount(prev => prev - 1)
    }
    const reset =() => {
        setCount(0);
    }
  return (
    <div className="page-wrapper">

    <div className="counter-container">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={decrement} className="btn btn-red">-1</button>
        <button onClick={increment} className="btn btn-blue">+1</button>        
        <button onClick={reset} className="btn btn-gray">Reset</button> 



    </div>
    </div>
  )
}

export default Counter