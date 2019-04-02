import { connect } from 'react-redux'
import HomePage from '../components/pages/HomePage';

const mapStateToProps = (state) => {
  return {
    logged: state.User.logged,
    username: state.User.username,
  }
}

export default connect(mapStateToProps, null)(HomePage)
