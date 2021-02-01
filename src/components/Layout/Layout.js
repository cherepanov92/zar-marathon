import React from 'react';
import cn from 'classnames';

import style from './style.module.css';

const Layout = ({id, title, urlBg, colorBg, children}) => {
  return (
    <section 
      className={cn(style.root)}
      id={ id }
      style={{
          backgroundImage: urlBg ? `url(${urlBg})`: null,
          backgroundColor: colorBg ? colorBg: null,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
      }}
    >
      <div 
        className={cn(style.wrapper)}
      >
        <div className={cn(style.title)}>
          <h3>{ title }</h3>
          <span className={cn(style.separator)}></span>
        </div>
        <div className={cn(style.desc, style.full)}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Layout;