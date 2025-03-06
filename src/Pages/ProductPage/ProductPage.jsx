import React from 'react'
import { ThemeProvider } from "../../Constants/ThemeContent";
import Navbar from '../../Components/Navbar/Navbar'
import NavBottom from '../../Components/Navbar-bottom/NavBottom'
import BarLeft from '../../Components/Navbar/BarLeft/BarLeft'
import ShowWhere from '../../Components/ShowWhere/ShowWhere';
import ProductTitle from '../../Components/ProductTitle/ProductTitle';
import ProductTabs from '../../Components/ProductTabs/ProductTabs';
import DetailsCarousel from '../../Components/DetailCarousel/DetailsCarousel';

export default function ProductPage() {
  return (
    <div className='ProductPage'>
        <ThemeProvider >
            <Navbar />
            <NavBottom/>
            <BarLeft/>
        </ThemeProvider>
        <ShowWhere/>
        <ProductTitle/>
        <ProductTabs/>
        <DetailsCarousel/>
    </div>
  )
}
