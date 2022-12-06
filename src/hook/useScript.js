import { useEffect } from "react";
const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.defer = true;
  
      document.head.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    });
  };
  
  export default useScript;