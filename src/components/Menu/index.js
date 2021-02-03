import cn from 'classnames';

import style from './style.module.css';

const MENU = [
  {
    title: "HOME",
    to: "#welcome"
  },
  {
    title: "GAME",
    to: "#game"
  },
  {
    title: "ABOUT",
    to: "#about"
  },
  {
    title: "CONTACT",
    to: "#contact"
  },
]

const Menu = ({ isActiveMenu }) => {
  return (
    <div className={cn(
        style.menuContainer, {
          [style.active]:isActiveMenu === true, 
          [style.deactive]:isActiveMenu === false
        })}>
      <div className={cn(style.overlay)} />
      <div className={cn(style.menuItems)}>
        <ul>
          {MENU.map(({to, title}, index) => (
            <li key={index}>
              <a href={to}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu;