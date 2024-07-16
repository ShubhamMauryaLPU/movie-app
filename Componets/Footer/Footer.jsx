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
          Questions? Call{" "}
          <a href="/" className="ft-ul">
            {" "}
            000-800-919-1694
          </a>
        </div>
        <div className="Footer-container">
          <div className="footer-table-main">
            <table className={`footer-table ${changeColor}`}>
              <tbody>
                <tr>
                  {" "}
                  <td colSpan={1.5}>
                    <a href="/">FAQ </a>
                  </td>{" "}
                  <td colSpan={1.5}>
                    {" "}
                    <a href="/">Help Centre</a>
                  </td>
                  <td colSpan={1.5}>
                    {" "}
                    <a href="/">Account </a>
                  </td>
                  <td colSpan={1.5}>
                    {" "}
                    <a href="/">Media Centre</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <a href="/">Investor Relations</a>
                  </td>
                  <td>
                    {" "}
                    <a href="/">Jobs</a>
                  </td>
                  <td>
                    {" "}
                    <a href="/">Ways to Watch</a>
                  </td>
                  <td>
                    {" "}
                    <a href="/">Terms of Use</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <a href="/">Privacy</a>
                  </td>
                  <td>
                    {" "}
                    <a href="/">Cookie Preferences</a>
                  </td>
                  <td>
                    {" "}
                    <a href="/">Corporate Information</a>
                  </td>
                  <td>
                    {" "}
                    <a href="/">Contact Us</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <a href="/">Speed Test</a>
                  </td>
                  <td>
                    {" "}
                    <a href="/">Legal Notices</a>
                  </td>
                  <td>
                    {" "}
                    <a href="/">Only on Netflix</a>
                  </td>
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
