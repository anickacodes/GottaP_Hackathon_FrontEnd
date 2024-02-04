// Footer bar has link to About
// Footer bar has link to copyright and date

import React from "react";
import "./FooterBar.css";

const FooterBar = () => {
  return (
    <div className="flex-container">
      <div className="about">
        <a href="#">About</a>
      </div>
      <div className="copyright">Copyright 2024</div>
    </div>
  );
};

export default FooterBar;
