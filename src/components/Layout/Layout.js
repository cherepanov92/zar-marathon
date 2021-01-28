import React from 'react';
import style from './style.module.css';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
  return (
    <section className={`${style.root}`} id={ id }>
      <div 
        className={`${style.wrapper}`} 
        style={{
          backgroundImage: urlBg ? `url(${urlBg})`: null,
          backgroundColor: colorBg ? colorBg: null
        }}
      >
        <article>
          <div className={`${style.title}`}>
            <h3>{ title }</h3>
            <span className={`${style.separator}`}></span>
          </div>
          <div className={`${style.descr} ${style.full}`}>
            <p>{ descr }</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;