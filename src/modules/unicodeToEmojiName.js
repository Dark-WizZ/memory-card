import * as emoji from "emoji-api";

function unicodeToEmoji(code){
  let e = emoji.unicodeToEmoji(code)
  return (emoji.get(e))? emoji.get(e).name: "Unkown";
}

export default unicodeToEmoji;