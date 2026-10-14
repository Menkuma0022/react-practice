import petalImg from '../assets/flower/petal.png'
import './Petal.css'

function Petal({ angle, status, sway, onClick, onFallEnd }) {
  if (status === 'gone') return null

  const fallClass = status === 'falling' ? 'petal-fall petal-fall--falling' : 'petal-fall'

  function handleAnimationEnd(e) {
    if (e.animationName === 'petal-drop') onFallEnd()
  }

  return (
    <div
      className={fallClass}
      style={{ '--sway': sway }}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="petal-arm" style={{ transform: `rotate(${angle}deg)` }}>
        <div className="petal-pull">
          <img className="petal" src={petalImg} alt="" onClick={onClick} />
        </div>
      </div>
    </div>
  )
}

export default Petal
