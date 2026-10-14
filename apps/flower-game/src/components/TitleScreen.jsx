import './TitleScreen.css'

function TitleScreen({onStart}) {
  return (
    <>
        <p className="title-sub">小さな フラワーゲーム</p>
        <div className="title-line" />
        <h1 className="title-main">花うらない</h1>
        <button onClick={onStart}>はじめる</button>
    </>
  )
}

export default TitleScreen
