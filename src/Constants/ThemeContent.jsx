import React, { createContext, useContext, useState } from "react";
import { ProductBoxData } from "./data";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
  const [activeBar, setActiveBar] = useState(false);
  const [barInfoStates, setBarInfoStates] = useState({}); // Object to track state for each ul
  const [activeLogin, setActiveLogin] = useState(false);


//   Sotib olinayotganda bosilgan productni torib olish va joatish 

  const [dbData, setDbData] = useState(ProductBoxData)

  const [clickedID, setClickedID] = useState([]);

  const handleBuyProduct = (ID, e) => {
    e.preventDefault();
    console.log('db Data buuuuu', dbData)
    console.log("Button clicked for product ID:", ID); // Debugging
    
    const newProduct = dbData?.find((item) => item.id === ID);
      setClickedID(prevState => [...prevState, newProduct]);
      
    console.log("Updated Cart Items:", clickedID); // Debugging
  };
   
  
  


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
    <ThemeContext.Provider value={{activeCart,clickedID,handleBuyProduct,setClickedID,handleActiveCart, setListProductActive, handleListProductActive, listProductActive, activeBar,handleLeftMenuClick, leftMenuClick, handleActiveBar, handleLogin , activeLogin , barInfoStates, handleBarInfo }}>
      {children}
    </ThemeContext.Provider>
  );
};
