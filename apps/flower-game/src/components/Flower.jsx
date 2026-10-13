import Petal from './Petal'
import centerImg from '../assets/flower/center.png'

function Flower({ petals,onPetalClick }) {
  return (
    <div className="flower">
      {petals.map((petal) => (
        <Petal 
            key={petal.id} 
            angle={petal.angle} 
            status={petal.status}
             onClick={() => onPetalClick(petal.id)}
        />
      ))}
      <img className="flower-center" src={centerImg} alt="" />
    </div>
  )
}

export default Flower
