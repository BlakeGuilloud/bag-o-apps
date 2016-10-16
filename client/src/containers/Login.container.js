import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginComponent }     from '../components';
import * as AuthActions       from '../actions/Auth.actions';

class Login extends React.Component {

  static propTypes = {};

  state = {
    username: '',
    password: '',
  }

  handleChange = (event) => {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleLogin = () => {
    const user = {
      username: this.state.username,
      password: this.state.password,
    }
    this.props.authActions.login(user);
  }

  render() {
    const props = {
      handleChange: this.handleChange,
      handleLogin: this.handleLogin,
    };

    return (
      <LoginComponent {...props} />
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
