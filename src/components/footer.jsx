import React from "react";
import "../css/ress.css";
import "../css/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-source">
        <p>データ出典</p>
        <ul>
          <li>Open-Meteo</li>
          <li>tide736</li>
        </ul>
      </div>

      <small>&copy; SesekiNavi</small>
    </footer>
  );
};

export default Footer;