function Dangky(){
    return(

        <main>
            <section className="container stylization maincont">
            <ul className="b-crumbs">
            <li>
                <a href="index.html">
                    Home
                </a>
            </li>
            <li>
                <span>Đăng ký</span>
            </li>
        </ul>
        <h1 className="main-ttl"><span>Đăng ký </span></h1>
        <div className="auth-wrap">
        <div className="auth-col">
                <h2>Đăng ký</h2>
                <form method="post" className="register">
                    <p>
                        <label for="reg_email">Email <span className="required">*</span></label><input type="email" id="reg_email"/>
                    </p>
                    <p>
                        <label for="reg_password">Password <span className="required">*</span></label><input type="password" id="reg_password"/>
                    </p>
                    <p className="auth-submit">
                        <input type="submit" value="Đăng ký"/>
                    </p>
                </form>
            </div>
            </div>
            </section>
        </main>
       
    )
}
export default Dangky