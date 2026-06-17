import React from 'react'
import KImg from '../assets/K.jpeg'

const Messi = () => {
  const [showImage, setShowImage] = React.useState(false)

  return (
    <>
      <h1>UseEffect Example</h1>

      <button onClick={() => setShowImage(true)}>
        Show Image
      </button>

      {showImage && (
        <img src={KImg} alt="Image" width="300" />
      )}
    </>
  )
}

export default Messi