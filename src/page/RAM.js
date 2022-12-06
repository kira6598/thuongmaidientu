import React from 'react';
import ProductItem from "../conponent1/ProductItem.js"

import QuickView from '../conponent1/QuickView.js'
const item ={
    "Ram": [
        {
            "id":"r01",
            "image":"img/RAM/RAM1.PNG",
            "productName":"PATRIOT 8GB",
            "so_luong_con": "50",
            "gia_thanh":"800,000 đ"
        },
        {
            "id":"r02",
            "image":"img/RAM/RAM2.PNG",
            "productName":"DIMM DDR4 8GB",
            "so_luong_con": "50",
            "gia_thanh":"790,000 đ"
        },
        {
            "id":"r03",
            "image":"img/RAM/RAM3.PNG",
            "productName":"PATRIOT 8GB",
            "so_luong_con": "50",
            "gia_thanh":"640,000 đ"
        },
        {
            "id":"r04",
            "image":"img/RAM/RAM4.PNG",
            "productName":"SAMSUNG DDR4 8GB",
            "so_luong_con": "50",
            "gia_thanh":"850,000 đ"
        },
        {
            "id":"r05",
            "image":"img/RAM/RAM5.PNG",
            "productName":"TRANSCEND 8GB",
            "so_luong_con": "50",
            "gia_thanh":"790,000 đ"
        },
        {
            "id":"r06",
            "image":"img/RAM/RAM6.PNG",
            "productName":"LEXAR DDR4 16GB",
            "so_luong_con": "50",
            "gia_thanh":"1,590,000 đ"
        }
      
      ]
    
}
function Ram(){
    return (
        <React.Fragment>
        <main>
            <section className="container">
            
        <ul className="b-crumbs">
        <li>
            <a href="/">
                Doanh mục SP
            </a>
        </li>
        <li>
            <a href="/PCW">
                Linh kiện
            </a>
        </li>
        <li>
            <a href="#">
                RAM
            </a>
        </li>
        </ul>     
        {/* <!-- Catalog Sidebar - start --> */}
    <div className="section-sb">

        {/* <!-- Catalog Categories - start --> */}
        <div className="section-sb-current">
            <h3><a href="/linhkien">Linh kiện<span id="section-sb-toggle" className="section-sb-toggle"><span className="section-sb-ico"></span></span></a></h3>
            <ul className="section-sb-list" id="section-sb-list">
                <li className="categ-1">
                    <a href="/RAM">
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
                <li className="section-mode-gallery active"><a title="View mode: Gallery" href="#"></a></li>
                <li className="section-mode-list"><a title="View mode: List" href="#"></a></li>
                <li className="section-mode-table"><a title="View mode: Table" href="#"></a></li>
            </ul>

            {/* <!-- Sorting --> */}
            <div className="section-sortby">
                <p>Mặc định</p>
                <ul>
                    <li>
                        <a href="#">Sản phẩm nổi bật</a>
                    </li>
                    <li>
                        <a href="#">Giá: Tăng dần</a>
                    </li>
                    <li>
                        <a href="#">Giá: Giảm dần</a>
                    </li>						
                    <li>
                        <a href="#">Mặc định</a>
                    </li>
                </ul>
            </div>

            {/* <!-- Count per page --> */}
            <div className="section-count">
                <p>12</p>
                <ul>
                    <li><a href="#">12</a></li>
                    <li><a href="#">24</a></li>
                    <li><a href="#">48</a></li>
                </ul>
            </div>

        </div>
        {/* <!-- Catalog Topbar - end --> */}
        <div className="prod-items section-items" id="RAM">
                        {item.Ram.map( Ram =>(
                            <ProductItem
                            key={Ram.id}
                            image={Ram.image}
                            id={Ram.id}
                            gia_thanh={Ram.gia_thanh}
                            /> 
                        )
                        )}
                </div>
        <ul className="pagi">
            <li className="active"><span>1</span></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li className="pagi-next"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
        </ul>		
            
            
    

    </div>
    {/* <!-- Catalog Items | Gallery V1 - end --> */}
    
               
                
                <QuickView/>

            </section>
        </main>


      
  </React.Fragment>
    )
}
export default Ram