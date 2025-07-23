import React from 'react';
import '../styles/signup.css';

function Signup() {
  return (
    <div className="signup">
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
