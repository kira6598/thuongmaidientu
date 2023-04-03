  import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import './css/style.css'
import './css/flexslider.css'
import './css/font-awesome.min.css'
import './css/ion.rangeSlider.css'
import './css/ion.rangeSlider.skinFlat.css'
import './css/jQuery.Brazzers-Carousel.css'
import './css/jquery.bxslider.css'
import './css/jquery.fancybox.css'
import './css/media.css'
import './css/swiper.css'
import './css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <HelmetProvider>
        <App />
    </HelmetProvider>    
  {/* </React.StrictMode>*/}
  </BrowserRouter>
 
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
