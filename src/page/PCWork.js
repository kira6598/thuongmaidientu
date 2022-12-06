import React from 'react';
import ProductItem from "../conponent1/ProductItem.js"

import QuickView from '../conponent1/QuickView.js'
const item ={
    "PCWork": [
        {
            "id":"pw01",
            "image":"img/PCWork/PC1.PNG",
            "productName":"G-CREATOR C301",
            "so_luong_con": "50",
            "gia_thanh":"23,500,000 đ"
        },
        {
            "id":"pw02",
            "image":"img/PCWork/PC2.PNG",
            "productName":"G-CREATOR C501",
            "so_luong_con": "50",
            "gia_thanh":"23,000,000 đ"
        },
        {
            "id":"pw03",
            "image":"img/PCWork/PC3.PNG",
            "productName":"G-CREATOR C701",
            "so_luong_con": "50",
            "gia_thanh":"24,000,000 đ"
        },
        {
            "id":"pw04",
            "image":"img/PCWork/PC4.PNG",
            "productName":"G-CREATOR C302",
            "so_luong_con": "50",
            "gia_thanh":"24,500,000 đ"
        },
        {
            "id":"pw05",
            "image":"img/PCWork/PC5.PNG",
            "productName":"G-CREATOR C502",
            "so_luong_con": "50",
            "gia_thanh":"25,500,000 đ"
        },
        {
            "id":"pw06",
            "image":"img/PCWork/PC6.PNG",
            "productName":"G-CREATOR C702",
            "so_luong_con": "50",
            "gia_thanh":"26,500,000 đ"
        },
        {
            "id":"pw07",
            "image":"img/PCWork/PC7.PNG",
            "productName":"RATCHET M",
            "so_luong_con": "50",
            "gia_thanh":"25,000,000 đ"
        },
        {
            "id":"pw08",
            "image":"img/PCWork/PC8.PNG",
            "productName":"VIPER M",
            "so_luong_con": "50",
            "gia_thanh":"26,000,000 đ"
        },
        {
            "id":"pw09",
            "image":"img/PCWork/PC9.PNG",
            "productName":"IVY 10M",
            "so_luong_con": "50",
            "gia_thanh":"25,250,000 đ"
        },
        {
            "id":"pw10",
            "image":"img/PCWork/PC10.PNG",
            "productName":"YUUMI M",
            "so_luong_con": "50",
            "gia_thanh":"28,000,000 đ"
        },
        {
            "id":"pw11",
            "image":"img/PCWork/PC11.PNG",
            "productName":"G-CREATOR C704",
            "so_luong_con": "50",
            "gia_thanh":"23,700,000 đ"
        },
        {
            "id":"pw12",
            "image":"img/PCWork/PC12.PNG",
            "productName":"G-CREATOR C503",
            "so_luong_con": "50",
            "gia_thanh":"25,500,000 đ"
        }
      ]
}
function PCWork(){
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
                PC
            </a>
        </li>
        <li>
            <a href="#">
                PCWork
            </a>
        </li>
        </ul>     
        {/* <!-- Catalog Sidebar - start --> */}
    <div className="section-sb">

        {/* <!-- Catalog Categories - start --> */}
        <div className="section-sb-current">
            <h3><a href="/PCW">PCWork<span id="section-sb-toggle" className="section-sb-toggle"><span className="section-sb-ico"></span></span></a></h3>
            <ul className="section-sb-list" id="section-sb-list">
                <li className="categ-1">
                    <a href="/PCIntel">
                        <span className="categ-1-label">PC Work Intel</span>
                    </a>
                </li>
                <li className="categ-1">
                    <a href="/PCRyzen">
                        <span className="categ-1-label">PC Work Ryzen</span>
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
        <div className="prod-items section-items" id="PCWork">
                        {item.PCWork.map( laptop =>(
                            <ProductItem
                            key={laptop.id}
                            image={laptop.image}
                            id={laptop.id}
                            gia_thanh={laptop.gia_thanh}
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
export default PCWork