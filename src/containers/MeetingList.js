import {connect} from 'react-redux'
import MeetingList from '../components/molecules/MeetingList';

const mapStateToProps = (state) => {
  return {
    meetinglist: state.Meeting,
  }
}


export default connect(mapStateToProps, null)(MeetingList)
