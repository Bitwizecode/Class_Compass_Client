import React, { createContext, useContext, useState } from "react";
export const BottomNavbarContext = createContext(null);
function BottomNavbarContextProvider({ children }) {
  const [bottomNavbar, setBottomNavbar] = useState("/");
  return (
    <BottomNavbarContext.Provider
      value={{
        bottomNavbar,
        setBottomNavbar
      }}
    >
        {children}
    </BottomNavbarContext.Provider>
  );
} 

export function useBottomNavbarContext() {
    const {setBottomNavbar, bottomNavbar} = useContext(BottomNavbarContext);
return{
    setBottomNavbar, bottomNavbar
}
}

export default BottomNavbarContextProvider;
