import React from 'react';
import cn from 'classnames';

import style from './style.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={cn(style.wrapper)}>
        <p>Черепанов Артём</p>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  )
}

export default Footer;
