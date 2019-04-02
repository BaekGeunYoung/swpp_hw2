export const HTTP_GET = 'HTTP_GET'
export const HTTP_POST = 'HTTP_POST'
export const HTTP_DELETE = 'HTTP_DELETE'
export const ADD_MEETING = 'ADD_MEETING'
export const GET_MEETING_LIST = 'GET_MEETING_LIST'
export const DELETE_MEETING = 'DELETE MEETING'

export const httpGet = () => {
  return {
    type: HTTP_GET,
  }
};

export const httpPost = (sinceWhen, tilWhen, headerContent) => {
  return {
    type: HTTP_POST,
    sinceWhen,
    tilWhen,
    headerContent,
  }
};

export const httpDelete = (id, headerContent) => {
  return {
    type: HTTP_DELETE,
    id,
    headerContent,
  }
};

export const addMeeting = (meeting) => {
  return {
    type: ADD_MEETING,
    meeting,
  }
};

export const getMeetingList = (meetingList) => {
  return {
    type: GET_MEETING_LIST,
    meetingList,
  }
};

export const deleteMeeting = (id) => {
  return {
    type: DELETE_MEETING,
    id,
  }
};
