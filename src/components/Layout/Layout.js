import React from 'react';
import style from './style.module.css';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
  return (
    <section className={`${style.root}`} id={ id }>
      <div 
        className="wrapper" 
        style={{
          backgroundImage: urlBg ? `url(${urlBg})`: null,
          backgroundColor: colorBg ? colorBg: null
        }}
      >
        <article>
          <div className="title">
            <h3>{ title }</h3>
            <span className="separator"></span>
          </div>
          <div className={`descr full`}>
            <p>{ descr }</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;