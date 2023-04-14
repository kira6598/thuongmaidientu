import axios from "axios";
import React ,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_URL } from "../config/globalVariable";
import ProductItem from '../conponent1/ProductItem.js'
function SearchProduct(props){
    const params = props.param
     console.log(params);

    const [jsx,setJsx]= useState(null)
    const navigate = useNavigate()
    const getProduct = async () =>{
        try {
            const respone = await axios.get(`${PRODUCT_URL}/searchProduct?productName=${params}`,
        {
            headers:{
                'Content-Type':'application/json'
            }
        }
        )

            return respone.data
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(()=>{
        const results = async() => {
            const products= await getProduct();            
            if(products.length===0){
                navigate("/NotFound")
            }
            console.log(products);            
            setJsx(display(products))
        } 
        results()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function display(product){
        return(<React.Fragment>
            <ul className="b-crumbs">
			<li>
				<a href="/">
					Doanh mục SP
				</a>
			</li>
			<li>
				<a href="/laptop">
			        Sản phẩm có chứa ký tự "{params}"
				</a>
			</li>			
		    </ul>     
            {/* <!-- Catalog Sidebar - start --> */}
		
		{/* <!-- Catalog Sidebar - end --> */}
        {/* <!-- Catalog Items | Gallery V1 - start --> */}
		<div className="section-cont">

			{/* <!-- Catalog Topbar - start --> */}
			<div className="section-top">

				{/* <!-- View Mode --> */}
				<ul className="section-mode">
					<li className="section-mode-gallery active"><button title="View mode: Gallery" ></button></li>
					<li className="section-mode-list"><button title="View mode: List" ></button></li>
					<li className="section-mode-table"><button title="View mode: Table" ></button></li>
				</ul>

				{/* <!-- Sorting --> */}
				<div className="section-sortby" >
					<p >huhu</p>
					<ul>
						<li>
							<button className="sorting-button" >Giá: Tăng dần</button>
						</li>
						<li>
							<button className="sorting-button" >Giá: Giảm dần</button>
						</li>						
						<li>
							<button className="sorting-button"   >Mặc định</button>
						</li>
					</ul>
				</div>


				<div className="prod-items section-items" >
                        { 
						product.map( items =>(
                            <ProductItem
                            key={items.id}
                            image={items.image}
                            id={items.id}
                            gia_thanh={items.price}
                            /> 
                        )
                        )}
                </div>
    

			</div>
			{/* <!-- Catalog Topbar - end --> */}

		</div>
		{/* <!-- Catalog Items | Gallery V1 - end --> */}
        </React.Fragment>)
    }

    return(
        <React.Fragment>           
            {jsx} 
        </React.Fragment>             
       )
}
export default SearchProduct;