import { useState } from 'react'; 

import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader  = () => {
  const [isActiveMenu, setActiveMenu] = useState(false)
  const handleToggleMenuActive = () => {
    setActiveMenu(!isActiveMenu);
  }

  return (
    <>
      <Menu isActiveMenu={isActiveMenu} />
      <NavBar isActiveMenu={isActiveMenu} toggleMenuActive={handleToggleMenuActive} />
    </>
  )
}

export default MenuHeader;