
import React, { useState } from "react"
import NotAuthenticate from "./NotAuthenticate"
import {useNavigate} from "react-router-dom"
function NotAuthenticateHeader(){

    const[input,setInput]= useState('')  


    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if (input) {
            debugger
        navigate(`/search?productName=${input}`);
        }else{
            return
        }
      };

    
  
   
    return (
      
    <header className="header">
        {/* <!-- Logo, Shop-menu - start --> */}
        <div className="header-middle">
            <div className="container header-middle-cont">
                <div className="toplogo">
                    <a href="/">
                        <img src="img/logo.png" alt="nullllll"/>
                    </a>
                </div>
                <div className="shop-menu">
                    <ul>
                        <li className="topsearch">
                            <button id="topsearch-btn" className="topsearch-btn" ><i className="fa fa-search"></i></button>
                            <form className="topsearch-form" onSubmit={handleSearch} >
                                <input type="text" placeholder="Search products" onChange={(e)=>setInput(e.target.value)} />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </li>
                        <li className="topauth" >{<NotAuthenticate/>}           
                        </li>

                        <li>
                            <div className="h-cart">
                                <a href="/cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="shop-menu-ttl">Giỏ hàng</span> (
                                    <b>{localStorage.length}</b>)
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- Logo, Shop-menu - end --> */}

        {/* <!-- Topmenu - start --> */}
        <div className="header-bottom">
            <div className="container">
                <nav className="topmenu">

                    {/* <!-- Catalog menu - start --> */}
                    <div className="topcatalog">
                        <button className="topcatalog-btn" >Danh mục SP</button>
                        <ul className="topcatalog-list">
                            <li>
                            <button className="list-button">
                                Laptop
                            </button>
                                <i className="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="/laptopAcer">
                                        Acer
                                    </a>
                                    </li>
                                    <li>
                                        <a href="/laptopAsus">
                                        Asus
                                    </a>
                                    </li>
                                    <li>
                                        <a href="laptopMsi">
                                        Msi
                                    </a> 
                                    </li>
                                    <li>
                                        <a href="laptopDell">
                                        Dell
                                    </a> 
                                    </li>

                                </ul>
                            </li>
                            <li>
                            <button className="list-button">
                                PC-Gaming
                            </button>
                                <i className="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="PCtrung">
                                        PC Gaming Tầm Trung
                                    </a>
                                    </li>
                                    <li>
                                        <a href="PCCao">
                                        PC Gaming Cao Cấp
                                    </a>
                                    </li>
                                    <li>
                                        <a href="PCSieuCao">
                                        PC Gaming Siêu Cao Cấp
                                    </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                            <button className="list-button">
                                PC-Workstation
                            </button>
                                <i className="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="PCWIntel">
                                        PC Workstation Intel Xeon
                                    </a>
                                    </li>
                                    <li>
                                        <a href="PCWRyzen">
                                        PC Workstation Ryzen
                                    </a>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li>
                            <button className="list-button">
                                Linh Kiện
                                </button>
                                <i className="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="/CPU">
                                        CPU
                                    </a>
                                        
                                    </li>
                                    <li>
                                        <a href="/RAM">
                                        RAM
                                    </a>
                                        
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Catalog menu - end -->

                    <!-- Main menu - start --> */}
                    <button type="button" className="mainmenu-btn">Service</button>

                    <ul className="mainmenu">
                        <li>
                            <a href="/" className="active">
                            Trang Chủ
                        </a>
                        </li>
                        <li >
                            <a href="/contact">
                            About Us
                        </a>
                        </li>
                        <li >
                            <a href="/NotFound">
                            Chính sách bảo hành
                        </a>
                            
                        </li>
                        <li>
                            <a href="/NotFound">
                            Chính sách trả góp
                        </a>
                        </li>                      
                        <li className="menu-item-has-children">
                            <button className="link-button">
                            Pages <i className="fa fa-angle-down"></i>
                        </button>
                            <ul className="sub-menu">
                                <li>
                                    <a href="/contact">
                                    Contacts
                                </a>
                                </li>
                                <li>
                                    <a href="https://voz.vn/f/lap-trinh-cntt.91/">
                                    Tin Công Nghệ
                                </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCdxRpD_T4-HzPsely-Fcezw">
                                    Youtube
                                </a>
                                </li>
                            </ul>
                        </li>
                    
                    </ul>
                    {/* <!-- Main menu - end -->

                    <!-- Search - start -->

                    <!-- Search - end --> */}

                </nav>
            </div>
        </div>
        {/* <!-- Topmenu - end --> */}

    </header>
    
    )
}
export default NotAuthenticateHeader