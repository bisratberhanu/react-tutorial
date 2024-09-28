import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [more, setMore] = useState(false);
  if (more) {
    return (
      <div className="question">
        <header>
          <h4> {title}</h4>
          <button className="btn" onClick={() => setMore(!more)}>
            {" "}
            <AiOutlineMinus />
          </button>
        </header>
        <p>{info}</p>
      </div>
    );
  } else {
    return (
      <div className="question">
        <header>

        <h4> {title}</h4>
        <button className="btn" onClick={()=> setMore(!more)}>
          <AiOutlinePlus></AiOutlinePlus>
        </button>
        </header>
      </div>
    );
  }
};

export default Question;
