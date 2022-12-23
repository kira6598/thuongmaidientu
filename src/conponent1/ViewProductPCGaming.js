import React from "react";
import ProductItem from "./ProductItem";
const item= {
	"PCGaming1":[
		{
			"id":"pg01",
			"image":"img/PCGaming/PCG1.PNG",
			"productName":"TITAN 10M",
			"so_luong_con": "50",
			"gia_thanh":"20,000,000 đ"
	  
		},
		{
			"id":"pg02",
			"image":"img/PCGaming/PCG2.PNG",
			"productName":"ASSASSIN M",
			"so_luong_con": "50",
			"gia_thanh":"19,000,000 đ"
		},
		{
			"id":"pg03",
			"image":"img/PCGaming/PCG3.PNG",
			"productName":"MYSTIC M",
			"so_luong_con": "50",
			"gia_thanh":"25,000,000 đ"
		},
		{
			"id":"pg04",
			"image":"img/PCGaming/PCG4.PNG",
			"productName":"ARMIN M",
			"so_luong_con": "50",
			"gia_thanh":"22,000,000 đ"
		},
		{
			"id":"pg05",
			"image":"img/PCGaming/PCG5.PNG",
			"productName":"IVY 10M",
			"so_luong_con": "50",
			"gia_thanh":"24,000,000 đ"
		},
		{
			"id":"pg06",
			"image":"img/PCGaming/PCG6.PNG",
			"productName":"RATCHET M",
			"so_luong_con": "50",
			"gia_thanh":"28,000,000 đ"
		}],
		"PCGaming2":[
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
		}],
		"PCGaming3":[
		{
			"id":"pg13",
			"image":"img/PCGaming/PCG13.PNG",
			"productName":"PHOENIX 10Z",
			"so_luong_con": "50",
			"gia_thanh":"26,200,000 đ"
		},
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
function ViewProductPCGaming(props){
	// console.log(props.id);
	const ids=props.id;
	const value =Object.values(item)[ids]
    // console.log(value);

    return(
        <React.Fragment>
            <ul className="b-crumbs">
			<li>
				<a href="/">
					Doanh mục SP
				</a>
			</li>
			<li>
				<a href="/PC">
					PC Gaming
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
				<h3><a href="/PCG">PC Gaming<span id="section-sb-toggle" className="section-sb-toggle"><span className="section-sb-ico"></span></span></a></h3>
				<ul className="section-sb-list" id="section-sb-list">
					<li className="categ-1">
						<a href="/PCtrung">
							<span className="categ-1-label">PC Gaming trung cấp</span>
						</a>
					</li>
					<li className="categ-1">
						<a href="/PCCao">
							<span className="categ-1-label">PC Gaming Cao cấp</span>
						</a>
					</li>
					<li className="categ-1">
						<a href="/PCSieuCao">
							<span className="categ-1-label">PC Gaming Siêu Cao cấp</span>
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
				<div className="prod-items section-items" id={ids}>
                        { 
						value.map( product =>(
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
		{/* <!-- Catalog Items | Gallery V1 - end --> */}
        </React.Fragment>
       
    )
}
export default ViewProductPCGaming