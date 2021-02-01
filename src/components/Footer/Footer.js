import React from 'react';
import style from './style.module.css';

const Footer = (props) => {
  return (
    <footer>
      <div className={`${style.wrapper}`}>
        <p>Черепанов Артём</p>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  )
}

export default Footer;
