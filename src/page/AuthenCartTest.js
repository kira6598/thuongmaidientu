import axios from "axios";
import React, {useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CART_URL } from "../config/globalVariable";  
    function Cart(){   
        const userId =sessionStorage.getItem("userid")     
        useEffect(()=>{
            
            axios.get(`${CART_URL}/getCartItem/${userId}`,
            {
                header:{
                    'Content-Type':'application/json'                   
                }
            }).then(respone=> setData(respone.data))        
 // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        // declare state start
        const[total,setTotal]=useState(0)
        const[checkedState,setcheckedState]=useState({})
        const[detailPrice,setDetaiPrice]=useState({}) 
        const[quantity,setQuantity]=useState({}); 
        const[data,setData]=useState([])  
        const proRef=useRef([]);             
        const navigate=useNavigate()
        useEffect(()=>{
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                const id= element.id;
                setQuantity((prevPrice)=>{
                    const newDetaiPrice={...prevPrice,[id]:element.quantity}
                    return newDetaiPrice
                })
                setDetaiPrice((prevQuantity)=>{
                    const newQuantity={...prevQuantity,[id]:convertToString(element.total)};
                    return newQuantity
                })                   
                
            }
        }    
        },[data])
        // declare state end
        console.log(checkedState);
        console.log(detailPrice);
        console.log(quantity);
        // handle function start
        function handleChecked(event){            
            const checked = event.target.checked;
            const itemId=event.target.value;
            const amount = event.target.parentNode.parentNode.childNodes[5].childNodes[0].textContent;            
            var amountNumb =  Number(amount.substring(0,amount.length-2).split(",").join(""))
            setcheckedState((prevCheckValue)=>{
                const newcheckedState = {...prevCheckValue,[itemId]:checked}
                return newcheckedState
            })
            if(checked){                             
                setTotal(total+amountNumb)           
            }else{                
                setTotal(total-amountNumb)
            }         
        }
        function handleClear(e){
            e.preventDefault();
           var key = e.target.id;
           axios.delete(`${CART_URL}/delete/${userId}?productId=all`,{
            headers:{
                'Content-Type':'application/json'
            }
           })
           .then(()=>{
            sessionStorage.setItem("itemCount","0")
            window.location='/cart'})
        }
        function removeItem(e){
            e.preventDefault();
           var key = e.target.id;
           axios.delete(`${CART_URL}/delete/${userId}?productId=${key}`,{
            headers:{
                'Content-Type':'application/json'
            }
           })
           .then(()=>setData(data.filter(e=>!Object.values(e).includes(key)))).catch(er=>console.log(er))
        }
        function handleInc(e){
            e.preventDefault()
            const checked = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].checked
            if(checked){return}
            const inputNode= e.target.parentNode.childNodes[0]
            const buttonCartInc=e.target.id;
            const inputValue =inputNode.value
            const inputValueNumb=Number(inputValue)
            const newQuantity = String(inputValueNumb+1)
            console.log(newQuantity);

            const priceNumb=e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[0].textContent;
            const eachProductBill =newQuantity*priceNumb;   
            const lastResult = convertToString(eachProductBill)
            setQuantity((prevQuantityTrace) =>{
                const newQuantityTrace = {...prevQuantityTrace,[buttonCartInc]:newQuantity}
                return newQuantityTrace;
            })        
            setDetaiPrice((prevBillCheck) =>{
                 const newBillCheck = {...prevBillCheck,[buttonCartInc]:lastResult}
                 return newBillCheck
            })       
            }
        function handleDec(e){
            e.preventDefault()
            const checked = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].checked
            if(checked){return}
            const inputNode= e.target.parentNode.childNodes[0]
            const buttonCartInc=e.target.id;
            const inputValue =inputNode.value
            const inputValueNumb=Number(inputValue)
            const newQuantity = String(inputValueNumb-1)
            const priceNumb=e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[0].textContent;
            const eachProductBill =newQuantity*priceNumb;   
            const lastResult = convertToString(eachProductBill)
            if(newQuantity<0) return;
            setQuantity((prevQuantityTrace) =>{
                const newQuantityTrace = {...prevQuantityTrace,[buttonCartInc]:newQuantity}
                return newQuantityTrace;
            })
            setDetaiPrice((prevBillCheck) =>{
                const newBillCheck = {...prevBillCheck,[buttonCartInc]:lastResult}
                return newBillCheck
           })
        }
        function handlePay(e){
            e.preventDefault();
            for (const key in checkedState) {
                if (Object.hasOwnProperty.call(checkedState, key)) {
                    const element = checkedState[key];
                     
                    if(element===true){
                       const isExist= proRef.current.find(e=>Object.keys(e).includes(key))
                        if(isExist){                           
                            continue;                            
                        }else{
                            const ProdItem=data.find(e=>e.id===key)
                            
                            proRef.current.push({
                                [key]:{
                                    price: detailPrice[key],
                                    quantity:quantity[key],
                                    productName: ProdItem.productName,
                                    unitPrice:convertToString(ProdItem.price)
                                }});
                        }
                    }else{
                        proRef.current= proRef.current.filter(e=>!Object.keys(e).includes(key))
                    }                    
                }else{
                    return;
                }                
            }
            const totalSendInvoice={totalInvoice:convertToString(total)}
            proRef.current.push(totalSendInvoice)
            navigate("/bill",{state:{proRef}})
            console.log(checkedState);
            console.log(proRef);
        }
        // handle function end
    // accessories function start


       function convertToString(price){
        let textPrice=String(price)
            var count=0;
        var totalPrice=[]
        for(let i=textPrice.length-1;i>=0;i--){
            totalPrice.push(textPrice[i]);
            count++;
            if(i===0){break;}
            if(count%3===0){
                totalPrice.push(",")
            }
        }       
        var lastResult=totalPrice.reverse().join("").concat(" đ")
        return lastResult
    }  
        function calculateMoney(e){
            console.log("changed Input");    
        }
        // accessories function end
        
        // Component Function start
        function Show(props){
            return (
                <tr>       
                            <td className="cart-select">
                            <input 
                            type="checkbox" 
                            checked={checkedState[props.id]} 
                            value={props.id}
                            onChange={handleChecked}/>
                            </td>
                            <td className="cart-image">
                                <a href={`${props.image}`}>
                                    <img src={props.image} alt="hehe"/>
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
                                    <input type="text"  value={quantity[props.id]||1} onChange={calculateMoney}  />
                                    <button  className="cart-plus fa fa-angle-up" onClick={handleInc} id={props.id} ></button>
                                    <button  className="cart-minus fa fa-angle-down" onClick={handleDec} id={props.id}></button>
                                </p>
                            </td>
                            <td className="cart-summ">
                                <b>{detailPrice[props.id]||[props.price]}</b>
                                <p className="cart-forone">unit price <b className="price">{props.price}</b></p>
                            </td>
                            <td className="cart-del">
                                <button  className="cart-remove" id={`${props.id}`}onClick={removeItem}> </button>
                            </td>
                </tr>
            )
        }       
        // Component Function end             
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
        
        <form >

            <div className="cart-items-wrap">
                <table className="cart-items" id="myTable">
                    <thead>
                    <tr>
                        <td className="cart-select">&nbsp; </td>
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
                               data.map(product =>(
                                <Show
                                key={product.id}
                                id ={product.id}
                                productName={product.productName}
                                image={product.img}
                                price ={product.price}
                                quantity ={product.quantity}                                
                                />
                            )
                            
                            )
                        }
                    </tbody>
                </table>
            </div>
            <ul className="cart-total">
                <li className="cart-summ">Tổng : <b id="cost">{convertToString(total)}</b></li>
            </ul>
            <div className="cart-submit">
                
                <button className="cart-submit-btn" onClick={handlePay} >Thanh toán</button>
                <button className="cart-clear" onClick={handleClear}>Clear cart</button>
            </div>
        </form>
     

    </section>
</main>


    )
}
export default Cart