import ribbonImg from '../assets/ui/deco-ribbon.png'
import vineImg from '../assets/ui/deco-vine.png'
import './TitleScreen.css'

function TitleScreen({onStart}) {
  return (
    <div className='title-screen'>
      <div className='title-header'>
        <p className="title-sub">小さな フラワーゲーム</p>
        <div className="title-line" />
        <h1 className="title-main">花うらない</h1>
      </div>

      <div className="title-howto">
        <img className="howto-ribbon" src={ribbonImg} alt="" />
        <p className="howto-lead">花びらを 1まいずつ タップ</p>
        <p className="howto-text">
          すき、きらい、すき、きらい…<br />
          さいごの1まいで 結果がきまるよ
        </p>
        <div className="howto-vines">
          <img className="howto-vine" src={vineImg} alt="" />
          <img className="howto-vine howto-vine--flip" src={vineImg} alt="" />
        </div>
      </div>

      <button className="start-btn" onClick={onStart}>はじめる<span className="start-btn-arrow">→</span></button>
    </div>
  )
}

export default TitleScreen
