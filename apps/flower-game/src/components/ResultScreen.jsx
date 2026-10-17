import ribbonImg from '../assets/ui/deco-ribbon.png'
import vineImg from '../assets/ui/deco-vine.png'
import './ResultScreen.css'

function ResultScreen({ result, onRetry, onBackToTitle }) {
  const wordClass = result === 'すき' ? 'result-word result-word--like' : 'result-word result-word--dislike'
  const message = result === 'すき' ? 'きっと うまくいくよ' : 'また 占ってみよう'

  return (
    <div className="result-screen">
      <div className="result-body">
        <img className="result-ribbon" src={ribbonImg} alt="" />
        <p className="result-lead">さいごの1まいは</p>
        <p className={wordClass}>{result}</p>
        <p className="result-message">{message}</p>

        <div className="result-vines">
          <img className="result-vine" src={vineImg} alt="" />
          <img className="result-vine result-vine--flip" src={vineImg} alt="" />
        </div>
      </div>

      <div className="result-actions">
        <button className='retry-btn' onClick={onRetry}>もう一度</button>
        <button className='back-link' onClick={onBackToTitle}>タイトルへ</button>
      </div>
    </div>
  )
}

export default ResultScreen
