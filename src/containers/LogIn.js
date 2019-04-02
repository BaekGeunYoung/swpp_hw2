import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogInPage from '../components/pages/LogInPage';
import {logIn, logOut} from '../store/User/actions';


class LogIn extends Component {
  // componentDidMount() {
  //   console.log(this.props.router)
  // }

  render() {
    return (
      <LogInPage
        router={this.props.router}
        logged={this.props.logged}
        onLogInAction={this.props.onLogInAction}
        onLogOut={this.props.onLogOut}
      />
    )
  }
}



const mapStateToProps = (state) => {
  return {
    logged: state.User.logged,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogInAction: (username, password) => {
      dispatch(logIn(username, password))
    },
    onLogOut: () => {
      dispatch(logOut())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
