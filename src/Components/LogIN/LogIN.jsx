import React, { useEffect, useState } from "react";
import "./LogIN.scss";
import UniLogbutton from "./UniLogbutton/UniLogbutton";
import { useTheme } from "../../Constants/ThemeContent";
import MiniLogLink from "./MiniLogLink/MiniLogLink";
import { IoCloseOutline } from "react-icons/io5";
import LogWithPart from "./LogWithPart/LogWithPart";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function LogIN() {
  const { handleLogin } = useTheme();
  const [value, setValue] = useState()

  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  return (
    <div className="LogIN-overlay" onClick={handleLogin}>
      <div className="LogIN" onClick={(e) => e.stopPropagation()}>
        <div className="nameClose align-items-center">
          <h5>Вход</h5>
          <button onClick={handleLogin} className="close-btn"><IoCloseOutline /></button>
        </div>
        <div className="LogInBody">
          <PhoneInput
            placeholder="Ваш номер телефона"
            value={value}
            onChange={setValue}/>
          <input type="password" placeholder="Пароль" />
          <MiniLogLink text={"Забыли пароль?"} />
          <UniLogbutton text={'ВОЙТИ'}/>
        </div>
        <LogWithPart />
        <MiniLogLink text={"Зарегистрироваться"} />
      </div>
    </div>
  );
}
