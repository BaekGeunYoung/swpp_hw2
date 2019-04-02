import { initialState } from './selectors'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MEETING' :
      return [
        ...state,
        {
          id: action.id,
          sinceWhen: action.sinceWhen,
          tilWhen: action.tilWhen,
          user: action.user.username,
        },
      ];

    case 'GET_MEETING_LIST' :
      return action.meetingList.map(meeting =>
          ({
            id: meeting.id,
            sinceWhen: meeting.sinceWhen,
            tilWhen: meeting.tilWhen,
            user: meeting.user,
          })
      );
    default:
      return state
  }
}

export default reducer
