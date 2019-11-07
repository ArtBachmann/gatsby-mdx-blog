import React, { useState } from 'react'


const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='counter'>
      <h3>click the button if you like the post</h3>
      <h2>likes {count}</h2>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button style={{ display: 'block' }} onClick={() => setCount(count - 1)}>undo liking</button>
    </div>
  )
}

export default Counter
