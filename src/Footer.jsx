import "./Footer.css";
import { useState, useEffect } from "react";
function Footer(Theme) {
  const [changeColor, setChangeColor] = useState("drk-color");
  const [bg, setbg] = useState("");
  useEffect(() => {
    if (Theme.theme == "dark") {
      setbg("footer-bg");
      setChangeColor("wh-color");
    } else {
      setbg("");
      setChangeColor("drk-color");
    }
  }, [Theme]);
  return (
    <>
      <div className={`footer-main ${bg}`}>
        <div className={`${changeColor}`}>
          Questions? Call <span className="ft-ul"> 000-800-919-1694</span>
        </div>
        <div className="Footer-container">
          <div className="footer-table-main">
            <table className={`footer-table ${changeColor}`}>
              <tbody>
                <tr>
                  <td colSpan={1.5}>FAQ</td>
                  <td colSpan={1.5}>Help Centre</td>
                  <td colSpan={1.5}>Account</td>
                  <td colSpan={1.5}>Media Centre</td>
                </tr>
                <tr>
                  <td>Investor Relations</td>
                  <td>Jobs</td>
                  <td>Ways to Watch</td>
                  <td>Terms of Use</td>
                </tr>
                <tr>
                  <td>Privacy</td>
                  <td>Cookie Preferences</td>
                  <td>Corporate Information</td>
                  <td>Contact Us</td>
                </tr>
                <tr>
                  <td>Speed Test</td>
                  <td>Legal Notices</td>
                  <td>Only on Netflix</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="chatbot-main">
            <h3>Chatbot</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
