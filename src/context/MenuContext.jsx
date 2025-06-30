import { createContext, useContext, useState, useEffect } from 'react';
import useAxios from '../custom/useAxios';

const MenuContext = createContext();

const useMenu = () => useContext(MenuContext);
export default useMenu;

export const MenuProvider = ({ children }) => {
  const {
    data: menu,
    loading: menunLoading,
    error: menuError,
  } = useAxios('https://tabletop-backend.vercel.app/api/menu');

  const {
    data: order,
    loading: orderLoading,
    error: orderError,
  } = useAxios('https://tabletop-backend.vercel.app/api/order');

  const [cartItems, setCartItems] = useState([]);

  const [menuItems, setMenuItems] = useState(() => {
    const localMenu = localStorage.getItem('menu');
    return localMenu ? JSON.parse(localMenu) : [];
  });

  useEffect(() => {
    if (menu.length > 0) {
      localStorage.setItem('menu', JSON.stringify(menu));
    }
  }, [menu]);

  const addToCart = (menuItem) => {
    setCartItems([...cartItems, menuItem]);
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        menunLoading,
        menuError,
        menuItems,
        addToCart,
        cartItems,
        order,
        orderLoading,
        orderError,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
