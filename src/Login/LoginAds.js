import React from "react";
import { connect } from "react-redux";

export class LoginAds extends React.Component {
  render() {
    return !this.props.isAuthenticated && <p>{this.props.text}</p>;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(LoginAds);
