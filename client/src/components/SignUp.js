import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [message, setMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data);
      console.log(data); // Output the response message

      // Clear the form
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container">
      <h1>Submit Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {message && (
        <>
          <h1>{message.message}</h1>

          <button onClick={() => navigate("/users")}>Show users</button>
        </>
      )}
    </div>
  );
}

export default SignUp;
