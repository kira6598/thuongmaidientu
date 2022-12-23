function Contact(){
    return (
        <main>
            <section className="container stylization maincont">
                <ul className="b-crumbs">
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <span>Contacts</span>
                </li>
                </ul>
                <h1 className="main-ttl"><span>Contacts</span></h1>
        {/* <!-- Contacts - start --> */}
        <br/>
        <div className="iconbox-wrap">
            <div className="row iconbox-list">
                <div className="cf-xs-6 cf-sm-4 cf-lg-4 col-xs-6 col-sm-4 iconbox-i">
                    
                    <h3 className="iconbox-i-ttl">Hệ thống tổng đài miễn phí:</h3>
                    Gọi mua hàng : 18006975<br/>
                    Hỗ trợ khách hàng : 18006173
                    <span className="iconbox-i-margin"></span>
                </div>
                <div className="cf-xs-6 cf-sm-4 cf-lg-4 col-xs-6 col-sm-4 iconbox-i">
                    
                    <h3 className="iconbox-i-ttl">Hệ thống cửa hàng</h3>
                    SHOWROOM HCM (Làm việc từ 8h00 - 22h00)
<br/>- ĐC1: 78-80-82 Hoàng Hoa Thám, P.12, Q.Tân Bình.
<br/>- ĐC2: 189 Cống Quỳnh, P. Nguyễn Cư Trinh, Q. 1.<br/>
                    SHOWROOM HN(Làm việc từ 8h00 - 21h00)
<br/>- Địa chỉ : 37 Ngõ 121 Thái Hà, P.Trung Liệt, Q.Đống Đa
                    <span className="iconbox-i-margin"></span>
                </div>
                <div className="cf-xs-6 cf-sm-4 cf-lg-4 col-xs-6 col-sm-4 iconbox-i">
                    
                    <h3 className="iconbox-i-ttl">Thời gian làm việc</h3>
                    Tất cả các ngày trong tuần<br/>
                    Từ 8h-22h
                    <span className="iconbox-i-margin"></span>
                </div>
            </div>
        </div>

        {/* <!-- Contacts Info - end --> */}
        <div className="social-wrap">
            <div className="social-list">
                <div className="social-i">
                    <a rel="nofollow" target="_blank" href="http://facebook.com/">
                        <p className="social-i-img">
                            <i className="fa fa-facebook"></i>
                        </p>
                        <p className="social-i-ttl">Facebook</p>
                    </a>
                </div>
                <div className="social-i">
                    <a rel="nofollow" target="_blank" href="http://google.com/">
                        <p className="social-i-img">
                            <i className="fa fa-google-plus"></i>
                        </p>
                        <p className="social-i-ttl">Google +</p>
                    </a>
                </div>
                <div className="social-i">
                    <a rel="nofollow" target="_blank" href="http://twitter.com/">
                        <p className="social-i-img">
                            <i className="fa fa-twitter"></i>
                        </p>
                        <p className="social-i-ttl">Twitter</p>
                    </a>
                </div>
                
                <div className="social-i">
                    <a rel="nofollow" target="_blank" href="http://instagram.com/">
                        <p className="social-i-img">
                            <i className="fa fa-instagram"></i>
                        </p>
                        <p className="social-i-ttl">Instagram</p>
                    </a>
                </div>
                <div className="social-i">
                    <a rel="nofollow" target="_blank" href="http://youtube.com/">
                        <p className="social-i-img">
                            <i className="fa fa-youtube"></i>
                        </p>
                        <p className="social-i-ttl">Youtube</p>
                    </a>
                </div>
            </div>
        </div>

        {/* <!-- Contact Form --> */}
        <div className="contactform-wrap">
            <form action="#" className="form-validate">
                <h3 className="component-ttl component-ttl-ct component-ttl-hasdesc"><span>Feedback</span></h3>
                <p className="component-desc component-desc-ct">Các bạn hãy đóng góp ý kiến để chúng tôi tốt hơn!</p>
                <p className="contactform-field contactform-text">
                    <label className="contactform-label">Name</label>{/*<!-- NO SPACE -->*/}<span className="contactform-input"><input placeholder="Name" type="text" name="name" data-required="text"/></span>
                </p>
                <p className="contactform-field contactform-email">
                    <label className="contactform-label">E-mail</label>{/*<!-- NO SPACE -->*/}<span className="contactform-input"><input placeholder="Your E-mail" type="text" name="email" data-required="text" data-required-email="email"/></span>
                </p>
                <p className="contactform-field contactform-textarea">
                    <label className="contactform-label">Message</label>{/*<!-- NO SPACE -->*/}<span className="contactform-input"><textarea placeholder="Your message" name="mess" data-required="text"></textarea></span>
                </p>
                <p className="contactform-submit">
                    <input value="Send" type="submit"/>
                </p>
            </form>
        </div>
        <br/>
        <br></br>
            </section>
        </main>
    )
}
export default Contact;