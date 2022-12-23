import React from 'react';

import QuickView from '../conponent1/QuickView.js'
import ViewProductPCGaming from '../conponent1/ViewProductPCGaming.js';

function PCGamingMiddle(){
    return (
        <React.Fragment>
        <main>
        <section className="container">         
                <ViewProductPCGaming id={0}/>
                <QuickView/>

            </section>
        </main>


      
  </React.Fragment>
    )
}
export default PCGamingMiddle