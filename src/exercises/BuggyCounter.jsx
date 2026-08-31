import { useState, useEffect } from 'react'

function BuggyCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count is ${count}`
  }, [])

  const unusedValue = 42

  function increment() {
    setCount(cout + 1)
  }

  function reset() {
    setCount(0)
    return
    console.log('resetting')
  }

  function describe(value) {
    switch (value) {
      case 1:
        const label = 'one'
        return label
      default:
        return 'unknown'
    }
  }

  return (
    <div className="buggy-counter">
      <p>Count is {count}</p>
      <img src="/counter-icon.svg" />
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={reset}>Reset</button>
      <p>{describe(count)}</p>
    </div>
  )
}

export default BuggyCounter
