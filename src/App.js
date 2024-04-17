import React, { useState } from 'react';
import img1 from './hello.jpeg';
import './main.css';
export default function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errors: {},
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    // Check if username is empty
    if (!formData.username) {
      errors.username = 'Username is required';
    }

    // Check if password is empty
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    setFormData((prevState) => ({ ...prevState, errors }));

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid, submit data
      console.log(formData);
    } else {
      // Form is invalid, do nothing
    }
  };

  return (
    <div>
      <div className="header_title">
        <h1>React App webpack - 8</h1>
        <div>
          <img src={img1} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <div>Username:</div>
          <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          {formData.errors.username && (
            <p style={{ color: 'red' }}>{formData.errors.username}</p>
          )}
        </label>
        <label>
          <div>Password:</div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {formData.errors.password && (
            <p style={{ color: 'red' }}>{formData.errors.password}</p>
          )}
        </label>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
