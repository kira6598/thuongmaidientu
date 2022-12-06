import {Link} from 'react-router-dom'
function Dangnhap(){
    return(
        <main>
            <section className='container stylization maincont'>
            <ul className="b-crumbs">
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <span>Đăng nhập</span>
            </li>
        </ul>
        <h1 className="main-ttl"><span>Đăng nhập</span></h1>
        <div className="auth-col">
                <h2>Đăng nhập</h2>
                <form method="post" className="login">
                    <p>
                        <label for="username">E-mail <span className="required">*</span></label><input type="text" id="username"/>
                    </p>
                    <p>
                        <label for="password">Password <span className="required">*</span></label><input type="password" id="password"/>
                    </p>
                    <p className="auth-submit">
                        <input type="submit" value="Đăng nhập"/>
                        <input type="checkbox" id="rememberme" value="forever"/>
                        <label for="rememberme">Remember me</label>
                    </p>
                    <p className="auth-lost_password">
                        <a href="#">Lost your password?</a>
                    </p>
                </form>
            </div>
            </section>
        </main>
        
    )
}
export default Dangnhap