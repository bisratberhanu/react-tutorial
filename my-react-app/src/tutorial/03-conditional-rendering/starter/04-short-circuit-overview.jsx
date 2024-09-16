import { useState } from 'react';

const ShortCircuitOverview = () => {
  // truth
  const [name,setName]= useState("bisrat")
  // falsy
  const [text,setText]= useState("")
  return <div>
    <h4> {"hello world" || text}</h4>
    <h4> {"hello world" && text}</h4>
  </div>
};
export default ShortCircuitOverview;
