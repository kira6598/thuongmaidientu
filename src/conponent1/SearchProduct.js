import axios from "axios";
import React ,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_URL } from "../config/globalVariable";
import ProductItem from '../conponent1/ProductItem.js'
function SearchProduct(props){
    const params = props.param
     console.log(params);
    // const [state,setState]=useState("Mặc định")
    const [jsx,setJsx]= useState(null)
    const navigate = useNavigate()
    const getProduct = async () =>{
        try {
            const respone = await axios.get(`${PRODUCT_URL}/searchProduct?productName=${params}`,
        {
            headers:{
                'Content-Type':'application/json'
            }
        }
        )

            return respone.data
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(()=>{
        const results = async() => {
            const products= await getProduct();            
            if(products.length===0){
                navigate("/NotFound")
            }
            console.log(products);            
            setJsx(display(products))
        } 
        results()
    },[])
    // function handleDefalt(){
    //     setArr(value)
    //     setState("Mặc định")
    // }
    
    // function handleAcs(){
    //     // bước 1: lúc đầu, khi xử lý cần convert field gia_thanh từ String sang dạng Number để so sánh quickSort được chuẩn và cho nó vào hashMap
    //     let newArr = new Map();
    //     for(let i=0;i<value.length;i++){
    //      newArr.set(i,convert(value[i].gia_thanh))
    //     }
    //     //end

    //     //bước 2: cho các value trong hashMap vào arr để so sánh
    //     let arrToSort=[]
    //     for(let i=0;i<newArr.size;i++){
    //      arrToSort.push(newArr.get(i))
    //     }
    //     let SortedArrValue=QuickSortAsc(arrToSort)
    //     // end

    //     //bước 3: sau khi có được Arr value so sánh rồi thì đối chiếu với Map để lấy keyArr
    //     let SortedArrKey = []
    //    SortedArrValue.forEach((i) =>{
    //         SortedArrKey.push(getByValue(newArr,i))
    //    })
    //    //end

    //    // bước 4: sau khi có được keyArr thì nó chính là index đã được sắp xếp của mảng ban đầu
    //    let renderAcsArr= []
    //    for(let i=0;i<SortedArrKey.length;i++){
    //     let index = SortedArrKey[i]
    //     renderAcsArr.push(value[index])
    //    }

    //    // các function chức năng
    //     function getByValue(map, searchValue) {
    //         for (let [key, value] of map.entries()) {
    //           if (value === searchValue)
    //             return key;
    //         }
    //       }
    
    //    function convert(string){
    //     return Number(string.substring(0,string.length-2).split(",").join(""))
        
    // }

    //     function QuickSortAsc(arr){
    //     if(arr.length<2){return arr}
    //     const pivotIndex=arr.length-1;
    //     const pivot = arr[pivotIndex]
                  
    //     let left=[]
    //     let right=[]
    //     for(let i=0;i<pivotIndex;i++){
    //         const currentItem=arr[i]
    //         if(currentItem <pivot){
    //             left.push(currentItem)
    //         }else{
    //             right.push(currentItem)
    //         }
    //     }
    //     return [...QuickSortAsc(left),pivot,...QuickSortAsc(right)]       
    //    }  

    //    //end

    //    setArr(renderAcsArr)
    //    setState("Tăng dần")
    //       }
    
    // function handleDec(){
    //     // bước 1: lúc đầu, khi xử lý cần convert field gia_thanh từ String sang dạng Number để so sánh quickSort được chuẩn và cho nó vào hashMap
    //     let newArr = new Map();
    //     for(let i=0;i<value.length;i++){
    //      newArr.set(i,convert(value[i].gia_thanh))
    //     }
    //     //end

    //     //bước 2: cho các value trong hashMap vào arr để so sánh
    //     let arrToSort=[]
    //     for(let i=0;i<newArr.size;i++){
    //      arrToSort.push(newArr.get(i))
    //     }
    //     let SortedArrValue=QuickSortDec(arrToSort)
    //     // end

    //     //bước 3: sau khi có được Arr value so sánh rồi thì đối chiếu với Map để lấy keyArr
    //     let SortedArrKey = []
    //    SortedArrValue.forEach((i) =>{
    //         SortedArrKey.push(getByValue(newArr,i))
    //    })
    //    //end

    //    // bước 4: sau khi có được keyArr thì nó chính là index đã được sắp xếp của mảng ban đầu
    //    let renderDecArr= []
    //    for(let i=0;i<SortedArrKey.length;i++){
    //     let index = SortedArrKey[i]
    //     renderDecArr.push(value[index])
    //    }

    //    // các function chức năng
    //     function getByValue(map, searchValue) {
    //         for (let [key, value] of map.entries()) {
    //           if (value === searchValue)
    //             return key;
    //         }
    //       }
    
    //    function convert(string){
    //     return Number(string.substring(0,string.length-2).split(",").join(""))
        
    // }

    //     function QuickSortDec(arr){
    //     if(arr.length<2){return arr}
    //     const pivotIndex=arr.length-1;
    //     const pivot = arr[pivotIndex]
                  
    //     let left=[]
    //     let right=[]
    //     for(let i=0;i<pivotIndex;i++){
    //         const currentItem=arr[i]
    //         if(currentItem >pivot){
    //             left.push(currentItem)
    //         }else{
    //             right.push(currentItem)
    //         }
    //     }
    //     return [...QuickSortDec(left),pivot,...QuickSortDec(right)]       
    //    }  

    //    //end

    //    setArr(renderDecArr)
    //    setState("Giảm dần")
    //       }
    function display(product){
        return(<React.Fragment>
            <ul className="b-crumbs">
			<li>
				<a href="/">
					Doanh mục SP
				</a>
			</li>
			<li>
				<a href="/laptop">
			        Sản phẩm có chứa ký tự "{params}"
				</a>
			</li>			
		    </ul>     
            {/* <!-- Catalog Sidebar - start --> */}
		
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
					<p >huhu</p>
					<ul>
						<li>
							<button className="sorting-button" >Giá: Tăng dần</button>
						</li>
						<li>
							<button className="sorting-button" >Giá: Giảm dần</button>
						</li>						
						<li>
							<button className="sorting-button"   >Mặc định</button>
						</li>
					</ul>
				</div>

				{/* <!-- Count per page --> */}
				{/* <div className="section-count" id='couting'>
					<p>12</p>
					<ul>
						<li><button className="number-button">12</button></li>
						<li><button className="number-button">24</button></li>
						<li><button className="number-button">48</button></li>
					</ul>
				</div> */}
				<div className="prod-items section-items" >
                        { 
						product.map( items =>(
                            <ProductItem
                            key={items.id}
                            image={items.image}
                            id={items.id}
                            gia_thanh={items.price}
                            /> 
                        )
                        )}
                </div>
    

			</div>
			{/* <!-- Catalog Topbar - end --> */}

		</div>
		{/* <!-- Catalog Items | Gallery V1 - end --> */}
        </React.Fragment>)
    }

    return(
        <React.Fragment>           
            {jsx} 
        </React.Fragment>             
       )
}
export default SearchProduct;