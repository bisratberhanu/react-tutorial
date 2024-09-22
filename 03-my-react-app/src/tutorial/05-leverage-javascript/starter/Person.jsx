import React from "react";
import avatar from "../../../assets/default-avatar.svg"
export function Person ({person}) {
  const img = person.images?.[0]?.small?.url || avatar
  return <div style={{margin:"2rem", borderColor: "blue",borderRadius: "15px"}}>
    <img src={img} style = {{width:"50px"}} alt="" />
    <h3>{person.name}</h3>
    <h3>{person.nickName || "no nickname"}</h3>
    </div>
}
  