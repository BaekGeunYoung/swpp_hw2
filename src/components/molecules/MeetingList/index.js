import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Meeting from '../../../containers/Meeting'

// const Wrapper = styled.div`
//   font-family: ${font('primary')};
//   color: ${palette('grayscale', 0)};
// `

const MeetingList = ({ meetinglist = [] }) => {
  const style = {
    backgroundColor: '#1E90FF',
    display: 'inline-block',
    width: '250px',
    textAlign: 'center',
    border: '2px solid white',
    color: 'white',
  }

  return (
    <div>
      <p style={style}>sinceWhen</p>
      <p style={style}>tilWhen</p>
      <p style={style}>user</p>
      {meetinglist.map(meeting =>
        <Meeting
          key={meeting.id}
          id={meeting.id}
          sinceWhen={meeting.sinceWhen}
          tilWhen={meeting.tilWhen}
          user={meeting.user}
        />
      )}
    </div>
  )
};

MeetingList.propTypes = {
  meetinglist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sinceWhen: PropTypes.string,
    tilWhen: PropTypes.string,
    user: PropTypes.string,
  })),
  reverse: PropTypes.bool,
}

export default MeetingList
