import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text && <SomeComponent name = {user.name}/>}
      <h2>ternary operators</h2>
      <button className="btn">{isEditing?"edit":"add"}</button>
      {user? <h2>hello {user.name}</h2>: <h2>not hello</h2>}
    </div>
  );
};

const SomeComponent = ({name})=>{
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

export default ShortCircuitExamples;
