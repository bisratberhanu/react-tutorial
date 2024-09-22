import { useState } from "react";

const UserChallenge = () => {
  const [user,setUser]= useState(null)
  const Login = () => {
    return (
      <div>
        <h2>hello there {user.name}</h2>
        <button className="btn" onClick={handler}>
          logout
        </button>
      </div>
    );
  };
  const Logout = () => {
    return (
      <div>
        <h4>Please login</h4>
        <button className="btn" onClick={handler}>
          login
        </button>
      </div>
    );
  };
  
const handler = () => {
  user ? setUser(null) : setUser({ name: "Bisrat" });
};
  return <div>
    <h2>user challenge</h2>;
    {user?<Login></Login>: <Logout/>}
    </div>
};



export default UserChallenge;
