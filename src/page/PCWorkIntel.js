import React from 'react';

import QuickView from '../conponent1/QuickView.js'
import ViewProductPCWork from '../conponent1/ViewProductPCWork.js';

function PCWorkIntel(){
    return (
        <React.Fragment>
        <main>
          <section className='container'>
            <ViewProductPCWork id={0}/>
          </section>
          <QuickView/>
        </main>


      
  </React.Fragment>
    )
}
export default PCWorkIntel