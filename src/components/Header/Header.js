import React from 'react';
import style from './style.module.css';

const Header = ({ title, onClickButton, children }) => {

  const handleClick = () => {
    onClickButton && onClickButton('game');
  }

  return (
    <header className={`${style.root}`}>
      <div className={`${style.forest}`} />
      <div className={`${style.container}`}>
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