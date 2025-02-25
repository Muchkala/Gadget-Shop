import React from "react";
import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import NavBottom from "../../Components/Navbar-bottom/NavBottom";
import { ThemeProvider, useTheme } from "../../Constants/ThemeContent";
import BarLeft from "../../Components/Navbar/BarLeft/BarLeft";
import Header from "./Header/Header";
import Main from "./Main/Main";
import ReviewsInstagramSection from "../../Components/ReviewsInstagramSection/ReviewsInstagramSection";
import Partners from "../../Components/Partners/Partners";
import News from "../../Components/News/News";
import BigInfo from "../../Components/BigInfo/BigInfo";
import Footer from "./Footer/Footer";
import LogIN from "../../Components/LogIN/LogIN"; // Import LogIN

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}

function HomeContent() {
  const { activeLogin } = useTheme();

  return (
    <div className="Home">
      <Navbar />
      <NavBottom />
      <BarLeft />
      {activeLogin && <LogIN />} {/* Conditionally render LogIN */}
      <Header />
      <Main />
      <ReviewsInstagramSection />
      <Partners />
      <News />
      <BigInfo />
      <Footer />
    </div>
  );
}
