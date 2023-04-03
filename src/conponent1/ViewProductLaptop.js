import React, { useState } from "react";
import ProductItem from "./ProductItem";
const item= {   
    "LaptopAcer":[
    {
        "id":"LT01",
        "image":"img/LapTop/Ltop1.PNG",
        "productName":"Acer Nitro 5 AN515 44 R9JM",
        "so_luong_con":"50",
        "gia_thanh":"15,290,000 đ"
    },
    {
        "id":"LT02",
        "image":"img/LapTop/Ltop2.PNG",
        "productName":"Acer Nitro 5 AN515 55 5923",
        "so_luong_con":"50",
        "gia_thanh":"19,290,000 đ"
    },
    {
        "id":"LT03",
        "image":"img/LapTop/Ltop3.PNG",
        "productName":"Acer Nitro 5 AN515 45 R3SM",
        "so_luong_con":"50",
        "gia_thanh":"17,290,000 đ"
    },
    {
        "id":"LT04",
        "image":"img/LapTop/Ltop4.PNG",
        "productName":"Acer Nitro 5 AN515 55 51N4",
        "so_luong_con":"50",
        "gia_thanh":"16,590,000 đ"
    },
    {
        "id":"LT05",
        "image":"img/LapTop/Ltop5.PNG",
        "productName":"Acer Nitro 5 AN515 56 79U2",
        "so_luong_con":"50",
        "gia_thanh":"20,590,000 đ"
    }
  ],  "LaptopAsus":[
    {
        "id":"LT06",
        "image":"img/LapTop/Ltop6.PNG",
        "productName":"Asus TUF F15 FX506LH HN002T",
        "so_luong_con":"50",
        "gia_thanh":"18,390,000 đ"
    },
    {
        "id":"LT07",
        "image":"img/LapTop/Ltop7.PNG",
        "productName":"Asus TUF F15 FX506LH HN002T",
        "so_luong_con":"50",
        "gia_thanh":"16,190,000 đ"
    },
    {
        "id":"LT08",
        "image":"img/LapTop/Ltop8.PNG",
        "productName":"Asus TUF A17 FA70611 H72B6T",
        "so_luong_con":"50",
        "gia_thanh":"15,890,000 đ"
    },
    {
        "id":"LT09",
        "image":"img/LapTop/Ltop9.PNG",
        "productName":"Asus TUF F19 FX506LI HN096T",
        "so_luong_con":"50",
        "gia_thanh":"19,190,000 đ"
    },
    {
        "id":"LT10",
        "image":"img/LapTop/Ltop10.PNG",
        "productName":"Asus TUF Gaming F19 FX506LU HN138T",
        "so_luong_con":"50",
        "gia_thanh":"19,990,000 đ"
    }
  ], "LaptopMSI":[
    {
        "id":"LT11",
        "image":"img/LapTop/Ltop11.PNG",
        "productName":"MSI GF63 Thin 9SCSR 1057VN",
        "so_luong_con":"50",
        "gia_thanh":"21,190,000 đ"
    },
    {
        "id":"LT12",
        "image":"img/LapTop/Ltop12.PNG",
        "productName":"MSI GF63 Thin 10SCSR 014VN",
        "so_luong_con":"50",
        "gia_thanh":"20,190,000 đ"
    },
    {
        "id":"LT13",
        "image":"img/LapTop/Ltop13.PNG",
        "productName":"MSI GF63 Thin 10SCSR 020VN",
        "so_luong_con":"50",
        "gia_thanh":"23,190,000 đ"
    },
    {
        "id":"LT14",
        "image":"img/LapTop/Ltop14.PNG",
        "productName":"MSI GF63 Thin 10SCSR 830VN",
        "so_luong_con":"50",
        "gia_thanh":"22,990,000 đ"
    },
    {
        "id":"LT15",
        "image":"img/LapTop/Ltop15.PNG",
        "productName":"MSI GF85 Thin 10SER-622VN",
        "so_luong_con":"50",
        "gia_thanh":"23,190,000 đ"
    },
    {
        "id":"LT16",
        "image":"img/LapTop/Ltop16.PNG",
        "productName":"MSI GF85 Thin 10UE 241VN",
        "so_luong_con":"50",
        "gia_thanh":"20,190,000 đ"
    }
  ],  "LaptopDell":[
    {
        "id":"LT17",
        "image":"img/LapTop/Ltop17.PNG",
        "productName":"Dell Inspiron 15 3501 N3501C",
        "so_luong_con":"50",
        "gia_thanh":"9,190,000 đ"
    },
    {
        "id":"LT19",
        "image":"img/LapTop/Ltop19.PNG",
        "productName":"Dell Inspiron 14 5406 7023",
        "so_luong_con":"50",
        "gia_thanh":"25,190,000 đ"
    },
    {
        "id":"LT20",
        "image":"img/Laptop/Ltop20.PNG",
        "productName":"Dell Inspiron 15 7501 X3MRY1",
        "so_luong_con": "50",
        "gia_thanh":"23,190,000 đ"
    }
  ]
  }


function ViewProductLaptop(props){
    const ids=props.id;
	const value =Object.values(item)[ids]
	// console.log(props.id);
    const [arr,setArr]=useState(value)
    const [state,setState]=useState("Mặc định")
	
    // console.log(value); lấy value của mảng cần render
    function handleDefalt(){
        setArr(value)
        setState("Mặc định")
    }
    
    function handleAcs(){
        // bước 1: lúc đầu, khi xử lý cần convert field gia_thanh từ String sang dạng Number để so sánh quickSort được chuẩn và cho nó vào hashMap
        let newArr = new Map();
        for(let i=0;i<value.length;i++){
         newArr.set(i,convert(value[i].gia_thanh))
        }
        //end

        //bước 2: cho các value trong hashMap vào arr để so sánh
        let arrToSort=[]
        for(let i=0;i<newArr.size;i++){
         arrToSort.push(newArr.get(i))
        }
        let SortedArrValue=QuickSortAsc(arrToSort)
        // end

        //bước 3: sau khi có được Arr value so sánh rồi thì đối chiếu với Map để lấy keyArr
        let SortedArrKey = []
       SortedArrValue.forEach((i) =>{
            SortedArrKey.push(getByValue(newArr,i))
       })
       //end

       // bước 4: sau khi có được keyArr thì nó chính là index đã được sắp xếp của mảng ban đầu
       let renderAcsArr= []
       for(let i=0;i<SortedArrKey.length;i++){
        let index = SortedArrKey[i]
        renderAcsArr.push(value[index])
       }

       // các function chức năng
        function getByValue(map, searchValue) {
            for (let [key, value] of map.entries()) {
              if (value === searchValue)
                return key;
            }
          }
    
       function convert(string){
        return Number(string.substring(0,string.length-2).split(",").join(""))
        
    }

        function QuickSortAsc(arr){
        if(arr.length<2){return arr}
        const pivotIndex=arr.length-1;
        const pivot = arr[pivotIndex]
                  
        let left=[]
        let right=[]
        for(let i=0;i<pivotIndex;i++){
            const currentItem=arr[i]
            if(currentItem <pivot){
                left.push(currentItem)
            }else{
                right.push(currentItem)
            }
        }
        return [...QuickSortAsc(left),pivot,...QuickSortAsc(right)]       
       }  

       //end

       setArr(renderAcsArr)
       setState("Tăng dần")
          }
    
    function handleDec(){
        // bước 1: lúc đầu, khi xử lý cần convert field gia_thanh từ String sang dạng Number để so sánh quickSort được chuẩn và cho nó vào hashMap
        let newArr = new Map();
        for(let i=0;i<value.length;i++){
         newArr.set(i,convert(value[i].gia_thanh))
        }
        //end

        //bước 2: cho các value trong hashMap vào arr để so sánh
        let arrToSort=[]
        for(let i=0;i<newArr.size;i++){
         arrToSort.push(newArr.get(i))
        }
        let SortedArrValue=QuickSortDec(arrToSort)
        // end

        //bước 3: sau khi có được Arr value so sánh rồi thì đối chiếu với Map để lấy keyArr
        let SortedArrKey = []
       SortedArrValue.forEach((i) =>{
            SortedArrKey.push(getByValue(newArr,i))
       })
       //end

       // bước 4: sau khi có được keyArr thì nó chính là index đã được sắp xếp của mảng ban đầu
       let renderDecArr= []
       for(let i=0;i<SortedArrKey.length;i++){
        let index = SortedArrKey[i]
        renderDecArr.push(value[index])
       }

       // các function chức năng
        function getByValue(map, searchValue) {
            for (let [key, value] of map.entries()) {
              if (value === searchValue)
                return key;
            }
          }
    
       function convert(string){
        return Number(string.substring(0,string.length-2).split(",").join(""))
        
    }

        function QuickSortDec(arr){
        if(arr.length<2){return arr}
        const pivotIndex=arr.length-1;
        const pivot = arr[pivotIndex]
                  
        let left=[]
        let right=[]
        for(let i=0;i<pivotIndex;i++){
            const currentItem=arr[i]
            if(currentItem >pivot){
                left.push(currentItem)
            }else{
                right.push(currentItem)
            }
        }
        return [...QuickSortDec(left),pivot,...QuickSortDec(right)]       
       }  

       //end

       setArr(renderDecArr)
       setState("Giảm dần")
          }

    


    return(
        <React.Fragment>
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
			{/* <li>
				<button className="link-button">
					{{value}}
				</button>
			</li> */}
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
					<li className="section-mode-gallery active"><button title="View mode: Gallery" ></button></li>
					<li className="section-mode-list"><button title="View mode: List" ></button></li>
					<li className="section-mode-table"><button title="View mode: Table" ></button></li>
				</ul>

				{/* <!-- Sorting --> */}
				<div className="section-sortby" >
					<p >{state}</p>
					<ul>
						<li>
							<button className="sorting-button" onClick={handleAcs} >Giá: Tăng dần</button>
						</li>
						<li>
							<button className="sorting-button" onClick={handleDec}>Giá: Giảm dần</button>
						</li>						
						<li>
							<button className="sorting-button" onClick={handleDefalt}>Mặc định</button>
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
						arr.map( laptop =>(
                            <ProductItem
                            key={laptop.id}
                            image={laptop.image}
                            id={laptop.id}
                            gia_thanh={laptop.gia_thanh}
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
export default ViewProductLaptop