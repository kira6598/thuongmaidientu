import React from "react";

function Authenticated(){
    const user = sessionStorage.getItem('username')
    return (
        <React.Fragment>
        <a href="/">
          <span >xin chào {user}</span>
        </a>
        <a href="/logout">
          <span className="shop-menu-ttl">Đăng xuất</span>
        </a>
        </React.Fragment>
    )
}
export default Authenticated;