import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login () {
  return (
    <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
   )
}
const styles = StyleSheet.create({
  appBody: {
    margin: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    margin: '5px 0 15px 0',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  label: {
    marginTop: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
});

export default Login
