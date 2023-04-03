import React, { useEffect } from 'react'
import axios from 'axios'
import html2canvas from 'html2canvas'
import { CART_URL } from '../config/globalVariable'
import './Invoice.css'
import { useLocation } from 'react-router-dom'
function Invoice(){
	
	const location = useLocation();
	const data= location.state?.proRef.current	
	const productInvoice=[]
	for (const key in data) {
		if (Object.hasOwnProperty.call(data, key)) {			
			const element = Object.values(data[key]) ;			
			productInvoice.push(...element)
		}
	}
	console.log(productInvoice);
	const TotalInvoice=productInvoice[productInvoice.length-1]
	
	const date =new Date()
	const InvoiceNumb=date.valueOf()
	const currentDate= date.toLocaleString()

	const total = "1,000,000,000 đ"
	
	// function start

	function convertStringToNumb(string){
		return Number(string.substring(0,string.length-2).split(",").join(""));
	}
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
	function calculateMoney(){
		const totalNumb=convertStringToNumb(total);
		const totalInvoiceNumb=convertStringToNumb(TotalInvoice);
		const result= totalNumb-totalInvoiceNumb
		return convertToString(result)
	}

	let balanceDue= calculateMoney()

	function handleConvertToJpg (){
		const element = document.getElementById('bill');
		// console.log(element);
		html2canvas(element).then(canvas =>{
			const jpgUrl = canvas.toDataURL('image/jpeg');
			console.log(jpgUrl);
			axios.post(`${CART_URL}/save-image`,JSON.stringify(jpgUrl) ,
			{headers:{
				'Content-Type':'application/json'
			}}
			)
			.then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            })		
		});	

		setTimeout(()=>{
			window.location='/'
		},5000)
	}

	

	useEffect(()=>{
		handleConvertToJpg()
	},[])

	function InvoiceItem(props){

		return(	
			<tr>
				
				<td><span >{props.stt}</span></td>
				<td><span >{props.productName}</span></td>
				<td><span >{props.unitPrice}</span></td>
				<td><span >{props.quantity}</span></td>
				<td><span>{props.price}</span></td>
			</tr>		
		)
	}



    return (
        <main id='bill'>
		<header className='invoice-header'>
			<h1>Invoice</h1>
			<address  >
				<p>GearVN</p>
				<p>37 ngõ 121 Thái Hà<br/>P. Trung Liệt, Q.Đống Đa</p>
				<p>18006173</p>
			</address>
		</header>
        <article>
			{/* <h1>Recipient</h1> */}
			{/* <address >
				<p>Some Company<br/>c/o Some Guy</p>
			</address> */}
			<table className="meta">
				<tr>
					<th><span >Invoice #</span></th>
					<td><span >{InvoiceNumb}</span></td>
				</tr>
				<tr>
					<th><span >Date</span></th>
					<td><span >{currentDate}</span></td>
				</tr>
				<tr>
					<th><span >Amount Due</span></th>
					<td><span>{total}</span></td>
				</tr>
			</table>
			<table className="inventory">
				<thead>
					<tr>
						<th><span >STT</span></th>
						<th><span >Sản Phẩm</span></th>
						<th><span >Đơn giá</span></th>
						<th><span >Số lượng</span></th>
						<th><span >Thành tiền</span></th>
					</tr>
				</thead>
				<tbody>
					{
						productInvoice.map(product=>
							{
								if(productInvoice.indexOf(product)+1===productInvoice.length) return
								return(
									<InvoiceItem 
									key={product.id}
									productName={product.productName}
									quantity={product.quantity}
									price={product.price}
									unitPrice={product.unitPrice}
									stt={productInvoice.indexOf(product)+1}										
									
									/>
								)
							}
							)
					}
				</tbody>

			</table>
			<table className="balance">
				<tr>
					<th><span >Total</span></th>
					<td><span>{total}</span></td>
				</tr>
				<tr>
					<th><span >Amount Paid</span></th>
					<td><span >{TotalInvoice}</span></td>
				</tr>
				<tr>
					<th><span >Balance Due</span></th>
					<td><span>{balanceDue}</span></td>
				</tr>
			</table>
		</article>
		<aside>
			<h1><span >Additional Notes</span></h1>
			<div >
				<p>A finance charge of 1.5% will be made on unpaid balances after 30 days.</p>
            </div>
		</aside>
		<p> </p>
	
		</main>		
    )
	}
export default Invoice