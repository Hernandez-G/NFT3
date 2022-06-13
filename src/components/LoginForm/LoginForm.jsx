import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="login-form-container">
        <form className="loginForm"autoComplete="off" onSubmit={handleSubmit}>
          <label className='loginlabel'>LOG IN</label>
          <div>
            <br />
            <label className="email-label">Email</label>
            </div>
            <input className="email" type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <div>
            <label className='pswd-label'>Password</label>
            </div>
          <input className="password" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <div>
            <button className='login-btn' type="submit">LOG IN</button>
            <p className="error-message">&nbsp;{error}</p>
          </div>
        </form>
        <div>
        </div>
      </div>
    </div>
  );
}