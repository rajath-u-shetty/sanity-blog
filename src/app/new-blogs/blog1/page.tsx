"use client"
import React, { useEffect, useState } from 'react'

const Page = () => {
  
  const [value, setValue] = useState(0)

  function incr(){
    setValue(val=>val+1)
  }
  function decr(){
    setValue(val=>val-1)
  }

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => console.log(json))
  },[])

  return (
    <h1>
      {value}
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
    </h1>
  )
}

export default Page