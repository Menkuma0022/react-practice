import './WordPopup.css'

function WordPopup({word}) {
  if( word === null) return null
  const popupClass = word === 'すき' ? 'word-popup--like' : 'word-popup--dislike'
return (
  <p className={`word-popup ${popupClass}`}>{word}</p>
  )
}

export default WordPopup
