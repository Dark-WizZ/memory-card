function Scores(props){
  return <div className="scores">
    <div className="score">Score: {props.score}</div>
    <div className="high_score">High Score: {props.hiScore}</div>
  </div>
}

export default Scores;