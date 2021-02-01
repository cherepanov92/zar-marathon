import React from 'react';
import cn from 'classnames';

import style from './style.module.css';

const Header = ({ title, onClickButton, children }) => {

  const handleClick = () => {
    onClickButton && onClickButton('game');
  }

  return (
    <header className={cn(style.root)}>
      <div className={cn(style.forest)} />
      <div className={cn(style.container)}>
        <h1>{title}</h1>
        {children}
        <button onClick={handleClick}>
            Start game
        </button>
      </div>
    </header>
  )
}

export default Header;