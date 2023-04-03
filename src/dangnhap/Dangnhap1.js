import { useState, useEffect } from 'react'
import axios from 'axios';
import { AUTHEN_URL } from '../config/globalVariable';
import './dangnhap.css'

const  Dangnhap=()=>{
  
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
    const handleClosePopUp =()=>{
        window.location="/"
    }

    return(
        <main className='dangnhap'>
            (
                <section className='container stylization maincont'>
                <form onSubmit={handleSubmit} class="box">
                    <button onClick={handleClosePopUp} className="close-button-auth" >X</button>
                    <h1>ĐĂNG NHẬP TÀI KHOẢN</h1>
                    <input type="text" 
                    placeholder="Email"                     
                     id="username"
                     name='email'
                     autoComplete="off"
                     onChange={(e) => setUser(e.target.value)}
                     value={user}
                     required
                    
                    />
                    <input type="password" placeholder="Password"
                    className='auth2'
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    name='password'/>
                    <input type="submit" value="ĐĂNG NHẬP"/>
                    {errMsg && <p className='error'>{errMsg}</p>}
                    </form>
                </section>
            )
            
            
        </main>
        
    )
     
            
        
        
        
    
}  

export default Dangnhap
