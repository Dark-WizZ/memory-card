
import uni2EmoName from './unicodeToEmojiName';


const emoCodes=[
  '1F47D', '1F601', '1F602',
  '1F603', '1F604', '1F605',
  '1F606', '1F607', '1F608',
  '1F609', '1F60B', '1F60D',
  '1F60E', '1F611', '1F618',
  '1F642', '1F643', '1F644',
  '1F910', '1F914', '1F920',
  '1F921', '1F923', '1F927',
  '1F929', '1F92A', '1F92B',
  '1F92C', '1F92D', '1F92E',
  '1F92F', '1F970', '1F971',
  '1F972', '1F973', '1F975',
  '1F976', '1F978', '1F979',
  '1FAE0', '1FAE1', '1FAE3'
];
function emojiGen(){
  const emojies = [];
  for(let i=0; i<emoCodes.length; i++){
    const code=[emoCodes[i]];
    emojies.push({
      emoName: uni2EmoName(code),
      src: require(`../emojies/${code}.svg`),
      clicked: false,
    })
  }
  return emojies;
}

export default emojiGen;