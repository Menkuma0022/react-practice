type Props = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchInput ({value,onChange}: Props){
    return(
        <input value={value} type="text" placeholder="ブキ名で検索" onChange={onChange}></input>
    )
}
export default SearchInput