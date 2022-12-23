import React from 'react';
import ViewProductLinhkien from '../conponent1/ViewProductLinhkien.js';

import QuickView from '../conponent1/QuickView.js'

function CPU(){
    return (
        <React.Fragment>
        <main>
            <section className="container">         
                <ViewProductLinhkien id={0}/>
                <QuickView/>

            </section>
        </main>


      
  </React.Fragment>
    )
}
export default CPU