import React from "react";
import ProductItem from "./ProductItem";
const item= {
	"PCWork1": [
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
		}],
		"PCWork2":[
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

function ViewProductPCWork(props){
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
				<a href="/PCW">
					PC Work
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
				<h3><a href="/PCW">PC Work<span id="section-sb-toggle" className="section-sb-toggle"><span className="section-sb-ico"></span></span></a></h3>
				<ul className="section-sb-list" id="section-sb-list">
					<li className="categ-1">
						<a href="/PCWIntel">
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
export default ViewProductPCWork