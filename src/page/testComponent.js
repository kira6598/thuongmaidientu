import React, { useState } from "react";
function Component1(){
    const [jsx,setJsx]=useState(null);
    const [state,setState]=useState(1);
    
    function handleClick(){
      setState(prevState => prevState + 1);
      setJsx(Component2);
    }
    
    function Component2(){
      return (<button onClick={handleClick}>{state}</button>)
    }
    
    
    
    return (
      <React.Fragment>
         {jsx}
         <button onClick={handleClick}>{state}</button>
      </React.Fragment>
    )
  }
  export default Component1