import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([""]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
      } catch (error) {
        console.log(error);
        
      }
    }; 
    fetchData();
  }, []);

  return <section>
    <h2>github users</h2>
    <ul className="users">
      {users.map((user)=>{
        const {id,login,avatar_url,html_url}= user
        return(
          <li key={id}>
            <img src={avatar_url} alt={html_url} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </div>
          </li>
        )
      })}
    </ul>
  </section>
};
export default FetchData;
