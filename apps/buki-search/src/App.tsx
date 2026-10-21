import { useState } from 'react'
import { WEAPONS } from './data/weapons'
import {filterWeapons} from './utils/filterWeapons'
import { sortWeapons } from './utils/sortWeapons'
import { searchWeapons } from './utils/searchWeapons'
import TypeSelect from './components/TypeSelect'
import WeaponList from './components/WeaponList'
import SortSelect from './components/SortSelect'
import SearchInput from './components/SearchInput'

function App() {
  const [selectedType, setSelectedType] = useState('all')
  const [sortType, setSortType] = useState<'default' | 'name'>('default')
  const [keyword, setKeyword] = useState('')

  const filteredWeapons = filterWeapons(WEAPONS,selectedType)
  const searchedWeapons = searchWeapons(filteredWeapons,keyword)
  const sortedWeapons = sortWeapons(searchedWeapons, sortType)

  return (
    <>
      <h1>ブキ検索</h1>
      <p className="subtitle">（非公式ファンサイト）</p>
      <SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
      <TypeSelect value={selectedType} onChange={(e) => setSelectedType(e.target.value)} />
      <SortSelect value={sortType} onChange={(e) => setSortType(e.target.value as 'default' | 'name')}/>
      <WeaponList weapons={sortedWeapons}/>
      <footer>
        <p>このサイトは個人が学習のために作った非公式のファンサイトで、任天堂株式会社とは関係ありません。「スプラトゥーン」は任天堂の商標です。ブキのデータは学習用のサンプルで、実際のゲームと異なる場合があります。
        </p>
      </footer>
    </>
  )
}

export default App
