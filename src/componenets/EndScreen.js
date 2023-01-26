import Scores from "./Scores"

function EndScreen(props){
  return<div className="end_screen">
    <Scores score={props.score} hiScore={props.hiScore} />
    <Greeting isWon={props.isWon} />
    <button className='replay_btn' onClick={props.replayClk}>Wanna Replay?</button>
  </div>
}

function Greeting(props){
  return (props.isWon)? <div className='greet won'>
    Big Brain, you Won!...
    <div>congratulation, you have collected all the emoji power...</div>
  </div>:
  <div className="greet lose">
    You lose dumbass...
    <div>You clicked same emoji twice!</div>
  </div>
}

export default EndScreen