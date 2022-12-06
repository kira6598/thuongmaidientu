import React from 'react';
import ProductItem from "../conponent1/ProductItem.js"

import QuickView from '../conponent1/QuickView.js'
const item ={
    "LaptopMSI":[
        {
            "id":"L11",
            "image":"img/LapTop/Ltop11.PNG",
            "productName":"MSI GF63 Thin 9SCSR 1057VN",
            "so_luong_con":"50",
            "gia_thanh":"21,190,000 đ"
        },
        {
            "id":"L12",
            "image":"img/LapTop/Ltop12.PNG",
            "productName":"MSI GF63 Thin 10SCSR 014VN",
            "so_luong_con":"50",
            "gia_thanh":"20,190,000 đ"
        },
        {
            "id":"L13",
            "image":"img/LapTop/Ltop13.PNG",
            "productName":"MSI GF63 Thin 10SCSR 020VN",
            "so_luong_con":"50",
            "gia_thanh":"23,190,000 đ"
        },
        {
            "id":"L14",
            "image":"img/LapTop/Ltop14.PNG",
            "productName":"MSI GF63 Thin 10SCSR 830VN",
            "so_luong_con":"50",
            "gia_thanh":"22,990,000 đ"
        },
        {
            "id":"L15",
            "image":"img/LapTop/Ltop15.PNG",
            "productName":"MSI GF85 Thin 10SER-622VN",
            "so_luong_con":"50",
            "gia_thanh":"23,190,000 đ"
        },
        {
            "id":"L16",
            "image":"img/LapTop/Ltop16.PNG",
            "productName":"MSI GF85 Thin 10UE 241VN",
            "so_luong_con":"50",
            "gia_thanh":"20,190,000 đ"
        }
      ]
}
function LaptopMsi(){
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
            <a href="/laptop">
                LapTop
            </a>
        </li>
        <li>
            <a href="#">
                Dell
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
                    <a href="/laptopAcer">
                        <span className="categ-1-label">Acer</span>
                    </a>
                </li>
                <li className="categ-1">
                    <a href="/laptopAsus">
                        <span className="categ-1-label">Asus</span>
                    </a>
                </li>
                <li className="categ-1">
                    <a href="/laptopMsi">
                        <span className="categ-1-label">Msi</span>
                    </a>
                </li>
                <li className="categ-1">
                    <a href="/laptopDell">
                        <span className="categ-1-label">Dell</span>
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
        <div className="prod-items section-items" id="LaptopMsi">
                        {item.LaptopMSI.map( laptop =>(
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
export default LaptopMsi