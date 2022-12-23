import React from 'react';
import ViewProductPCGaming from '../conponent1/ViewProductPCGaming.js';
import QuickView from '../conponent1/QuickView.js'

function PCLuxuryGaming(){
    return (
        <React.Fragment>
        <main>
            <section className="container">         
                <ViewProductPCGaming id={1}/>
                <QuickView/>

            </section>
        </main>


      
  </React.Fragment>
    )
}
export default PCLuxuryGaming