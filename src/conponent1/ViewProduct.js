import React from "react";
function ViewProduct(){
    return(
        <React.Fragment>
            <ul className="b-crumbs">
			<li>
				<a href="index.html">
					Doanh mục SP
				</a>
			</li>
			<li>
				<a href="LapTop.html">
					LapTop
				</a>
			</li>
			<li>
				<a href="LapTopDell.html.html">
					Dell
				</a>
			</li>
		    </ul>     
            {/* <!-- Catalog Sidebar - start --> */}
		<div className="section-sb">

			{/* <!-- Catalog Categories - start --> */}
			<div className="section-sb-current">
				<h3><a href="LapTop.html">LapTop<span id="section-sb-toggle" className="section-sb-toggle"><span className="section-sb-ico"></span></span></a></h3>
				<ul className="section-sb-list" id="section-sb-list">
					<li className="categ-1">
						<a href="LapTopAcer.html">
							<span className="categ-1-label">Acer</span>
						</a>
					</li>
					<li className="categ-1">
						<a href="LapTopasus.html">
							<span className="categ-1-label">Asus</span>
						</a>
					</li>
					<li className="categ-1">
						<a href="LapTopMsi.html">
							<span className="categ-1-label">Msi</span>
						</a>
					</li>
					<li className="categ-1">
						<a href="LapTopDell.html">
							<span className="categ-1-label">Dell</span>
						</a>
					</li>
					<li className="categ-1">
						<a href="LapTopLenovo.html">
							<span className="categ-1-label">Lenovo</span>
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
			
				
				
				
		

		</div>
		{/* <!-- Catalog Items | Gallery V1 - end --> */}
        </React.Fragment>
       
    )
}
export default ViewProduct