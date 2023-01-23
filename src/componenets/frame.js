import img1 from '../emojies/1F47D.svg'
import img2 from '../emojies/1F60D.svg'
const img3 = require('../emojies/1F609.svg').default;

function Frame(){
  return <div>
    <h1>Home</h1>
    <Card img={img1} />
    <Card img={img2} />
    <Card img={img3} />
  </div>
}

function Card(props){
  return(
    <img src={props.img} height='200' />
  )
}

export default Frame;