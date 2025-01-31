import React, { useState } from "react";

const VerifyCredentials = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Save data to localStorage (or sessionStorage)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Data saved to cache!");
  };

  return (
    <div class="max-w-25 mx-auto p-5 text-center">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Username"
        class="block m-2.5 p-2.5 w-11/12"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        class="block m-2.5 p-2.5 w-11/12"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} class="py-2.5 px-5 mt-2.5">
        Save Login
      </button>
    </div>
  );
};

export default VerifyCredentials;
