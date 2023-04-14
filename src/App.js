import React,{useState,useEffect} from 'react';
import {Routes,Route, useLocation} from 'react-router-dom'
import NotAuthenticateHeader from './conponent1/NotAuthenticateHeader.js';
import AuthenticationHeader from './conponent1/AuthenticationHeader.js';
import HomePage from './page/HomePage.js';
import { Helmet } from 'react-helmet-async';
import Dangky from './page/Dangky.js';
import NotFound from './NotFoundPage/Page404.js'
import Dangnhap from './dangnhap/Dangnhap1.js';
import Footer from './conponent1/Footer.js'
import Contact from './page/Contact.js'
import LaptopAcer from './page/LaptopAcer.js';
import LaptopAsus from './page/LaptopAsus.js';
import LaptopDell from './page/LaptopDell.js';
import LaptopMsi from './page/LaptopMsi.js';
import ShowPage from './page/ShowPage.js'
import PCGamingMiddle from './page/PCGamingMiddle.js';
import PCLuxuryGaming from './page/PCLuxuryGaming.js';
import HighEndPCGaming from './page/HighEndPCGaming'
import PCWorkIntel from './page/PCWorkIntel.js';
import PCWorkRyzen from './page/PCWorkRyzen';
import Linhkien from './page/Linhkien.js';
import Ram from './page/RAM.js';
import CPU from './page/CPU.js';
import NotAuthenCart from './page/NotAuthenCart.js';
import AuthenCart from './page/AuthenCartTest.js';
import Logout from './conponent1/Logout.js';
import Active from './page/Active.js';
import AddProdroduct from './page/AddProduct';
import Invoice from './Invoie/Invoice.js';  
import Test from './page/testComponent'

function App() {  
  const location= useLocation();

  let hideGeneralHeader = location.pathname!=='/dangnhap'&&location.pathname!=='/bill'
  let logic =sessionStorage.getItem("Authentication")    
  const [authenHeader,setAuthenHeader]=useState(<NotAuthenticateHeader/>)
  const [userCart,setUserCart]=useState(<NotAuthenCart/>)   
  useEffect(()=>{    

      if(logic){
          setAuthenHeader(<AuthenticationHeader/>)
          setUserCart(<AuthenCart/>)
      }else{
          setAuthenHeader(<NotAuthenticateHeader/>)
          setUserCart(<NotAuthenCart/>)
      }
  },[logic])  

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
        {hideGeneralHeader&&authenHeader}
         <Routes>          
            <Route path='/' element={<HomePage/>}/>
            <Route path='/dangnhap' element={<div><Dangnhap/></div>}/>
            <Route path='/dangky' element={<Dangky/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/searchProduct' element={<ShowPage/>}/>
            <Route path='/laptopAcer' element={<LaptopAcer/>}/>
            <Route path='/laptopAsus' element={<LaptopAsus/>}/>
            <Route path='/laptopDell' element={<LaptopDell/>}/>
            <Route path='/laptopMsi' element={<LaptopMsi/>}/>            
            <Route path='/PCtrung' element={<PCGamingMiddle/>}/>
            <Route path='/PCCao' element={<PCLuxuryGaming/>}/>
            <Route path='/PCSieuCao' element={<HighEndPCGaming/>}/>            
            <Route path='/PCWIntel' element={<PCWorkIntel/>}/>
            <Route path='/PCRyzen' element={<PCWorkRyzen/>}/>
            <Route path='/linhkien' element={<Linhkien/>}/>
            <Route path='/RAM' element={<Ram/>}/>
            <Route path='/CPU' element={<CPU/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='cart' element={userCart}/>
            <Route path='logout' element={<Logout/>}/>
            <Route path='active' element={<Active/>}/>
            <Route path='addProduct' element={<AddProdroduct/>}/>   
            <Route path='/search' element ={<ShowPage/>}/>
            <Route path='/bill' element={<Invoice/>}/>
            <Route path='/test' element={<Test/>}/>


            
        </Routes>
        {hideGeneralHeader&&<Footer/>}      
      </React.Fragment>
    
  )}

export default App;
