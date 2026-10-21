import { useState } from 'react'
import './App.css'
import { WEAPONS } from './data/weapons'
import {filterWeapons} from './utils/filterWeapons'
import { sortWeapons } from './utils/sortWeapons'
import TypeSelect from './components/TypeSelect'
import WeaponList from './components/WeaponList'
import SortSelect from './components/SortSelect'

function App() {
  const [selectedType, setSelectedType] = useState('all')
  const [sortType, setSortType] = useState<'default' | 'name'>('default')
  const filteredWeapons = filterWeapons(WEAPONS,selectedType)
  const sortedWeapons = sortWeapons(filteredWeapons, sortType)

  return (
    <>
      <h1>ブキ検索</h1>
      <TypeSelect value={selectedType} onChange={(e) => setSelectedType(e.target.value)} />
      <SortSelect value={sortType} onChange={(e) => setSortType(e.target.value as 'default' | 'name')}/>
      <WeaponList weapons={sortedWeapons}/>
    </>
  )
}

export default App
