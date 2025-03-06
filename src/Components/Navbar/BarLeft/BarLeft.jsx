import React from 'react'
import './BarLeft.scss'
import navImg from '../../../Assets/Img/WhiteNavLogo.png'
import { CgClose } from 'react-icons/cg'
import { LiaAngleDownSolid, LiaAngleRightSolid } from 'react-icons/lia'
import { useTheme } from '../../../Constants/ThemeContent'
import { motion } from "framer-motion";
import { BarUL } from '../../../Constants/data'
import INSTA from '../../../Assets/Img/BarINSTA.png'
import FaceBook from '../../../Assets/Img/BarFaceBk.png'
import WhatsUp from '../../../Assets/Img/BarWhatsp.png'
import Telegram from '../../../Assets/Img/BarTelgm.png'
import YouTube from '../../../Assets/Img/BarYoutb.png'
import LinkedIn from '../../../Assets/Img/BarLinkedIn.png'

export default function BarLeft() {
  const { activeBar, handleActiveBar, barInfoStates, handleBarInfo, handleLogin } = useTheme();

  return (
    <div className="BarLeft" style={activeBar ? { left: "0" } : {}}>
      <div className="barTop">
        <img src={navImg} alt="" />
        <CgClose onClick={handleActiveBar} />
      </div>
      <ul>
        <span onClick={handleLogin}>Вход | Регистрация</span>
      </ul>
      {BarUL.map(({ links, id, lis }) => (
        <ul key={id}>
          <span onClick={() => handleBarInfo(id)} style={{ height: "auto" }}>
            {links}
            {barInfoStates[id] ? <LiaAngleDownSolid /> : <LiaAngleRightSolid />}
          </span>
          <motion.div
            initial={{ height: "0px" }}
            animate={{ height: barInfoStates[id] ? "auto" : "0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {lis.map(({ name, id: liId }) => (
              <li key={liId}>{name}</li>
            ))}
          </motion.div>
        </ul>
      ))}
      <ul>
        <span>Контакты</span>
        <li>(067) 11-12-485 - Отдел продаж</li>
        <li>(067) 11-12-485 - Отдел продаж</li>
        <li>(067) 11-12-485 - Отдел продаж</li>
        <li>Днепр <br /> Европейская, 8 (бывшая Миронова 8)</li>
        <li>
          Понедельник-Пятница 9:00-19:00 <br />
          Суббота-Воскресенье: с 9:00-16:00
        </li>
      </ul>
      <ul className="socials">
        <span>Следите за нами</span>
        <li>
          <img src={INSTA} alt="" />
          <img src={FaceBook} alt="" />
          <img src={WhatsUp} alt="" />
          <img src={Telegram} alt="" />
          <img src={YouTube} alt="" />
          <img src={LinkedIn} alt="" />
        </li>
      </ul>
    </div>
  );
}
