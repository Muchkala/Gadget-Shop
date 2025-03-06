import React, { createContext, useContext, useState } from "react";
import { ProductBoxData } from "./data";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
  const [activeBar, setActiveBar] = useState(false);
  const [barInfoStates, setBarInfoStates] = useState({}); // Object to track state for each ul
  const [activeLogin, setActiveLogin] = useState(false);


//   Sotib olinayotganda bosilgan productni torib olish va joatish 

  const [dbNewData, setDbNewData] = useState(ProductBoxData)

  const [clickedID, setClickedID] = useState()

  console.log(clickedID)
  console.log(dbNewData)

  const handleBuyProduct = (ID , e) => {
    // e.preventDefault()
    setDbNewData((prev) => prev.filter((item) => item.id !== ID))
  }


//////////////////////////////////////////////////////////////

    const [activeCart , setActiveCart] = useState(false)

    const handleActiveCart = () => {
      setActiveCart((prev) => !prev)
    }

  const [listProductActive, setListProductActive] = useState(false)
  const [leftMenuClick, setLeftMenuClick] = useState()

    const handleListProductActive = () => {
      setListProductActive((prev) => !prev)
    }


    const handleLeftMenuClick = (e) => {
      setLeftMenuClick(e)
    }

  function handleActiveBar() {
    setActiveBar(!activeBar);
  }

  function handleBarInfo(id) {
    setBarInfoStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the clicked ULid
    }));
  }

  function handleLogin() {
    setActiveLogin(!activeLogin);
    setActiveBar(false);
  }


  return (
    <ThemeContext.Provider value={{activeCart,handleBuyProduct,setClickedID,handleActiveCart, setListProductActive, handleListProductActive, listProductActive, activeBar,handleLeftMenuClick, leftMenuClick, handleActiveBar, handleLogin , activeLogin , barInfoStates, handleBarInfo }}>
      {children}
    </ThemeContext.Provider>
  );
};
