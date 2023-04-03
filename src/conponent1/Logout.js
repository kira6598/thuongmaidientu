

function Logout(){
    sessionStorage.removeItem("Authentication")
    sessionStorage.removeItem("itemCount")
    sessionStorage.removeItem("userid")
    sessionStorage.removeItem("usename")
    window.location="/"

}
export default Logout