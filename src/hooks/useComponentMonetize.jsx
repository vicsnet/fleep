import { useState, useEffect, useRef } from "react";

export default function useComponentMonetize(initialIsVisible){
    const [openMonetize, setOpenMonetize] = useState(initialIsVisible);
    const setRefme = useRef(null);
  
    const handleClickOutside = (event)=>{
  if(setRefme.current && !setRefme.current.contains(event.target)){
    setOpenMonetize(false)
  }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, []);
    return {setRefme, openMonetize, setOpenMonetize};
  }