import React from 'react';
import style from './style.module.css';

const Layout = ({id, title, urlBg, colorBg, children}) => {
  return (
    <section 
      className={`${style.root}`} 
      id={ id }
      style={{
          backgroundImage: urlBg ? `url(${urlBg})`: null,
          backgroundColor: colorBg ? colorBg: null,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
      }}
    >
      <div 
        className={`${style.wrapper}`} 
      >
        <div className={`${style.title}`}>
          <h3>{ title }</h3>
          <span className={`${style.separator}`}></span>
        </div>
        <div className={`${style.desc} ${style.full}`}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Layout;