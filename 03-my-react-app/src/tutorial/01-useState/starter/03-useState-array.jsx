import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  
  const removeperson = (id) => {
    const newPeople = people.filter((person)=>person.id!==id)
    setPeople(newPeople)
  };

  const clearAllPeople = ()=>{
    setPeople([])
  }
  


  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <li>
              The person name is {name}
              <br />
            </li>
            <button className="btn" onClick={()=> {removeperson(id)}}>
              remove {name}
            </button>
          </div>
        );
      })}
     
      

      <button onClick={clearAllPeople} style={{marginTop:"2rem"}} className="btn" >
        remove all person
      </button>
    </div>
  );
};

export default UseStateArray;
