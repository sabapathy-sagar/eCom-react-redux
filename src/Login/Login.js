import React from "react";
import { connect } from "react-redux";
import { toggleLogin } from "../actions/login";

export class Login extends React.Component {
  onLoginButtonClicked = () => {
    this.props.toggleLogin(this.props.isAuthenticated);
  };

  render() {
    return (
      <button
        className="button is-text has-text-link"
        onClick={this.onLoginButtonClicked}
      >
        {this.props.isAuthenticated ? "Log Out" : "Log In"}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  toggleLogin: isAuthenticated => dispatch(toggleLogin(isAuthenticated))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
