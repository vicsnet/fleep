import { useState, useEffect, useRef } from "react";

export default function useComponentCat(initialIsVisible){
    const [componentCategory, setComponentCategory] = useState(initialIsVisible);
    const setref = useRef(null);
  
    const handleClickOutside = (event)=>{
  if(setref.current && !setref.current.contains(event.target)){
    setComponentCategory(false)
  }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, []);
    return {setref, componentCategory, setComponentCategory};
  }