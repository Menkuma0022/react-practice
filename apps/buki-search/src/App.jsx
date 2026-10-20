import { useState } from 'react'
import './App.css'
import { WEAPONS } from './data/weapons.js'
import {filterWeapons} from './utils/filterWeapons.js'
import TypeSelect from './components/TypeSelect.jsx'
import WeaponList from './components/WeaponList.jsx'

function App() {
  const [selectedType, setSelectedType] = useState('all')
  const filteredWeapons = filterWeapons(WEAPONS,selectedType)

  function handleChange(e) {
    setSelectedType(e.target.value)
  }

  return (
    <>
      <h1>ブキ検索</h1>
      <TypeSelect value={selectedType} onChange={handleChange} />
      <WeaponList weapons={filteredWeapons}/>
    </>
  )
}

export default App
