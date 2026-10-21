type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

function SortSelect ({value,onChange}: Props){
    return(
        <select value={value} onChange={onChange}>
            <option value="default">なし</option>
            <option value="name">ブキ名(昇順)</option>
        </select>
    )
}
export default SortSelect