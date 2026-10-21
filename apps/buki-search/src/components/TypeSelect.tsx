import { WEAPON_TYPES } from "../data/weapons"
type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

function TypeSelect ({value,onChange}: Props){
    return(
        <select value={value} onChange={onChange}>
            <option value="all">すべて</option>
            {WEAPON_TYPES.map( (type) => 
                <option key={type} value={type}>{type}</option>
            )}
        </select>
    )
}
export default TypeSelect