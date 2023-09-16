import React from "react";
import { LoginModal } from "./components";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
    console.log("button clicked");
  };

  return (
    <div>
      <div>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <LoginModal />
      </section>
    </div>
  );
};

export default App;
