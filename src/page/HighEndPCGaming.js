import React from 'react';
import ProductItem from "../conponent1/ProductItem.js"

import QuickView from '../conponent1/QuickView.js'
const item ={
    "PCGaming":[
        {
            "id":"pg14",
            "image":"img/PCGaming/PCG14.PNG",
            "productName":"VISION Z",
            "so_luong_con": "50",
            "gia_thanh":"28,500,000 đ"
        },
        {
            "id":"pg15",
            "image":"img/PCGaming/PCG15.PNG",
            "productName":"VALORANT Z",
            "so_luong_con": "50",
            "gia_thanh":"24,250,000 đ"
        },
        {
            "id":"pg16",
            "image":"img/PCGaming/PCG16.PNG",
            "productName":"PREDATOR Z",
            "so_luong_con": "50",
            "gia_thanh":"22,500,000 đ"
        },
        {
            "id":"pg17",
            "image":"img/PCGaming/PCG17.PNG",
            "productName":"AVENGER Z",
            "so_luong_con": "50",
            "gia_thanh":"24,200,000 đ"
        },
        {
            "id":"pg18",
            "image":"img/PCGaming/PCG18.PNG",
            "productName":"AORUS 10X",
            "so_luong_con": "50",
            "gia_thanh":"23,150,000 đ"
        }
 
        
      ]
}
function HighEndPCGaming(){
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
            <a href="/PC">
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
export default HighEndPCGaming