import { useState } from "react";

const UseStateObject = () => {
  const people = [
    { id: 0, name: "Bisrat", age: 22, hobby: "playing football" },
    { id: 1, name: "kidus", age: 22, hobby: "watching football" },
  ];
  const [person, setPerson] = useState(people[0]);
  const handlePersonChange = (idx)=>{
    let newIndex = 1;
    if(idx==1){
      newIndex= 0
    }
    setPerson(people[newIndex])
  }
  return <div>
    <h2>use state example object</h2>
    <h2>{person.name}</h2>
    <h2>{person.age}</h2>
    <h2> Enjoys: {person.hobby}</h2>
    <button className="btn" onClick = {()=>{handlePersonChange(person.id)}}> kidus</button>
  </div>
};

export default UseStateObject;
