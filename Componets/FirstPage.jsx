import Navbar from "./Header/Navbar";
import Body from "./Header/Body";
import "./FirstPage.css";
export default function FirstPage({ theme, setTheme }) {
  return (
    <div className="mainDiv">
      <Navbar theme={theme} setTheme={setTheme} />
      <Body theme={theme} />
    </div>
  );
}
