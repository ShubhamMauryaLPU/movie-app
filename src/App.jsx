import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import Navbar from "../Componets/Header/Navbar";
import Footer from "../Componets/Header/Footer";
>>>>>>> ecb51ad618ea98a7e33122cec0cb961c83ea0a83
import FirstPage from "../Componets/FirstPage";
import Footer from "../Componets/Footer/Footer";
import LoginRegister from "../Componets/LoginPage/LoginRegister";
import "./App.css";
function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
<<<<<<< HEAD
    // <>
    //   <div className={`container ${theme}`}>
    //   <FirstPage theme={theme} setTheme={setTheme}/>
    // </div>
    // <div className="footer">
    // <Footer theme={theme}/>
    // </div>
    // </>
    <LoginRegister/>
  )
=======
    <>
      <div className={`container ${theme}`}>
        <FirstPage theme={theme} setTheme={setTheme} />
      </div>
      <div>
        <Footer theme={theme} />{" "}
      </div>
    </>
  );
>>>>>>> ecb51ad618ea98a7e33122cec0cb961c83ea0a83
}

export default App;
