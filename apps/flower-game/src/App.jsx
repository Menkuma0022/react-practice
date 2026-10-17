import './App.css'
import { useState } from 'react'
import { createPetals ,getWord,getRandomPetalCount} from './utils/petals'
import Flower from './components/Flower'
import TitleScreen from './components/TitleScreen'
import WordPopup from './components/WordPopup'
import ResultScreen from './components/ResultScreen'


function App() {
  const [screen, setScreen] = useState('title')
  const [petals, setPetals] = useState(createPetals(getRandomPetalCount()))
  const removedCount = petals.filter(p => p.status !== 'attached').length
  const lastWord = getWord(removedCount)

  function handlePetalClick(id) {
    const target = petals.find((petal) => petal.id === id)
    if (target.status !== 'attached') return

    setPetals((prev) => prev.map((petal) => {   
      if (petal.id === id) {
        return {
          ...petal,
          status: 'falling',
        }
      }
      return petal;
    }))
  }

  function handleFallEnd(id) {
      setPetals((prev) => prev.map((petal) => {   
      if (petal.id === id) {
        return {
          ...petal,
          status: 'gone',
        }
      }
      return petal;
    })) 
  }

  function handleBackToTitle() {
      setScreen('title')
  }

  const handleStart = () => {
    setScreen('game')
    setPetals(createPetals(getRandomPetalCount()))
  }
  const handleRetry = () => {setPetals(createPetals(getRandomPetalCount()))}

  const allGone = petals.every((petal) => petal.status  === 'gone' )

if(screen ==='title'){
   return ( 
      <div className="app">
        <TitleScreen  onStart={handleStart} />
      </div>
    )
}

  if(allGone){
    return (
      <div className="app">
        <ResultScreen result={lastWord} onRetry={handleRetry} onBackToTitle={handleBackToTitle}></ResultScreen>
      </div>
    )
  }
return (
      <div className="app">
        <div className='game-stage'>
          <Flower petals={petals} onPetalClick={handlePetalClick} onFallEnd={handleFallEnd} />
          <WordPopup word={lastWord} key={removedCount}></WordPopup>
        </div>
      </div>
  )
}

export default App
