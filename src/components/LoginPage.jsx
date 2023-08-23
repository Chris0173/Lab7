import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dummyUser = {
    username: 'admin',
    password: 'adminPassword'
  };

  const handleSignIn = () => {
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }

    if (username === dummyUser.username && password === dummyUser.password) {
      navigate('/');
    } else { 
      alert('Invaild username or password');
    }
  };

  return (
    <div className={styles['login-container']}>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" className={styles['form-control']} value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" className={styles['form-control']} value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
        <p>
          <a href="#">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
