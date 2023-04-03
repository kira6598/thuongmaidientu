import React from 'react';
import ProductItem from "../conponent1/ProductItem.js"

import QuickView from '../conponent1/QuickView.js'
const item= {   
	"CPU":[
		{
			 "id":"CP01",
			 "image":"img/CPU/CPU.PNG",
			 "productName":"Intel Pentium",
			 "so_luong_con":"100",
			 "gia_thanh":"1,290,000 đ"
		},
		{
			 "id":"CP02",
			 "image":"img/CPU/CPU2.PNG",
			 "productName":"Intel Core i7 Gen 12",
			 "so_luong_con":"100",
			 "gia_thanh":"1,990,000 đ"
		},
		{
			 "id":"CP03",
			 "image":"img/CPU/CPU3.PNG",
			 "productName":"Intel Core i5 Gen 10",
			 "so_luong_con":"100",
			 "gia_thanh":"1,590,000 đ"
		 },
		 {
			 "id":"CP04",
			 "image":"img/CPU/CPU4.PNG",
			 "productName":"Intel Core i7 Gen 10",
			 "so_luong_con":"100",
			 "gia_thanh":"1,790,000 đ"
		 },
		 {
			 "id":"CP05",
			 "image":"img/CPU/CPU5.PNG",
			 "productName":"Intel Core i9 Unclocked",
			 "so_luong_con":"50",
			 "gia_thanh":"2,790,000 đ"
		 },
		 {
			 "id":"CP06",
			 "image":"img/CPU/CPU6.PNG",
			 "productName":"Intel Core i9 Gen 10",
			 "so_luong_con":"50",
			 "gia_thanh":"2,290,000 đ"
		 }	   
	     ],
		"Ram": [
			{
				"id":"RM01",
				"image":"img/RAM/RAM1.PNG",
				"productName":"PATRIOT 8GB",
				"so_luong_con": "50",
				"gia_thanh":"800,000 đ"
			},
			{
				"id":"RM02",
				"image":"img/RAM/RAM2.PNG",
				"productName":"DIMM DDR4 8GB",
				"so_luong_con": "50",
				"gia_thanh":"790,000 đ"
			},
			{
				"id":"RM03",
				"image":"img/RAM/RAM3.PNG",
				"productName":"PATRIOT 8GB",
				"so_luong_con": "50",
				"gia_thanh":"640,000 đ"
			},
			{
				"id":"RM04",
				"image":"img/RAM/RAM4.PNG",
				"productName":"SAMSUNG DDR4 8GB",
				"so_luong_con": "50",
				"gia_thanh":"850,000 đ"
			},
			{
				"id":"RM05",
				"image":"img/RAM/RAM5.PNG",
				"productName":"TRANSCEND 8GB",
				"so_luong_con": "50",
				"gia_thanh":"790,000 đ"
			},
			{
				"id":"RM06",
				"image":"img/RAM/RAM6.PNG",
				"productName":"LEXAR DDR4 16GB",
				"so_luong_con": "50",
				"gia_thanh":"1,590,000 đ"
			}
		  
		  ]
  }
function Linhkien(){
    return (
        <React.Fragment>
        <ul className="b-crumbs">
        <li>
            <a href="/">
                Doanh mục SP
            </a>
        </li>
        <li>
            <a href="/linhkien">
                Linh kiện
            </a>
        </li>
        {/* <li>
            <button className="link-button">
                {value}
            </button>
        </li> */}
        </ul>     
        {/* <!-- Catalog Sidebar - start --> */}
    <div className="section-sb">

        {/* <!-- Catalog Categories - start --> */}
        <div className="section-sb-current">
            <h3><a href="/linhkien">Linh kiện<span id="section-sb-toggle" className="section-sb-toggle"><span className="section-sb-ico"></span></span></a></h3>
            <ul className="section-sb-list" id="section-sb-list">
                <li className="categ-1">
                    <a href="/Ram">
                        <span className="categ-1-label">Ram</span>
                    </a>
                </li>
                <li className="categ-1">
                    <a href="/CPU">
                        <span className="categ-1-label">CPU</span>
                    </a>
                </li>
                
                
            </ul>
        </div>
        {/* <!-- Catalog Categories - end -->

        <!-- Filter - start -->
        
        <!-- Filter - end --> */}

    </div>
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
                <p>Mặc định</p>
                <ul>
                    <li>
                        <button className="sorting-button">Sản phẩm nổi bật</button>
                    </li>
                    <li>
                        <button className="sorting-button">Giá: Tăng dần</button>
                    </li>
                    <li>
                        <button className="sorting-button">Giá: Giảm dần</button>
                    </li>						
                    <li>
                        <button className="sorting-button">Mặc định</button>
                    </li>
                </ul>
            </div>

            {/* <!-- Count per page --> */}
            <div className="section-count" id='couting'>
                <p>12</p>
                <ul>
                    <li><button className="number-button">12</button></li>
                    <li><button className="number-button">24</button></li>
                    <li><button className="number-button">48</button></li>
                </ul>
            </div>
            <div className="prod-items section-items" id="RAM">
                    {item.Ram.map( product =>(
                        <ProductItem
                        key={product.id}
                        image={product.image}
                        id={product.id}
                        gia_thanh={product.gia_thanh}
                        /> 
                    )
                    )}
            </div>
            <div className="prod-items section-items" id="CPU">
                    {item.CPU.map( product =>(
                        <ProductItem
                        key={product.id}
                        image={product.image}
                        id={product.id}
                        gia_thanh={product.gia_thanh}
                        /> 
                    )
                    )}
            </div>


        </div>
        {/* <!-- Catalog Topbar - end --> */}
        
            
            
            
    

    </div>
    <QuickView/>
    {/* <!-- Catalog Items | Gallery V1 - end --> */}
    </React.Fragment>


      
 
    )
}
export default Linhkien