import React from "react";
import ReactDOM from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";


function createEmoji(emojipedia){
  return (
    <Emoji 
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      definition={emojipedia.meaning}
    />
  )
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEmoji)};
      </dl>
   
    </div>
  )
    
}

export default App;
