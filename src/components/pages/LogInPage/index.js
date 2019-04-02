import React, {Component} from 'react'
import Button from '../../atoms/Button'

class LogInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  onLogIn = () => {
    const {onLogInAction} = this.props;
    const {username, password} = this.state;
    const {auth} = this;

    onLogInAction(username, password);

    if((username === 'alice' && password === 'qkqajdcjddl') || (username === 'bob' && password === 'doffltmqkqh')){
      this.props.router.push("/")
    }
    else {
      alert('login failed')
    }
  }

  componentDidMount() {
    const {logged} = this.props;
    const {onLogOut} = this.props;
    if (logged === true){
      onLogOut();
      this.props.router.push("/");
    }
  }


  setUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  setPassword = (e) => {
    this.setState({
      password: e.target.value
  })
  }

  render(){
    const {setUsername, setPassword, onLogIn} = this;

    const style = {
      width: '350px',
      height: '30px',
      marginRight: '25px',
    }

    return (
      <div
        style={{ marginTop: '50px', }}
      >
        <input
          onChange={setUsername}
          value={this.state.username}
          placeholder="username"
          style={style}
        />
        <input
          type="password"
          onChange={setPassword}
          value={this.state.password}
          placeholder="password"
          style={style}
        />
        <Button type="submit" onClick={onLogIn}> LOGIN </Button>
      </div>
    )
  }
}

export default LogInPage
