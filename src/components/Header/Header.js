import cn from 'classnames';

import style from './style.module.css';

const Header = ({ title, children }) => {
  return (
    <header className={cn(style.root)}>
      <div className={cn(style.forest)}/>
      <div className={cn(style.silhouette )}/>
      <div className={cn(style.moon)}/>
      <div className={cn(style.container)}>
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  )
}

export default Header;