import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const handleSubmit = () => {
    setUsers([...users, user]);
  };
  const deleteItem = (value) => {
    const updatedUsers = users.filter((ele) => ele !== value);
    setUsers(updatedUsers);
  };
  return (
    <div className="App-Register-Row">
      <div>
        <h3>Registration Form</h3>
        <p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            ></input>
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
            ></input>
        </p>
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
          <Link to="../login">Already a member? Log In</Link>
        </p>
      </div>
      <div>
        <h4>Registered People</h4>
        <table border="1">
          {users &&
            users.map((value, index) => (
              <tr>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <button onClick={() => deleteItem(value)}>Delete</button>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}