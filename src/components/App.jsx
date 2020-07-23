import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(emojiEntry => <Entry key={emojiEntry.id} name={emojiEntry.name} emoji={emojiEntry.emoji} meaning={emojiEntry.meaning} />)}
      </dl>
    </div>
  );
}

export default App;
