import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    // get the current value out of local storage
    const curValue = JSON.parse(window.localStorage.getItem("dark-mode"));
    // set the opposite of the current value in local storage
    window.localStorage.setItem("dark-mode", JSON.stringify(!curValue));
    // set the opposite of current value into state
    setDarkMode(!curValue);
  };

  return (
    <label className="toggle-switch">
      <span role="img" aria-label="moon">
        🌜
      </span>
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="slider"></span>
      <span role="img" aria-label="sun">
        🌞
      </span>
    </label>
  );
};

export default DarkModeToggle;
