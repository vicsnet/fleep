import { useState, useEffect, useRef } from "react";

export default function useComponentMonetize(initialIsVisible){
    const [openMonetize, setOpenMonetize] = useState(initialIsVisible);
    const setrefme = useRef(null);
  
    const handleClickOutside = (event)=>{
  if(setrefme.current && !setrefme.current.contains(event.target)){
    setOpenMonetize(false)
  }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, []);
    return {setrefme, openMonetize, setOpenMonetize};
  }