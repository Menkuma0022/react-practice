import Petal from './Petal'
import centerImg from '../assets/flower/center.png'
import './Flower.css'

function Flower({ petals,onPetalClick,onFallEnd }) {
  return (
    <div className="flower">
      {petals.map((petal) => (
        <Petal 
            key={petal.id} 
            angle={petal.angle} 
            status={petal.status}
            sway={petal.id % 2 === 0 ? 1 : -1}
            onClick={() => onPetalClick(petal.id)}
            onFallEnd ={() => onFallEnd(petal.id)}
        />
      ))}
      <img className="flower-center" src={centerImg} alt="" />
    </div>
  )
}

export default Flower
