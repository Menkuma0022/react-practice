
function WeaponList ({weapons}){
    return(
        <ul>
        {weapons.map((weapon) => 
          <li key={weapon.id}>{weapon.name},{weapon.type},{weapon.sub},{weapon.special}</li>
        )}
      </ul>
    )
}
export default WeaponList