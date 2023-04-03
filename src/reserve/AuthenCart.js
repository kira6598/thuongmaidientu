import React, { useEffect, useState } from "react";
import axious from 'axios'

    const id =sessionStorage.getItem("userid")
    const item= {
        "CPU":[
       {
            "id":"CP01",
            "image":"img/CPU/CPU.PNG",
            "productName":"Intel Pentium",
            "so_luong_con":"100",
            "gia_thanh":"1,290,000 đ"
       },
       {
            "id":"CP02",
            "image":"img/CPU/CPU2.PNG",
            "productName":"Intel Core i7 Gen 12",
            "so_luong_con":"100",
            "gia_thanh":"1,990,000 đ"
       },
       {
            "id":"CP03",
            "image":"img/CPU/CPU3.PNG",
            "productName":"Intel Core i5 Gen 10",
            "so_luong_con":"100",
            "gia_thanh":"1,590,000 đ"
        },
        {
            "id":"CP04",
            "image":"img/CPU/CPU4.PNG",
            "productName":"Intel Core i7 Gen 10",
            "so_luong_con":"100",
            "gia_thanh":"1,790,000 đ"
        },
        {
            "id":"CP05",
            "image":"img/CPU/CPU5.PNG",
            "productName":"Intel Core i9 Unclocked",
            "so_luong_con":"50",
            "gia_thanh":"2,790,000 đ"
        },
        {
            "id":"CP06",
            "image":"img/CPU/CPU6.PNG",
            "productName":"Intel Core i9 Gen 10",
            "so_luong_con":"50",
            "gia_thanh":"2,290,000 đ"
        }
      
      
      ],
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
      ],   "PCGaming":[
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
        },
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
      ],  "PCWork": [
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
      ], "Ram": [
        {
            "id":"RM01",
            "image":"img/RAM/RAM1.PNG",
            "productName":"PATRIOT 8GB",
            "so_luong_con": "50",
            "gia_thanh":"800,000 đ"
        },
        {
            "id":"RM02",
            "image":"img/RAM/RAM2.PNG",
            "productName":"DIMM DDR4 8GB",
            "so_luong_con": "50",
            "gia_thanh":"790,000 đ"
        },
        {
            "id":"RM03",
            "image":"img/RAM/RAM3.PNG",
            "productName":"PATRIOT 8GB",
            "so_luong_con": "50",
            "gia_thanh":"640,000 đ"
        },
        {
            "id":"RM04",
            "image":"img/RAM/RAM4.PNG",
            "productName":"SAMSUNG DDR4 8GB",
            "so_luong_con": "50",
            "gia_thanh":"850,000 đ"
        },
        {
            "id":"RM05",
            "image":"img/RAM/RAM5.PNG",
            "productName":"TRANSCEND 8GB",
            "so_luong_con": "50",
            "gia_thanh":"790,000 đ"
        },
        {
            "id":"RM06",
            "image":"img/RAM/RAM6.PNG",
            "productName":"LEXAR DDR4 16GB",
            "so_luong_con": "50",
            "gia_thanh":"1,590,000 đ"
        }
      
      ]
      }
    const getAuthenCart = async () =>{
        try {
            const respone = await axious.get(`http://localhost:8080/product/getCartItem/${id}`,
            {
                headers:{
                    'Content-Type':'application/json'
                }
            }
            )
            return respone;
        }catch (error) {
            console.log(error); 
        }
    }
    
    const collectProductById = async (data) =>{
            // var addedProductId=[]// return a array
            // data.forEach(item =>{
            console.log(data);
            // })

            
            var productToShow =[]
           
             
            data.forEach((value) => {
                var id =value.product
                let prefix=id.slice(0,2)
                let number=id.slice(2,4);
                
                switch (prefix){
                    
                    case "LT":
                        /*  mã từ LT01 -> LT05:LaptopAcer 
                            mã từ LT06 -> LT10:LaptopAsus
                            mã từ LT11 -> LT16:LaptopMSI
                            mã từ LT17 -> LT20:LaptopDell                
                        */
                        if(number<=5){
                            var addProduct=item.LaptopAcer.filter(product =>{return product.id===id})
                           // lấy element từ arr ra. arr chỉ có duy nhất 1 phần tử
                            productToShow.push( addProduct[0]);                                      
                            } else if(6<=number&&number<=10){
                            var addProduct1=item.LaptopAsus.filter(product =>{return product.id===value})
                            productToShow.push( addProduct1[0]);
                        } else if(11<=number&&number<=16){
                            var addProduct2=item.LaptopMSI.filter(product =>{return product.id===value})
                            productToShow.push( addProduct2[0]);
                        } else{
                            var addProduct3=item.LaptopDell.filter(product =>{return product.id===value})
                            productToShow.push( addProduct3[0]);
                        }break;
                    case "pg": 
                        var addProduct4 = item.PCGaming.filter(product => {return product.id===value})
                        productToShow.push( addProduct4[0]);break;   
                    case "pw": 
                        var addProduct5 = item.PCWork.filter(product => {return product.id===value})
                        productToShow.push( addProduct5[0]);break;            
                    case "RM":
                        var addProduct6 = item.Ram.filter(product => {return product.id===value})
                        productToShow.push( addProduct6[0]);   break;  
                    case "CP":
                            var addProduct7 = item.CPU.filter(product => {return product.id===value})
                            productToShow.push( addProduct7[0]);    break;
                    default:
                        console.log('lỗi cmn rồi, éo thấy cmg cả');
                    }
              
            })
            
            return productToShow;
        }

            const calculate =async (product) =>{
                var gia_SP=product.map(item => {return item.gia_thanh})
            
        
              
                var result=0
                for (let i=0;i<gia_SP.length;i++){
                    const text =gia_SP[i]        
                    const price = Number(text.substring(0,text.length-2).split(",").join(""))
                    console.log(price);
                    result=result+price;
                }
                return result
            }

    const display = async (product,payment) =>{
        console.log(product);
        debugger

        var total = String(payment)           
        var count=0;
        var totalPrice=[]
        for(let i=total.length-1;i>=0;i--){
            totalPrice.push(total[i]);
            count++;
            if(i===0){break;}
            if(count%3===0){
                totalPrice.push(",")
            }
        }
       
        var lastPayment=totalPrice.reverse().join("").concat(" đ")
        console.log(lastPayment);
        
         
             function handleClear(){
                    alert("xóa thành công")
                    sessionStorage.clear();
                }
                function removeItem(e){
                   var key = e.target.id;
                    alert("removed " +key) ;
                    sessionStorage.removeItem(key)
        
                }
        function Show(props){
            return (
                <tr>
                            <td className="cart-image">
                                <a href={`${props.image}`}>
                                    <img src={props.image}/>
                                </a>
                            </td>
                            <td className="cart-ttl">
                                <a href="product.html">{props.productName}</a>
                            </td>
                            <td className="cart-price">
                                <b>{props.price}</b>
                            </td>
                            <td className="cart-quantity">
                                <p className="cart-qnt">
                                    <input value="1" type="text"/>
                                    <a href="#" className="cart-plus"><i className="fa fa-angle-up"></i></a>
                                    <a href="#" className="cart-minus"><i className="fa fa-angle-down"></i></a>
                                </p>
                            </td>
                            <td className="cart-summ">
                                <b>{props.price}</b>
                                <p className="cart-forone">unit price <b className="price" >{props.price}</b></p>
                            </td>
                            <td className="cart-del">
                                <a href="/cart" className="cart-remove" id={`id${props.id}`} onClick={removeItem}></a>
                            </td>
                </tr>
            )
        }

        return(
        
            <main>
                <section className="container stylization maincont">
            
            
                    <ul className="b-crumbs">
                        <li>
                            <a href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <span>Cart</span>
                        </li>
                    </ul>
                    <h1 className="main-ttl"><span>Cart</span></h1>
                    
                    <form action="#">
            
                        <div className="cart-items-wrap">
                            <table className="cart-items">
                                <thead>
                                <tr>
                                    <td className="cart-image">&nbsp;</td>
                                    <td className="cart-ttl">Sản phẩm</td>
                                    <td className="cart-price">Giá</td>
                                    <td className="cart-quantity">Số lượng</td>
                                    <td className="cart-summ">Thành tiền</td>
                                    <td className="cart-del">&nbsp;</td>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                           
                                           product.map(product =>(
                                            
                                            <Show
                                            key={product.id}
                                            id ={product.id}
                                            productName={product.productName}
                                            image={product.image}
                                            price ={product.gia_thanh}
                                            
                                            />
                                        )
                                        
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <ul className="cart-total">
                            <li className="cart-summ">Tổng : <b id="cost">{lastPayment            
                            }</b></li>
                        </ul>
                        <div className="cart-submit">
                            <div className="cart-coupon">
                                <input placeholder="your coupon" type="text"/>
                                <a className="cart-coupon-btn" href="#"><img src="img/ok.png" alt="your coupon"/></a>
                            </div>
                            <a href="#" className="cart-submit-btn">Thanh toán</a>
                            <a href="/cart" className="cart-clear" onClick={handleClear}>Clear cart</a>
                        </div>
                    </form>    
                </section>
            </main>
               )  
    } 

    function AuthenCart(){
        const[jsx,setJsx]=useState(null)
        useEffect(()=>{
            const executed =  async() =>{
                const respone = await getAuthenCart();
                const data1=respone.data
                const product = await collectProductById(data1)
               const payment =await calculate(product);
               const Display= await display(product,payment)
               debugger              
               setJsx(Display)   
            }
            executed()

        },[])
         
        return(
           <React.Fragment>
            {jsx}
           </React.Fragment>
        )
        
        }
      
            
            
export default AuthenCart