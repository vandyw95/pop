import { Menu, MenuItem, MenuIcon } from './styles';

import { useNavbarEngine } from './helpers';

import { MENUS } from './constants';

function Navbar() {
  const { selectedMenu, handleClickMenu } = useNavbarEngine();

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[selectedMenu]}
      onClick={handleClickMenu}
    >
      {MENUS.map(({ id, label, icon }) => (
        <MenuItem key={id}>
          {icon && <MenuIcon type={icon} />}
          {label}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default Navbar;
