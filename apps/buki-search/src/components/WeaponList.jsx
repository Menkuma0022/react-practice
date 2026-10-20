import './WeaponList.css'

function WeaponList ({weapons}){
    return(
      <div className="table-wrap">
        <table className='weapon-table'>
          <thead>
            <tr>
              <th scope="col">メインウェポン</th>
              <th scope="col">ブキタイプ</th>
              <th scope="col">サブウェポン</th>
              <th scope="col">スペシャル</th>
            </tr>
          </thead>
          <tbody>
            {weapons.map((weapon) => 
              <tr key={weapon.id}>
                <td>{weapon.name}</td>
                <td>{weapon.type}</td>
                <td>{weapon.sub}</td>
                <td>{weapon.special}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
}
export default WeaponList