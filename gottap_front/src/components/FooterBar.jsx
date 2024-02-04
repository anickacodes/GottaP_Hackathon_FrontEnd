// Footer bar has link to About
// Footer bar has link to copyright and date

import {Link} from 'react-router-dom'
import "./FooterBar.css";

const FooterBar = () => {
  return (
    <div className="flex-container">
      <div className="about">
        <Link to='/About'>About</Link>
      </div>
      <div className="copyright">Copyright 2024</div>
    </div>
  );
};

export default FooterBar;

