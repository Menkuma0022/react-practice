import Petal from './Petal'
import centerImg from '../assets/flower/center.png'
import leafImg from '../assets/flower/leaf.png'
import leaf2Img from '../assets/flower/leaf-2.png'
import sepalsImg from '../assets/flower/sepals.png'
import './Flower.css'

function Flower({ petals,onPetalClick,onFallEnd }) {
  return (
    <div className="flower">
      <div className="flower-stem" />
      <img className="flower-leaf" src={leafImg} alt="" />
      <img className="flower-leaf-2" src={leaf2Img} alt="" />
      <img className="flower-sepals" src={sepalsImg} alt="" />
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
