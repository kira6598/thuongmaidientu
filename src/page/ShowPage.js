import React from "react";
import {  useSearchParams } from "react-router-dom"
import SearchProduct from "../conponent1/SearchProduct";

function ShowPage(){
    const [param]=useSearchParams()
    const productName=param.get('productName')
    console.log(typeof(productName));
    debugger
    return(
        <React.Fragment>
            <main>
                <section className="container">                    
                <SearchProduct param={productName} />
                </section>
            </main>
        </React.Fragment>
        
    )
}
export default ShowPage