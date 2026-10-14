import petalImg from '../assets/flower/petal.png'
import './Petal.css'

function Petal({ angle, status, onClick ,onFallEnd}) {
  const armClass = status === 'falling' ? 'petal-arm petal-arm--falling' : 'petal-arm'
  if (status === 'gone') return null
    return (
    <div 
      className={armClass}
      style={{transform: `rotate(${angle}deg)`}}
      onAnimationEnd={onFallEnd}
    >
      <img className="petal" src={petalImg} alt="" onClick={onClick}/>
    </div>
  )
}

export default Petal
