import React from 'react'
import KImg from '../assets/K.jpeg'

const UseEffectexample = () => {
    const [count , setCount] = React.useState(0)
    React.useEffect(() => {
        console.log("Use effect is Active")

    },[count])
  return (
   <>
   <h1>UseEffect Example</h1>
   <h2>Count : {count}</h2>
   <button onClick={() => setCount(count + 1)}>Add</button>
   <button onClick={() => setCount(0)}>Reset</button>
   <img src={KImg} alt="Image" />
   </>
  )
}

export default UseEffectexample