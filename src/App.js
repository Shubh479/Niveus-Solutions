import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      await fetch("https://reqres.in/api/users?page=2")
        .then((item) => item.json())
        .then((response) => setData(response.data));
    }
    getData();
  }, [data]);
  console.log(data);
  return (
    <>
      <table >
        <th>
          <td>ID</td>
          <td>Avatar</td>
          <td>Email</td>
          <td>First Name</td>
          <td>Last Name</td>
        </th>
        {data.map((item) => (
          <>
            <tr>
              {item.id}
              <img src={item.avatar} />
              {item.email}
              {item.first_name}
              {item.last_name}
            </tr>
          </>
        ))}
      </table>
    </>
  );
}
export default App;
