import React from "react";
function NotAuthenticate(){
    return  (
    <React.Fragment>
          <a href="/dangky">
            <i className="fa fa-lock"></i>
            <span className="shop-menu-ttl">Đăng kí</span>
        </a>
        <a href="/dangnhap">
            <span className="shop-menu-ttl">Đăng nhập</span>
        </a>
    </React.Fragment>    
    ) 
}
export default NotAuthenticate;