import React, { useState, useContext, useEffect, useCallback } from 'react';

const AppContext = React.createContext();

// const getStorageTheme = () => {
//   let theme = 'light-theme';
//   if (localStorage.getItem('theme')) {
//     theme = localStorage.getItem('theme');
//   }
//   return theme;
// };

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light-theme');

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    console.log(isSidebarOpen);
  };

  // useEffect(() => {
  //   document.documentElement.className = theme;
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
