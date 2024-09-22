import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUser = { id: users.length + 1, name: name };
    const newData = [...users, newUser];
    setName("")

    setUsers(newData);
    // console.log(users);
  };
  const handleRemove = (id) => {
    let newData = users.filter((person) => person.id !== id);
    setUsers(newData);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit"  className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((person) => {
        return (
          <div key={person.id}>
            <h2 >{person.name}</h2>
            <button
              type="button"
              className="btn"
              onClick={() => handleRemove(person.id)}
            >
              remove user
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
