import { useState } from 'react'
import './App.css'
import { WEAPONS } from './data/weapons.js'
import {filterWeapons} from './utils/filterWeapons.js'

function App() {
  const selectedType = 'ローラー'
  const filteredWeapon = filterWeapons(WEAPONS,selectedType)
  return (
    <>
      <h1>ブキ検索</h1>
      <ul>
        {filteredWeapon.map((weapon) => 
          <li key={weapon.id}>{weapon.name}</li>
        )}
      </ul>
    </>
  )
}

export default App
