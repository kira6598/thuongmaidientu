import React from 'react';
import ViewProductLaptop from '../conponent1/ViewProductLaptop.js';
import QuickView from '../conponent1/QuickView.js'


function LaptopAsus(){

    return (
        <React.Fragment>
    
        <main>
            <section className="container">
            <ViewProductLaptop 
            id={1}/> 
            <QuickView/>

            </section>
        </main>


      
  </React.Fragment>
    )
}
export default LaptopAsus