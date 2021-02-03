import { useState } from 'react'; 

import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader  = () => {
  const [isActiveMenu, setActiveMenu] = useState(null)
  const handleToggleMenuActive = () => {
    setActiveMenu(prevState => !prevState);
  }

  return (
    <>
      <Menu isActiveMenu={isActiveMenu} />
      <NavBar isActiveMenu={isActiveMenu} toggleMenuActive={handleToggleMenuActive} />
    </>
  )
}

export default MenuHeader;