import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <h1>StudyHub Platform Under Construction</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count Down Starts {count}
        </button>
        <p>
         Wait Patiently For Something Amazing
        </p>
      </div>

    </>
  )
}

export default App
