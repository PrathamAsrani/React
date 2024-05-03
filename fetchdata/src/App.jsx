import { useState, useEffect } from "react";
import "./App.css";
import UserData from "../Components/UserData";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  let [Data, setData] = useState([]);

  const fetchUsers = async (API) => {
    try {
      const res = await fetch(API);
      let data = await res.json();
      setData(data);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };
  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>UserName</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={Data} />
      </tbody>
    </table>

    // <div className="container">
    //   {
    //     Data.map((item, index) => {
    //       return (
    //         <div key={item.id} className="card">
    //           <p>Name: {item.name}</p>
    //           <p>User: {item.username}</p>
    //           <p>Email: {item.email}</p>
    //           <p>Address: Lat = {item.address.geo.lat}, Long = {item.address.geo.lng}</p>
    //           <p>Phonr: {item.phone}</p>
    //           <p>Website: {item.website || "google.com"}</p>
    //           <p>Company: {item.company.name}</p>
    //         </div>
    //       )
    //     })
    //   }
    // </div>
  );
}

export default App;
