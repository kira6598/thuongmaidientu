import React from 'react';
import QuickView from '../conponent1/QuickView.js'
import ViewProductPCWork from '../conponent1/ViewProductPCWork.js';

function PCWork(){
    return (
        <React.Fragment>
        <main>
            <section className='container'>
                <ViewProductPCWork id={1}/>
            </section>
            <QuickView/>
        </main>


      
  </React.Fragment>
    )
}
export default PCWork