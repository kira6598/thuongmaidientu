import React from 'react';
import ProductItem from "../conponent1/ProductItem.js"

import QuickView from '../conponent1/QuickView.js'
const item ={
    "PCGaming":[
        {
            "id":"pg07",
            "image":"img/PCGaming/PCG7.PNG",
            "productName":"DARIUS S",
            "so_luong_con": "50",
            "gia_thanh":"26,000,000 đ"
        },
        {
            "id":"pg08",
            "image":"img/PCGaming/PCG8.PNG",
            "productName":"HEXTECH S",
            "so_luong_con": "50",
            "gia_thanh":"23,500,000 đ"
        },
        {
            "id":"pg09",
            "image":"img/PCGaming/PCG9.PNG",
            "productName":"GHOST S",
            "so_luong_con": "50",
            "gia_thanh":"25,500,000 đ"
        },
        {
            "id":"pg10",
            "image":"img/PCGaming/PCG10.PNG",
            "productName":"VENUS S",
            "so_luong_con": "50",
            "gia_thanh":"22,500,000 đ"
        },
        {
            "id":"pg11",
            "image":"img/Laptop/Ltop11.PNG",
            "productName":"VOLIBEAR S",
            "so_luong_con": "50",
            "gia_thanh":"27,190,000 đ"
        },
        {
            "id":"pg12",
            "image":"img/PCGaming/PCG12.PNG",
            "productName":"PHANTOM S",
            "so_luong_con": "50",
            "gia_thanh":"23,500,000 đ"
        },
        {
            "id":"pg13",
            "image":"img/PCGaming/PCG13.PNG",
            "productName":"PHOENIX 10Z",
            "so_luong_con": "50",
            "gia_thanh":"26,200,000 đ"
        }
        
      ]
}
function PCLuxuryGaming(){
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
            <a href="/PCG">
                PC
            </a>
        </li>
        <li>
            <a href="#">
                PCGaming Tầm Trung
            </a>
        </li>
        </ul>     
        {/* <!-- Catalog Sidebar - start --> */}
    <div className="section-sb">

        {/* <!-- Catalog Categories - start --> */}
        <div className="section-sb-current">
            <h3><a href="/laptop">LapTop<span id="section-sb-toggle" className="section-sb-toggle"><span className="section-sb-ico"></span></span></a></h3>
            <ul className="section-sb-list" id="section-sb-list">
                <li className="categ-1">
                    <a href="/PCtrung">
                        <span className="categ-1-label">PC Tầm Trung</span>
                    </a>
                </li>
                <li className="categ-1">
                    <a href="/PCCao">
                        <span className="categ-1-label">PC Cao Cấp</span>
                    </a>
                </li>
                <li className="categ-1">
                    <a href="/PCSieuCao">
                        <span className="categ-1-label">PC Siêu Cao Cấp </span>
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
        <div className="prod-items section-items" id="PCGaming">
                        {item.PCGaming.map( PC =>(
                            <ProductItem
                            key={PC.id}
                            image={PC.image}
                            id={PC.id}
                            gia_thanh={PC.gia_thanh}
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
export default PCLuxuryGaming