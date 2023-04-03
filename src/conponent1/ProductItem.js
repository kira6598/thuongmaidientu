import axios from 'axios';
import React,{useState} from 'react';
import CartPopup from '../cartPopup/CartPopup'
import {CART_URL} from '../config/globalVariable'


function ProductItem (props){

    const [showPopUp, setShowPopUp] = useState(false);
    const [prodID,setProdID]=useState("")
    const handleButtonClick =(event)=>{
        const id=event.target.id;
        setShowPopUp(true)
        setProdID(id)
    }
      const handleClosePopUp = () => {
        setShowPopUp(false);
      };
    const handleSubmit= async(e) =>{
        e.preventDefault();
        const userId= sessionStorage.getItem("userid");
        const cartItem={
            userid:userId,
            productid:prodID,
            quantity:1
        };
        if(userId!=null){
            try {
            await axios.post(`${CART_URL}/addToCart`,
            JSON.stringify(cartItem),
            {
                headers:{'Content-Type':'application/json'}
            }
            )
            axios.get(`${CART_URL}/count?userId=${userId}`,{
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(respones=> sessionStorage.setItem("itemCount",respones.data))
            } catch (error) {
                console.log(error);
            }
            alert('success')
        }else{
            localStorage.setItem(`id${prodID}`,prodID)
            alert("them thanh cong")
            
        }
        setShowPopUp(false);
    }


    return(
        <React.Fragment>
            
        {showPopUp && (
        <CartPopup handleClosePopUp={handleClosePopUp} handleSubmit={handleSubmit}  />
        )}
            
  
    <div className="prod-i">
                  <div className="prod-i-top">
                      <a href="/#" className="prod-i-img"><img src={props.image} alt="Adipisci aperiam commodi"/></a>
                      
                      <button  className="prod-i-buy" id={props.id} onClick={handleButtonClick}>Thêm vào giỏ</button>
                      <p className="prod-i-properties-label"><i className="fa fa-info"></i></p>

                      <div className="prod-i-properties">
                          <dl>
                              <dt>Exterior</dt>
                              <dd>Silt Pocket<br/></dd>
                              <dt>Material</dt>
                              <dd>PU<br/></dd>
                              <dt>Occasion</dt>
                              <dd>Versatile<br/></dd>
                              <dt>Shape</dt>
                              <dd>Casual Tote<br/></dd>
                              <dt>Pattern Type</dt>
                              <dd>Solid<br/></dd>
                              <dt>Style</dt>
                              <dd>American Style<br/></dd>
                              <dt>Hardness</dt>
                              <dd>Soft<br/></dd>
                              <dt>Decoration</dt>
                              <dd>None<br/></dd>
                              <dt>Closure Type</dt>
                              <dd>Zipper<br/></dd>
                          </dl>
                      </div>
                  </div>
                  <h3>
                      <a href="/">Adipisci aperiam commodi</a>
                  </h3>
                  <p className='prod-i-price'>
                      <b>{props.gia_thanh}</b>
                  </p>
              </div>
        </React.Fragment>

)}
export default ProductItem