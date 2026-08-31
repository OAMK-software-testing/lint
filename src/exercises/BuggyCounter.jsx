import { useState, useEffect } from 'react'

function BuggyCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count is ${count}`
  }, [count])

  useEffect(() => {
    if (count > 5) {
      console.log('count exceeded 5')
    }
  }, [count])

  function increment() {
    setCount(count + 1)
  }

  function reset() {
    setCount(0)
  }

  function describe(value) {
    switch (value) {
      case 1: {
        const label = 'one'
        return label
      }
      default:
        return 'unknown'
    }
  }

  return (
    <div className="buggy-counter">
      <p>Count is {count}</p>
      <img src="/counter-icon.svg" alt="Counter icon" />
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={reset}>Reset</button>
      <p>{describe(count)}</p>
    </div>
  )
}

export default BuggyCounter
