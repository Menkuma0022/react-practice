import petalImg from '../assets/flower/petal.png'

function Petal({ angle, status, onClick }) {
  if (status === 'gone') return null
    return (
    <div className="petal-arm" style={{ transform: `rotate(${angle}deg)` }}>
      <img className="petal" src={petalImg} alt="" onClick={onClick}/>
    </div>
  )
}

export default Petal
