import { WEAPON_TYPES } from "../data/weapons"

function TypeSelect ({value,onChange}){
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