import cn from 'classnames';

import style from './style.module.css';

const NavBar = ({ isActiveMenu, toggleMenuActive }) => {
  return (
    <nav id={cn(style.navbar)}>
      <div className={cn(style.navWrapper)}>
        <p className={cn(style.brand)}>
          LOGO
        </p>
        <div 
          className={cn(style.menuButton, {[style.active]:isActiveMenu, [style.deactive]:!isActiveMenu })}
          onClick={() => {toggleMenuActive()}}>
          <span />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;