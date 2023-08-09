import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UsersPage() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/users");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {userData?.map((user, index) => (
          <li key={index}>{user?.name}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/signup")}>Sign up</button>
    </div>
  );
}

export default UsersPage;
