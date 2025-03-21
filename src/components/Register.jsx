import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [users, setUsers] = useState([]); 
  const [user, setUser] = useState({});
  const [error, setError] = useState(""); 

  const handleSubmit = () => {
    const userExist = users.some((existingUser) => existingUser.email === user.email);
    if (userExist) {
      setError("User already exists with this email");
    } else if (user.name && user.email && user.password) {
      setUsers([...users, user]);
      setUser({});
      setError(""); 
    } else {
      setError("All fields are required");
    }
  };

  const deleteItem = (email) => {
    const updatedUsers = users.filter((ele) => ele.email !== email);
    setUsers(updatedUsers);
  };

  return (
    <div className="App-Register-Row">
      <div>
        <h3>Registration Form</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>
          <input
            type="text"
            value={user.name || ""}
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
        <p>
          <input
            type="email"
            value={user.email || ""}
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            value={user.password || ""}
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
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
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <td>
                  <button onClick={() => deleteItem(value.email)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
