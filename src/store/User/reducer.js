import { initialState } from './selectors'

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN' :
      if (action.username === 'alice' && action.password === 'qkqajdcjddl'){
        return {
          username: 'alice',
          password: 'qkqajdcjddl',
          logged: true,
        }
      }

      if (action.username === 'bob' && action.password === 'doffltmqkqh'){
        return {
          username: 'bob',
          password: 'doffltmqkqh',
          logged: true,
        }
      }

      return {
        username: '',
        password: '',
        logged: false,
      }

    case 'LOG_OUT':
      return {
        username: '',
        password: '',
        logged: false,
      }

    default:
      return state
  }
}

export default user_reducer
