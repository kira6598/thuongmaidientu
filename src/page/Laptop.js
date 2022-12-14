import React from 'react';
import ProductItem from "../conponent1/ProductItem.js"

import QuickView from '../conponent1/QuickView.js'
const item= {
       "LaptopAcer":[
    {
        "id":"L01",
        "image":"img/LapTop/Ltop1.PNG",
        "productName":"Acer Nitro 5 AN515 44 R9JM",
        "so_luong_con":"50",
        "gia_thanh":"15,290,000 đ"
    },
    {
        "id":"L02",
        "image":"img/LapTop/Ltop2.PNG",
        "productName":"Acer Nitro 5 AN515 55 5923",
        "so_luong_con":"50",
        "gia_thanh":"19,290,000 đ"
    },
    {
        "id":"L03",
        "image":"img/LapTop/Ltop3.PNG",
        "productName":"Acer Nitro 5 AN515 45 R3SM",
        "so_luong_con":"50",
        "gia_thanh":"17,290,000 đ"
    },
    {
        "id":"L04",
        "image":"img/LapTop/Ltop4.PNG",
        "productName":"Acer Nitro 5 AN515 55 51N4",
        "so_luong_con":"50",
        "gia_thanh":"16,590,000 đ"
    },
    {
        "id":"L05",
        "image":"img/LapTop/Ltop5.PNG",
        "productName":"Acer Nitro 5 AN515 56 79U2",
        "so_luong_con":"50",
        "gia_thanh":"20,590,000 đ"
    }
  ],  "LaptopAsus":[
    {
        "id":"L06",
        "image":"img/LapTop/Ltop6.PNG",
        "productName":"Asus TUF F15 FX506LH HN002T",
        "so_luong_con":"50",
        "gia_thanh":"18,390,000 đ"
    },
    {
        "id":"L07",
        "image":"img/LapTop/Ltop7.PNG",
        "productName":"Asus TUF F15 FX506LH HN002T",
        "so_luong_con":"50",
        "gia_thanh":"16,190,000 đ"
    },
    {
        "id":"L08",
        "image":"img/LapTop/Ltop8.PNG",
        "productName":"Asus TUF A17 FA70611 H72B6T",
        "so_luong_con":"50",
        "gia_thanh":"15,890,000 đ"
    },
    {
        "id":"L09",
        "image":"img/LapTop/Ltop9.PNG",
        "productName":"Asus TUF F19 FX506LI HN096T",
        "so_luong_con":"50",
        "gia_thanh":"19,190,000 đ"
    },
    {
        "id":"L10",
        "image":"img/LapTop/Ltop10.PNG",
        "productName":"Asus TUF Gaming F19 FX506LU HN138T",
        "so_luong_con":"50",
        "gia_thanh":"19,990,000 đ"
    }
  ], 
    "LaptopDell":[
    {
        "id":"L17",
        "image":"img/LapTop/Ltop17.PNG",
        "productName":"Dell Inspiron 15 3501 N3501C",
        "so_luong_con":"50",
        "gia_thanh":"9,190,000 đ"
    },
    {
        "id":"L19",
        "image":"img/LapTop/Ltop19.PNG",
        "productName":"Dell Inspiron 14 5406 7023",
        "so_luong_con":"50",
        "gia_thanh":"25,190,000 đ"
    },
    {
        "id":"L20",
        "image":"img/Laptop/Ltop20.PNG",
        "productName":"Dell Inspiron 15 7501 X3MRY1",
        "so_luong_con": "50",
        "gia_thanh":"23,190,000 đ"
    }
  ]
  }
function Laptop(){
    


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
				<a href="/">
					Acer
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
            <div className="prod-items section-items" id="LaptopAcer">
                            {item.LaptopAcer.map( laptop =>(
                                <ProductItem
                                key={laptop.id}
                                image={laptop.image}
                                id={laptop.id}
                                gia_thanh={laptop.gia_thanh}
                                /> 
                            )
                            )}
                    </div>
                    <div className="prod-items section-items" id="LaptopAsus">
                            {item.LaptopAsus.map( laptop =>(
                                <ProductItem
                                key={laptop.id}
                                image={laptop.image}
                                id={laptop.id}
                                gia_thanh={laptop.gia_thanh}
                                /> 
                            )
                            )}
                    </div>
                    <div className="prod-items section-items" id="LaptopDell">
                            {item.LaptopDell.map( laptop =>(
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
export default Laptop