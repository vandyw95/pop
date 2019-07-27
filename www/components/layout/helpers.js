import { useState } from 'react';
import { useRouter } from 'next/router';

import { MENU_URL } from './constants';

function getSelectedMenu(route = '') {
  const path = route.split('/')[1];
  return path || 'home';
}

export function useNavbarEngine() {
  const { route, push } = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(getSelectedMenu(route));

  const handleClickMenu = ({ key }) => {
    setSelectedMenu(key);
    push(`${MENU_URL[key]}`);
  };

  return { selectedMenu, handleClickMenu };
}
