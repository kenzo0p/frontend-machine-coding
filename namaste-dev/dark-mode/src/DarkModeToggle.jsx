import React, { useState } from 'react';
function DarkModeToggle() {
  const [theme, setTheme] = useState(false);
  const handleClick = () => {
    setTheme((prev) => !prev);
    
  }

  return (
    <div className={`container ${theme  ? "dark-mode" : "light-mode"}`} >
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label  className="switch">
          <input onChange={handleClick} type="checkbox" checked={theme}  />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{theme ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;