import React, { useState } from "react";
import "./color1.css"

function CartPopup({handleClosePopUp,handleSubmit,}) {
    const [inputValue, setInputValue] = useState(1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

debugger
  return (
    <div>
              <div className="popup-background">
            <div id="cart-popup" className="popup">
           <button onClick={handleClosePopUp} className="close-button" >X</button>
                <br/> <br/><br/>
                <div className="text" >vui lòng chọn số lượng</div>        
                <p className="cart-qnt">
                <input  value={inputValue} type="text" onChange={handleInputChange} className="huhu" />                        
                </p>
            <button className="submit" onClick={handleSubmit}>thêm vào giỏ</button>
            </div>
       </div>   
    </div>
  );
}
export default CartPopup
