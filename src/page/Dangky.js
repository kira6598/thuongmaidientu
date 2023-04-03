import axios from "axios";
import {  useState } from "react";
import {AUTHEN_URL} from '../config/globalVariable';
function Dangky(){
    const [FirstName,setFirstName]=useState('');
    const [LastName,setLastName]=useState('');
    const [Email,setEmail]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const [Password,setPassword]=useState('');




    const handleRegister = async (e)=>{
        e.preventDefault();
        try {
             await axios.post(`${AUTHEN_URL}/register`,
            JSON.stringify({firstname:FirstName,lastname:LastName,email:Email,password:Password}),
            {
                headers:{'content-type':'application/json'}
            });
            window.location="/active"

        } catch (error) {
            if(!error?.response){
                setErrMsg("No Sever Respone");            
            }
            if(error?.response.status===406){
                setErrMsg("Email is invalid");
            }
            if(error?.response.status===400){
                setErrMsg("email is already exist");
            }
            if(error?.response.status===500){
                setErrMsg("an error happen when sending email");
            }
        }
    }

    
    return(

        <main>
            <section className="container stylization maincont">
            <ul className="b-crumbs">
            <li>
                <a href="index.html">
                    Home
                </a>
            </li>
        </ul>
        <h1 className="main-ttl"><span>Đăng ký </span></h1>
        <div className="auth-wrap">
        <div className="auth-col">
                <form onSubmit={handleRegister} >
                    <p>
                        <label for="reg_firstname">first name <span className="required">*</span></label>
                        <input type="text" 
                        name="firstname" 
                        onChange={(e)=>{setFirstName(e.target.value)}}
                        />
                    </p>
                    <p>
                        <label for="reg_lastname">last name <span className="required">*</span></label>
                        <input type="text" 
                        name="lastname"
                        onChange={(e)=>{setLastName(e.target.value)}}
                        />
                    </p>
                    <p>
                        <label for="reg_email">Email <span className="required">*</span></label>
                        <input type="email" 
                        id="reg_email"
                        name="email"
                        onChange={(e)=>{setEmail(e.target.value)}}/>
                    </p>
                    <p>
                        <label for="reg_password">Password <span className="required">*</span></label>
                        <input type="password" 
                        id="reg_password"
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}/>
                    </p>
                    <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>                    
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