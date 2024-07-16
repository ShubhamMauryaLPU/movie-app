import { useEffect, useState } from "react";
import FirstPage from "../Componets/FirstPage";
import Footer from "../Componets/Footer/Footer";
import LoginRegister from "../Componets/LoginPage/LoginRegister";
import "./App.css";
function App() {
  const current_theme=localStorage.getItem("current_theme");
  const [theme,setTheme]=useState(current_theme?current_theme:"light");
  useEffect(()=>{
    localStorage.setItem("current_theme",theme);
  },[theme]);
  return (
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
}

export default App;
