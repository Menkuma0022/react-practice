import { useState } from 'react'
import './App.css'
import { WEAPONS } from './data/weapons.js'
import {filterWeapons} from './utils/filterWeapons.js'
import { sortWeapons } from './utils/sortWeapons.js'
import TypeSelect from './components/TypeSelect.jsx'
import WeaponList from './components/WeaponList.jsx'
import SortSelect from './components/SortSelect.jsx'

function App() {
  const [selectedType, setSelectedType] = useState('all')
  const [sortType, setSortType] = useState('default')
  const filteredWeapons = filterWeapons(WEAPONS,selectedType)
  const sortedWeapons = sortWeapons(filteredWeapons, sortType)

  return (
    <>
      <h1>ブキ検索</h1>
      <TypeSelect value={selectedType} onChange={(e) => setSelectedType(e.target.value)} />
      <SortSelect value={sortType} onChange={(e) => setSortType(e.target.value)}/>
      <WeaponList weapons={sortedWeapons}/>
    </>
  )
}

export default App
