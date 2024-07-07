import React, { useState } from "react";

// Use functional or class component based on your preference.
// Make it a default export.

export default function LoginForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('')
  const [passValue, setpassValue] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handlepassChange = (event) => {
    setpassValue(event.target.value);
  };
  return (
    <div>
        <label>Username:</label>
        <input id="username-input"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type Username"
        />
        <label>Password:</label>
        <input id="password-input"
          type="password"
          placeholder="Type Password"
          value={passValue}
          onChange={handlepassChange}
        />
      <button onClick={() => onSubmit(inputValue, passValue)}
              id='login-button'
              type="submit"
              disabled={inputValue.trim() === '' || passValue.trim() === ''}
              style={{ marginTop: '10px' }}>
        Submit
      </button>
          </div>);
}