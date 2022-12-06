function Header(){
    return (
      
            <header className="header">
        {/* <!-- Logo, Shop-menu - start --> */}
        <div className="header-middle">
            <div className="container header-middle-cont">
                <div className="toplogo">
                    <a href="/">
                        <img src="img/logo.png" />
                    </a>
                </div>
                <div className="shop-menu">
                    <ul>
                        <li className="topsearch">
                            <a id="topsearch-btn" className="topsearch-btn" href="#"><i className="fa fa-search"></i></a>
                            <form className="topsearch-form" action="#">
                                <input type="text" placeholder="Search products" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </li>
                        <li className="topauth">
                            <a href="/dangky">
                                <i className="fa fa-lock"></i>
                                <span className="shop-menu-ttl">Đăng kí</span>
                            </a>
                            <a href="/dangnhap">
                                <span className="shop-menu-ttl">Đăng nhập</span>
                            </a>
                        </li>

                        <li>
                            <div className="h-cart">
                                <a href="cart.html">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="shop-menu-ttl">Giỏ hàng</span> (
                                    <b>0</b>)
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
                        <a className="topcatalog-btn" href="#">Danh mục SP</a>
                        <ul className="topcatalog-list">
                            <li>
                                <a href="/laptop">
                                Laptop
                            </a>
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
                                <a href="PCG">
                                PC-Gaming
                            </a>
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
                                <a href="PCW">
                                PC-Workstation
                            </a>
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
                                <a href="/linhkien">
                                Linh Kiện
                            </a>
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
                            <a href="#">
                            About Us
                        </a>
                        </li>
                        <li >
                            <a href="#">
                            Chính sách bảo hành
                        </a>
                            
                        </li>
                        <li>
                            <a href="#">
                            Chính sách trả góp
                        </a>
                        </li>                      
                        <li className="menu-item-has-children">
                            <a href="#">
                            Pages <i className="fa fa-angle-down"></i>
                        </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="/contact">
                                    Contacts
                                </a>
                                </li>
                                <li>
                                    <a href="#">
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
export default Header