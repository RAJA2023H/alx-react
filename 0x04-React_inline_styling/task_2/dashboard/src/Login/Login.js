mport React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login () {

  return (
    <div className={css(styles.loginContainer)}>
        <p>Login to access the full dashboard</p>
	<div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
	</div>
	<div className={css(styles.inputGroup)}>  
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
	</div>
        <button>OK</button>
      </div>
   )
}
const styles = StyleSheet.create({
  loginContainer: {
    padding: '20px',
    '@media (max-width: 900px)': {
      textAlign: 'center',
    },
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  label: {
    marginBottom: '5px',
    '@media (min-width: 900px)': {
      marginRight: '10px',
    },
  },
  input: {
    padding: '5px',
    fontSize: '16px',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
  },
});
export default Login
