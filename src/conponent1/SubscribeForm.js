import React from "react"
function SubscribeForm(){
    return (
        <React.Fragment>
            <div className="newsletter">
                <h2>Mua hàng với nhiều ưu đãi hơn</h2>
                <p>Đăng ký với chúng tôi để nhận được thông báo!</p>
                <form action="#">
                    <input placeholder="Your e-mail" type="text" defaultValue={"null"}/>
                    <input name="OK" defaultValue={"Subscribe"} type="submit"/>
                </form>
            </div>
            <div className="qview-modal">
                <div className="prod-wrap">
                    <a href="#">
                        <h1 className="main-ttl">
                            <span>Reprehenderit adipisci</span>
                        </h1>
                    </a>
                    <div className="prod-slider-wrap">
                        <div className="prod-slider">
                            <ul className="prod-slider-car">
                                <li>
                                    <a data-fancybox-group="popup-product" className="fancy-img" href="http://placehold.it/500x525">
                                        <img src="http://placehold.it/500x525" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox-group="popup-product" className="fancy-img" href="http://placehold.it/500x591">
                                        <img src="img/PCWork/PC9.PNG" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox-group="popup-product" className="fancy-img" href="http://placehold.it/500x525">
                                        <img src="http://placehold.it/500x525" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox-group="popup-product" className="fancy-img" href="http://placehold.it/500x722">
                                        <img src="http://placehold.it/500x722" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox-group="popup-product" className="fancy-img" href="http://placehold.it/500x722">
                                        <img src="http://placehold.it/500x722" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox-group="popup-product" className="fancy-img" href="http://placehold.it/500x722">
                                        <img src="http://placehold.it/500x722" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-fancybox-group="popup-product" className="fancy-img" href="http://placehold.it/500x722">
                                        <img src="http://placehold.it/500x722" alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="prod-thumbs">
                            <ul className="prod-thumbs-car">
                                <li>
                                    <a data-slide-index="0" href="#">
                                        <img src="http://placehold.it/500x525" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-slide-index="1" href="#">
                                        <img src="http://placehold.it/500x591" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-slide-index="2" href="#">
                                        <img src="http://placehold.it/500x525" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-slide-index="3" href="#">
                                        <img src="http://placehold.it/500x722" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-slide-index="4" href="#">
                                        <img src="http://placehold.it/500x722" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-slide-index="5" href="#">
                                        <img src="http://placehold.it/500x722" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a data-slide-index="6" href="#">
                                        <img src="http://placehold.it/500x722" alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="prod-cont">
                        <p className="prod-actions">
                            <a href="#" className="prod-favorites"><i className="fa fa-heart"></i> Add to Wishlist</a>
                            <a href="#" className="prod-compare"><i className="fa fa-bar-chart"></i> Compare</a>
                        </p>
                        <div className="prod-skuwrap">
                            <p className="prod-skuttl">Color</p>
                            <ul className="prod-skucolor">
                                <li className="active">
                                    <img src="img/color/blue.jpg" alt=""/>
                                </li>
                                <li>
                                    <img src="img/color/red.jpg" alt=""/>
                                </li>
                                <li>
                                    <img src="img/color/green.jpg" alt=""/>
                                </li>
                                <li>
                                    <img src="img/color/yellow.jpg" alt=""/>
                                </li>
                                <li>
                                    <img src="img/color/purple.jpg" alt=""/>
                                </li>
                            </ul>
                            <p className="prod-skuttl">Sizes</p>
                            <div className="offer-props-select">
                                <p>XL</p>
                                <ul>
                                    <li><a href="#">XS</a></li>
                                    <li><a href="#">S</a></li>
                                    <li><a href="#">M</a></li>
                                    <li className="active"><a href="#">XL</a></li>
                                    <li><a href="#">L</a></li>
                                    <li><a href="#">4XL</a></li>
                                    <li><a href="#">XXL</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="prod-info">
                            <p className="prod-price">
                                <b className="item_current_price">$238</b>
                            </p>
                            <p className="prod-qnt">
                                <input type="text" defaultValue={1}/>
                                <a href="#" className="prod-plus"><i className="fa fa-angle-up"></i></a>
                                <a href="#" className="prod-minus"><i className="fa fa-angle-down"></i></a>
                            </p>
                            <p className="prod-addwrap">
                                <a href="#" className="prod-add">Add to cart</a>
                            </p>
                        </div>
                        <ul className="prod-i-props">
                            <li>
                                <b>SKU</b> 05464207
                            </li>
                            <li>
                                <b>Manufacturer</b> Mayoral
                            </li>
                            <li>
                                <b>Material</b> Cotton
                            </li>
                            <li>
                                <b>Pattern Type</b> Print
                            </li>
                            <li>
                                <b>Wash</b> Colored
                            </li>
                            <li>
                                <b>Style</b> Cute
                            </li>
                            <li>
                                <b>Color</b> Blue, Red
                            </li>
                            <li><a href="#" className="prod-showprops">All Features</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SubscribeForm