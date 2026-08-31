import { useState, useEffect } from 'react'

function BuggyCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count is ${count}`
  }, [count])

  // Bug: declared but never used
  const unusedValue = 42

  function increment() {
    // Bug: `cout` is not defined anywhere (typo for `count`)
    setCount(cout + 1)
  }

  function reset() {
    setCount(0)
    return
    // Bug: this line can never run
    console.log('resetting')
  }

  function describe(value) {
    switch (value) {
      // Bug: lexical declaration in a case block without braces
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
