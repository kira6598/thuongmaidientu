import React from "react"
import Laptop from "../conponent1/Laptop"
import SpecialOffer from "../conponent1/SpecialOffer"
import SubscribeForm from "../conponent1/SubscribeForm"
import Slider from "../conponent1/Slider"
import PC from "../conponent1/PC"
function HomePage(){

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

        </React.Fragment>
    )
}
export default HomePage