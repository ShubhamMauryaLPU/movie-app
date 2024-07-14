import "./Navbar.css";
import React from "react";
import search_b from "../../src/assets/search-b.png";
import search_w from "../../src/assets/search-w.png";
import Button from '@mui/material/Button';
import Sunny from '@mui/icons-material/WbSunny';
import Night from '@mui/icons-material/Nightlight';
export default function Navbar({theme,setTheme}){
    const toggle_mode=()=>{
        theme=="light"?setTheme("dark"):setTheme("light");
    }
    return (
        <div className="navbar">
            
            <h2 className="logo"><i class="fa-solid fa-film"></i>Filmen</h2>
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <img src={theme=="light" ? search_w :search_b} alt="" className="search-icon"/>
            </div>
            <Button variant="contained" className="sign-button">log in</Button>
            <div onClick={toggle_mode} className="toggle-icon">
                {theme === "light" ? <Night/> : <Sunny />}
            </div>
        </div>
        
    );
}