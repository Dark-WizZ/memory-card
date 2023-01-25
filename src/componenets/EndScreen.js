import Scores from "./Scores"

function EndScreen(props){
  return<div className="end_screen">
    <Scores score={props.score} hiScore={props.hiScore} />
    <Greeting isWon={props.isWon} />
    <div>You clicked same emoji twice!</div>
    <button className='replay_btn' onClick={props.replayClk}>replay</button>
  </div>
}

function Greeting(props){
  return (props.isWon)? <div className='greet won'>
    Big Brain, you Won!...
  </div>:
  <div className="greet lose">
    You lose dumbass...
  </div>
}

export default EndScreen