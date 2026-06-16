import React from 'react'
// Make sure this path matches where your K.jpeg file lives
import KingImage from '../assets/shutu.png'

const Counter = () => {
    const [count , setCount] = React.useState(0)

    const increment = () => {
        // Only allows incrementing if the current count is 10 or less
        // This caps the maximum possible count value at 11
        if (count <= 10) {
            setCount(count + 1)
        }
    }

    const dec = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    
    const res = () =>{
        setCount(0)
    }

    return (
        <>
            <h1>Counter APP</h1>
            <h2>Count : {count}</h2>
            <button onClick={increment}>Increment</button><br></br>
            <button onClick={dec}>Decrement</button><br></br>
            <button onClick={res}>Reset</button>

            {/* Else condition: displays the photo only when count goes above 10 */}
            {count > 10 && (
                <div style={{ marginTop: '20px' }}>
                    <img src={KingImage} alt="King" style={{ maxWidth: '250px' }} />
                </div>
            )}
        </>
    )
}

export default Counter