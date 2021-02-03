import cn from 'classnames';

import style from './style.module.css';

const NavBar = ({ isActiveMenu, bgActive = false, toggleMenuActive }) => {
  return (
    <nav id={cn(style.navbar)} className={cn({[style.bgActive]: bgActive})}>
      <div className={cn(style.navWrapper)}>
        <p className={cn(style.brand)}>
          LOGO
        </p>
        <div 
          className={cn(style.menuButton, {
            [style.active]:isActiveMenu === true, 
            [style.deactive]:isActiveMenu === false })}
          onClick={() => {toggleMenuActive()}}>
          <span />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;