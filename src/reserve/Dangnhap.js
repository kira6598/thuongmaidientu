import { useRef, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { AUTHEN_URL } from '../config/globalVariable';

const  Dangnhap=()=>{
    const errRef = useRef()
    const [user,setUser]=useState('')
    const [pwd,setPwd]=useState('');
    const [errMsg,setErrMsg]=useState('');   
    
    useEffect(()=>{
        setErrMsg('');
    },[user,pwd])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {            
            const response = await axios.post(`${AUTHEN_URL}/authenticate`,
                JSON.stringify({ email:user,password: pwd }),
                {
                    headers: { 
                        'Content-Type': 'application/json' }                    
                }
            );
            sessionStorage.setItem("Authentication",true);
            sessionStorage.setItem("itemCount",response.data.countCart)   
            sessionStorage.setItem("userid",response.data.userid)      
            sessionStorage.setItem("username",response.data.username)                 
            window.location = "/"       
        } catch (err) {
            if(!err?.response){
                setErrMsg('No sever Response')
            }else if(err.response?.status===403){
                debugger;
                console.log(err.response);
                setErrMsg(err.response.data.token)
            } else {
                    setErrMsg('Login Failed');
                }
        }
    }

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
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="username">E-mail <span className="required">*</span></label>
                        <input     
                                       
                        type="text"
                        id="username"
                        name='email'
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                         />
                    </p>
                    <p>
                        <label htmlFor="password">Password <span className="required">*</span></label>
                        <input
                            className='auth2'
                             type="password" 
                             id="password"
                             onChange={(e) => setPwd(e.target.value)}
                             value={pwd}
                             required
                             name='password'/>
                    </p>
                    <p className="auth-submit">
                        <input type="submit" value="Đăng nhập"/>
                        <input type="checkbox" id="rememberme" value="forever"/>
                        <label htmlFor="rememberme">Remember me</label>
                    </p>

                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>                    
                    <p className="auth-lost_password">
                        <a href="!#">Lost your password?</a>
                    </p>
                    <a href="/dangky">Register</a>
                </form>
            </div>
            </section>
        </main>
        
    )
}  

export default Dangnhap