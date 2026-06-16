import React from 'react'
import Childc from './Childc'
import KImg from '../assets/K.jpeg'
const ParentC = () => {
  return (
    <>
    <h1>ParentC</h1>
    <img src={KImg} alt="Hero Description"></img>
    <Childc name = "" dept = "CSE"></Childc>
    </>
  )
}

export default ParentC