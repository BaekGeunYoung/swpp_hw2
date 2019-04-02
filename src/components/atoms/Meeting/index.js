import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'
import Button from '../Button'
import moment from 'moment'

const Styledli = styled.li`
  font-family: ${font('primary')};
`

const Meeting = ({ id, sinceWhen, tilWhen, user, username, password, onDeleteMeeting }) => {
  const onDelete = (id, headerContent) => {
    // console.log(id)
    onDeleteMeeting(id, headerContent)
  }

  const headerContent = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

  const style = {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '25px',
  }

  const style2 = {
    display: 'inline-block',
    width: '250px',
    textAlign: 'center',
  }

  return (
    <div style={style}>
      <p style={style2}>{moment(sinceWhen).format('MMMM Do YYYY, h:mm:ss a')}</p>|
      <p style={style2}>{moment(tilWhen).format('MMMM Do YYYY, h:mm:ss a')}</p>|
      <p style={style2}>{user}</p>
      <Button type="submit" onClick={() => onDelete(id, headerContent)}> DELETE </Button>
    </div>
  )
}

Meeting.propTypes = {
  id: PropTypes.number,
  sinceWhen: PropTypes.string,
  tilWhen: PropTypes.string,
  user: PropTypes.string,
  onDeleteMeeting: PropTypes.func,
  reverse: PropTypes.bool,
}

export default Meeting
