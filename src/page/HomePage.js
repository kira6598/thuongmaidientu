import React from "react"
import Laptop from "../conponent1/Laptop"
import SpecialOffer from "../conponent1/SpecialOffer"
import SubscribeForm from "../conponent1/SubscribeForm"
import Slider from "../conponent1/Slider"
import PC from "../conponent1/PC"
function HomePage(){
    
    // useScript("../js/chosen.jquery.min.js")
    
    // useScript("../js/jquery-1.11.2.min.js")
    // useScript("../js/jQuery.Brazzers-Carousel.js")
    // useScript("../js/jquery.flexslider-min.js")
    // useScript("../js/jquery.bxslider.min.js")
    // useScript("../js/fancybox/fancybox.js")
    // useScript("../js/fancybox/helpers/jquery.fancybox-thumbs.js")
    // useScript("../js/swiper.jquery.min.js")
    // useScript("../js/jquery.waypoints.min.js")
    // useScript("../js/progressbar.min.js")
    // useScript("../js/ion.rangeSlider.min.js")
   
   
    // useScript("../js/plugins.js")
    // useScript("../js/main.js")
    // useScript("../js/gmap.js")
    return (
        <React.Fragment>
            
            <main>
                <section className="container">
                    <Slider/>
                    <Laptop/>
                    <SpecialOffer/>
                    <PC/>
                    <SubscribeForm/>
                 


                </section>
            </main>
            {/*end slider */}
            

        </React.Fragment>
    )
}
export default HomePage