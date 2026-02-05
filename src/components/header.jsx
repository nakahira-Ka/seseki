import React from "react";
import { Link } from "react-router-dom";
import "../css/ress.css";
import "../css/header.css"

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-wrap">
          <ul className="header-nav">
            <li><Link to="/">瀬石温泉</Link></li>
            <li><Link to="/detail">瀬石温泉とは？</Link></li>
            <li><Link to="/access">アクセス</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;