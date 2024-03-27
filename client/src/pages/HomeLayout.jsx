import { Outlet } from "react-router-dom";
import { Navbar, NavbarSmall } from '../components';
import { useState, createContext, useContext } from 'react';

const HomeLayoutContext = createContext();

const HomeLayout = () => {

  // temp
  const user = { name: 'john' };

  const [isShowSidebar, setShowSidebar] = useState(false);


  const toggleSidebar = () => {
    setShowSidebar(!isShowSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <HomeLayoutContext.Provider
      value={{
        user,
        isShowSidebar,
        toggleSidebar,
        logoutUser,
      }}
    >
      <div>  
        {isShowSidebar ?<NavbarSmall /> : <Navbar /> }
        <Outlet />
      </div>
    </HomeLayoutContext.Provider>
  );
};

export const useHomeLayoutContext = () => useContext(HomeLayoutContext);

export default HomeLayout