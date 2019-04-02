import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'
import InputMoment from 'hb-input-moment'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class AddMeeting extends Component {
  state = {
    sinceWhen : '',
    tilWhen : '',
  }

  onPost = () => {
    const { username, password, onPostMeeting } = this.props;
    const headerContent = 'Basic ' + new Buffer(username + ':' + password).toString('base64')

    const { sinceWhen, tilWhen } = this.state;
    if (sinceWhen !== undefined && tilWhen !== undefined){
      console.log(sinceWhen, tilWhen);
      onPostMeeting(sinceWhen, tilWhen, headerContent);
      this.setState({sinceWhen: '', tilWhen: ''})
    }
  }

  onGet = () => {
    const { onGetMeetingList } = this.props;
    onGetMeetingList();
  }

  setSinceWhen = (e) => {
    this.setState({sinceWhen : e.target.value})
  }

  setTilWhen = (e) => {
    this.setState({tilWhen : e.target.value})
  }


  componentDidMount() {
    const { onGet } = this;
    onGet();
  }


  render(){
    const { onPost } = this;
    const style = {
      width: '350px',
      marginRight: '25px',
      height: '30px',
    }
    const button_style = {
      width: '96px',
    }
    const style_inline = {
      display: 'inline-block',
    }
    return (
      <div>
        <div style={style_inline}>
          <p>sinceWhen</p>
          <input
            type="datetime-local"
            onChange={this.setSinceWhen}
            value={this.state.sinceWhen}
            style={style}
          />
        </div>
        <div style={style_inline}>
          <p>tilWhen</p>
          <input
            type="datetime-local"
            onChange={this.setTilWhen}
            value={this.state.tilWhen}
            placeholder="tilWhen"
            style={style}
          />
        </div>
        <Button type="submit" style={button_style} onClick={onPost}> POST </Button>
      </div>
    );
  }
}

AddMeeting.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default AddMeeting
