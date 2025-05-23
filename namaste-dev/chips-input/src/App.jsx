import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [chips, setChips] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim() != "") {
      const newChip = {
        id: id,
        title: input.trim(),
      };

      setChips([...chips, newChip]);
      setId((prev) => prev + 1);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const chip = chips.filter((chip) => chip.id !== id);
    setChips(chip);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        value={input}
        onKeyDown={handleKeyPress}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {chips.map((chip) => (
          <div
            key={chip.id}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5px",
              backgroundColor: "lightgray",
              borderRadius: "20px",
              padding: "5px 10px",
            }}
          >
            <span>{chip.title}</span>
            <button
              style={{
                background: "transparent",
                border: "none",
                marginLeft: "8px",
                cursor: "pointer",
                color: "red",
              }}
              onClick={() => handleDelete(chip.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
