import axios from "axios";

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  try {
    const jwtToken = getCookie("token");
    const respones = await axios.post("your URL",
    JSON.stringify({"key":"value"}),
    {
        headers:{
            'Authorization': `Bearer ${jwtToken}`, 
             'Content-Type': 'application/json' }// tin chuẩn rồi nhé e:))
        })
    }
    
   catch (error) {
    
  }