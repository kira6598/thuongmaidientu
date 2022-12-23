
import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import Header from './conponent1/Header.js';
import HomePage from './page/HomePage.js';

import { Helmet } from 'react-helmet-async';
import Dangky from './page/Dangky.js';
import Page404 from './page/Page404.js';
import Dangnhap from './page/Dangnhap.js';
import Footer from './conponent1/Footer.js'
import Contact from './page/Contact.js'
import LaptopAcer from './page/LaptopAcer.js';
import LaptopAsus from './page/LaptopAsus.js';
import LaptopDell from './page/LaptopDell.js';
import LaptopMsi from './page/LaptopMsi.js';
import Laptop from './page/Laptop.js';
import PCGaming from './page/PCGaming.js';
import PCGamingMiddle from './page/PCGamingMiddle.js';
import PCLuxuryGaming from './page/PCLuxuryGaming.js';
import HighEndPCGaming from './page/HighEndPCGaming'
import PCWork from './page/PCWork.js';
import PCWorkIntel from './page/PCWorkIntel.js';
import PCWorkRyzen from './page/PCWorkRyzen';
import Linhkien from './page/Linhkien.js';
import Ram from './page/RAM.js';
import CPU from './page/CPU.js';
import Cart from './page/Cart.js';




function App() {


  return (
     // eslint-disable-next-line
    <React.Fragment>
      <Helmet>
      <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/jquery.bxslider.min.js"></script>
    <script src="js/fancybox/fancybox.js"></script>
    <script src="js/fancybox/helpers/jquery.fancybox-thumbs.js"></script>
    <script src="js/jquery.flexslider-min.js"></script>
    <script src="js/swiper.jquery.min.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/progressbar.min.js"></script>
    <script src="js/ion.rangeSlider.min.js"></script>
    <script src="js/chosen.jquery.min.js"></script>
    <script src="js/jQuery.Brazzers-Carousel.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhAYvx0GmLyN5hlf6Uv_e9pPvUT3YpozE"></script>
    <script src="js/gmap.js"></script>    
      </Helmet>
      
        <Header/>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/dangnhap' element={<Dangnhap/>}/>
            <Route path='/dangky' element={<Dangky/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/laptop' element={<Laptop/>}/>
            <Route path='/laptopAcer' element={<LaptopAcer/>}/>
            <Route path='/laptopAsus' element={<LaptopAsus/>}/>
            <Route path='/laptopDell' element={<LaptopDell/>}/>
            <Route path='/laptopMsi' element={<LaptopMsi/>}/>
            <Route path='/PCG' element={<PCGaming/>}/>
            <Route path='/PCtrung' element={<PCGamingMiddle/>}/>
            <Route path='/PCCao' element={<PCLuxuryGaming/>}/>
            <Route path='/PCSieuCao' element={<HighEndPCGaming/>}/>
            <Route path='/PCW' element={<PCWork/>}/>
            <Route path='/PCWIntel' element={<PCWorkIntel/>}/>
            <Route path='/PCRyzen' element={<PCWorkRyzen/>}/>
            <Route path='/linhkien' element={<Linhkien/>}/>
            <Route path='/RAM' element={<Ram/>}/>
            <Route path='/CPU' element={<CPU/>}/>
             <Route path='/page404' element={<Page404/>}/>
             <Route path='cart' element={<Cart/>}/>
            
           
            
            
           

        </Routes>
        <Footer/>      
       
   
    </React.Fragment>
    
  )}

export default App;
