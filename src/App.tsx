import { useState } from 'react'
// The following imports are not currently used in the component's JSX:
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(0) // Assuming you intend to use a counter

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Tailwind v4 is working!</h1>
      {/* You can use the 'count' state here, for example: */}
      {/* <button onClick={() => setCount((c) => c + 1)}>Count is {count}</button> */}
    </div>
  )
}

export default App
