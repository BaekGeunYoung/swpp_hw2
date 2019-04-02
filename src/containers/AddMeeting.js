import { connect } from 'react-redux'
import AddMeeting from '../components/molecules/AddMeeting'
import { httpGet, httpPost } from '../store/Meeting/actions';

const mapStateToProps = (state) => {
  return {
    username: state.User.username,
    password: state.User.password,
    logged: state.User.logged,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onGetMeetingList: () => {
      dispatch(httpGet())
    },
    onPostMeeting: (sinceWhen, tilWhen, headerContent) => {
      dispatch(httpPost(sinceWhen, tilWhen, headerContent))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeeting)
