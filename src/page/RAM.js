import React from 'react';

import QuickView from '../conponent1/QuickView.js'
import ViewProductLinhkien from '../conponent1/ViewProductLinhkien.js';

function Ram(){
    return (
        <React.Fragment>
        <main>
            <section className="container">         
                <ViewProductLinhkien id={1}/>
                <QuickView/>

            </section>
        </main>


      
  </React.Fragment>
    )
}
export default Ram