import emoGen from '../modules/emojies';
import { useEffect, useState } from 'react';
import EndScreen from './EndScreen';
import Scores from './Scores'

function Frame(){
  const [emos, setEmos] = useState(emoGen());
  const cardRender = () => {
    const indices = genUniqNums(3, emos.length);
    let tempCards = [];
    for(let i=0; i<3; i++)
    tempCards.push(emos[indices[i]]);
    return tempCards;
  }

  const arr = cardRender();
  const [cards, setCards] = useState(arr);
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);
  const [end, setEnd] = useState();
  const [isWon, setIsWon] = useState(false);

  useEffect(()=>{
    if(score>hiScore){
      setHiScore(score);
    }
    if(score>=emos.length){
      setIsWon(true);
      return;
    }
    if (clickedCards(cards)>2) setCards(cardRender());
    let c=0;
    cards.forEach(card=>{
      c++;
      console.log(c+"."+card.clicked)
    })
    console.log()
  })

  const replayClk = () => {
    setCards(cardRender);
    setEnd(null);
  }

  const cardClk = (e) => {
    const index = e.target.classList[1];
    if(cards[index].clicked || isWon){
      setScore(0);
      setEmos(emoGen());
      setEnd(<EndScreen replayClk={replayClk} score={score} hiScore={hiScore} isWon={isWon}/>);
      return;
    }
    cards[index].clicked=true;
    setCards(cardRender());
    setScore(score+1);
  }

  return <div className='frame'>
    {end}
    <Scores score={score} hiScore={hiScore} />
    <div className='cards'>
      <div className='card'>
        <img src={cards[0].src} height='200' className='emo_card 0' onClick={cardClk}/>
        <div>{cards[0].emoName}</div>
      </div>
      <div className='card'>
      <img src={cards[1].src} height='200' className='emo_card 1' onClick={cardClk}/>
        <div>{cards[1].emoName}</div>
      </div>
      <div className='card'>
      <img src={cards[2].src} height='200' className='emo_card 2' onClick={cardClk}/>
        <div>{cards[2].emoName}</div>
      </div>
    </div>
    <div>Avoid clicking the same emoji TWICE...</div>
  </div>
}

function random(i){
  return Math.floor(Math.random()*i)
}

function genUniqNums(len, range){
  let result = [];
  while(result.length<=len){
    const num = random(range);
    if(!result.includes(num))
    result.push(num);
  }
  return result;
}

function clickedCards(cards){
  let c=0;
  cards.forEach(card => {
    if(card.clicked)
    c++;
  })
  return c;
}

export default Frame;