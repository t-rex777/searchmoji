import React, { useState } from "react";
import "./styles.css";

const emojipedia = {
  "🤣": "Rolling on the Floor Laughing",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "😍": "Smiling Face with Heart-Eyes",
  "😋": "Face Savoring Food",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "🤐": "Zipper-Mouth Face"
};

export default function App() {
  const emojis = Object.keys(emojipedia);
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Rolling on the Floor Laughing");
  const handleChange = (e) => {
    const emoji = e.target.value;
    setEmoji(emoji);
    if (emoji in emojipedia) {
      setMeaning(emojipedia[emoji]);
    } else {
      setMeaning("Unable to find this emoji!");
    }
  };
  const emojiClickHandler = (emoji) => {
    setMeaning(emojipedia[emoji]);
  };
  return (
    <div className="App">
      <h1>Welcome to Searchmoji</h1>
      <h2>Start searching to see some magic happen!</h2>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search your emoji"
      />
      <br />
      <h1> {emoji}</h1>
      <h3>{meaning}</h3> <br />
      {emojis.map((emoji, i) => (
        <span key={i} onClick={() => emojiClickHandler(emoji)}>
          {emoji}
        </span>
      ))}
    </div>
  );
}
