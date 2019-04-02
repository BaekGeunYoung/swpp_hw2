import React, {PropTypes, Component} from 'react'
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import AddMeeting from '../../../containers/AddMeeting'
import MeetingList from '../../../containers/MeetingList'

class HomePage extends Component {

  render(){
    const { logged, username } = this.props;

    return (
      <div>
        <div style={{border: '2px solid gray', width: '850px'}}>
          <Button to="/login" style={{marginRight: '25px',}}> {logged ? 'LOGOUT' : 'LOGIN'} </Button>
          {logged ? 'user : ' + username : ''}
        </div>
        <AddMeeting />
        <MeetingList />
      </div>
    )
  }
}

HomePage.propTypes = {
  logged: PropTypes.bool,
  username: PropTypes.string,
}

export default HomePage
