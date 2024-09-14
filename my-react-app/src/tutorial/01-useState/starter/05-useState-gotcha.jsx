import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setTimeout(() => {
      console.log("you clicked the button");
      setCount((currState)=>{
        return currState+1

      })
    }, 3000);
  };
  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={() => {
          increaseCount();
        }}
      >
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
