import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import CourseList from './CourseList/CourseList';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.control = false;
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === 17) this.control = true
    if (event.keyCode === 72 && this.control) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render () {
    return (
      <React.Fragment>
        <Notifications />
        <div className={css(styles.app)}>
          <Header />
          { !this.props.isLoggedIn ? <Login /> : <CourseList /> }
          <Footer className={css(styles.footer)} />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
}
const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  footer: {
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    backgroundColor: '#f1f1f1',
  },
});
export default App;
