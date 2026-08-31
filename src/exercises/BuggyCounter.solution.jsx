import { useEffect, useState } from 'react'

function BuggyCounter() {
  const [count, setCount] = useState(0)

  // Fix: `count` is read inside the effect, so it belongs in the dependency array
  useEffect(() => {
    document.title = `Count is ${count}`
  }, [count])

  // Fix: `unusedValue` was never read, so it was removed entirely

  function increment() {
    // Fix: typo `cout` -> `count`
    setCount(count + 1)
  }

  function reset() {
    // Fix: dropped the unreachable console.log that followed the return
    setCount(0)
  }

  function describe(value) {
    switch (value) {
      // Fix: wrap the case body in a block so `label` is scoped to this case only
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
