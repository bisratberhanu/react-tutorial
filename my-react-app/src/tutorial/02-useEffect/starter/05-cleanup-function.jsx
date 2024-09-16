import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [isTrue, setIsTrue]= useState(true)
  const SecondComponent= ()=>{
    useEffect(()=>{
      const someFunc = ()=>{

      }
      window.addEventListener('scroll', someFunc)
      return ()=>window.removeEventListener("scroll", someFunc) 
    },[])
    return <h2>false</h2>
  }
  return <div>
    <h2>cleanup function</h2>
    <button className="btn" onClick={()=>{
      setIsTrue(!isTrue)
    }}>toggle</button>
    {isTrue?<h2>true</h2>: <SecondComponent/>}
    </div>
};

export default CleanupFunction;
