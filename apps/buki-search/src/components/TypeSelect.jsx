
function TypeSelect ({value,onChange}){
    return(
        <select value={value} onChange={onChange}>
            <option value="all">すべて</option>
            <option value="シューター">シューター</option>
            <option value="ローラー">ローラー</option>
            <option value="フデ">フデ</option>
        </select>
    )
}
export default TypeSelect