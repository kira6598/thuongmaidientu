import React from 'react'


function adjustCart(){

    return(
        <React.Fragment>
            <div id='adjust'>
                <a href='javascript:void(0)'className='ahuhu' onClick={closePopUp()} >X</a>
                <center>
                    <div>xin vui lòng chọn số lượng</div>
                    <p className="cart-qnt">
                                <input value="1" type="text"/>
                                <a href="#" className="cart-plus"><i className="fa fa-angle-up"></i></a>
                                <a href="#" className="cart-minus"><i className="fa fa-angle-down"></i></a>
                    </p>
                </center>
            </div>
        </React.Fragment>
    )
}
export default adjustCart;