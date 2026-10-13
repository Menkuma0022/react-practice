import { useState } from 'react'
import Flower from './components/Flower'
import { createPetals ,getWord} from './utils/petals'
import './App.css'

function App() {
  const [screen, setScreen] = useState('game')
  const [petals, setPetals] = useState(createPetals(8))
  const removedCount = petals.filter(p => p.status !== 'attached').length
  const lastWord = getWord(removedCount)

  function handlePetalClick(id) {
    const updatedPetals = petals.map((petal) => {
      if (petal.id === id) {
        return {
          ...petal,
          status: 'gone',
        }
      }
      return petal;
    })
    setPetals(updatedPetals); 
  }

  const allGone = petals.every((petal) => petal.status  === 'gone' )

  if(allGone){
    return (
      <div className="app">
        <h1>結果：{lastWord}</h1>
      </div>
    )
  }
return (
      <div className="app">
        <h1>花占い</h1>
        <Flower petals={petals} onPetalClick={handlePetalClick} />
        <p>{lastWord}</p>
      </div>
  )
}

export default App
