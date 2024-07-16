import { useEffect, useState } from "react";
import Navbar from "../Componets/Header/Navbar";
import Footer from "../Componets/Header/Footer";
import FirstPage from "../Componets/FirstPage";
function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <>
      <div className={`container ${theme}`}>
        <FirstPage theme={theme} setTheme={setTheme} />
      </div>
      <div>
        <Footer theme={theme} />{" "}
      </div>
    </>
  );
}

export default App;
